/**
 * Particle Background System
 * Creates floating particles with mouse interaction
 */
(function () {
  'use strict';

  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };
  let animationId = null;

  /** Particle class */
  class Particle {
    constructor(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.5 ? '#00F5FF' : '#6C63FF';
    }

    update(w, h) {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > w) this.x = 0;
      if (this.x < 0) this.x = w;
      if (this.y > h) this.y = 0;
      if (this.y < 0) this.y = h;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  /** Initialize canvas dimensions and particles */
  function init() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;

    const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 80);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }
  }

  /** Draw connections between nearby particles */
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  /** Animation loop */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw();
    });

    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  /** Event listeners */
  function bindEvents() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationId);
        init();
        animate();
      }, 250);
    });
  }

  /** Start particle system after loader */
  function start() {
    init();
    bindEvents();
    animate();
  }

  // Wait for DOM and defer start until loader finishes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(start, 1600);
    });
  } else {
    setTimeout(start, 1600);
  }
})();
