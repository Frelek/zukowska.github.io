# My React + GSAP Profile Page

Modern React frontend with GSAP SplitText animations for character-by-character text effects.

## Quick Start

### Prerequisites
- Node.js 16+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation & Running

```powershell
cd C:\Users\admin\Desktop\ewa_zukowska_webpage\zukowska.github.io\my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at **`http://localhost:5173/`**

### Build for Production

```powershell
npm run build
```

Creates optimized files in the `dist/` folder.

## What's Included

✨ **GSAP SplitText Animations**
- Character-by-character text animations with scroll triggers
- "Hi, thanks for wanting to get to know me better!" animates on load
- All section titles animate as you scroll to them
- Fully customizable animation parameters

📱 **Responsive Design**
- Mobile, tablet, and desktop friendly
- Fixed sticky navigation bar
- Smooth scroll navigation

🎨 **Beautiful UI**
- Japanese/Korean aesthetic with gradient backgrounds
- Clean, modern styling with Tailwind-ready CSS
- Placeholder images for sections

## Files Structure

```
src/
├── components/
│   └── SplitText.jsx          # GSAP animation component
├── assets/
│   ├── profile-picture.svg    # Profile photo placeholder
│   └── placeholder.svg         # Section image placeholders
├── App.jsx                     # Main app component
├── App.css                     # All styling
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## Using SplitText Component

```jsx
import SplitText from './components/SplitText';

<SplitText
  text="Your text here"
  delay={100}           // ms between character animations
  duration={0.6}        // animation duration in seconds
  ease="power3.out"     // GSAP easing function
  splitType="chars"     // "chars", "words", or "lines"
  from={{ opacity: 0, y: 40 }}   // starting animation state
  to={{ opacity: 1, y: 0 }}      // ending animation state
  tag="p"              // HTML tag (p, h1, h2, etc)
  textAlign="center"
  onLetterAnimationComplete={() => console.log('Done!')}
/>
```

## Customization

1. **Replace profile photo:**
   - Update `src/assets/profile-picture.svg` with your real photo (JPG/PNG)
   - Update the import in `src/App.jsx` if you change the filename

2. **Update content:**
   - Edit intro text in `src/App.jsx`
   - Modify section content with your real info

3. **Change colors/styling:**
   - Edit `src/App.css` for all styles
   - Gradient background colors are in the `.background-image` section

4. **Adjust animations:**
   - Change `delay`, `duration`, `ease` props on `<SplitText>` components
   - Modify `from` and `to` animation states

## Troubleshooting

**"npm: The term is not recognized"**
- Make sure Node.js is installed: `node --version`
- Restart your terminal after installing Node.js

**Port 5173 already in use?**
- Vite will automatically try the next port (5174, 5175, etc.)
- Or kill the process: `npx kill-port 5173`

**Images not loading?**
- Make sure they're in `src/assets/` folder
- Import them at the top: `import img from './assets/image.svg'`
- Use the imported variable in `<img src={img} />`

## Dependencies

- **React** — UI library
- **Vite** — Fast build tool
- **GSAP** — Professional animation library
- **@gsap/react** — React hook integration for GSAP

## License

MIT

