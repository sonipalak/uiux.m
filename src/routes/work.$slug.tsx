import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { CtaSection } from '@/components/blocks'
import { getService, getWork, works } from '@/data/site'
import { SITE, breadcrumbs, img, jsonLd, seo } from '@/lib/seo'

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const work = getWork(params.slug)
    if (!work) throw notFound()
    return { work }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { work } = loaderData
    const path = `/work/${work.slug}`
    return {
      ...seo({
        title: `${work.client} — ${work.tags[0]} Case Study`,
        description: work.summary,
        path,
        image: work.image,
        keywords: [...work.tags, `${work.industry} design`],
        type: 'article',
      }),
      scripts: [
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: work.client, path },
        ]),
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${work.client}: ${work.title}`,
          description: work.summary,
          image: `${SITE.url}${work.image}`,
          dateCreated: work.year,
          creator: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          keywords: work.tags.join(', '),
        }),
      ],
    }
  },
  component: WorkDetail,
})

function WorkDetail() {
  const { work } = Route.useLoaderData()
  const service = getService(work.service)
  const index = works.findIndex((w) => w.slug === work.slug)
  const next = works[(index + 1) % works.length]

  return (
    <article>
      <header className="container-site pt-12 md:pt-20">
        <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> All work
        </Link>
        <p className="eyebrow mt-10">
          {work.client} · {work.industry}
        </p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          {work.title}
        </h1>
        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm md:grid-cols-4">
          <div>
            <dt className="text-muted-foreground">Client</dt>
            <dd className="mt-1 font-medium">{work.client}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Industry</dt>
            <dd className="mt-1 font-medium">{work.industry}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Service</dt>
            <dd className="mt-1 font-medium">
              {service && (
                <Link to="/services/$slug" params={{ slug: service.slug }} className="hover:text-brand-ink">
                  {service.name}
                </Link>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="mt-1 font-medium">{work.year}</dd>
          </div>
        </dl>
      </header>

      <div className="container-site mt-12">
        <img
          src={img(work.image, 1800)}
          srcSet={`${img(work.image, 900)} 900w, ${img(work.image, 1400)} 1400w, ${img(work.image, 1800)} 1800w`}
          sizes="(min-width: 1280px) 1216px, 100vw"
          alt={`${work.client} ${work.tags.join(', ')} project by UIUX Minimal Agency`}
          width={1800}
          height={1350}
          fetchPriority="high"
          className="aspect-[16/10] w-full rounded-3xl bg-muted object-cover"
        />
      </div>

      <section className="container-site grid gap-10 py-20 md:grid-cols-12">
        <h2 className="font-display text-4xl md:col-span-4 md:text-5xl">The challenge</h2>
        <p className="text-xl leading-relaxed md:col-span-8">{work.challenge}</p>
      </section>

      <section className="container-site grid gap-10 pb-20 md:grid-cols-12">
        <h2 className="font-display text-4xl md:col-span-4 md:text-5xl">Our approach</h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8">
          {work.solution.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {work.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="container-site py-20">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-background/60 uppercase">The results</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {work.results.map((r) => (
              <div key={r.label} className="border-t border-background/20 pt-6">
                <p className="font-display text-7xl text-brand md:text-8xl">{r.value}</p>
                <p className="mt-2 text-background/70">{r.label}</p>
              </div>
            ))}
          </div>
          {work.quote && (
            <figure className="mt-20 max-w-4xl">
              <blockquote className="font-display text-3xl leading-tight md:text-5xl">“{work.quote.text}”</blockquote>
              <figcaption className="mt-6 text-sm text-background/70">
                {work.quote.author} — {work.quote.role}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <nav aria-label="Next project" className="container-site pt-20">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group block border-b border-border pb-10">
          <p className="eyebrow">Next project</p>
          <p className="mt-4 flex items-center justify-between gap-6 font-display text-4xl transition-colors group-hover:text-brand-ink md:text-6xl">
            {next.client}
            <ArrowRight className="size-10 shrink-0 transition-transform group-hover:translate-x-2 motion-reduce:transition-none" />
          </p>
        </Link>
      </nav>

      <CtaSection />
    </article>
  )
}
