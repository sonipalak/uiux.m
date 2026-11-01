import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

import { Logo, navLinks } from '@/components/site-header'
import { services } from '@/data/site'
import { SITE } from '@/lib/seo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A minimal design agency for UI/UX design, brand identity, SaaS products, WordPress development, social media
            design and SEO.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-flex items-center gap-1.5 font-display text-3xl transition-colors hover:text-brand-ink"
          >
            {SITE.email} <ArrowUpRight className="size-5" />
          </a>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-brand-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="eyebrow">Agency</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...navLinks, { to: '/contact', label: 'Contact' } as const].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="eyebrow">Studio</h2>
          <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
            {SITE.address}
            <br />
            <a href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`} className="hover:text-foreground">
              {SITE.phone}
            </a>
          </address>
        </div>
      </div>
      <div className="container-site flex flex-col justify-between gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} UIUX Minimal Agency. All rights reserved.</p>
        <p>UI Design · Brand Design · SaaS · WordPress · Social Media · SEO</p>
      </div>
    </footer>
  )
}
