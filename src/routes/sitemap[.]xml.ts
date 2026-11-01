import { createFileRoute } from '@tanstack/react-router'

import { posts, services, works } from '@/data/site'
import { SITE } from '@/lib/seo'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const pages: Array<{ path: string; priority: string; lastmod?: string }> = [
          { path: '/', priority: '1.0' },
          { path: '/services', priority: '0.9' },
          { path: '/work', priority: '0.9' },
          { path: '/blog', priority: '0.8' },
          { path: '/about', priority: '0.7' },
          { path: '/contact', priority: '0.7' },
          ...services.map((s) => ({ path: `/services/${s.slug}`, priority: '0.9' })),
          ...works.map((w) => ({ path: `/work/${w.slug}`, priority: '0.7' })),
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: '0.6', lastmod: p.date })),
        ]
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url><loc>${SITE.url}${p.path}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}<priority>${p.priority}</priority></url>`,
  )
  .join('\n')}
</urlset>`
        return new Response(xml, {
          headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
        })
      },
    },
  },
})
