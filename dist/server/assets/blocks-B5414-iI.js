import { o as formatDate, r as img } from "./seo-Bi9_Cakm.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Gem, Globe, LayoutDashboard, Megaphone, PenTool, TrendingUp } from "lucide-react";
// src/components/blocks.tsx
var serviceIcons = {
	"ui-design": PenTool,
	"brand-design": Gem,
	"saas-design": LayoutDashboard,
	"wordpress-development": Globe,
	"social-media-design": Megaphone,
	seo: TrendingUp
};
function ServiceIcon({ slug, className }) {
	const Icon = serviceIcons[slug] ?? PenTool;
	return /* @__PURE__ */ jsx(Icon, {
		className,
		"aria-hidden": "true"
	});
}
function PageIntro({ eyebrow, title, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "container-site pt-16 pb-12 md:pt-24 md:pb-16",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "mt-5 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl",
				children: title
			}),
			children && /* @__PURE__ */ jsx("div", {
				className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
				children
			})
		]
	});
}
function WorkCard({ work, large = false }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/work/$slug",
		params: { slug: work.slug },
		className: "group block",
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-2xl bg-muted",
			children: /* @__PURE__ */ jsx("img", {
				src: img(work.image),
				alt: `${work.client} — ${work.tags[0]} case study by UIUX Minimal Agency`,
				width: 1200,
				height: 900,
				loading: "lazy",
				className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-5 flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("p", {
					className: "text-sm text-muted-foreground",
					children: [
						work.client,
						" · ",
						work.year
					]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-1 text-xl font-medium tracking-tight md:text-2xl",
					children: work.title
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: work.tags.map((t) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground",
						children: t
					}, t))
				})
			] }), /* @__PURE__ */ jsx("span", {
				className: "grid size-10 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground",
				children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
			})]
		})]
	});
}
function PostCard({ post }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/blog/$slug",
		params: { slug: post.slug },
		className: "group flex flex-col",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-2xl bg-muted",
				children: /* @__PURE__ */ jsx("img", {
					src: img(post.image),
					alt: post.title,
					width: 1600,
					height: 900,
					loading: "lazy",
					className: "aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
				})
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold text-brand-ink",
						children: post.category
					}),
					" · ",
					/* @__PURE__ */ jsx("time", {
						dateTime: post.date,
						children: formatDate(post.date)
					}),
					" · ",
					post.readTime
				]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-2 text-xl font-medium tracking-tight group-hover:underline group-hover:decoration-brand group-hover:underline-offset-4",
				children: post.title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: post.excerpt
			})
		]
	});
}
function CtaSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "container-site py-20 md:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background md:px-16 md:py-24",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute -top-24 -right-24 size-72 rounded-full bg-brand/90 blur-3xl",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "relative text-xs font-semibold tracking-[0.18em] text-background/60 uppercase",
					children: "Have a project in mind?"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "relative mt-5 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl",
					children: ["Let’s make something ", /* @__PURE__ */ jsx("em", {
						className: "text-brand",
						children: "beautifully simple."
					})]
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "relative mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-brand hover:text-brand-foreground",
					children: ["Start a project ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
				})
			]
		})
	});
}
export { WorkCard as a, ServiceIcon as i, PageIntro as n, PostCard as r, CtaSection as t };
