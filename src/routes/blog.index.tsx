import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { CtaSection, PageIntro, PostCard } from '@/components/blocks'
import { formatDate, posts } from '@/data/site'
import { breadcrumbs, img, seo } from '@/lib/seo'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    ...seo({
      title: 'Blog — UI/UX Design, Branding, SaaS, WordPress & SEO Insights',
      description:
        'Practical articles on UI design principles, brand identity, SaaS onboarding UX, WordPress development, social media design and technical SEO from UIUX Minimal Agency.',
      path: '/blog',
      keywords: ['design blog', 'UI UX blog', 'SEO tips', 'branding tips', 'WordPress tips'],
    }),
    scripts: [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  }),
  component: BlogPage,
})

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]

function BlogPage() {
  const [category, setCategory] = useState('All')
  const [featured, ...rest] = posts
  const list = category === 'All' ? rest : posts.filter((p) => p.category === category)

  return (
    <>
      <PageIntro eyebrow="Journal" title={<>Notes on design, brand <em className="text-brand-ink">& growth.</em></>}>
        Ideas, guides and lessons from our studio — written for founders, marketers and product teams.
      </PageIntro>

      {category === 'All' && (
        <section className="container-site pb-16">
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group grid gap-8 md:grid-cols-12 md:items-center">
            <div className="overflow-hidden rounded-3xl bg-muted md:col-span-7">
              <img
                src={img(featured.image)}
                alt={featured.title}
                width={1600}
                height={900}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
            <div className="md:col-span-5">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-brand-ink">Featured · {featured.category}</span> ·{' '}
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight group-hover:text-brand-ink md:text-5xl">{featured.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-6 text-sm font-medium underline decoration-brand underline-offset-4">Read article</p>
            </div>
          </Link>
        </section>
      )}

      <section className="container-site">
        <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2 border-y border-border py-6">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                category === c ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
