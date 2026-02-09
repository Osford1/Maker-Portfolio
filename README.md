# Teo Yu Dong Maker Portfolio

A Next.js + TypeScript + Tailwind (App Router) portfolio site for showcasing robotics and fabrication projects.

## Requirements
- Node.js 18+ (you have Node 24)
- npm

## Install
```bash
npm install
```

## Run locally
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

## Build
```bash
npm run build
```

## Start (production)
```bash
npm run start
```

## Update content
- Project data lives in `data/projects.json`.
- Media lives in `public/media/<project-slug>/`.
- After editing data or media, restart `npm run dev` if it’s already running.

## Deploy (Vercel)
1. Push this repo to GitHub.
2. In Vercel, click **Add New ? Project**.
3. Import the GitHub repo.
4. Framework preset: **Next.js**.
5. Environment variable (optional but recommended for sitemap):
   - `NEXT_PUBLIC_SITE_URL = https://<your-vercel-domain>`
6. Click **Deploy**.

## Why Vercel over GitHub Pages
Vercel supports Next.js features like App Router, server components, dynamic routes, and automatic image optimization with no extra configuration, while GitHub Pages only hosts static files.
