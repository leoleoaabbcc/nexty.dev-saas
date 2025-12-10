"use client";

import { useEffect, useRef } from "react";

export default function BFHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const initParticles = (count: number, w: number, h: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const speed = 0.6 + Math.random() * 0.8;
        const angle = Math.random() * Math.PI * 2;
        particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed });
      }
    };

    const resize = () => {
      const parent = containerRef.current || (canvas.parentElement as HTMLElement);
      const w = parent.clientWidth;
      const h = Math.max(320, Math.min(560, Math.floor(w * 0.5)));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(Math.floor(w / 8), w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#0b1020");
      bg.addColorStop(1, "#0a0f1a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      }

      const c1 = [99, 102, 241]; // indigo-500
      const c2 = [34, 211, 238]; // cyan-400
      const mix = (a: number, b: number, t: number) => a + (b - a) * t;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const threshold = 90;
          if (d < threshold) {
            const alpha = 1 - d / threshold;
            const r = Math.floor(mix(c1[0], c2[0], alpha));
            const g = Math.floor(mix(c1[1], c2[1], alpha));
            const bch = Math.floor(mix(c1[2], c2[2], alpha));
            ctx.strokeStyle = `rgba(${r},${g},${bch},${alpha * 0.5})` as any;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 1;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 lg:py-14 items-center justify-center flex-col">
          <div ref={containerRef} className="relative w-full max-w-5xl">
            <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-indigo-600/30 via-sky-500/20 to-cyan-500/30 rounded-3xl" />
            <div className="rounded-2xl border border-white/10 bg-neutral-900/85 backdrop-blur-md shadow-xl">
              <canvas ref={canvasRef} className="w-full h-[260px] md:h-[360px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="px-6 text-center max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-sans font-bold text-white drop-shadow-xl">
                  Helping people work more efficiently
                </h1>
                <p className="mt-4 text-base md:text-lg leading-relaxed tracking-tight text-gray-200 drop-shadow-md">
                  Practical, user-centric tools that reduce friction, streamline workflows, and boost productivity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
