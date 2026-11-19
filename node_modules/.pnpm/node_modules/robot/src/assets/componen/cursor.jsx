import { useEffect, useRef } from "react";

export function SmoothGlowCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !window.matchMedia("(pointer: fine)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const maxOpacity = 0.28;
    const lerpSpeed = 0.22;
    const trailDuration = 420;
    const trailThickness = 7;

    let animId = null;
    let mouseX = 0;
    let mouseY = 0;
    let headX = 0;
    let headY = 0;
    let visible = false;
    let points = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const animate = (time) => {
      headX += (mouseX - headX) * lerpSpeed;
      headY += (mouseY - headY) * lerpSpeed;

      const lastPoint = points[points.length - 1];
      if (!lastPoint || Math.hypot(headX - lastPoint.x, headY - lastPoint.y) > 1) {
        points.push({ x: headX, y: headY, time });
      }

      points = points.filter((point) => time - point.time < trailDuration);
      clearCanvas();

      for (let i = 1; i < points.length; i++) {
        const previous = points[i - 1];
        const point = points[i];
        const age = (time - point.time) / trailDuration;
        const opacity = (1 - age) * maxOpacity;

        ctx.beginPath();
        ctx.moveTo(previous.x, previous.y);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = `rgba(0, 207, 255, ${opacity})`;
        ctx.lineWidth = Math.max(1, (1 - age) * trailThickness);
        ctx.lineCap = "round";
        ctx.shadowColor = "#00cfff";
        ctx.shadowBlur = 18 * (1 - age);
        ctx.stroke();
      }

      if (points.length > 1) {
        animId = requestAnimationFrame(animate);
      } else {
        animId = null;
      }
    };

    const startAnimation = () => {
      if (animId === null) {
        animId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) {
        headX = mouseX;
        headY = mouseY;
        visible = true;
      }
      startAnimation();
    };

    const onLeave = () => {
      visible = false;
      points = [];
      clearCanvas();
      if (animId !== null) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    };

    const onPointerOut = (event) => {
      if (!event.relatedTarget) onLeave();
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onPointerOut);

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1100,
        filter: "blur(3px)",
      }}
    />
  );
}