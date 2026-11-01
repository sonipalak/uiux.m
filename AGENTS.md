# AGENTS.md

Marketing website for **UIUX Minimal Agency**, a design agency. Built with TanStack Start (React 19, SSR), Tailwind CSS 4 and shadcn/ui, and deployed on Netlify.

## Architecture

- **Content is static TypeScript.** `src/data/site.ts` holds `services`, `works`, `posts` and `team`, plus the getters `getService`, `getWork` and `getPost`. There is no database or CMS. Detail routes use these getters in their `loader` and `throw notFound()` when a slug is unknown.
- **SEO helpers** are in `src/lib/seo.ts`:
  - `SITE` holds the name, production URL, contact details and global keywords.
  - `seo()` builds the title, description, keywords, canonical, OG and Twitter tags for a route's `head()`.
  - `jsonLd()` and `breadcrumbs()` build structured-data scripts.
  - `img(path, width)` returns a Netlify Image CDN URL. Always use it for images in `public/img`.
- **The layout shell** is `src/routes/__root.tsx`. It loads the fonts (Inter Tight body, Instrument Serif display) and the organisation JSON-LD, and renders `SiteHeader` and `SiteFooter`.
- **Shared blocks** are in `src/components/blocks.tsx`: `PageIntro`, `WorkCard`, `PostCard`, `CtaSection` and `ServiceIcon`. `ServiceIcon` maps service slugs to lucide icons.
- **Routes** use flat file naming: `services.index.tsx`, `services.$slug.tsx`, `work.*`, `blog.*`, `about.tsx`, `contact.tsx`. `sitemap[.]xml.ts` is a server route that generates the sitemap from the data.
- **The contact form** uses Netlify Forms. `public/contact-form.html` is the static registration copy. Its field names must match `src/routes/contact.tsx`, and the AJAX POST goes to `/contact-form.html`, not `/`. `/contact?service=<name>` preselects a service.

## Conventions

- Theme tokens are in `src/styles.css`. `--brand` (vermilion) is the single accent; use `text-brand` and `bg-brand`. `--accent` stays neutral because shadcn uses it for hover states.
- Utilities: `container-site` for page width and padding, and `eyebrow` for small uppercase labels. Headings use `font-display`.
- Keep one H1 per page. Give every new route a `head()` that calls `seo()` with a unique title and description, and add the route to the sitemap if it isn't data-driven.
- Images were generated once and saved to `public/img/` as JPGs. Reference them through `img()`.
