# Thangamani K — The Data Series

A cinematic, streaming-inspired data analytics portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis. The original portfolio template and its interactions are preserved while the profile, sections, artwork, projects and CV are personalized for Thangamani K's data analytics career focus.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages or another static host.

## Update content

Most portfolio content is centralized in `src/data/portfolio.ts`:

- `profile`: name, role, intro, contact links, CV and interests
- `projects`: the four data analytics case studies and their details
- `skillCategories` / `skillEvidence`: tools and methods, plus related project evidence
- `experience` / `education`: CV-backed background
- `achievements` / `certifications`: analytics highlights and certifications
- `seasons`, `topPicks` and `introSlides`: the cinematic portfolio sections
- `viewerProfiles`: section ordering for main, recruiter, analyst and business-team views

The supplied CV does not include project-specific repository URLs or individual certification-verification URLs, so the project cards do not link to unverified repositories and the certification tiles are shown without invented destinations.

## Artwork

The portfolio uses custom, original data-dashboard artwork in `public/assets/analytics-portrait.svg`, not the previous template owner's portrait. Regenerate responsive images and the social preview with:

```bash
npm run images
```

The CV displayed and downloaded by the site is `public/assets/Thangamani_K_CV.pdf`.
