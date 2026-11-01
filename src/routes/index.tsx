import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { CtaSection, PostCard, ServiceIcon, WorkCard } from '@/components/blocks'
import { posts, services, works } from '@/data/site'
import { SITE, img, seo } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    seo({
      title: `${SITE.name} — UI/UX Design, Branding, SaaS, WordPress & SEO Agency`,
      description:
        'UIUX Minimal Agency is a minimal design agency offering UI design, brand design, SaaS product design, WordPress development, social media design and SEO services for ambitious brands.',
      path: '/',
    }),
  component: Home,
})

const stats = [
  { value: '120+', label: 'Projects launched' },
  { value: '9 yrs', label: 'Designing products' },
  { value: '98%', label: 'Client retention' },
  { value: '14', label: 'Design awards' },
]

const process = [
  { step: '01', title: 'Discover', text: 'Research, audits and workshops to understand your users, market and goals.' },
  { step: '02', title: 'Define', text: 'Strategy, user flows, sitemap and keyword plan — the blueprint for everything.' },
  { step: '03', title: 'Design', text: 'Wireframes to polished UI and brand systems, refined with your feedback.' },
  { step: '04', title: 'Deliver', text: 'Development, SEO launch checklist and support as your product grows.' },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-site pt-14 pb-10 md:pt-24">
        <p className="eyebrow flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-brand" /> Minimal UI/UX design agency
        </p>
        <h1 className="mt-6 font-display text-[3.25rem] leading-[0.98] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          We design <em className="text-brand-ink">less,</em>
          <br className="hidden sm:block" /> so your brand says more.
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-6">
            UIUX Minimal Agency crafts clean, conversion-focused digital experiences — from UI design and brand identity
            to SaaS products, WordPress websites, social media design and SEO.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Start a project <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site pb-6">
        <div className="overflow-hidden rounded-3xl bg-muted">
          <img
            src={img('/img/hero.jpg', 1800)}
            srcSet={`${img('/img/hero.jpg', 900)} 900w, ${img('/img/hero.jpg', 1400)} 1400w, ${img('/img/hero.jpg', 1800)} 1800w`}
            sizes="(min-width: 1280px) 1216px, 100vw"
            alt="Minimal still life with paper, stone and an orange panel — the UIUX Minimal Agency aesthetic"
            width={1800}
            height={1005}
            fetchPriority="high"
            className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          />
        </div>
      </section>

      {/* Marquee */}
      <section aria-label="Our services" className="overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap motion-reduce:animate-none">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-4xl md:text-5xl">
              {s.name} <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none md:text-6xl">
              Six services. One <em>clear</em> point of view.
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand-ink">
            All services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex min-h-72 flex-col justify-between bg-card p-8 transition-colors hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between">
                <ServiceIcon slug={s.slug} className="size-7 text-brand-ink" />
                <span className="text-xs text-muted-foreground group-hover:text-background/60">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">
                  {s.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="container-site pb-20 md:pb-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">Recent case studies</h2>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand-ink">
            See all work <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {works.slice(0, 4).map((w, i) => (
            <div key={w.slug} className={i % 2 === 1 ? 'md:mt-24' : ''}>
              <WorkCard work={w} large />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container-site grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl md:text-7xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-site py-20 md:py-28">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none md:text-6xl">A simple process, rigorously applied.</h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="border-t border-foreground pt-6">
              <span className="text-sm text-brand-ink">{p.step}</span>
              <h3 className="mt-3 text-2xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonial */}
      <section className="container-site pb-20 md:pb-28">
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="font-display text-4xl leading-tight md:text-5xl">
            “{works[2].quote?.text}”
          </blockquote>
          <figcaption className="mt-8 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{works[2].quote?.author}</span> — {works[2].quote?.role}
          </figcaption>
        </figure>
      </section>

      {/* Blog */}
      <section className="container-site border-t border-border pt-20 md:pt-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Journal</p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">Insights on design & growth</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand-ink">
            Read the blog <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
