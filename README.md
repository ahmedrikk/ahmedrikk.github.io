# Portfolio Redesign - Unixporn Aesthetic Edition

## What's New

### 🎨 Design Overhaul
- **Terminal-inspired aesthetic** with command-line prompts throughout
- **Dark mode first** (with light mode toggle)
- **Monospace fonts** (JetBrains Mono) for terminal elements
- **Glitch effect** on hero name
- **Better typography** and spacing throughout
- **Terminal color palette**: Cyan, green, amber accents on dark background

### ✍️ Copy Improvements
- **Your actual voice** throughout the site
- **Rich film descriptions** with artistic intent explained
- **Community work prominently featured** - Reddit LGBTQ+ counseling is now central
- **Philosophy section** explaining your research methodology
- **Better narrative flow** connecting CS + MBA + Film
- **Personality in every section** - not just resume bullets

### 🎬 Content Enhancements
- **Expanded film section** with context for each work
- **NEW Community section** highlighting harm reduction work
- **Work experience with narrative** - not just bullet points
- **Interdisciplinary positioning** explained throughout
- **PhD/job search goals** mentioned in contact section

## File Structure

```
portfolio-redesign/
├── index.html          # Main HTML with enhanced copy
├── css/
│   └── style.css       # Terminal aesthetic CSS
└── js/
    └── main.js         # Interactive features
```

## How to Deploy

### Option 1: Replace Existing Files (Recommended)
1. Navigate to your existing GitHub repo: `ahmedrikk.github.io`
2. Replace these files:
   - `index.html` → with new `index.html`
   - `css/style.css` → with new `css/style.css`
   - `js/main.js` → with new `js/main.js`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Portfolio redesign: unixporn aesthetic + personality"
   git push origin main
   ```
4. GitHub Pages will auto-deploy in ~2 minutes

### Option 2: Test Locally First
1. Copy files to your local repo
2. Open `index.html` in a browser
3. Check everything looks good
4. Then deploy via Option 1

## What You Need to Do

### ✅ No Code Changes Needed
- HTML, CSS, and JS are production-ready
- All animations and interactions work out of the box

### 📄 Create Resume PDF
The "Download Resume" button points to `assets/resume.pdf`. You need to:
1. Create an `assets/` folder in your repo
2. Add your `resume.pdf` there

### 🖼️ Optional: Add OG Image
The site references `assets/hero-preview.png` for social media previews:
- Create a 1200x630px image showcasing your work
- Save as `assets/hero-preview.png`
- Or remove the line if you don't want this feature

## Features Included

### Interactive Elements
✅ Dark/light mode toggle (saves preference)
✅ Mobile hamburger menu
✅ Smooth scroll navigation
✅ Active section highlighting in nav
✅ Fade-in animations on scroll
✅ Card tilt effects on hover
✅ Hide header on scroll down
✅ Terminal typing animation on load
✅ Lazy loading for YouTube videos
✅ Parallax effect on hero background

### Accessibility
✅ Semantic HTML5
✅ ARIA labels
✅ Keyboard navigation
✅ Focus trap on mobile menu
✅ Screen reader friendly
✅ Print-optimized styles

### Performance
✅ Debounced scroll events
✅ Intersection Observer for animations
✅ Lazy loading iframes
✅ Optimized CSS
✅ No jQuery dependency (vanilla JS)

## Customization

### Colors
Edit CSS variables in `css/style.css` (lines 10-30):
```css
--accent-cyan: #59e3e3;
--accent-green: #5de4c7;
--accent-amber: #ffd57f;
```

### Fonts
Current setup:
- **Display**: Outfit (headings)
- **Body**: Inter (paragraphs)
- **Mono**: JetBrains Mono (terminal elements)

Change in the `<head>` of `index.html` and CSS variables.

### Content
All content is in `index.html`. Search for sections by ID:
- `#hero` - Hero section
- `#about` - About section
- `#work` - Work experience
- `#films` - Films & creative work
- `#community` - Community work
- `#skills` - Skills section
- `#contact` - Contact section

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## What Changed From Original

### Removed Generic Copy
❌ "Interdisciplinary creative technologist..." (boring)
✅ "I make films about erased histories that refuse to be translated..."

### Added Film Context
❌ "Rekhta (2024, 6:20 min)"
✅ Full paragraph explaining artistic intent, Urdu poetry, formal rebellion

### Elevated Community Work
❌ Hidden or minimal mention
✅ Dedicated section with detailed description of Reddit LGBTQ+ counseling

### Better Design
❌ Corporate resume vibes
✅ Terminal aesthetic, personality, breathing room

## Checklist Before Going Live

- [ ] Replace old files in GitHub repo
- [ ] Add `assets/resume.pdf`
- [ ] (Optional) Add `assets/hero-preview.png`
- [ ] Test on mobile device
- [ ] Test dark/light mode toggle
- [ ] Verify all YouTube embeds work
- [ ] Check all external links (Linktree, LinkedIn, etc.)
- [ ] Update LinkedIn with new portfolio URL
- [ ] Share with friends for feedback

## Contact

If you need help deploying or want to tweak anything, reach out!

Built with ❤️ by Claude + Ahmed's vision

---

**Pro Tip**: After deploying, check your site in incognito mode to see it with fresh eyes (no cached files).
