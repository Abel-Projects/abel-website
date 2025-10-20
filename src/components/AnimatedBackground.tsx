import { useEffect, useRef, useState } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
  color: string;
  angle: number;
  angleSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const blobsRef = useRef<Blob[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize blobs
    const initBlobs = () => {
      const blobCount = window.innerWidth < 768 ? 3 : 5;
      blobsRef.current = Array.from({ length: blobCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.5),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.5),
        radius: 100 + Math.random() * 150,
        targetRadius: 100 + Math.random() * 150,
        color: `hsl(${220 + Math.random() * 40}, 70%, ${50 + Math.random() * 20}%)`,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.02,
      }));
    };

    // Initialize particles
    const initParticles = () => {
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.3),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.3),
        life: Math.random() * 100,
        maxLife: 100,
        size: 1 + Math.random() * 2,
      }));
    };

    initBlobs();
    initParticles();

    // Perlin noise simulation for organic movement
    const noise = (x: number, y: number): number => {
      return Math.sin(x * 0.01) * Math.cos(y * 0.01) * 0.5 + 0.5;
    };

    let time = 0;

    const animate = () => {
      if (prefersReducedMotion) {
        // Static or minimal animation for reduced motion
        ctx.fillStyle = "hsl(220, 70%, 10%)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw static blobs
        blobsRef.current.forEach((blob) => {
          const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
          gradient.addColorStop(0, blob.color.replace(")", ", 0.15)").replace("hsl", "hsla"));
          gradient.addColorStop(1, blob.color.replace(")", ", 0)").replace("hsl", "hsla"));
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        
        return;
      }

      time += 0.01;

      // Clear canvas with slight trail effect
      ctx.fillStyle = "rgba(10, 15, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobsRef.current.forEach((blob) => {
        // Organic movement using noise
        const noiseX = noise(blob.x * 0.01 + time, blob.y * 0.01);
        const noiseY = noise(blob.x * 0.01, blob.y * 0.01 + time);
        
        blob.vx += (noiseX - 0.5) * 0.01;
        blob.vy += (noiseY - 0.5) * 0.01;

        // Dampen velocity
        blob.vx *= 0.99;
        blob.vy *= 0.99;

        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;

        // Keep within bounds
        blob.x = Math.max(0, Math.min(canvas.width, blob.x));
        blob.y = Math.max(0, Math.min(canvas.height, blob.y));

        // Morph radius smoothly
        blob.radius += (blob.targetRadius - blob.radius) * 0.01;
        if (Math.random() < 0.01) {
          blob.targetRadius = 100 + Math.random() * 150;
        }

        // Rotate
        blob.angle += blob.angleSpeed;

        // Draw blob with gradient
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color.replace(")", ", 0.2)").replace("hsl", "hsla"));
        gradient.addColorStop(0.5, blob.color.replace(")", ", 0.1)").replace("hsl", "hsla"));
        gradient.addColorStop(1, blob.color.replace(")", ", 0)").replace("hsl", "hsla"));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Create organic blob shape
        const points = 8;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2 + blob.angle;
          const variation = Math.sin(angle * 3 + time * 2) * 0.2 + 1;
          const r = blob.radius * variation;
          const x = blob.x + Math.cos(angle) * r;
          const y = blob.y + Math.sin(angle) * r;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.fill();
      });

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;

        // Reset particle if it's too old or out of bounds
        if (
          particle.life > particle.maxLife ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
        }

        // Draw particle
        const opacity = 1 - particle.life / particle.maxLife;
        ctx.fillStyle = `rgba(200, 220, 255, ${opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines between close particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.15;
            ctx.strokeStyle = `rgba(200, 220, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: "hsl(220, 70%, 10%)" }}
    />
  );
};

export default AnimatedBackground;
