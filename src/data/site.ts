/**
 * All site content lives here. Pages read from these arrays, so adding a
 * service, case study or blog post only means adding an entry below.
 */

export type Service = {
  slug: string
  name: string
  tagline: string
  summary: string
  description: string[]
  deliverables: string[]
  keywords: string[]
  faqs: Array<{ q: string; a: string }>
}

export type Work = {
  slug: string
  title: string
  client: string
  industry: string
  year: string
  service: string // Service slug
  tags: string[]
  image: string
  summary: string
  challenge: string
  solution: string[]
  results: Array<{ value: string; label: string }>
  quote?: { text: string; author: string; role: string }
}

export type Block = { type: 'p'; text: string } | { type: 'h2'; text: string } | { type: 'ul'; items: string[] } | { type: 'quote'; text: string }

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  readTime: string
  image: string
  author: string
  keywords: string[]
  content: Block[]
}

export const services: Service[] = [
  {
    slug: 'ui-design',
    name: 'UI Design',
    tagline: 'Interfaces that feel effortless.',
    summary: 'User interface and UX design for web and mobile apps — wireframes, prototypes and pixel-perfect design systems.',
    description: [
      'Great UI design is invisible. We strip interfaces back to what matters, so every screen guides your users toward the next step without friction. Our UI/UX design process starts with research and user flows, then moves into wireframes, high-fidelity mockups and interactive prototypes in Figma.',
      'Every project ships with a documented, scalable design system — typography, colour, spacing, components and states — so your developers can build faster and your product stays consistent as it grows.',
    ],
    deliverables: ['UX research & user flows', 'Wireframes & information architecture', 'High-fidelity UI mockups', 'Interactive Figma prototypes', 'Design systems & component libraries', 'Mobile app UI design'],
    keywords: ['UI design services', 'UX design agency', 'mobile app UI design', 'design system', 'Figma prototyping'],
    faqs: [
      { q: 'How long does a UI design project take?', a: 'A focused website or app UI typically takes 3–6 weeks, including research, wireframes, visual design and a hand-off ready design system.' },
      { q: 'Do you work with our developers?', a: 'Yes. We deliver developer-ready Figma files, tokens and specs, and stay available during build for reviews and QA.' },
    ],
  },
  {
    slug: 'brand-design',
    name: 'Brand Design',
    tagline: 'Identities with quiet confidence.',
    summary: 'Brand identity design — strategy, logo design, typography, colour and brand guidelines that scale.',
    description: [
      'Your brand is the feeling people get when they meet you. We build minimal, memorable brand identities grounded in strategy: positioning, voice and a visual language that works everywhere from a favicon to a billboard.',
      'From logo design and typography to colour palettes, iconography and packaging, every piece is documented in clear brand guidelines so your team can use it with confidence.',
    ],
    deliverables: ['Brand strategy & positioning', 'Logo design & visual identity', 'Typography & colour systems', 'Brand guidelines', 'Stationery & packaging design', 'Brand messaging & tone of voice'],
    keywords: ['brand design agency', 'brand identity design', 'logo design', 'brand guidelines', 'rebranding'],
    faqs: [
      { q: 'Do you offer rebranding?', a: 'Absolutely. We audit your existing brand, keep the equity worth keeping and evolve the rest into a cohesive modern identity.' },
      { q: 'What files do we receive?', a: 'Full logo suites (SVG, PNG, PDF), colour and type specs, templates and a complete brand guidelines document.' },
    ],
  },
  {
    slug: 'saas-design',
    name: 'SaaS',
    tagline: 'Products people love to use daily.',
    summary: 'SaaS product design and development — dashboards, onboarding, web apps and marketing sites for software companies.',
    description: [
      'SaaS products live or die by usability. We design and build SaaS dashboards, onboarding flows and web applications that reduce churn, shorten time-to-value and make complex data feel simple.',
      'Our team partners with founders and product teams from MVP to scale — product discovery, UX strategy, UI design, front-end development and SaaS landing pages that convert trials into paying customers.',
    ],
    deliverables: ['SaaS product strategy & MVP scoping', 'Dashboard & web app UI/UX', 'User onboarding optimisation', 'Front-end development', 'SaaS landing pages & pricing pages', 'Usability testing'],
    keywords: ['SaaS design agency', 'SaaS product design', 'SaaS dashboard design', 'MVP design', 'SaaS web development'],
    faqs: [
      { q: 'Can you design an MVP for our startup?', a: 'Yes — we help scope the smallest valuable product, design it end-to-end and can build the front end for launch.' },
      { q: 'Do you redesign existing SaaS products?', a: 'Often. We run a UX audit, identify friction points with real data and redesign iteratively so you never pause shipping.' },
    ],
  },
  {
    slug: 'wordpress-development',
    name: 'WordPress Development',
    tagline: 'Fast, editable, built to last.',
    summary: 'Custom WordPress website development — bespoke themes, WooCommerce stores, speed optimisation and maintenance.',
    description: [
      'We build custom WordPress websites that are fast, secure and genuinely easy for your team to edit. No bloated page builders — just clean, bespoke themes built with Gutenberg blocks and modern performance best practices.',
      'Need to sell online? We develop WooCommerce stores with streamlined checkout, plus migrations, Core Web Vitals optimisation and ongoing WordPress maintenance and support.',
    ],
    deliverables: ['Custom WordPress theme development', 'Gutenberg block development', 'WooCommerce e-commerce stores', 'Website migration & redesign', 'Speed & Core Web Vitals optimisation', 'Maintenance, security & hosting'],
    keywords: ['WordPress development company', 'custom WordPress website', 'WooCommerce development', 'WordPress speed optimisation', 'WordPress maintenance'],
    faqs: [
      { q: 'Will we be able to edit the website ourselves?', a: 'Yes. We build custom blocks tailored to your content so editing is simple, safe and on-brand.' },
      { q: 'Do you offer WordPress maintenance?', a: 'We offer monthly care plans covering updates, backups, security monitoring, uptime and small content changes.' },
    ],
  },
  {
    slug: 'social-media-design',
    name: 'Social Media Design',
    tagline: 'Scroll-stopping, on-brand content.',
    summary: 'Social media design for Instagram, LinkedIn, TikTok and ads — post templates, campaigns and content systems.',
    description: [
      'Consistency builds recognition. We create social media design systems and templates that keep every post, story and ad unmistakably yours — across Instagram, LinkedIn, Facebook, TikTok and Pinterest.',
      'From launch campaigns to monthly content packages, we design social graphics, carousels, motion posts and paid ad creatives optimised for engagement and conversion.',
    ],
    deliverables: ['Social media templates & design systems', 'Instagram posts, carousels & stories', 'LinkedIn & B2B social graphics', 'Paid social ad creatives', 'Motion graphics & short-form video', 'Campaign art direction'],
    keywords: ['social media design', 'Instagram post design', 'social media templates', 'ad creative design', 'social media branding'],
    faqs: [
      { q: 'Do you offer monthly social media design packages?', a: 'Yes — monthly retainers include a set number of posts, stories and ad creatives designed to your content calendar.' },
      { q: 'Can our team edit the templates?', a: 'We deliver editable Figma and Canva templates so your team can publish quickly while staying on-brand.' },
    ],
  },
  {
    slug: 'seo',
    name: 'SEO',
    tagline: 'Be found by the right people.',
    summary: 'Search engine optimisation — technical SEO, keyword research, on-page SEO and content strategy that grows organic traffic.',
    description: [
      'Beautiful websites deserve to be found. Our SEO services combine technical SEO, keyword research and content strategy to grow qualified organic traffic and turn rankings into revenue.',
      'We fix crawlability and site speed, optimise on-page content and metadata, implement structured data and build a content plan around the keywords your customers actually search — with clear monthly reporting.',
    ],
    deliverables: ['SEO audit & technical SEO', 'Keyword research & strategy', 'On-page SEO & metadata', 'Schema markup / structured data', 'Local SEO & Google Business Profile', 'Content strategy & monthly reporting'],
    keywords: ['SEO services', 'SEO agency', 'technical SEO', 'local SEO', 'keyword research'],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Technical fixes can show impact within weeks; sustained ranking growth typically builds over 3–6 months.' },
      { q: 'Do you report on progress?', a: 'Every month you receive a clear report on rankings, organic traffic, conversions and next priorities.' },
    ],
  },
]

