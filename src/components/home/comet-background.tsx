"use client";

import React, {useRef, useEffect} from "react";
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
  // Per-comet steering to desynchronize response
  steerX: number;
  steerY: number;
  steerRate: number; // multiplier for smoothing rate
  biasFactor: number; // scales BIAS_STRENGTH per comet
  // Slowly varying noise to add individuality
  noiseX: number;
  noiseY: number;
  noiseTargetX: number;
  noiseTargetY: number;
  noiseRate: number; // per-second
}

const COMET_COUNT = 23;
const ANGLE = Math.PI / 4;
const ANGLE_VARIATION = 0.08;
const TAIL_LENGTH_RANGE: [number, number] = [50, 80];
const HEAD_RADIUS_RANGE: [number, number] = [1, 1.3];
const SPEED_RANGE: [number, number] = [2, 4];
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
    steerX: 0,
    steerY: 0,
    steerRate: randomInRange([0.6, 1.4]),
    biasFactor: randomInRange([0.75, 1.25]),
    noiseX: 0,
    noiseY: 0,
    noiseTargetX: randomInRange([-0.25, 0.25]),
    noiseTargetY: randomInRange([-0.25, 0.25]),
    noiseRate: randomInRange([0.25, 0.7]),
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

    // Mouse position to influence comet direction
    const mouseRef = {x: initialW / 2, y: initialH / 2, has: false} as {x: number; y: number; has: boolean};

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.x = e.clientX;
      mouseRef.y = e.clientY;
      mouseRef.has = true;
    };
    const onMouseLeave = () => {
      mouseRef.has = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const influence = {x: 0, y: 0};
    const SMOOTHING_RATE = 5; // per second; higher -> faster response
    const BIAS_STRENGTH = 0.15; // base blend strength at full deflection
    const NOISE_STRENGTH = 2; // scales the effect of per-comet noise

    function drawComet(comet: IComet, displayHeight: number, dirX: number, dirY: number) {
      // Fade out as comet approaches the bottom edge
      const fadeStart = displayHeight * 0.75;
      const fadeEnd = displayHeight;
      let fade = 1;
      if (comet.y > fadeStart) {
        fade = Math.max(0, 1 - (comet.y - fadeStart) / (fadeEnd - fadeStart));
      }

      // Tail
      ctx.save();

      const mag = Math.hypot(dirX, dirY) || 1;
      const cosA = dirX / mag;
      const sinA = dirY / mag;
      const halfTailWidth = comet.radius;
      const tailOffsetX = cosA * comet.length;
      const tailOffsetY = sinA * comet.length;

      const perpCos = -sinA;
      const perpSin = cosA;

      const x1 = comet.x + perpCos * halfTailWidth;
      const y1 = comet.y + perpSin * halfTailWidth;
      const x2 = comet.x - perpCos * halfTailWidth;
      const y2 = comet.y - perpSin * halfTailWidth;
      const x3 = comet.x - tailOffsetX;
      const y3 = comet.y - tailOffsetY;

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

    function updateComet(comet: IComet, displayWidth: number, displayHeight: number, dx: number, dy: number) {
      comet.x += dx;
      comet.y += dy;

      // Reset comet if it goes off screen
      if (comet.x > displayWidth + 30 || comet.y > displayHeight + 30) {
        Object.assign(comet, createComet(displayWidth, displayHeight, "edges"));
      }
    }

    function update(dt: number) {
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

      let targetX = 0;
      let targetY = 0;
      if (mouseRef.has) {
        const rect = canvas.getBoundingClientRect();
        const relX = (mouseRef.x - rect.left) / (rect.width || 1);
        const relY = (mouseRef.y - rect.top) / (rect.height || 1);
        const normX = Math.max(-1, Math.min(1, (relX - 0.5) * 2));
        const normY = Math.max(-1, Math.min(1, (relY - 0.5) * 2));
        targetX = normX;
        targetY = normY;
      }

      const k = 1 - Math.exp(-SMOOTHING_RATE * dt);
      influence.x += (targetX - influence.x) * k;
      influence.y += (targetY - influence.y) * k;

      ctx.clearRect(0, 0, displayW, displayH);
      for (let i = 0; i < comets.length; i++) {
        const comet = comets[i];
        // Per-comet smoothing toward global influence
        const kSteer = 1 - Math.exp(-SMOOTHING_RATE * comet.steerRate * dt);
        comet.steerX += (influence.x - comet.steerX) * kSteer;
        comet.steerY += (influence.y - comet.steerY) * kSteer;

        // Per-comet slow noise toward a changing target
        const kNoise = 1 - Math.exp(-comet.noiseRate * dt);
        comet.noiseX += (comet.noiseTargetX - comet.noiseX) * kNoise;
        comet.noiseY += (comet.noiseTargetY - comet.noiseY) * kNoise;
        if (Math.abs(comet.noiseX - comet.noiseTargetX) < 0.02) {
          comet.noiseTargetX = randomInRange([-0.25, 0.25]);
        }
        if (Math.abs(comet.noiseY - comet.noiseTargetY) < 0.02) {
          comet.noiseTargetY = randomInRange([-0.25, 0.25]);
        }

        // Compute biased direction by blending base dir with per-comet biased vector
        const baseDirX = comet.vx / comet.speed;
        const baseDirY = comet.vy / comet.speed;
        const steerVecX = comet.steerX + comet.noiseX * NOISE_STRENGTH;
        const steerVecY = comet.steerY + comet.noiseY * NOISE_STRENGTH;
        const steerMag = Math.hypot(steerVecX, steerVecY);

        let dirX: number;
        let dirY: number;
        if (steerMag > 1e-4) {
          const biasDirX = steerVecX / steerMag;
          const biasDirY = steerVecY / steerMag;
          const alpha = Math.min(1, Math.hypot(comet.steerX, comet.steerY)) * BIAS_STRENGTH * comet.biasFactor;
          const rawX = baseDirX + biasDirX * alpha;
          const rawY = baseDirY + biasDirY * alpha;
          const rawMag = Math.hypot(rawX, rawY) || 1;
          dirX = (rawX / rawMag) * comet.speed;
          dirY = (rawY / rawMag) * comet.speed;
        } else {
          dirX = comet.vx;
          dirY = comet.vy;
        }
        updateComet(comet, displayW, displayH, dirX, dirY);
        drawComet(comet, displayH, dirX, dirY);
      }
    }

    let animationId: number;
    let lastTime = performance.now();
    function animate(now: number) {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;
      // Dispatch ready event
      if (!readyDispatchedRef.current) {
        readyDispatchedRef.current = true;
        window.dispatchEvent(new Event("comets:ready"));
      }
      update(dt);
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
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
    <section className="relative flex h-[100lvh] w-full flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 h-full w-full" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">{children}</div>
    </section>
  );
}
