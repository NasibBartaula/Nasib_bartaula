/**
 * Main Application — Nasib Bartaula Portfolio
 * Handles data rendering, interactions, API integrations
 */
(function () {
  'use strict';

  /* ============================================
     CONFIGURATION — Update these values
     ============================================ */
  const CONFIG = {
    githubUsername: 'nasibbartaula',
    emailjs: {
      publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
      serviceId: 'YOUR_EMAILJS_SERVICE_ID',
      templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
    },
    typedStrings: [
      'Data Engineer',
      'AI Enthusiast',
      'Machine Learning Learner',
      'Python Developer',
      'Backend Builder'
    ]
  };

  /* ============================================
     SKILLS DATA
     ============================================ */
  const SKILLS = {
    'Programming': [
      { name: 'Python', icon: 'fab fa-python', progress: 85, tooltip: 'Primary language for data & ML' },
      { name: 'Java', icon: 'fab fa-java', progress: 70, tooltip: 'OOP & academic projects' },
      { name: 'SQL', icon: 'fas fa-database', progress: 80, tooltip: 'Complex queries & optimization' },
      { name: 'JavaScript', icon: 'fab fa-js', progress: 65, tooltip: 'Frontend interactivity' }
    ],
    'Web': [
      { name: 'HTML', icon: 'fab fa-html5', progress: 85, tooltip: 'Semantic markup' },
      { name: 'CSS', icon: 'fab fa-css3-alt', progress: 80, tooltip: 'Modern layouts & animations' }
    ],
    'Backend & Database': [
      { name: 'MySQL', icon: 'fas fa-database', progress: 75, tooltip: 'Relational database design' },
      { name: 'PostgreSQL', icon: 'fas fa-server', progress: 65, tooltip: 'Advanced SQL features' }
    ],
    'Analytics': [
      { name: 'Pandas', icon: 'fas fa-table', progress: 80, tooltip: 'Data manipulation & analysis' },
      { name: 'NumPy', icon: 'fas fa-calculator', progress: 75, tooltip: 'Numerical computing' },
      { name: 'Matplotlib', icon: 'fas fa-chart-line', progress: 70, tooltip: 'Data visualization' },
      { name: 'Power BI', icon: 'fas fa-chart-pie', progress: 65, tooltip: 'Business intelligence dashboards' }
    ],
    'Big Data': [
      { name: 'PySpark', icon: 'fas fa-fire', progress: 45, tooltip: 'Distributed data processing' },
      { name: 'ETL', icon: 'fas fa-exchange-alt', progress: 55, tooltip: 'Extract, Transform, Load pipelines' },
      { name: 'Git', icon: 'fab fa-git-alt', progress: 80, tooltip: 'Version control & collaboration' },
      { name: 'Linux', icon: 'fab fa-linux', progress: 60, tooltip: 'Command line & server admin' }
    ],
    'Future Learning': [
      { name: 'Docker', icon: 'fab fa-docker', progress: 30, tooltip: 'Containerization' },
      { name: 'Airflow', icon: 'fas fa-wind', progress: 25, tooltip: 'Workflow orchestration' },
      { name: 'Kafka', icon: 'fas fa-stream', progress: 20, tooltip: 'Event streaming' },
      { name: 'AWS', icon: 'fab fa-aws', progress: 35, tooltip: 'Cloud infrastructure' }
    ],
    'Machine Learning': [
      { name: 'TensorFlow', icon: 'fas fa-brain', progress: 50, tooltip: 'Deep learning framework' },
      { name: 'PyTorch', icon: 'fas fa-robot', progress: 45, tooltip: 'Neural network research' }
    ]
  };

  /* ============================================
     PROJECTS DATA
     ============================================ */
  const PROJECTS = [
    {
      title: 'Sales Data Analytics Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales trends, customer segments, and revenue forecasting with dynamic filters and drill-down capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
      category: ['power-bi', 'sql', 'data-engineering'],
      github: 'https://github.com/nasibbartaula',
      demo: '#'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Machine learning model predicting customer churn using Random Forest and XGBoost with 92% accuracy. Includes feature engineering and model interpretability.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      category: ['python', 'machine-learning', 'ai'],
      github: 'https://github.com/nasibbartaula',
      demo: '#'
    },
    {
      title: 'ETL Data Pipeline',
      description: 'Automated ETL pipeline extracting data from CSV/API sources, transforming with Pandas, and loading into PostgreSQL with error handling and logging.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
      tech: ['Python', 'PostgreSQL', 'Pandas', 'ETL'],
      category: ['python', 'data-engineering', 'sql'],
      github: 'https://github.com/nasibbartaula',
      demo: '#'
    },
    {
      title: 'Student Management System',
      description: 'Full-stack web application for managing student records, grades, and attendance with role-based access control and reporting features.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
      tech: ['Java', 'MySQL', 'HTML', 'CSS'],
      category: ['web', 'sql'],
      github: 'https://github.com/nasibbartaula',
      demo: '#'
    },
    {
      title: 'Sentiment Analysis API',
      description: 'RESTful API for real-time sentiment analysis of text using NLP techniques. Built with Flask and deployed with comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1677446854568-f2d085baf900?w=600&q=80',
      tech: ['Python', 'Flask', 'NLTK', 'REST API'],
      category: ['python', 'ai', 'machine-learning'],
      github: 'https://github.com/nasibbartaula',
      demo: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, animated portfolio website built with vanilla HTML, CSS, and JavaScript featuring GSAP animations, particle effects, and GitHub API integration.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: ['web'],
      github: 'https://github.com/nasibbartaula',
      demo: '#'
    }
  ];

  /* ============================================
     ROADMAP DATA
     ============================================ */
  const ROADMAP = [
    { title: 'Python Fundamentals', desc: 'Core programming, OOP, and scripting', icon: 'fab fa-python', status: 'done' },
    { title: 'SQL & Databases', desc: 'Query optimization, schema design, normalization', icon: 'fas fa-database', status: 'done' },
    { title: 'Data Analysis', desc: 'Pandas, NumPy, exploratory data analysis', icon: 'fas fa-chart-bar', status: 'done' },
    { title: 'ETL Pipelines', desc: 'Data extraction, transformation, and loading', icon: 'fas fa-exchange-alt', status: 'current' },
    { title: 'PySpark & Big Data', desc: 'Distributed computing at scale', icon: 'fas fa-fire', status: 'upcoming' },
    { title: 'Data Engineering', desc: 'Production pipelines, orchestration, monitoring', icon: 'fas fa-cogs', status: 'upcoming' },
    { title: 'Machine Learning', desc: 'Supervised & unsupervised learning models', icon: 'fas fa-brain', status: 'upcoming' },
    { title: 'Artificial Intelligence', desc: 'Deep learning, NLP, and intelligent systems', icon: 'fas fa-robot', status: 'upcoming' }
  ];

  /* ============================================
     CERTIFICATES DATA
     ============================================ */
  const CERTIFICATES = [
    {
      title: 'Python for Data Science',
      issuer: 'Coursera / IBM',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
      description: 'Comprehensive Python programming for data analysis, visualization, and machine learning fundamentals.'
    },
    {
      title: 'SQL & Database Management',
      issuer: 'HackerRank',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80',
      description: 'Advanced SQL queries, database design, and optimization techniques certification.'
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Google / Coursera',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80',
      description: 'Core ML concepts including regression, classification, clustering, and model evaluation.'
    },
    {
      title: 'Data Analysis with Pandas',
      issuer: 'DataCamp',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
      description: 'Data wrangling, cleaning, and analysis using Python Pandas library.'
    },
    {
      title: 'Git & Version Control',
      issuer: 'GitHub',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80',
      description: 'Professional Git workflow, branching strategies, and collaborative development.'
    }
  ];

  /* ============================================
     PROFILES DATA
     ============================================ */
  const PROFILES = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/nasibbartaula', class: 'github', desc: '@nasibbartaula' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/nasibbartaula', class: 'linkedin', desc: 'Connect professionally' },
    { name: 'LeetCode', icon: 'fas fa-code', url: 'https://leetcode.com/nasibbartaula', class: 'leetcode', desc: 'Problem solving' },
    { name: 'HackerRank', icon: 'fab fa-hackerrank', url: 'https://hackerrank.com/nasibbartaula', class: 'hackerrank', desc: 'Coding challenges' },
    { name: 'Kaggle', icon: 'fab fa-kaggle', url: 'https://kaggle.com/nasibbartaula', class: 'kaggle', desc: 'Data competitions' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:nasib.bartaula@email.com', class: 'email', desc: 'Get in touch' },
    { name: 'Resume', icon: 'fas fa-file-pdf', url: 'assets/resume.pdf', class: 'resume', desc: 'Download CV' }
  ];

  /* ============================================
     COMMAND PALETTE ITEMS
     ============================================ */
  const COMMANDS = [
    { label: 'Go to Home', icon: 'fas fa-home', action: () => scrollTo('#hero') },
    { label: 'Go to About', icon: 'fas fa-user', action: () => scrollTo('#about') },
    { label: 'Go to Skills', icon: 'fas fa-code', action: () => scrollTo('#skills') },
    { label: 'Go to Experience', icon: 'fas fa-briefcase', action: () => scrollTo('#experience') },
    { label: 'Go to Projects', icon: 'fas fa-folder', action: () => scrollTo('#projects') },
    { label: 'Go to Journey', icon: 'fas fa-road', action: () => scrollTo('#journey') },
    { label: 'Go to Certificates', icon: 'fas fa-certificate', action: () => scrollTo('#certificates') },
    { label: 'Go to GitHub Stats', icon: 'fab fa-github', action: () => scrollTo('#github') },
    { label: 'Go to Contact', icon: 'fas fa-envelope', action: () => scrollTo('#contact') },
    { label: 'Toggle Theme', icon: 'fas fa-moon', action: () => toggleTheme(), shortcut: 'T' },
    { label: 'Download Resume', icon: 'fas fa-download', action: () => window.open('assets/resume.pdf', '_blank') }
  ];

  /* ============================================
     DOM READY
     ============================================ */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initLoader();
    initAOS();
    initTyped();
    renderSkills();
    renderProjects();
    renderRoadmap();
    renderCertificates();
    renderProfiles();
    initSkillsRadar();
    initNavbar();
    initScrollSpy();
    initScrollProgress();
    initCustomCursor();
    initThemeToggle();
    initProjectFilters();
    initCertCarousel();
    initCertModal();
    initContactForm();
    initGitHubStats();
    initCommandPalette();
    initBackToTop();
    initKeyboardShortcuts();
    document.getElementById('current-year').textContent = new Date().getFullYear();
  }

  /* ============================================
     LOADER
     ============================================ */
  function initLoader() {
    document.body.classList.add('loading');
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 1500);
    });
  }

  /* ============================================
     AOS INIT
     ============================================ */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    }
  }

  /* ============================================
     TYPED.JS
     ============================================ */
  function initTyped() {
    const el = document.getElementById('typed-text');
    if (!el || typeof Typed === 'undefined') return;

    new Typed(el, {
      strings: CONFIG.typedStrings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: false
    });
  }

  /* ============================================
     RENDER SKILLS
     ============================================ */
  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    let html = '';
    Object.entries(SKILLS).forEach(([category, skills]) => {
      html += `
        <div class="skills-category">
          <h3 class="skills-category-title"><i class="fas fa-layer-group"></i> ${category}</h3>
          <div class="skills-list">
            ${skills.map(skill => `
              <div class="skill-card" title="${skill.tooltip}">
                <div class="skill-tooltip">${skill.tooltip}</div>
                <div class="skill-header">
                  <div class="skill-icon"><i class="${skill.icon}"></i></div>
                  <span class="skill-name">${skill.name}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" data-progress="${skill.progress}" style="width: 0%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    });
    grid.innerHTML = html;
  }

  /* ============================================
     SKILLS RADAR CHART
     ============================================ */
  function initSkillsRadar() {
    const canvas = document.getElementById('skills-radar-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    const isDark = document.documentElement.dataset.theme !== 'light';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const textColor = isDark ? '#9CA3AF' : '#64748b';

    new Chart(canvas, {
      type: 'radar',
      data: {
        labels: ['Python', 'SQL', 'ML/AI', 'Data Analysis', 'Web Dev', 'Big Data'],
        datasets: [{
          label: 'Skill Level',
          data: [85, 80, 55, 78, 70, 40],
          backgroundColor: 'rgba(0, 245, 255, 0.15)',
          borderColor: '#00F5FF',
          pointBackgroundColor: '#6C63FF',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#6C63FF',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 20, color: textColor, backdropColor: 'transparent' },
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: { color: textColor, font: { size: 11, family: 'Inter' } }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  /* ============================================
     RENDER PROJECTS
     ============================================ */
  function renderProjects(filter = 'all', search = '') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = PROJECTS.filter(p => {
      const matchFilter = filter === 'all' || p.category.includes(filter);
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchFilter && matchSearch;
    });

    grid.innerHTML = filtered.map(p => `
      <article class="project-card" data-category="${p.category.join(' ')}">
        <div class="project-image">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <div class="project-overlay"></div>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-github">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn-demo">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </article>
    `).join('');

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:40px;">No projects found matching your criteria.</p>';
    }
  }

  /* ============================================
     PROJECT FILTERS & SEARCH
     ============================================ */
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('project-search');
    let currentFilter = 'all';

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProjects(currentFilter, searchInput?.value || '');
      });
    });

    if (searchInput) {
      let debounce;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          renderProjects(currentFilter, searchInput.value);
        }, 300);
      });
    }
  }

  /* ============================================
     RENDER ROADMAP
     ============================================ */
  function renderRoadmap() {
    const roadmap = document.getElementById('roadmap');
    if (!roadmap) return;

    const statusLabels = { done: 'Completed', current: 'In Progress', upcoming: 'Upcoming' };

    roadmap.innerHTML = `
      <div class="roadmap-line"></div>
      ${ROADMAP.map(item => `
        <div class="roadmap-item ${item.status === 'done' ? 'completed' : ''} ${item.status === 'current' ? 'active' : ''}">
          <div class="roadmap-node"><i class="${item.icon}"></i></div>
          <div class="roadmap-content">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <span class="roadmap-status ${item.status}">${statusLabels[item.status]}</span>
          </div>
        </div>
      `).join('')}
    `;
  }

  /* ============================================
     RENDER CERTIFICATES
     ============================================ */
  function renderCertificates() {
    const track = document.getElementById('cert-track');
    if (!track) return;

    track.innerHTML = CERTIFICATES.map((cert, i) => `
      <div class="cert-card" data-index="${i}">
        <img src="${cert.image}" alt="${cert.title}" loading="lazy">
        <div class="cert-card-body">
          <h4>${cert.title}</h4>
          <p>${cert.issuer} · ${cert.date}</p>
        </div>
      </div>
    `).join('');
  }

  /* ============================================
     CERTIFICATE CAROUSEL
     ============================================ */
  function initCertCarousel() {
    const track = document.getElementById('cert-track');
    const prev = document.querySelector('.cert-prev');
    const next = document.querySelector('.cert-next');
    if (!track) return;

    let offset = 0;
    const cardWidth = 304;

    function slide(direction) {
      const maxOffset = -(track.children.length - 1) * cardWidth + cardWidth;
      offset += direction * cardWidth;
      offset = Math.min(0, Math.max(offset, maxOffset));
      track.style.transform = `translateX(${offset}px)`;
    }

    prev?.addEventListener('click', () => slide(1));
    next?.addEventListener('click', () => slide(-1));

    // Auto-slide
    setInterval(() => {
      const maxOffset = -(track.children.length - 1) * cardWidth + cardWidth;
      if (offset <= maxOffset) offset = cardWidth;
      else offset -= cardWidth;
      track.style.transform = `translateX(${offset}px)`;
    }, 5000);
  }

  /* ============================================
     CERTIFICATE MODAL
     ============================================ */
  function initCertModal() {
    const modal = document.getElementById('cert-modal');
    const track = document.getElementById('cert-track');
    if (!modal || !track) return;

    track.addEventListener('click', (e) => {
      const card = e.target.closest('.cert-card');
      if (!card) return;

      const index = parseInt(card.dataset.index, 10);
      const cert = CERTIFICATES[index];
      if (!cert) return;

      document.getElementById('cert-modal-img').src = cert.image;
      document.getElementById('cert-modal-img').alt = cert.title;
      document.getElementById('cert-modal-title').textContent = cert.title;
      document.getElementById('cert-modal-desc').textContent = cert.description;
      document.getElementById('cert-modal-date').textContent = `${cert.issuer} · ${cert.date}`;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  }

  /* ============================================
     RENDER PROFILES
     ============================================ */
  function renderProfiles() {
    const grid = document.getElementById('profiles-grid');
    if (!grid) return;

    grid.innerHTML = PROFILES.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="profile-card ${p.class}">
        <i class="${p.icon}"></i>
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </a>
    `).join('');
  }

  /* ============================================
     NAVBAR
     ============================================ */
  function initNavbar() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });

    navToggle?.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================
     SCROLL SPY
     ============================================ */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === entry.target.id ||
              link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  /* ============================================
     SCROLL PROGRESS
     ============================================ */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    });
  }

  /* ============================================
     CUSTOM CURSOR
     ============================================ */
  function initCustomCursor() {
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    function animateOutline() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';
      requestAnimationFrame(animateOutline);
    }
    animateOutline();

    const interactiveElements = 'a, button, .skill-card, .project-card, .cert-card, input, textarea';
    document.querySelectorAll(interactiveElements).forEach(el => {
      el.addEventListener('mouseenter', () => outline.classList.add('hover'));
      el.addEventListener('mouseleave', () => outline.classList.remove('hover'));
    });
  }

  /* ============================================
     THEME TOGGLE
     ============================================ */
  function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);

    toggle?.addEventListener('click', () => toggleTheme());
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme;
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  /* ============================================
     CONTACT FORM (EmailJS)
     ============================================ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    if (typeof emailjs !== 'undefined' && CONFIG.emailjs.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.init(CONFIG.emailjs.publicKey);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateForm(form)) return;

      const btn = form.querySelector('button[type="submit"]');
      const btnText = btn.querySelector('.btn-text');
      const btnLoading = btn.querySelector('.btn-loading');
      const status = document.getElementById('form-status');

      btnText.hidden = true;
      btnLoading.hidden = false;
      btn.disabled = true;

      try {
        if (CONFIG.emailjs.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
          // Demo mode — simulate success
          await new Promise(r => setTimeout(r, 1500));
          showFormStatus(status, 'success', 'Message sent successfully! (Demo mode — configure EmailJS to send real emails)');
        } else {
          await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, {
            from_name: form.name.value,
            from_email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
          });
          showFormStatus(status, 'success', 'Message sent successfully! I\'ll get back to you soon.');
        }
        form.reset();
      } catch (err) {
        showFormStatus(status, 'error', 'Failed to send message. Please try again or email directly.');
        console.error('EmailJS error:', err);
      } finally {
        btnText.hidden = false;
        btnLoading.hidden = true;
        btn.disabled = false;
      }
    });
  }

  function validateForm(form) {
    let valid = true;
    const fields = [
      { el: form.name, rule: v => v.trim().length >= 2, msg: 'Name must be at least 2 characters' },
      { el: form.email, rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Enter a valid email address' },
      { el: form.subject, rule: v => v.trim().length >= 3, msg: 'Subject must be at least 3 characters' },
      { el: form.message, rule: v => v.trim().length >= 10, msg: 'Message must be at least 10 characters' }
    ];

    fields.forEach(({ el, rule, msg }) => {
      const group = el.closest('.form-group');
      const error = group.querySelector('.form-error');
      if (!rule(el.value)) {
        group.classList.add('error');
        error.textContent = msg;
        valid = false;
      } else {
        group.classList.remove('error');
        error.textContent = '';
      }
    });

    return valid;
  }

  function showFormStatus(el, type, msg) {
    el.className = `form-status ${type}`;
    el.textContent = msg;
    setTimeout(() => { el.className = 'form-status'; el.textContent = ''; }, 5000);
  }

  /* ============================================
     GITHUB API
     ============================================ */
  async function initGitHubStats() {
    const username = CONFIG.githubUsername;

    // Contribution graph
    const graphImg = document.getElementById('gh-contribution-graph');
    if (graphImg) {
      graphImg.src = `https://ghchart.rshah.org/${username}`;
      graphImg.onerror = () => { graphImg.style.display = 'none'; };
    }

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      ]);

      if (!userRes.ok) throw new Error('GitHub user not found');

      const user = await userRes.json();
      const repos = await reposRes.json();

      animateStat('gh-repos', user.public_repos);
      animateStat('gh-followers', user.followers);

      let totalStars = 0;
      let totalForks = 0;
      repos.forEach(r => {
        totalStars += r.stargazers_count;
        totalForks += r.forks_count;
      });

      animateStat('gh-stars', totalStars);
      animateStat('gh-forks', totalForks);

      renderGitHubRepos(repos);
    } catch (err) {
      console.warn('GitHub API:', err.message);
      document.getElementById('gh-repos-list').innerHTML =
        '<p class="gh-loading">Unable to load GitHub data. Update CONFIG.githubUsername in main.js</p>';
    }
  }

  function animateStat(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    let current = 0;
    const step = Math.ceil(value / 30);
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { current = value; clearInterval(timer); }
      el.textContent = current;
    }, 40);
  }

  function renderGitHubRepos(repos) {
    const list = document.getElementById('gh-repos-list');
    if (!list) return;

    list.innerHTML = repos.map(repo => `
      <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="gh-repo-item">
        <h4><i class="fas fa-book"></i> ${repo.name}</h4>
        <p>${repo.description || 'No description available'}</p>
        <div class="gh-repo-meta">
          ${repo.language ? `<span><i class="fas fa-circle" style="color:var(--primary);font-size:6px;"></i> ${repo.language}</span>` : ''}
          <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
          <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
        </div>
      </a>
    `).join('');
  }

  /* ============================================
     COMMAND PALETTE
     ============================================ */
  function initCommandPalette() {
    const palette = document.getElementById('command-palette');
    const input = document.getElementById('command-input');
    const results = document.getElementById('command-results');
    if (!palette || !input || !results) return;

    function openPalette() {
      palette.hidden = false;
      input.value = '';
      renderCommands('');
      input.focus();
    }

    function closePalette() {
      palette.hidden = true;
    }

    function renderCommands(query) {
      const filtered = COMMANDS.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase())
      );

      results.innerHTML = filtered.map((cmd, i) => `
        <li class="command-item ${i === 0 ? 'active' : ''}" data-index="${COMMANDS.indexOf(cmd)}" role="option">
          <i class="${cmd.icon}"></i>
          <span>${cmd.label}</span>
          ${cmd.shortcut ? `<kbd>${cmd.shortcut}</kbd>` : ''}
        </li>
      `).join('') || '<li class="command-item"><span>No results found</span></li>';
    }

    input.addEventListener('input', () => renderCommands(input.value));

    results.addEventListener('click', (e) => {
      const item = e.target.closest('.command-item');
      if (!item || item.dataset.index === undefined) return;
      executeCommand(parseInt(item.dataset.index, 10));
      closePalette();
    });

    palette.querySelector('.command-palette-overlay').addEventListener('click', closePalette);

    input.addEventListener('keydown', (e) => {
      const items = results.querySelectorAll('.command-item[data-index]');
      let active = results.querySelector('.command-item.active');
      let index = Array.from(items).indexOf(active);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        index = Math.min(index + 1, items.length - 1);
        items.forEach((item, i) => item.classList.toggle('active', i === index));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        index = Math.max(index - 1, 0);
        items.forEach((item, i) => item.classList.toggle('active', i === index));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const activeItem = results.querySelector('.command-item.active');
        if (activeItem?.dataset.index !== undefined) {
          executeCommand(parseInt(activeItem.dataset.index, 10));
          closePalette();
        }
      } else if (e.key === 'Escape') {
        closePalette();
      }
    });

    window.openCommandPalette = openPalette;
    window.closeCommandPalette = closePalette;
  }

  function executeCommand(index) {
    const cmd = COMMANDS[index];
    if (cmd?.action) cmd.action();
  }

  /* ============================================
     BACK TO TOP
     ============================================ */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    });

    btn.addEventListener('click', () => scrollTo('#hero'));
  }

  /* ============================================
     KEYBOARD SHORTCUTS
     ============================================ */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+K — Command palette
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const palette = document.getElementById('command-palette');
        if (palette?.hidden) window.openCommandPalette?.();
        else window.closeCommandPalette?.();
      }

      // Escape — Close modals
      if (e.key === 'Escape') {
        window.closeCommandPalette?.();
      }
    });
  }

  /* ============================================
     UTILITIES
     ============================================ */
  function scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

})();
