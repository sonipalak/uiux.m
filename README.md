# UIUX Minimal Agency

The website for **UIUX Minimal Agency**, a minimal design agency offering UI Design, Brand Design, SaaS, WordPress Development, Social Media Design and SEO.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home: hero, services, selected work, stats, process, testimonial, latest articles |
| `/work`, `/work/:slug` | Portfolio list (filter by service) and case study details |
| `/services`, `/services/:slug` | All services and one page per service, with deliverables, related work and FAQs |
| `/blog`, `/blog/:slug` | Blog list (filter by category) and article details |
| `/about` | Studio story, values and team |
| `/contact` | Project enquiry form, handled by Netlify Forms |
| `/sitemap.xml`, `/robots.txt` | Search engine discovery |

## SEO

- Every page has its own keyword-focused title, meta description, keywords, canonical URL, and Open Graph and Twitter tags.
- Structured data (JSON-LD): ProfessionalService, Service, FAQPage, BlogPosting, CreativeWork, BreadcrumbList and ItemList.
- Pages are rendered on the server, use one H1 each with a clear heading order, and have descriptive alt text.
- Images are served through the Netlify Image CDN as resized WebP files.
- The sitemap is generated from the content, so new services, projects and posts show up in it automatically.

## Tech stack

TanStack Start (React 19, SSR), Tailwind CSS 4, shadcn/ui components, lucide icons, Netlify Forms and the Netlify Image CDN. Deployed on Netlify.

## Editing content

All copy for services, case studies, blog posts and the team is in `src/data/site.ts`. Add an entry and the list page, detail page and sitemap all pick it up. Site name, contact details and global keywords are in `src/lib/seo.ts`. Images are in `public/img/`.

## Run locally

```bash
pnpm install
netlify dev     # http://localhost:8888, with Forms and Image CDN emulation
```

Contact form submissions appear in the Netlify UI under **Forms → contact**. You can turn on email notifications there.
