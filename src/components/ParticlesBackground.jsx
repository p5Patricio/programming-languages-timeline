import React, { useEffect, useRef, useState } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Monitor theme changes to adjust particle colors
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    // Initial check
    checkTheme();

    // Observe html tag class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const maxParticles = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        pulseDir: Math.random() > 0.5 ? 1 : -1,
        // Pick a soft base color
        hue: Math.random() > 0.6 ? 220 : 180 // Indigo or Cyan hue
      });
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Particle update & render
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift movement
        p.x += p.vx;
        p.y += p.vy;

        // Pulse alpha
        p.alpha += p.pulseSpeed * p.pulseDir;
        if (p.alpha > 0.7) {
          p.alpha = 0.7;
          p.pulseDir = -1;
        } else if (p.alpha < 0.15) {
          p.alpha = 0.15;
          p.pulseDir = 1;
        }

        // Mouse physics interaction (push away)
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          const forceRadius = 140;

          if (dist < forceRadius) {
            const force = (forceRadius - dist) / forceRadius; // 0 to 1 strength
            const angle = Math.atan2(dy, dx);
            
            // Push away subtly based on strength
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Screen wraps
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Draw with neon tint depending on light/dark mode
        const colorAlpha = p.alpha * (isDarkMode ? 0.8 : 0.45);
        if (isDarkMode) {
          ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${colorAlpha})`;
          ctx.shadowBlur = p.size * 2.5;
          ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.4)`;
        } else {
          ctx.fillStyle = `hsla(${p.hue + 20}, 70%, 45%, ${colorAlpha})`;
        }
        
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: isDarkMode ? 'screen' : 'multiply' }}
    />
  );
}
