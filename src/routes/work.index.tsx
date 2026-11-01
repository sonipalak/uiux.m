import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { CtaSection, PageIntro, WorkCard } from '@/components/blocks'
import { services, works } from '@/data/site'
import { breadcrumbs, seo } from '@/lib/seo'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/work/')({
  head: () => ({
    ...seo({
      title: 'Our Work — UI/UX, Branding & Web Design Portfolio',
      description:
        'Browse the UIUX Minimal Agency portfolio: UI design, brand identity, SaaS dashboards, WordPress websites, social media campaigns and SEO case studies with real results.',
      path: '/work',
      keywords: ['design agency portfolio', 'UI UX case studies', 'branding portfolio', 'web design portfolio'],
    }),
    scripts: [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
      ]),
    ],
  }),
  component: WorkPage,
})

function WorkPage() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? works : works.filter((w) => w.service === filter)

  return (
    <>
      <PageIntro eyebrow="Work" title={<>Selected projects, <em className="text-brand-ink">measured</em> results.</>}>
        A selection of case studies across UI design, brand design, SaaS, WordPress development, social media design and
        SEO.
      </PageIntro>

      <section className="container-site">
        <div role="group" aria-label="Filter projects by service" className="flex flex-wrap gap-2 border-b border-border pb-8">
          {[{ slug: 'all', name: 'All work' }, ...services].map((s) => (
            <button
              key={s.slug}
              type="button"
              aria-pressed={filter === s.slug}
              onClick={() => setFilter(s.slug)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                filter === s.slug ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground',
              )}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {list.map((w) => (
            <WorkCard key={w.slug} work={w} large />
          ))}
        </div>
        {list.length === 0 && <p className="py-20 text-center text-muted-foreground">New case studies coming soon.</p>}
      </section>

      <CtaSection />
    </>
  )
}
