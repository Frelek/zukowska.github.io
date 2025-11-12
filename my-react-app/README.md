# Portfolio Website - React + GSAP

A modern, animated portfolio webpage built with React, Vite, and GSAP. Features include character-by-character text animations, smooth scrolling navigation, and an interactive image grid with mouse-tracking effects.

## 🚀 Quick Start

### Prerequisites
- **Node.js 16+** — [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Installation & Run

```powershell
# Navigate to the project
cd C:\Users\admin\Desktop\ewa_zukowska_webpage\zukowska.github.io\my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

**Open in browser:** `http://localhost:5173/`

### Build for Production

```powershell
npm run build
```

Creates optimized files in `dist/` folder ready for deployment.

---

## 📁 Project Structure (Simplified)

```
my-react-app/
├── src/
│   ├── App.jsx              ⭐ Main component (all sections)
│   ├── App.css              ⭐ All styling (600+ lines)
│   ├── animations.js        ⭐ SplitText & ChromaGrid components
│   ├── main.jsx             ⭐ React entry point
│   ├── index.css            ⭐ Global styles
│   └── assets/
│       ├── profile-picture.svg
│       └── placeholder.svg
├── index.html               ⭐ HTML root
├── package.json             ⭐ Dependencies
├── vite.config.js           ⭐ Build config
└── .gitignore
```

**Only 5 essential files to edit:**
1. `src/App.jsx` — Page structure & content
2. `src/App.css` — All styling
3. `src/animations.js` — Animation components
4. `src/assets/*` — Images
5. `package.json` — Dependencies

---

## ✨ Features

### 1. **SplitText Animation** (Character Pop-In)
Animates text letter-by-letter with GSAP on page load and scroll.

```jsx
<SplitText
  text="Hi, thanks for wanting to get to know me better!"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  tag="p"
/>
```

### 2. **ChromaGrid** (Interactive Image Gallery)
Mouse-tracking image grid with spotlight & grayscale effects in the Hobby section.

```jsx
<ChromaGrid 
  radius={300}
  damping={0.45}
  fadeOut={0.6}
  ease="power3.out"
/>
```

### 3. **Sticky Navigation**
Fixed top navigation bar with smooth scroll to sections:
- Main (Hero)
- About me
- Studies
- Professional experience
- Hobby

### 4. **Responsive Design**
- Desktop: 3-column grid in hobby section
- Tablet: Auto-fit columns
- Mobile: Single column, optimized nav

---

## 🎨 Customization Guide

### Update Content

Edit `src/App.jsx`:

```jsx
<h1 className="intro-title">Your Title</h1>
<SplitText text="Your intro text here!" ... />
```

### Replace Profile Picture

1. Add your image to `src/assets/` (e.g., `profile.jpg`)
2. Update import in `App.jsx`:
   ```jsx
   import profilePicture from './assets/profile.jpg';
   ```

### Customize Animations

In `src/App.jsx`, modify `<SplitText>` props:

```jsx
delay={100}        // Milliseconds between letter animations
duration={0.6}     // Animation duration in seconds
ease="power3.out"  // GSAP easing (power1-4, back, elastic, etc.)
from={{ opacity: 0, y: 40 }}  // Starting state
to={{ opacity: 1, y: 0 }}     // Ending state
```

### Change Colors & Styling

Edit `src/App.css`:

```css
/* Hero section gradient */
.background-image {
  background: linear-gradient(135deg, #fde68a 0%, #f3a683 50%, #b27bb8 100%);
}

/* Card borders & gradients */
.chroma-card {
  --card-border: #3B82F6;
  --card-gradient: linear-gradient(145deg, #3B82F6, #000);
}
```

### Add/Remove Navigation Tabs

In `src/App.jsx`, update nav-links:

```jsx
<ul className="nav-links">
  <li><a href="#hero">Main</a></li>
  <li><a href="#about">About me</a></li>
  <li><a href="#custom">Your Section</a></li>
</ul>
```

Then add a new section:

```jsx
<section id="custom" className="page-section">
  <div className="section-inner">
    <h2>Your Section</h2>
    <p>Content here</p>
  </div>
</section>
```

---

## 🔧 File Details

### `src/App.jsx` (Main Component)
Contains:
- Navigation bar
- Hero section with profile picture
- 4 page sections (About, Studies, Experience, Hobby)
- All component imports and integration

### `src/App.css` (All Styling)
- Navigation styles (64px fixed top bar)
- Hero section (gradient background, profile picture)
- Section styling (white cards, responsive layout)
- ChromaGrid styling (card grid, mouse effects, animations)
- Media queries for responsive design

### `src/animations.js` (Components)
Two main exports:

**SplitText Component:**
- Splits text by characters/words/lines
- Animates each part on scroll or load
- Uses GSAP + ScrollTrigger for performance

**ChromaGrid Component:**
- Grid layout with 6 demo profile cards
- Mouse-tracking spotlight effect
- Grayscale/brightness fade outside spotlight
- Clickable cards with custom URLs

### `src/index.css` (Global Styles)
- Reset/normalize
- Font defaults
- Button styles
- Root color scheme

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "gsap": "^3.12.2",
  "@gsap/react": "^2.0.2",
  "vite": "^5.0.8"
}
```

All are automatically installed with `npm install`.

---

## 🎯 Sections Breakdown

### 1. **Main (Hero)**
- Profile picture
- Animated intro text
- Japanese/Korean aesthetic gradient background

### 2. **About Me**
- Short biography
- Placeholder for image
- Left-aligned text

### 3. **Studies**
- Education background
- Institution details
- Courses/certifications

### 4. **Professional Experience**
- Job roles
- Company names & dates
- Job descriptions

### 5. **Hobby**
- Description
- Interactive ChromaGrid with 6 profile cards
- Mouse-tracking spotlight effect

---

## 🐛 Troubleshooting

### "npm: The term is not recognized"
- Install Node.js from https://nodejs.org/
- Restart your terminal/PowerShell
- Run `npm --version` to verify

### Port 5173 already in use
Vite will automatically try 5174, 5175, etc. Or stop the process:
```powershell
npx kill-port 5173
```

### Images not loading
Make sure they're in `src/assets/` and imported:
```jsx
import myImage from './assets/my-image.svg';
<img src={myImage} alt="..." />
```

### Animations not working
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)
- Check browser console for errors (F12)

---

## 📋 Checklist to Customize

- [ ] Update intro text in `App.jsx`
- [ ] Replace `src/assets/profile-picture.svg` with your photo
- [ ] Update About, Studies, Experience sections
- [ ] Update ChromaGrid items (or leave demo)
- [ ] Customize colors in `App.css`
- [ ] Test on mobile with `npm run dev`
- [ ] Build for production with `npm run build`

---

## 🌐 Deployment

After `npm run build`, the `dist/` folder contains your entire website (HTML, CSS, JS).

- **GitHub Pages** — Push to `gh-pages` branch
- **Vercel** — Drag & drop `dist/` folder
- **Netlify** — Connect GitHub repo or drag `dist/`
- **Any static host** — Upload `dist/` contents

---

## 📝 License

MIT — Use freely for personal or commercial projects.

---

## 🤝 Questions?

Each file is well-commented. Check the inline comments for detailed explanations.

Good luck with your portfolio! 🚀


