import { createFileRoute } from '@tanstack/react-router'

import { CtaSection, PageIntro } from '@/components/blocks'
import { team } from '@/data/site'
import { breadcrumbs, img, seo } from '@/lib/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    ...seo({
      title: 'About Us — A Minimal UI/UX Design & Branding Studio',
      description:
        'Meet UIUX Minimal Agency: a small, senior team of UI/UX designers, brand designers, WordPress developers and SEO specialists building clean, effective digital brands.',
      path: '/about',
      image: '/img/studio.jpg',
      keywords: ['about UIUX Minimal Agency', 'design studio San Francisco', 'creative agency team'],
    }),
    scripts: [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ],
  }),
  component: AboutPage,
})

const values = [
  { title: 'Clarity over decoration', text: 'Every pixel earns its place. If it doesn’t help the user, it goes.' },
  { title: 'Design that performs', text: 'Beautiful is the baseline. We measure success in conversions, rankings and retention.' },
  { title: 'Small, senior team', text: 'You work directly with the designers and developers building your project.' },
  { title: 'Built to last', text: 'Design systems, guidelines and clean code that your team can grow with.' },
]

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About us" title={<>A small studio with a <em className="text-brand-ink">big</em> belief in less.</>}>
        UIUX Minimal Agency was founded on a simple idea: the best digital experiences feel effortless. Since 2017 we’ve
        helped startups and established brands simplify their products, sharpen their identity and grow online.
      </PageIntro>

      <div className="container-site">
        <img
          src={img('/img/studio.jpg', 1800)}
          srcSet={`${img('/img/studio.jpg', 900)} 900w, ${img('/img/studio.jpg', 1800)} 1800w`}
          sizes="(min-width: 1280px) 1216px, 100vw"
          alt="Inside the UIUX Minimal Agency design studio"
          width={1800}
          height={1005}
          className="aspect-[21/9] w-full rounded-3xl bg-muted object-cover"
        />
      </div>

      <section className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <h2 className="font-display text-5xl leading-none md:col-span-5 md:text-6xl">Our story</h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7">
          <p>
            We started as two designers frustrated by bloated websites and confusing apps. Today we’re a multidisciplinary
            team spanning UI/UX design, brand design, SaaS product design, WordPress development, social media design and
            SEO.
          </p>
          <p>
            That range means your brand, product and marketing are designed by one team with one standard — no hand-offs
            between agencies, no lost context, and a consistent experience at every touchpoint.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-site py-20">
          <p className="eyebrow">What we believe</p>
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-foreground pt-6">
                <span className="text-sm text-brand-ink">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-medium">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <p className="eyebrow">The team</p>
        <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">People behind the pixels</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li key={m.name} className="rounded-2xl border border-border bg-card p-6">
              <div
                className="grid size-16 place-items-center rounded-full bg-muted font-display text-2xl"
                aria-hidden="true"
              >
                {m.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="mt-6 text-lg font-medium">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaSection />
    </>
  )
}
