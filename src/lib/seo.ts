export const SITE = {
  name: 'UIUX Minimal Agency',
  //url: 'https://uiux-minimal-agency.netlify.app',
  url: 'https://www.uiuxminimal.com',
  email: 'hello@uiuxminimal.com',
  phone: '+19 78743 38804',
  address: 'Ahmedabad, Gujarat, India',
  description:
    'UIUX Minimal Agency is a minimal design agency for UI design, brand design, SaaS product design, WordPress development, social media design and SEO. We craft clean, conversion-focused digital experiences.',
  keywords: [
    'UI UX design agency',
    'minimal design agency',
    'UI design services',
    'brand design agency',
    'brand identity design',
    'SaaS design agency',
    'SaaS product design',
    'WordPress development company',
    'custom WordPress website',
    'social media design',
    'SEO services',
    'web design agency',
  ],
}

/** Optimised image URL served through the Netlify Image CDN. */
export function img(path: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=78`
}

type SeoInput = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
  type?: 'website' | 'article'
}

/** Builds per-page <head> tags: title, description, keywords, canonical, Open Graph and Twitter. */
export function seo({ title, description, path, image = '/img/hero.jpg', keywords = [], type = 'website' }: SeoInput) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`
  const url = `${SITE.url}${path}`
  const imageUrl = `${SITE.url}${image}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { name: 'keywords', content: [...keywords, ...SITE.keywords].slice(0, 16).join(', ') },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:image', content: imageUrl },
      { property: 'og:site_name', content: SITE.name },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

/** JSON-LD structured data script tag for a route's head(). */
export function jsonLd(data: Record<string, unknown>) {
  return { type: 'application/ld+json', children: JSON.stringify(data) }
}

export function breadcrumbs(items: Array<{ name: string; path: string }>) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  })
}
