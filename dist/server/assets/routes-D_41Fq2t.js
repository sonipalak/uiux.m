import { a as WorkCard, i as ServiceIcon, r as PostCard, t as CtaSection } from "./blocks-B5414-iI.js";
import { d as services, p as works, r as img, u as posts } from "./seo-Bi9_Cakm.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight } from "lucide-react";
// src/routes/index.tsx?tsr-split=component
var stats = [
	{
		value: "120+",
		label: "Projects launched"
	},
	{
		value: "9 yrs",
		label: "Designing products"
	},
	{
		value: "98%",
		label: "Client retention"
	},
	{
		value: "14",
		label: "Design awards"
	}
];
var process = [
	{
		step: "01",
		title: "Discover",
		text: "Research, audits and workshops to understand your users, market and goals."
	},
	{
		step: "02",
		title: "Define",
		text: "Strategy, user flows, sitemap and keyword plan — the blueprint for everything."
	},
	{
		step: "03",
		title: "Design",
		text: "Wireframes to polished UI and brand systems, refined with your feedback."
	},
	{
		step: "04",
		title: "Deliver",
		text: "Development, SEO launch checklist and support as your product grows."
	}
];
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-site pt-14 pb-10 md:pt-24",
			children: [
				/* @__PURE__ */ jsxs("p", {
					className: "eyebrow flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-brand" }), " Minimal UI/UX design agency"]
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-6 font-display text-[3.25rem] leading-[0.98] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]",
					children: [
						"We design ",
						/* @__PURE__ */ jsx("em", {
							className: "text-brand-ink",
							children: "less,"
						}),
						/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
						" so your brand says more."
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 grid gap-8 md:grid-cols-12 md:items-end",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-lg leading-relaxed text-muted-foreground md:col-span-6",
						children: "UIUX Minimal Agency crafts clean, conversion-focused digital experiences — from UI design and brand identity to SaaS products, WordPress websites, social media design and SEO."
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-3 md:col-span-6 md:justify-end",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground",
							children: ["Start a project ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
						}), /* @__PURE__ */ jsx(Link, {
							to: "/work",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground",
							children: "View our work"
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-site pb-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-3xl bg-muted",
				children: /* @__PURE__ */ jsx("img", {
					src: img("/img/hero.jpg", 1800),
					srcSet: `${img("/img/hero.jpg", 900)} 900w, ${img("/img/hero.jpg", 1400)} 1400w, ${img("/img/hero.jpg", 1800)} 1800w`,
					sizes: "(min-width: 1280px) 1216px, 100vw",
					alt: "Minimal still life with paper, stone and an orange panel — the UIUX Minimal Agency aesthetic",
					width: 1800,
					height: 1005,
					fetchPriority: "high",
					className: "aspect-[16/9] w-full object-cover md:aspect-[21/9]"
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			"aria-label": "Our services",
			className: "overflow-hidden border-y border-border py-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex w-max animate-marquee gap-12 whitespace-nowrap motion-reduce:animate-none",
				children: [...services, ...services].map((s, i) => /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-12 font-display text-4xl md:text-5xl",
					children: [
						s.name,
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "size-2 rounded-full bg-brand",
							"aria-hidden": "true"
						})
					]
				}, i))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site py-20 md:py-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "What we do"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mt-4 max-w-2xl font-display text-5xl leading-none md:text-6xl",
					children: [
						"Six services. One ",
						/* @__PURE__ */ jsx("em", { children: "clear" }),
						" point of view."
					]
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/services",
					className: "inline-flex items-center gap-2 text-sm font-medium hover:text-brand-ink",
					children: ["All services ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ jsxs(Link, {
					to: "/services/$slug",
					params: { slug: s.slug },
					className: "group flex min-h-72 flex-col justify-between bg-card p-8 transition-colors hover:bg-foreground hover:text-background",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ jsx(ServiceIcon, {
							slug: s.slug,
							className: "size-7 text-brand-ink"
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-xs text-muted-foreground group-hover:text-background/60",
							children: ["0", i + 1]
						})]
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-medium tracking-tight",
						children: s.name
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-background/70",
						children: s.summary
					})] })]
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site pb-20 md:pb-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Selected work"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-5xl leading-none md:text-6xl",
					children: "Recent case studies"
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/work",
					className: "inline-flex items-center gap-2 text-sm font-medium hover:text-brand-ink",
					children: ["See all work ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2",
				children: works.slice(0, 4).map((w, i) => /* @__PURE__ */ jsx("div", {
					className: i % 2 === 1 ? "md:mt-24" : "",
					children: /* @__PURE__ */ jsx(WorkCard, {
						work: w,
						large: true
					})
				}, w.slug))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-site grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-6xl md:text-7xl",
					children: s.value
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: s.label
				})] }, s.label))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site py-20 md:py-28",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "How we work"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 max-w-2xl font-display text-5xl leading-none md:text-6xl",
					children: "A simple process, rigorously applied."
				}),
				/* @__PURE__ */ jsx("ol", {
					className: "mt-14 grid gap-10 md:grid-cols-4",
					children: process.map((p) => /* @__PURE__ */ jsxs("li", {
						className: "border-t border-foreground pt-6",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-sm text-brand-ink",
								children: p.step
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 text-2xl font-medium",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: p.text
							})
						]
					}, p.step))
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-site pb-20 md:pb-28",
			children: /* @__PURE__ */ jsxs("figure", {
				className: "mx-auto max-w-4xl text-center",
				children: [/* @__PURE__ */ jsxs("blockquote", {
					className: "font-display text-4xl leading-tight md:text-5xl",
					children: [
						"“",
						works[2].quote?.text,
						"”"
					]
				}), /* @__PURE__ */ jsxs("figcaption", {
					className: "mt-8 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: works[2].quote?.author
						}),
						" — ",
						works[2].quote?.role
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site border-t border-border pt-20 md:pt-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Journal"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-5xl leading-none md:text-6xl",
					children: "Insights on design & growth"
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-sm font-medium hover:text-brand-ink",
					children: ["Read the blog ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-10 md:grid-cols-3",
				children: posts.slice(0, 3).map((p) => /* @__PURE__ */ jsx(PostCard, { post: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { Home as component };
