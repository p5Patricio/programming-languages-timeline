import React, { useRef, useEffect, useCallback } from 'react';

export default function ClickSpark({
  sparkColor = '#60a5fa',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  extraScale = 1.0,
  className = '',
  children
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(resizeCanvas);
      ro.observe(parent);
    } else {
      window.addEventListener('resize', resizeCanvas);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const easeOutQuad = (t) => t * (2 - t);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const now = performance.now();
    sparksRef.current = sparksRef.current.filter((spark) => {
      const elapsed = now - spark.startTime;
      if (elapsed >= duration) return false;

      const progress = elapsed / duration;
      const eased = easeOutQuad(progress);

      const distance = spark.radius * eased;
      const lineLength = spark.size * (1 - progress);

      const x1 = spark.x + Math.cos(spark.angle) * distance;
      const y1 = spark.y + Math.sin(spark.angle) * distance;
      const x2 = spark.x + Math.cos(spark.angle) * (distance + lineLength);
      const y2 = spark.y + Math.sin(spark.angle) * (distance + lineLength);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = spark.color;
      ctx.lineWidth = 2 * extraScale;
      ctx.lineCap = 'round';
      ctx.globalAlpha = 1 - progress;
      ctx.shadowColor = spark.color;
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.restore();

      return true;
    });

    if (sparksRef.current.length > 0) {
      requestAnimationFrame(animate);
    }
  }, [duration, extraScale]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();

    for (let i = 0; i < sparkCount; i++) {
      const angle = (2 * Math.PI * i) / sparkCount + (Math.random() * 0.2 - 0.1);
      sparksRef.current.push({
        x,
        y,
        angle,
        startTime: now,
        color: sparkColor,
        size: sparkSize * extraScale,
        radius: sparkRadius * extraScale * (0.8 + Math.random() * 0.4)
      });
    }

    requestAnimationFrame(animate);
  };

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-50 w-full h-full"
      />
      {children}
    </div>
  );
}
