# Nasib Bartaula — Personal Portfolio

A premium, production-ready portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for aspiring AI/Data Engineers with modern animations, glassmorphism, and interactive features.

![Tech Stack](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)

---

## Live Demo

Deploy to GitHub Pages, Netlify, or Vercel to go live. See [Deployment](#deployment) below.

---

## Features

- **Dark/Light mode** with persistent preference
- **GSAP animations** — scroll triggers, parallax, card tilt, magnetic buttons
- **AOS** — animate-on-scroll for section reveals
- **Typed.js** — hero typing effect
- **Particle background** with mouse interaction
- **Skills radar chart** (Chart.js)
- **Project filtering & search**
- **GitHub API integration** — live stats and repositories
- **EmailJS contact form** with validation
- **Command palette** (`Ctrl + K`)
- **Certificate carousel** with modal popup
- **Custom cursor** with hover effects
- **Scroll progress bar** & scroll spy navigation
- **Fully responsive** — mobile-first design
- **404 page** included
- **SEO optimized** with meta tags

---

## Project Structure

```
portfolio/
├── index.html              # Main page (all sections)
├── 404.html                # Custom 404 error page
├── css/
│   ├── style.css           # Core styles & layout
│   ├── animations.css      # Keyframes & animation utilities
│   └── responsive.css      # Media queries & mobile styles
├── js/
│   ├── main.js             # App logic, data, API integrations
│   ├── animations.js       # GSAP scroll & interaction animations
│   └── particles.js        # Canvas particle background
├── images/                 # Project screenshots & images
├── assets/
│   ├── favicon.svg         # Site favicon
│   └── resume.pdf          # Your resume (add your file here)
└── README.md
```

---

## Quick Start

1. **Clone or download** this repository
2. **Add your resume** as `assets/resume.pdf`
3. **Open `index.html`** in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

4. Visit `http://localhost:8080`

---

## Customization Guide

### 1. Personal Information

Edit `index.html` for visible text (name, email, social links) and `js/main.js` for data-driven content.

**Key areas in `index.html`:**
- Hero section — name, description
- Contact section — email, social links
- Footer — links and copyright

**Key areas in `js/main.js`:**
- `CONFIG` object — GitHub username, EmailJS keys, typed strings
- `SKILLS`, `PROJECTS`, `ROADMAP`, `CERTIFICATES`, `PROFILES` arrays

### 2. Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --primary: #00F5FF;      /* Cyan accent */
  --secondary: #6C63FF;    /* Purple accent */
  --accent: #7B61FF;       /* Violet accent */
  --bg: #050816;           /* Background */
  --card: #111827;         /* Card background */
  --text: #FFFFFF;         /* Primary text */
  --text-muted: #9CA3AF;   /* Secondary text */
}
```

Light theme variables are under `[data-theme="light"]`.

### 3. Add Projects

Add entries to the `PROJECTS` array in `js/main.js`:

```javascript
{
  title: 'My New Project',
  description: 'Brief description of what it does.',
  image: 'images/my-project.png',  // or external URL
  tech: ['Python', 'Flask', 'SQL'],
  category: ['python', 'web'],     // used for filtering
  github: 'https://github.com/username/repo',
  demo: 'https://my-demo.com'
}
```

**Filter categories:** `python`, `web`, `data-engineering`, `machine-learning`, `ai`, `sql`, `power-bi`

Place project screenshots in the `images/` folder.

### 4. Update Skills

Edit the `SKILLS` object in `js/main.js`:

```javascript
'Category Name': [
  {
    name: 'Skill Name',
    icon: 'fab fa-python',       // Font Awesome class
    progress: 85,                 // 0-100
    tooltip: 'Description text'
  }
]
```

Also update the radar chart data in `initSkillsRadar()` for consistency.

### 5. Connect GitHub API

In `js/main.js`, update:

```javascript
const CONFIG = {
  githubUsername: 'your-github-username',
  // ...
};
```

The portfolio fetches:
- Public repos count
- Followers count
- Total stars across repos
- Latest 6 repositories
- Contribution graph (via ghchart.rshah.org)

No API token is required for public data. GitHub rate limit: 60 requests/hour unauthenticated.

### 6. Configure EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `from_name`, `from_email`, `subject`, `message`
4. Update `CONFIG.emailjs` in `js/main.js`:

```javascript
emailjs: {
  publicKey: 'your_public_key',
  serviceId: 'your_service_id',
  templateId: 'your_template_id'
}
```

Until configured, the form runs in **demo mode** and simulates a successful send.

### 7. Update Certificates

Edit the `CERTIFICATES` array in `js/main.js`. Replace placeholder images with your certificate screenshots in `images/`.

### 8. Social Profiles

Update the `PROFILES` array and contact section links with your actual URLs.

### 9. Typed.js Strings

Customize hero typing text in `CONFIG.typedStrings`:

```javascript
typedStrings: [
  'Data Engineer',
  'AI Enthusiast',
  'Your Custom Title'
]
```

---

## Deployment

### GitHub Pages

1. Push the `portfolio/` folder to a GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from branch** → `main` → `/` (or `/portfolio` if in subfolder)
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify

1. Drag and drop the `portfolio` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for continuous deployment

### Vercel

```bash
npm i -g vercel
cd portfolio
vercel
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Open command palette |
| `Escape` | Close modals / palette |
| `↑ / ↓` | Navigate command palette |

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Custom cursor is disabled on touch devices. Animations respect `prefers-reduced-motion`.

---

## Performance Tips

- Compress images before adding to `images/`
- Use WebP format for project screenshots
- Lazy loading is enabled on all images
- CDN libraries are loaded from cdnjs/jsdelivr

---

## License

This project is open source. Feel free to use and modify for your own portfolio.

---

## Author

**Nasib Bartaula**
BCA Student · Nepal
Aspiring AI/Data Engineer

- GitHub: [@nasibbartaula](https://github.com/nasibbartaula)
- LinkedIn: [nasibbartaula](https://linkedin.com/in/nasibbartaula)

---

Built with passion for data, intelligence, and clean code.
