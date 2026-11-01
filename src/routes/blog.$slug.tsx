import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { CtaSection, PostCard } from '@/components/blocks'
import { formatDate, getPost, posts, team } from '@/data/site'
import { SITE, breadcrumbs, img, jsonLd, seo } from '@/lib/seo'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return { post }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { post } = loaderData
    const path = `/blog/${post.slug}`
    const base = seo({ title: post.title, description: post.excerpt, path, image: post.image, keywords: post.keywords, type: 'article' })
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: 'article:published_time', content: post.date },
        { property: 'article:section', content: post.category },
        { name: 'author', content: post.author },
      ],
      scripts: [
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path },
        ]),
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: `${SITE.url}${post.image}`,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          mainEntityOfPage: `${SITE.url}${path}`,
          keywords: post.keywords.join(', '),
        }),
      ],
    }
  },
  component: BlogPost,
})

function BlogPost() {
  const { post } = Route.useLoaderData()
  const role = team.find((m) => m.name === post.author)?.role
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <article>
        <header className="container-site pt-12 md:pt-20">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> All articles
          </Link>
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-brand-ink">{post.category}</span> ·{' '}
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.04] tracking-tight md:text-7xl">{post.title}</h1>
            <p className="mt-6 text-sm">
              By <span className="font-medium">{post.author}</span>
              {role && <span className="text-muted-foreground"> · {role}</span>}
            </p>
          </div>
        </header>
        <div className="container-site mt-12">
          <img
            src={img(post.image, 1800)}
            srcSet={`${img(post.image, 900)} 900w, ${img(post.image, 1400)} 1400w, ${img(post.image, 1800)} 1800w`}
            sizes="(min-width: 1280px) 1216px, 100vw"
            alt={post.title}
            width={1800}
            height={1012}
            fetchPriority="high"
            className="aspect-[16/8] w-full rounded-3xl bg-muted object-cover"
          />
        </div>
        <div className="mx-auto max-w-reading px-5 py-16 text-lg leading-relaxed sm:px-8">
          <p className="text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
          {post.content.map((block, i) => {
            switch (block.type) {
              case 'h2':
                return (
                  <h2 key={i} className="mt-12 font-display text-4xl leading-tight">
                    {block.text}
                  </h2>
                )
              case 'ul':
                return (
                  <ul key={i} className="mt-6 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              case 'quote':
                return (
                  <blockquote key={i} className="my-10 border-l-2 border-brand pl-6 font-display text-3xl leading-snug">
                    {block.text}
                  </blockquote>
                )
              default:
                return (
                  <p key={i} className="mt-6">
                    {block.text}
                  </p>
                )
            }
          })}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
            {post.keywords.map((k) => (
              <span key={k} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {k}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="container-site border-t border-border pt-16">
        <h2 className="font-display text-4xl">Keep reading</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
