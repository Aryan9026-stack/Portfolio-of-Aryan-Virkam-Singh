# Aryan Portfolio

## About
Single-page developer portfolio for **Aryan Vikram Singh**, an aspiring Full Stack Developer from Lucknow. All content comes from his resume and lives in `src/data/portfolio.js`.

## Features
- Claymorphism design system in soft pastels (ClayCard, ClayButton, ClayBadge, ClayInput, ClaySection)
- Lightweight Three.js hero scene (lazy loaded, mouse-responsive, simplified on mobile, still under reduced motion)
- Floating navbar with active-section highlight and mobile menu
- Accessible: semantic HTML, keyboard focus states, skip link, reduced-motion support
- Contact form with validation; it opens your email app (no backend is configured, so nothing is sent automatically)

## Tech Stack
React 18, Vite 5, Tailwind CSS 3, three + @react-three/fiber, Framer Motion, Lucide React

## Project Structure
```
src/
  assets/images/aryan-profile.jpg
  components/        Navbar, Hero, HeroScene, About, Skills, Experience, Projects, Education, Contact, Footer
  components/ui/     Clay.jsx (reusable clay components)
  data/portfolio.js  all content
  hooks/             useActiveSection, useReducedMotion
  styles/index.css   Tailwind + clay styles
```

## Installation
```
npm install
```

## Running Locally
```
npm run dev
```

## Build for Production
```
npm run build
npm run preview
```

## Deployment
- **Vercel / Netlify:** import the GitHub repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** run `npm run build`, then publish the `dist` folder (for example with the `gh-pages` package or a GitHub Actions Pages workflow). Asset paths are relative (`base: './'`).

## GitHub Setup
```
git init
git add .
git commit -m "Initial commit: Aryan Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
