"use client";

import React, {useRef, useEffect, useLayoutEffect} from "react";
import {useTheme} from "next-themes";

interface ICometBackgroundProps {
  children: React.ReactNode;
}

interface IComet {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  radius: number;
  vx: number;
  vy: number;
  halfTailWidth: number;
  tailOffsetX: number;
  tailOffsetY: number;
  perpCos: number;
  perpSin: number;
}

const COMET_COUNT = 20;
const ANGLE = Math.PI / 4;
const ANGLE_VARIATION = 0.08;
const TAIL_LENGTH_RANGE: [number, number] = [50, 80];
const HEAD_RADIUS_RANGE: [number, number] = [1, 1.3];
const SPEED_RANGE: [number, number] = [2, 6];
const OPACITY_RANGE: [number, number] = [0.25, 1];

function randomInRange([min, max]: [number, number]) {
  return min + Math.random() * (max - min);
}

function createComet(width: number, height: number, location: "anywhere" | "edges" = "anywhere"): IComet {

  let x = Math.random() * width;
  let y = Math.random() * height;
  
  if (location === "edges") {
    if (Math.random() < width / (width + height)) {
      // Top edge
      y = -Math.random() * 60;
    } else {
      // Left edge
      x = -Math.random() * 60;
    }
  }

  // Precompute trig and geometry helpers for performance
  const length = randomInRange(TAIL_LENGTH_RANGE);
  const speed = randomInRange(SPEED_RANGE);
  const angle = ANGLE + (Math.random() - 0.5) * ANGLE_VARIATION;
  const opacity = randomInRange(OPACITY_RANGE);
  const radius = randomInRange(HEAD_RADIUS_RANGE);
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  return {
    x,
    y,
    length,
    speed,
    angle,
    opacity,
    radius,
    vx: cosA * speed,
    vy: sinA * speed,
    halfTailWidth: radius,
    tailOffsetX: cosA * length,
    tailOffsetY: sinA * length,
    perpCos: -sinA,
    perpSin: cosA,
  };
}

function parseColorToRGB(color: string) {
  color = color.trim();
  if (color.startsWith("#")) {
    let hex = color.replace("#", "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((x) => x + x)
        .join("");
    }
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }
  if (color.startsWith("rgb")) {
    const rgbMatch = color.match(/rgb[a]?\(([^)]+)\)/);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(",").map((x) => parseInt(x.trim()));
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
      };
    }
  }
  // fallback to white
  throw new Error(`Unable to parse color: ${color}`);
}

function toRGBA(rgb: {r: number; g: number; b: number}, alpha: number) {
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
}

export default function CometBackground({children}: ICometBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readyDispatchedRef = useRef(false);
  const {resolvedTheme} = useTheme();
  const cometRGBRef = useRef<{r: number; g: number; b: number}>({r: 255, g: 255, b: 255});

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Initialize canvas based on parent element size and device pixel ratio
    const parent = canvas.parentElement as HTMLElement | null;
    const initialW = parent?.clientWidth ?? window.innerWidth;
    const initialH = parent?.clientHeight ?? window.innerHeight;
    let dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(initialW * dpr);
    canvas.height = Math.floor(initialH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);


    const comets: IComet[] = Array.from({length: COMET_COUNT}, () => createComet(initialW, initialH, "anywhere"));


    function drawComet(comet: IComet, displayHeight: number) {
      // Fade out as comet approaches the bottom edge
      const fadeStart = displayHeight * 0.75;
      const fadeEnd = displayHeight;
      let fade = 1;
      if (comet.y > fadeStart) {
        fade = Math.max(0, 1 - (comet.y - fadeStart) / (fadeEnd - fadeStart));
      }

      // Tail
      ctx.save();

      const x1 = comet.x + comet.perpCos * comet.halfTailWidth;
      const y1 = comet.y + comet.perpSin * comet.halfTailWidth;
      const x2 = comet.x - comet.perpCos * comet.halfTailWidth;
      const y2 = comet.y - comet.perpSin * comet.halfTailWidth;
      const x3 = comet.x - comet.tailOffsetX;
      const y3 = comet.y - comet.tailOffsetY;

      const grad = ctx.createLinearGradient(comet.x, comet.y, x3, y3);
      grad.addColorStop(0, toRGBA(cometRGBRef.current, 0.45 * comet.opacity * fade));
      grad.addColorStop(1, toRGBA(cometRGBRef.current, 0));

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      // Head
      ctx.save();
      ctx.globalAlpha = 0.8 * fade;
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, comet.radius, 0, 2 * Math.PI);
      ctx.fillStyle = toRGBA(cometRGBRef.current, 1);
      ctx.shadowColor = toRGBA(cometRGBRef.current, 1);
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.restore();
    }

    function updateComet(comet: IComet, displayWidth: number, displayHeight: number) {
      comet.x += comet.vx;
      comet.y += comet.vy;

      // Reset comet if it goes off screen
      if (comet.x > displayWidth + 30 || comet.y > displayHeight + 30) {
        Object.assign(comet, createComet(displayWidth, displayHeight, "edges"));
      }
    }

    function update() {
      // Keep canvas in sync with parent element and DPR each frame
      const parentEl = canvas.parentElement as HTMLElement | null;
      const displayW = parentEl?.clientWidth ?? window.innerWidth;
      const displayH = parentEl?.clientHeight ?? window.innerHeight;
      const nextDpr = window.devicePixelRatio || 1;

      const needResize = canvas.width !== Math.floor(displayW * nextDpr) || canvas.height !== Math.floor(displayH * nextDpr) || nextDpr !== dpr;
      if (needResize) {
        dpr = nextDpr;
        canvas.width = Math.floor(displayW * dpr);
        canvas.height = Math.floor(displayH * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, displayW, displayH);
      for (let i = 0; i < comets.length; i++) {
        const comet = comets[i];
        updateComet(comet, displayW, displayH);
        drawComet(comet, displayH);
      }
    }

    let animationId: number;
    function animate() {
      // Dispatch ready event
      if (!readyDispatchedRef.current) {
        readyDispatchedRef.current = true;
        window.dispatchEvent(new Event("comets:ready"));
      }
      update();
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
        window.dispatchEvent(new Event("comets:ready"));
    const raf = requestAnimationFrame(() => {
      const rawColor = getComputedStyle(document.documentElement).getPropertyValue("--comet-color");
      cometRGBRef.current = parseColorToRGB(rawColor);
    });
    return () => cancelAnimationFrame(raf);
  }, [resolvedTheme]);

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[100lvh] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">{children}</div>
    </section>
  );
}
