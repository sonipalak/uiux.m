import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PageIntro } from '@/components/blocks'
import { services } from '@/data/site'
import { SITE, breadcrumbs, jsonLd, seo } from '@/lib/seo'

export const Route = createFileRoute('/contact')({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () => ({
    ...seo({
      title: 'Contact Us — Get a Quote for Design, WordPress or SEO',
      description:
        'Contact UIUX Minimal Agency to start your UI design, brand design, SaaS, WordPress development, social media design or SEO project. We reply within one business day.',
      path: '/contact',
      keywords: ['hire a design agency', 'get a website quote', 'contact UI UX agency'],
    }),
    scripts: [
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
      jsonLd({ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact UIUX Minimal Agency', url: `${SITE.url}/contact` }),
    ],
  }),
  component: ContactPage,
})

const budgets = ['Under $5k', '$5k – $15k', '$15k – $40k', '$40k+']
const selectClass =
  'h-11 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'

type State = 'idle' | 'pending' | 'success' | 'error'

function ContactPage() {
  const { service: preselected } = Route.useSearch()
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Form handling is unavailable')
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <>
      <PageIntro eyebrow="Contact" title={<>Tell us about your <em className="text-brand-ink">project.</em></>}>
        Whether you need a new brand, a SaaS product, a WordPress website or better Google rankings — share a few details
        and we’ll get back to you within one business day.
      </PageIntro>

      <section className="container-site grid gap-12 pb-24 md:grid-cols-12">
        <aside className="space-y-8 md:col-span-4">
          <div className="flex gap-4">
            <Mail className="mt-1 size-5 text-brand-ink" aria-hidden="true" />
            <div>
              <h2 className="text-sm text-muted-foreground">Email</h2>
              <a href={`mailto:${SITE.email}`} className="text-lg hover:text-brand-ink">
                {SITE.email}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-1 size-5 text-brand-ink" aria-hidden="true" />
            <div>
              <h2 className="text-sm text-muted-foreground">Phone</h2>
              <a href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`} className="text-lg hover:text-brand-ink">
                {SITE.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 text-brand-ink" aria-hidden="true" />
            <div>
              <h2 className="text-sm text-muted-foreground">Studio</h2>
              <address className="text-lg not-italic">{SITE.address}</address>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">What happens next?</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-4">
              <li>We review your brief and reply within 24 hours.</li>
              <li>A free 30-minute discovery call.</li>
              <li>A tailored proposal with timeline and budget.</li>
            </ol>
          </div>
        </aside>

        <div className="md:col-span-8">
          {state === 'success' ? (
            <div role="status" className="flex flex-col items-start rounded-3xl border border-border bg-card p-10 md:p-14">
              <CheckCircle2 className="size-10 text-brand-ink" aria-hidden="true" />
              <h2 className="mt-6 font-display text-5xl">Thank you!</h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Your message was received. We’ll be in touch within one business day.
              </p>
              <button
                type="button"
                onClick={() => setState('idle')}
                className="mt-8 rounded-full border border-border px-5 py-2.5 text-sm hover:border-foreground"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              action="/contact-form.html"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={submit}
              onChange={() => {
                if (state === 'error') setState('idle')
              }}
              className="rounded-3xl border border-border bg-card p-6 md:p-10"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <fieldset disabled={state === 'pending'} className="grid gap-6 sm:grid-cols-2">
                <legend className="sr-only">Project enquiry</legend>
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" autoComplete="name" required maxLength={100} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" name="company" autoComplete="organization" maxLength={120} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <select id="service" name="service" defaultValue={preselected ?? ''} required className={selectClass}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="budget">Budget</Label>
                  <select id="budget" name="budget" defaultValue="" className={selectClass}>
                    <option value="">Prefer not to say</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Project details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={3000}
                    rows={6}
                    placeholder="Tell us about your goals, timeline and anything else we should know."
                  />
                </div>
                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">We’ll only use your details to reply to your enquiry.</p>
                  <button
                    type="submit"
                    className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground disabled:opacity-60"
                  >
                    {state === 'pending' ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </fieldset>
              {state === 'error' && (
                <p role="alert" className="mt-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                  Your message couldn’t be sent. Your details are still here — please try again, or email us at {SITE.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
