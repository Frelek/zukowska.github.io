# 📋 SETUP & PREVIEW GUIDE

## ✅ What You Have

A complete, modern portfolio website built with **React + GSAP animations**.

---

## 🚀 HOW TO RUN

### Step 1: Open PowerShell
Press `Win + R`, type `powershell`, and press Enter.

### Step 2: Navigate to the project
```powershell
cd "C:\Users\admin\Desktop\ewa_zukowska_webpage\zukowska.github.io\my-react-app"
```

### Step 3: Install dependencies (first time only)
```powershell
npm install
```

### Step 4: Start the development server
```powershell
npm run dev
```

You'll see output like:
```
  ➜  Local:   http://localhost:5173/
```

### Step 5: Open in browser
Click the link or paste `http://localhost:5173/` into your browser.

---

## 📁 WHICH FILES TO EDIT

Only **5 files** matter:

| File | Purpose | Edit For |
|------|---------|----------|
| `src/App.jsx` | **Main page structure** | Content, sections, layout |
| `src/App.css` | **All styling** | Colors, fonts, spacing, backgrounds |
| `src/animations.js` | **Animation components** | Advanced customization (rarely needed) |
| `src/assets/*` | **Images** | Profile picture, section images |
| `package.json` | **Dependencies** | Adding new npm packages |

**Don't edit these:** `main.jsx`, `index.css`, `vite.config.js`, `index.html`

---

## 🎯 WHAT'S INCLUDED

✨ **Features:**
- Character-by-character text animations (GSAP SplitText)
- Sticky navigation with smooth scroll
- 5 sections: Main, About, Studies, Experience, Hobby
- Interactive image grid (ChromaGrid) with mouse-tracking effects
- Fully responsive (mobile, tablet, desktop)
- Japanese/Korean aesthetic with gradient backgrounds

🎨 **Sections:**
1. **Main** — Hero with profile picture + animated intro
2. **About Me** — Short bio + image placeholder
3. **Studies** — Education details + image
4. **Professional Experience** — Job roles + image
5. **Hobby** — Description + interactive image grid with 6 demo cards

---

## 🔧 QUICK CUSTOMIZATION

### Change the intro text
Edit `src/App.jsx`, find this:
```jsx
<SplitText text="Hi, thanks for wanting to get to know me better!" ... />
```
Change the text inside quotes.

### Replace your profile picture
1. Save your photo as `profile.jpg` or `profile.png`
2. Put it in `src/assets/`
3. Update import in `src/App.jsx`:
   ```jsx
   import profilePicture from './assets/profile.jpg';
   ```

### Update section content
Edit `src/App.jsx` and update text in each section:
- About me section (around line 80)
- Studies section (around line 105)
- Experience section (around line 130)

### Change colors
Edit `src/App.css`:
- **Hero background:** Look for `.background-image` (line ~80) and change the gradient colors
- **Section card colors:** Look for `.page-section` (line ~180)
- **Hobby cards:** Look for `.chroma-card` (line ~300)

---

## 🎬 PREVIEW IN VS CODE

1. Open `src/App.jsx` in VS Code
2. The file preview shows the structure
3. Switch to browser (`http://localhost:5173`) to see live result
4. Edit → Save → Refresh browser (or auto-reloads)

---

## ✨ ALL CORRECTIONS INCLUDED

✅ Fixed:
- Image paths (now use proper React imports)
- Navigation with "Main" tab added
- All CSS consolidated into `App.css` (600+ lines)
- All animations in `src/animations.js` (cleaner structure)
- Responsive design across all breakpoints
- ChromaGrid integrated in Hobby section
- SplitText animations on all section titles
- Smooth scrolling navigation working

✅ Features working:
- Character pop-in animation on page load
- Mouse-tracking spotlight in Hobby section
- Smooth scroll to sections when clicking nav tabs
- All sections responsive
- Profile picture circular with border
- Beautiful gradient backgrounds

---

## 🎯 NEXT STEPS

1. **Run the project:**
   ```powershell
   npm install
   npm run dev
   ```

2. **Preview in browser:**
   - Open `http://localhost:5173/`
   - Click navigation tabs
   - Move mouse in Hobby section to see spotlight effect

3. **Customize content:**
   - Edit `src/App.jsx` for text
   - Edit `src/App.css` for colors/styling
   - Add your images to `src/assets/`

4. **Build for deployment:**
   ```powershell
   npm run build
   ```
   - Creates optimized `dist/` folder
   - Ready for upload to hosting (Vercel, Netlify, etc.)

---

## 📞 TROUBLESHOOTING

**npm not found?**
- Install Node.js: https://nodejs.org/
- Restart your terminal

**Port 5173 in use?**
- Vite tries next port automatically (5174, 5175...)
- Or: `npx kill-port 5173`

**Changes not showing?**
- Save file (Ctrl+S)
- Refresh browser (F5)
- Check browser console (F12) for errors

**Images broken?**
- Put files in `src/assets/`
- Import at top: `import img from './assets/image.svg'`
- Use variable: `<img src={img} />`

---

## 🏗️ PROJECT STRUCTURE (CLEAN)

```
my-react-app/
├── src/
│   ├── App.jsx              ← Main component
│   ├── App.css              ← All styling
│   ├── animations.js        ← Animation components
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│       ├── profile-picture.svg
│       └── placeholder.svg
├── index.html
├── package.json
├── vite.config.js
├── README.md                ← Detailed guide
└── SETUP.md                 ← This file
```

---

**Ready to go? Run `npm install && npm run dev` and visit `http://localhost:5173/` 🚀**
