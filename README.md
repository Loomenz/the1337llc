# the1337llc.com

Website for 1337 LLC, built with [Astro](https://astro.build). Astro turns the files in `src/` into plain HTML, CSS and JS in `dist/`, and the server only serves `dist/`.

## Where things are

| Path | What it is |
|---|---|
| `src/pages/index.astro` | Home page (puts the sections together, plus the Google business info) |
| `src/components/` | One file per section: Hero, Work, Services, Stats, Process, Pricing, Contact, plus Header and Footer |
| `src/data/work.ts` | Portfolio cards (add a client here) |
| `src/data/pricing.ts` | Prices and add-ons |
| `src/layouts/Base.astro` | Page shell shared by every page: head tags, background, header, footer, shared animations |
| `src/styles/global.css` | All styles |
| `src/content/blog/` | Blog posts, one Markdown file each |
| `public/` | Copied as-is: portfolio screenshots, `robots.txt`, `sitemap.xml` |

## Commands

```
npm ci          # install (first time, or after package-lock.json changes)
npm run dev     # local preview at http://localhost:4321
npm run build   # build the site into dist/
```

## Add a blog post

Create `src/content/blog/<url-name>.md`:

```
---
title: How to get more Google reviews
description: One sentence for Google and the post list.
date: 2026-10-20
---

Write the post in Markdown here.
```

It appears at `/blog/<url-name>/` and on `/blog/`. Add `draft: true` to keep it hidden.

## Hosting (VPS, Laravel Forge)

- Site: the1337llc.com (alias www.the1337llc.com) on the Forge server 72.61.1.95.
- Web directory: `/dist`
- Deploy script:

```
cd $FORGE_SITE_PATH
git pull origin $FORGE_SITE_BRANCH
npm ci
npm run build
```

Quick Deploy is on, so pushing to `main` updates the live site.
The contact form posts to FormSubmit, which emails the1337llc@gmail.com.
