/**
 * GSAP Animations & Scroll Effects
 */
(function () {
  'use strict';

  /** Register GSAP ScrollTrigger plugin */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /** Initialize all GSAP animations */
  function initAnimations() {
    if (typeof gsap === 'undefined') return;

    initHeroAnimations();
    initScrollAnimations();
    initParallax();
    initTextReveals();
    initSkillBars();
    initCounterAnimations();
    initRoadmapAnimations();
  }

  /** Hero section entrance animations */
  function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-greeting', { opacity: 0, y: 30, duration: 0.6 })
      .from('.hero-name', { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
      .from('.hero-typed', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
      .from('.hero-description', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from('.hero-buttons .btn', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, '-=0.2')
      .from('.hero-stat', { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.1 }, '-=0.2')
      .from('.hero-card', { opacity: 0, x: 60, rotationY: 15, duration: 1 }, '-=0.8');
  }

  /** Scroll-triggered section animations */
  function initScrollAnimations() {
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

    gsap.utils.toArray('.exp-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 30,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power2.out'
      });
    });

    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.5,
        delay: (i % 3) * 0.1,
        ease: 'power2.out'
      });
    });
  }

  /** Parallax effects on blobs and sections */
  function initParallax() {
    gsap.to('.blob-1', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 150,
      x: 50
    });

    gsap.to('.blob-2', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -100,
      x: -30
    });

    gsap.to('.hero-visual', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 80,
      opacity: 0.5
    });
  }

  /** Text reveal with split effect */
  function initTextReveals() {
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }

  /** Animate skill progress bars on scroll */
  function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const target = bar.dataset.progress || '0';
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 95%',
        onEnter: () => {
          gsap.to(bar, {
            width: target + '%',
            duration: 1.5,
            ease: 'power2.out'
          });
        },
        once: true
      });
    });
  }

  /** Animated number counters */
  function initCounterAnimations() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.nextElementSibling?.classList.contains('featured-stat-suffix')
        ? el.nextElementSibling
        : null;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(el, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
            onUpdate: function () {
              el.innerText = Math.ceil(parseFloat(el.innerText));
            }
          });
        },
        once: true
      });
    });
  }

  /** Roadmap timeline animation */
  function initRoadmapAnimations() {
    gsap.utils.toArray('.roadmap-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });
  }

  /** Card tilt effect on mouse move */
  function initCardTilt() {
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });
  }

  /** Magnetic button effect */
  function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });
  }

  /** Mouse-follow glow in hero */
  function initHeroGlow() {
    const glow = document.querySelector('.hero-glow');
    const hero = document.getElementById('hero');
    if (!glow || !hero) return;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      gsap.to(glow, {
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  }

  /** Initialize after page load */
  window.addEventListener('load', () => {
    setTimeout(() => {
      initAnimations();
      initCardTilt();
      initMagneticButtons();
      initHeroGlow();
    }, 1700);
  });
})();
