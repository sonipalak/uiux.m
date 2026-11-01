import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Check } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CtaSection, ServiceIcon, WorkCard } from '@/components/blocks'
import { getService, services, works } from '@/data/site'
import { SITE, breadcrumbs, jsonLd, seo } from '@/lib/seo'

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = getService(params.slug)
    if (!service) throw notFound()
    return { service }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { service } = loaderData
    const path = `/services/${service.slug}`
    return {
      ...seo({
        title: `${service.name} Services — ${service.tagline}`,
        description: service.summary,
        path,
        keywords: service.keywords,
      }),
      scripts: [
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path },
        ]),
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          serviceType: service.name,
          description: service.summary,
          url: `${SITE.url}${path}`,
          provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
        }),
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }),
      ],
    }
  },
  component: ServiceDetail,
})

function ServiceDetail() {
  const { service } = Route.useLoaderData()
  const related = works.filter((w) => w.service === service.slug)
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <section className="container-site pt-12 pb-16 md:pt-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/services" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <ArrowLeft className="size-4" /> All services
          </Link>
        </nav>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow flex items-center gap-2">
              <ServiceIcon slug={service.slug} className="size-4 text-brand-ink" /> Service
            </p>
            <h1 className="mt-5 font-display text-6xl leading-none tracking-tight md:text-8xl">{service.name}</h1>
            <p className="mt-6 text-2xl text-muted-foreground">{service.tagline}</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed md:col-span-5 md:pt-6">
            {service.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link
              to="/contact"
              search={{ service: service.name }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Get a {service.name} quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-site grid gap-10 py-16 md:grid-cols-12">
          <h2 className="font-display text-4xl md:col-span-4 md:text-5xl">What’s included</h2>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 md:col-span-8">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 border-b border-border pb-5">
                <Check className="mt-0.5 size-5 shrink-0 text-brand-ink" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-site py-20">
          <p className="eyebrow">Case study</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{service.name} in action</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {related.map((w) => (
              <WorkCard key={w.slug} work={w} large />
            ))}
          </div>
        </section>
      )}

      <section className="container-site grid gap-10 pb-10 md:grid-cols-12">
        <h2 className="font-display text-4xl md:col-span-4 md:text-5xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="md:col-span-8">
          {service.faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container-site pt-16">
        <h2 className="eyebrow">Other services</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
            >
              <ServiceIcon slug={s.slug} className="size-4 text-brand-ink" /> {s.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