export const works: Work[] = [
  {
    slug: 'lumen-finance',
    title: 'A calmer way to manage money',
    client: 'Lumen Finance',
    industry: 'Fintech',
    year: '2026',
    service: 'ui-design',
    tags: ['UI Design', 'Design System', 'Mobile App'],
    image: '/img/work-lumen-finance.jpg',
    summary: 'End-to-end UI/UX design and design system for a personal finance app used by 400k people.',
    challenge: 'Lumen’s budgeting app had grown feature by feature until the interface felt cluttered and stressful — the opposite of what users wanted from a money app. Activation was low and support tickets were high.',
    solution: [
      'We ran 18 user interviews and mapped every core flow, then rebuilt the information architecture around three daily jobs: check, plan and save.',
      'A new minimal UI with generous spacing, soft data visualisation and a 120-component design system brought consistency across iOS, Android and web.',
    ],
    results: [
      { value: '+38%', label: 'Onboarding completion' },
      { value: '−46%', label: 'Support tickets' },
      { value: '4.8★', label: 'App Store rating' },
    ],
    quote: { text: 'They made our product feel calm. Our users noticed the difference on day one.', author: 'Maya Chen', role: 'Head of Product, Lumen' },
  },
  {
    slug: 'oak-and-ember',
    title: 'Crafting a roastery brand from the ground up',
    client: 'Oak & Ember Coffee',
    industry: 'Food & Beverage',
    year: '2026',
    service: 'brand-design',
    tags: ['Brand Identity', 'Packaging', 'Logo Design'],
    image: '/img/work-oak-and-ember.jpg',
    summary: 'Brand strategy, logo design and packaging for a specialty coffee roaster expanding into retail.',
    challenge: 'Oak & Ember roasted exceptional coffee but looked like every other café. Moving onto supermarket shelves, they needed a brand that stood out and told their story in seconds.',
    solution: [
      'We defined a positioning around “slow-roasted warmth” and created an abstract ember mark, a warm typographic system and a tactile kraft packaging range.',
      'Brand guidelines and templates let their small team roll out the identity across cafés, retail and social media consistently.',
    ],
    results: [
      { value: '3×', label: 'Retail sell-through' },
      { value: '42', label: 'New stockists in 6 months' },
      { value: '+120%', label: 'Instagram followers' },
    ],
  },
  {
    slug: 'northwind-logistics',
    title: 'Making freight data feel simple',
    client: 'Northwind',
    industry: 'Logistics SaaS',
    year: '2025',
    service: 'saas-design',
    tags: ['SaaS', 'Dashboard', 'Web App'],
    image: '/img/work-northwind.jpg',
    summary: 'SaaS product redesign and dashboard UX for a B2B logistics platform tracking 2M shipments a month.',
    challenge: 'Dispatchers juggled six tabs to answer one question: where is my shipment? Churn was climbing as competitors shipped simpler tools.',
    solution: [
      'We consolidated the experience into a single live map dashboard with smart filters, exception alerts and saved views.',
      'A guided onboarding flow and in-app checklists cut time-to-value for new accounts from two weeks to two days.',
    ],
    results: [
      { value: '−31%', label: 'Customer churn' },
      { value: '2 days', label: 'Time to value' },
      { value: '+52%', label: 'Daily active users' },
    ],
    quote: { text: 'The redesign paid for itself within a quarter. Our sales demos practically run themselves now.', author: 'Daniel Okafor', role: 'CEO, Northwind' },
  },
  {
    slug: 'maison-verde',
    title: 'A WooCommerce store that grows with its plants',
    client: 'Maison Verde',
    industry: 'E-commerce',
    year: '2025',
    service: 'wordpress-development',
    tags: ['WordPress', 'WooCommerce', 'Performance'],
    image: '/img/work-maison-verde.jpg',
    summary: 'Custom WordPress theme and WooCommerce store for an online plant shop, built for speed and easy editing.',
    challenge: 'A slow page-builder site meant mobile shoppers abandoned their carts. The team also struggled to update seasonal collections without breaking layouts.',
    solution: [
      'We built a lightweight custom WordPress theme with bespoke Gutenberg blocks for collections, care guides and promotions.',
      'A streamlined WooCommerce checkout, image optimisation and caching brought the store into the green on all Core Web Vitals.',
    ],
    results: [
      { value: '0.9s', label: 'Largest Contentful Paint' },
      { value: '+64%', label: 'Mobile conversion rate' },
      { value: '−70%', label: 'Time to publish updates' },
    ],
  },
  {
    slug: 'pulse-fitness',
    title: 'A social system with serious energy',
    client: 'Pulse Fitness',
    industry: 'Health & Fitness',
    year: '2025',
    service: 'social-media-design',
    tags: ['Social Media', 'Campaign', 'Templates'],
    image: '/img/work-pulse-fitness.jpg',
    summary: 'Social media design system and launch campaign for a boutique fitness studio chain.',
    challenge: 'Each Pulse location posted in its own style, diluting the brand and making paid campaigns inconsistent.',
    solution: [
      'We designed a modular social media design system — 60 editable templates for posts, stories, reels covers and ads — with clear usage rules.',
      'A bold launch campaign introduced the new look across Instagram and TikTok, supported by paid social creatives.',
    ],
    results: [
      { value: '+210%', label: 'Engagement rate' },
      { value: '−35%', label: 'Cost per lead' },
      { value: '60', label: 'Reusable templates' },
    ],
  },
  {
    slug: 'atlas-legal',
    title: 'From page five to page one',
    client: 'Atlas Legal',
    industry: 'Professional Services',
    year: '2024',
    service: 'seo',
    tags: ['SEO', 'Content Strategy', 'Local SEO'],
    image: '/img/work-atlas-legal.jpg',
    summary: 'Technical SEO, local SEO and content strategy that tripled organic leads for a regional law firm.',
    challenge: 'Atlas had a respected reputation offline but was invisible on Google, relying entirely on expensive paid search.',
    solution: [
      'A technical SEO audit fixed indexation issues, page speed and duplicate content; schema markup was added for attorneys, services and reviews.',
      'We built keyword-led practice area pages and an expert content programme, plus local SEO across three office locations.',
    ],
    results: [
      { value: '3.2×', label: 'Organic leads' },
      { value: '27', label: 'Keywords in top 3' },
      { value: '−48%', label: 'Paid search spend' },
    ],
    quote: { text: 'We finally own our search results. The phone rings from Google every day now.', author: 'Sarah Whitfield', role: 'Managing Partner, Atlas Legal' },
  },
]

