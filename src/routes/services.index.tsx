import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Check } from 'lucide-react'

import { CtaSection, PageIntro, ServiceIcon } from '@/components/blocks'
import { services } from '@/data/site'
import { SITE, breadcrumbs, jsonLd, seo } from '@/lib/seo'

export const Route = createFileRoute('/services/')({
  head: () => ({
    ...seo({
      title: 'Design & Development Services — UI, Branding, SaaS, WordPress, Social, SEO',
      description:
        'Explore our services: UI/UX design, brand identity design, SaaS product design, custom WordPress development, social media design and SEO services.',
      path: '/services',
      keywords: services.flatMap((s) => s.keywords.slice(0, 1)),
    }),
    scripts: [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ]),
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE.url}/services/${s.slug}`,
          name: s.name,
        })),
      }),
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title={<>Everything your brand needs, <em className="text-brand-ink">nothing</em> it doesn’t.</>}>
        From the first logo sketch to the hundredth blog post ranking on Google, we cover the full journey of a modern
        digital brand — with one team and one consistent standard.
      </PageIntro>

      <section className="container-site">
        <ul className="border-t border-border">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-border">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid gap-6 py-10 md:grid-cols-12 md:items-start md:py-14"
              >
                <div className="flex items-center gap-4 md:col-span-5">
                  <span className="text-sm text-muted-foreground">0{i + 1}</span>
                  <h2 className="font-display text-5xl transition-colors group-hover:text-brand-ink md:text-6xl">{s.name}</h2>
                </div>
                <div className="md:col-span-6">
                  <p className="flex items-center gap-2 text-lg font-medium">
                    <ServiceIcon slug={s.slug} className="size-5 text-brand-ink" /> {s.tagline}
                  </p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                    {s.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <Check className="size-4 text-brand-ink" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="hidden size-12 place-items-center justify-self-end rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground md:col-span-1 md:grid">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaSection />
    </>
  )
}
