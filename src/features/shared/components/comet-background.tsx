"use client";

import type {ReactNode} from "react";
import {useEffect, useRef} from "react";
import {useTheme} from "next-themes";

interface ICometBackgroundProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  canvasClassName?: string;
}

interface IComet {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  radius: number;
}

interface ICometColor {
  solid: string;
  rgb: string;
}

const COMET_COUNT = 16;
const TAIL_LENGTH_RANGE = [50, 80] as const;
const HEAD_RADIUS_RANGE = [1, 1.3] as const;
const SPEED_RANGE = [150, 300] as const;
const OPACITY_RANGE = [0.25, 1] as const;
const EDGE_PADDING = 80;
const OFFSCREEN_PADDING = 30;
const CONTENT_WIDTH_REM = 56;
const MAX_DPR = 2;
const DIAGONAL = Math.SQRT1_2;

function randomInRange(range: readonly [number, number]) {
  const [min, max] = range;
  return min + Math.random() * (max - min);
}

function createComet(width: number, height: number, startVisible = false): IComet {
  const edgePosition = Math.random() * (width + height);
  const fromTop = edgePosition < width;

  return {
    x: startVisible ? Math.random() * width : fromTop ? edgePosition : -Math.random() * EDGE_PADDING,
    y: startVisible ? Math.random() * height : fromTop ? -Math.random() * EDGE_PADDING : edgePosition - width,
    length: randomInRange(TAIL_LENGTH_RANGE),
    speed: randomInRange(SPEED_RANGE),
    opacity: randomInRange(OPACITY_RANGE),
    radius: randomInRange(HEAD_RADIUS_RANGE),
  };
}

function parseCometColor(color: string): ICometColor {
  const solid = color.trim() || "#ffffff";

  if (solid.startsWith("#")) {
    const hex = solid.slice(1);
    const fullHex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
    const value = Number.parseInt(fullHex, 16);
    return {
      solid,
      rgb: `${(value >> 16) & 255},${(value >> 8) & 255},${value & 255}`,
    };
  }

  const [r = "255", g = "255", b = "255"] = solid.match(/\d+/g) ?? [];
  return {solid, rgb: `${r},${g},${b}`};
}

function getCometColor() {
  return parseCometColor(getComputedStyle(document.documentElement).getPropertyValue("--comet-color"));
}

function getContentWidth() {
  return CONTENT_WIDTH_REM * Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function CometBackground(props: ICometBackgroundProps) {
  const {children, className = "", contentClassName = "", canvasClassName = ""} = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef<ICometColor>({solid: "#ffffff", rgb: "255,255,255"});
  const {resolvedTheme} = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    let displayWidth = window.innerWidth;
    let displayHeight = window.innerHeight;
    let contentLeft = 0;
    let contentRight = displayWidth;
    let dpr = 1;

    const resizeCanvas = () => {
      displayWidth = window.innerWidth;
      displayHeight = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const contentWidth = Math.min(displayWidth, getContentWidth());
      contentLeft = (displayWidth - contentWidth) / 2;
      contentRight = contentLeft + contentWidth;
    };

    const comets = Array.from({length: COMET_COUNT}, () => createComet(displayWidth, displayHeight, true));

    const drawComet = (comet: IComet) => {
      const fadeStart = displayHeight * 0.75;
      const fade = comet.y > fadeStart ? Math.max(0, 1 - (comet.y - fadeStart) / (displayHeight - fadeStart)) : 1;
      const tailOffset = comet.length * DIAGONAL;
      const halfTail = comet.radius * DIAGONAL;
      const color = colorRef.current;
      const gradient = ctx.createLinearGradient(comet.x, comet.y, comet.x - tailOffset, comet.y - tailOffset);

      gradient.addColorStop(0, `rgba(${color.rgb},${0.45 * comet.opacity * fade})`);
      gradient.addColorStop(1, `rgba(${color.rgb},0)`);

      ctx.beginPath();
      ctx.moveTo(comet.x - halfTail, comet.y + halfTail);
      ctx.lineTo(comet.x + halfTail, comet.y - halfTail);
      ctx.lineTo(comet.x - tailOffset, comet.y - tailOffset);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.globalAlpha = 0.8 * fade;
      ctx.shadowColor = color.solid;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, comet.radius, 0, 2 * Math.PI);
      ctx.fillStyle = color.solid;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const updateComet = (comet: IComet, dt: number) => {
      const step = comet.speed * dt * DIAGONAL;
      comet.x += step;
      comet.y += step;

      if (comet.x > displayWidth + OFFSCREEN_PADDING || comet.y > displayHeight + OFFSCREEN_PADDING) {
        Object.assign(comet, createComet(displayWidth, displayHeight));
      }
    };

    let animationId = 0;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, contentLeft, displayHeight);
      ctx.rect(contentRight, 0, displayWidth - contentRight, displayHeight);
      ctx.clip();

      for (let i = 0; i < comets.length; i++) {
        updateComet(comets[i], dt);
        drawComet(comets[i]);
      }

      ctx.restore();
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationId) {
        return;
      }

      lastTime = performance.now();
      animationId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationId);
      animationId = 0;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
        return;
      }

      startAnimation();
    };

    resizeCanvas();
    colorRef.current = getCometColor();
    window.addEventListener("resize", resizeCanvas);
    window.visualViewport?.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener("resize", resizeCanvas);
      window.visualViewport?.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const animationId = requestAnimationFrame(() => {
      colorRef.current = getCometColor();
    });

    return () => cancelAnimationFrame(animationId);
  }, [resolvedTheme]);

  return (
    <section className={`relative w-full overflow-hidden ${className}`.trim()}>
      <canvas ref={canvasRef} className={`pointer-events-none fixed inset-0 z-0 h-dvh w-dvw ${canvasClassName}`.trim()} />
      <div className={`relative z-10 w-full ${contentClassName}`.trim()}>{children}</div>
    </section>
  );
}