export const posts: Post[] = [
  {
    slug: 'minimal-ui-design-principles',
    title: '10 Minimal UI Design Principles That Increase Conversions',
    excerpt: 'Minimal UI design isn’t about removing things — it’s about removing friction. Here are ten principles we use on every product.',
    category: 'UI Design',
    date: '2026-09-28',
    readTime: '7 min read',
    image: '/img/blog-ui-principles.jpg',
    author: 'Ava Morin',
    keywords: ['minimal UI design', 'UI design principles', 'conversion rate optimisation', 'UX best practices'],
    content: [
      { type: 'p', text: 'Minimalism in UI design is often misunderstood as “less stuff”. In practice, minimal UI design is about clarity: every element on the screen has a job, and nothing competes with the one action you want a user to take.' },
      { type: 'h2', text: '1. Design for one primary action per screen' },
      { type: 'p', text: 'When everything is emphasised, nothing is. Pick the single most important action and make it visually dominant. Secondary actions should be quieter — outline buttons, text links or progressive disclosure.' },
      { type: 'h2', text: '2. Use whitespace as a layout tool' },
      { type: 'p', text: 'Whitespace groups related items, separates sections and gives content room to breathe. Generous spacing improves comprehension and makes interfaces feel premium.' },
      { type: 'h2', text: 'The rest of the list' },
      { type: 'ul', items: ['Establish a strict type scale with two typefaces at most', 'Limit your palette to neutrals plus one accent colour', 'Make interactive states obvious: hover, focus, pressed and disabled', 'Write microcopy that explains, not decorates', 'Reduce form fields to the absolute minimum', 'Use consistent components from a shared design system', 'Design empty and error states with the same care', 'Test with real users, then remove what they ignore'] },
      { type: 'quote', text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.' },
      { type: 'p', text: 'Applied together, these UI design principles consistently lift conversion rates in our client work — often by double digits — simply by making the next step obvious.' },
    ],
  },
  {
    slug: 'brand-identity-checklist',
    title: 'The Complete Brand Identity Checklist for Startups',
    excerpt: 'Before you design a logo, get these foundations right. A practical brand identity checklist for founders.',
    category: 'Brand Design',
    date: '2026-09-10',
    readTime: '6 min read',
    image: '/img/blog-brand-checklist.jpg',
    author: 'Leo Hartmann',
    keywords: ['brand identity checklist', 'startup branding', 'logo design', 'brand guidelines'],
    content: [
      { type: 'p', text: 'A strong brand identity helps startups look established long before they are. But a logo alone isn’t a brand. Use this checklist to build an identity that scales.' },
      { type: 'h2', text: 'Strategy first' },
      { type: 'ul', items: ['A one-sentence positioning statement', 'Clear target audience and their core problem', 'Three brand personality traits', 'Competitor visual audit'] },
      { type: 'h2', text: 'Visual identity essentials' },
      { type: 'ul', items: ['Primary logo, secondary mark and favicon', 'Colour palette with accessible contrast ratios', 'Typography system for headings and body', 'Imagery and illustration direction', 'Iconography style'] },
      { type: 'h2', text: 'Make it usable' },
      { type: 'p', text: 'Package everything into concise brand guidelines with real examples: website, social media templates, pitch decks and email signatures. A brand that’s hard to use won’t be used consistently.' },
    ],
  },
  {
    slug: 'saas-onboarding-ux',
    title: 'SaaS Onboarding UX: How to Reduce Churn in the First 7 Days',
    excerpt: 'Most SaaS churn happens in the first week. These onboarding UX patterns help users reach value faster.',
    category: 'SaaS',
    date: '2026-08-22',
    readTime: '8 min read',
    image: '/img/blog-saas-onboarding.jpg',
    author: 'Ava Morin',
    keywords: ['SaaS onboarding', 'reduce SaaS churn', 'SaaS UX design', 'user activation'],
    content: [
      { type: 'p', text: 'Your SaaS product’s first seven days decide whether a trial becomes a customer. Great SaaS onboarding UX focuses on one thing: getting users to their “aha moment” as quickly as possible.' },
      { type: 'h2', text: 'Define your activation moment' },
      { type: 'p', text: 'Look at retained customers and find the action they all completed early — creating a first project, inviting a teammate, connecting data. That’s your activation metric, and onboarding should drive straight to it.' },
      { type: 'h2', text: 'Patterns that work' },
      { type: 'ul', items: ['Short welcome survey to personalise the experience', 'Checklists with 3–5 meaningful steps', 'Pre-filled sample data instead of empty dashboards', 'Contextual tooltips over long product tours', 'Behaviour-triggered emails for stalled users'] },
      { type: 'p', text: 'In our Northwind SaaS redesign, these patterns cut time-to-value from two weeks to two days and reduced churn by 31%.' },
    ],
  },
  {
    slug: 'wordpress-development-2026',
    title: 'WordPress Development in 2026: Is It Still the Right Choice?',
    excerpt: 'WordPress powers over 40% of the web. Here’s when a custom WordPress website is the smart choice — and when it isn’t.',
    category: 'WordPress',
    date: '2026-08-05',
    readTime: '6 min read',
    image: '/img/blog-wordpress.jpg',
    author: 'Noah Fischer',
    keywords: ['WordPress development', 'custom WordPress website', 'WordPress vs headless', 'WooCommerce'],
    content: [
      { type: 'p', text: 'WordPress has evolved dramatically. With the block editor, full site editing and modern performance tooling, custom WordPress development remains a strong choice for content-driven businesses.' },
      { type: 'h2', text: 'When WordPress shines' },
      { type: 'ul', items: ['Marketing sites with frequent content updates', 'Blogs and content-heavy SEO strategies', 'Small to mid-size WooCommerce stores', 'Teams that need a familiar, flexible CMS'] },
      { type: 'h2', text: 'When to consider alternatives' },
      { type: 'p', text: 'Complex web applications, real-time SaaS products or highly custom interactive experiences are usually better served by a modern framework — or a headless WordPress setup.' },
      { type: 'h2', text: 'Build it right' },
      { type: 'p', text: 'Avoid heavy page builders, keep plugins lean, build custom blocks for your content and invest in hosting and caching. Done well, a WordPress site can be lightning fast and score green across Core Web Vitals.' },
    ],
  },
  {
    slug: 'social-media-design-system',
    title: 'How to Build a Social Media Design System',
    excerpt: 'Templates, rules and a little flexibility — the recipe for consistent, on-brand social media design at scale.',
    category: 'Social Media',
    date: '2026-07-18',
    readTime: '5 min read',
    image: '/img/blog-social-design.jpg',
    author: 'Leo Hartmann',
    keywords: ['social media design', 'social media templates', 'Instagram design', 'brand consistency'],
    content: [
      { type: 'p', text: 'Posting daily across multiple platforms is impossible to keep consistent without a system. A social media design system gives your team speed without sacrificing brand quality.' },
      { type: 'h2', text: 'What to include' },
      { type: 'ul', items: ['Grid and safe-zone layouts for each format', 'Typography and colour rules for overlays', 'Template families: announcements, quotes, tips, carousels', 'Photo treatment and motion guidelines', 'Do’s and don’ts with real examples'] },
      { type: 'h2', text: 'Leave room to play' },
      { type: 'p', text: 'The best systems define the constants — logo placement, type, colour — and let content vary. That balance keeps your feed recognisable without feeling repetitive.' },
    ],
  },
  {
    slug: 'technical-seo-for-designers',
    title: 'Technical SEO for Designers: A Practical Guide',
    excerpt: 'Design decisions affect rankings. Here’s the technical SEO every designer and developer should know.',
    category: 'SEO',
    date: '2026-07-01',
    readTime: '9 min read',
    image: '/img/blog-technical-seo.jpg',
    author: 'Noah Fischer',
    keywords: ['technical SEO', 'SEO for designers', 'Core Web Vitals', 'structured data'],
    content: [
      { type: 'p', text: 'SEO isn’t just keywords and backlinks. Many ranking factors are shaped in design and development — and fixing them later is far more expensive than getting them right from the start.' },
      { type: 'h2', text: 'Performance is design' },
      { type: 'p', text: 'Core Web Vitals measure loading, interactivity and visual stability. Optimised images, system-aware font loading and reserved space for media prevent layout shift and improve rankings.' },
      { type: 'h2', text: 'Structure for humans and crawlers' },
      { type: 'ul', items: ['One clear H1 per page with a logical heading hierarchy', 'Descriptive, keyword-rich page titles and meta descriptions', 'Clean, readable URLs', 'Internal links between related content', 'Alt text that describes images meaningfully', 'Schema markup for organisation, articles, services and FAQs'] },
      { type: 'p', text: 'Get these technical SEO foundations right and every piece of content you publish has a better chance of ranking.' },
    ],
  },
]

export const team = [
  { name: 'Ava Morin', role: 'Founder & Design Director' },
  { name: 'Leo Hartmann', role: 'Brand Design Lead' },
  { name: 'Noah Fischer', role: 'WordPress & SEO Lead' },
  { name: 'Priya Raman', role: 'Senior Product Designer' },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const getWork = (slug: string) => works.find((w) => w.slug === slug)
export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}
