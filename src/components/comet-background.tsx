"use client"

import React, {useRef, useEffect} from "react";

interface ICometBackgroundProps {
  children: React.ReactNode;
}

type Comet = {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  radius: number;
};

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

function createComet(width: number, height: number, location: "anywhere" | "edges" = "anywhere"): Comet {
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
  return {
    x,
    y,
    length: randomInRange(TAIL_LENGTH_RANGE),
    speed: randomInRange(SPEED_RANGE),
    angle: ANGLE + (Math.random() - 0.5) * ANGLE_VARIATION,
    opacity: randomInRange(OPACITY_RANGE),
    radius: randomInRange(HEAD_RADIUS_RANGE),
  };
}

export default function CometBackground({children}: ICometBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let comets: Comet[] = Array.from({length: COMET_COUNT}, () => createComet(width, height, "anywhere"));

    function drawComet(comet: Comet) {
      // Fade out as comet approaches the bottom edge
      const fadeStart = height * 0.75;
      const fadeEnd = height;
      let fade = 1;
      if (comet.y > fadeStart) {
        fade = Math.max(0, 1 - (comet.y - fadeStart) / (fadeEnd - fadeStart));
      }

      // Tail
      ctx.save();
      const tailWidth = comet.radius * 2.0;
      const perpAngle = comet.angle + Math.PI / 2;

      const x1 = comet.x + (Math.cos(perpAngle) * tailWidth) / 2;
      const y1 = comet.y + (Math.sin(perpAngle) * tailWidth) / 2;
      const x2 = comet.x - (Math.cos(perpAngle) * tailWidth) / 2;
      const y2 = comet.y - (Math.sin(perpAngle) * tailWidth) / 2;
      const x3 = comet.x - Math.cos(comet.angle) * comet.length;
      const y3 = comet.y - Math.sin(comet.angle) * comet.length;

      const grad = ctx.createLinearGradient(comet.x, comet.y, x3, y3);
      grad.addColorStop(0, `rgba(255,255,255,${(0.45 * comet.opacity * fade).toFixed(3)})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");

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
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.restore();
    }

    function updateComet(comet: Comet) {
      comet.x += Math.cos(comet.angle) * comet.speed;
      comet.y += Math.sin(comet.angle) * comet.speed;

      // Reset comet if it goes off screen
      if (comet.x > width + 30 || comet.y > height + 30) {
        Object.assign(comet, createComet(width, height, "edges"));
      }
    }

    function update() {
      ctx.clearRect(0, 0, width, height);
      for (const comet of comets) {
        updateComet(comet);
        drawComet(comet);
      }
    }

    let animationId: number;
    function animate() {
      update();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Re-initialize comets to fill new space
      comets = Array.from({length: COMET_COUNT}, () => createComet(width, height, "anywhere"));
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">{children}</div>
    </section>
  );
}
