import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Gem, Globe, LayoutDashboard, Megaphone, PenTool, TrendingUp, type LucideIcon } from 'lucide-react'

import { formatDate, type Post, type Work } from '@/data/site'
import { img } from '@/lib/seo'

const serviceIcons: Record<string, LucideIcon> = {
  'ui-design': PenTool,
  'brand-design': Gem,
  'saas-design': LayoutDashboard,
  'wordpress-development': Globe,
  'social-media-design': Megaphone,
  seo: TrendingUp,
}

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = serviceIcons[slug] ?? PenTool
  return <Icon className={className} aria-hidden="true" />
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="container-site pt-16 pb-12 md:pt-24 md:pb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">{title}</h1>
      {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </section>
  )
}

export function WorkCard({ work, large = false }: { work: Work; large?: boolean }) {
  return (
    <Link to="/work/$slug" params={{ slug: work.slug }} className="group block">
      <div className="overflow-hidden rounded-2xl bg-muted">
        <img
          src={img(work.image)}
          alt={`${work.client} — ${work.tags[0]} case study by UIUX Minimal Agency`}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            {work.client} · {work.year}
          </p>
          <h3 className="mt-1 text-xl font-medium tracking-tight md:text-2xl">{work.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {work.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} className="group flex flex-col">
      <div className="overflow-hidden rounded-2xl bg-muted">
        <img
          src={img(post.image)}
          alt={post.title}
          width={1600}
          height={900}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        <span className="font-semibold text-brand-ink">{post.category}</span> · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
      </p>
      <h3 className="mt-2 text-xl font-medium tracking-tight group-hover:underline group-hover:decoration-brand group-hover:underline-offset-4">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
    </Link>
  )
}

export function CtaSection() {
  return (
    <section className="container-site py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand/90 blur-3xl" aria-hidden="true" />
        <p className="relative text-xs font-semibold tracking-[0.18em] text-background/60 uppercase">Have a project in mind?</p>
        <h2 className="relative mt-5 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
          Let’s make something <em className="text-brand">beautifully simple.</em>
        </h2>
        <Link
          to="/contact"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          Start a project <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
