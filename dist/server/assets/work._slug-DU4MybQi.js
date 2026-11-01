import { t as CtaSection } from "./blocks-B5414-iI.js";
import { c as getService, p as works, r as img } from "./seo-Bi9_Cakm.js";
import { n as Route } from "./router-Bhf8fXaH.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight } from "lucide-react";
// src/routes/work.$slug.tsx?tsr-split=component
function WorkDetail() {
	const { work } = Route.useLoaderData();
	const service = getService(work.service);
	const index = works.findIndex((w) => w.slug === work.slug);
	const next = works[(index + 1) % works.length];
	return /* @__PURE__ */ jsxs("article", { children: [
		/* @__PURE__ */ jsxs("header", {
			className: "container-site pt-12 md:pt-20",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/work",
					className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " All work"]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "eyebrow mt-10",
					children: [
						work.client,
						" · ",
						work.industry
					]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-5 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl",
					children: work.title
				}),
				/* @__PURE__ */ jsxs("dl", {
					className: "mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm md:grid-cols-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "text-muted-foreground",
							children: "Client"
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 font-medium",
							children: work.client
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "text-muted-foreground",
							children: "Industry"
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 font-medium",
							children: work.industry
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "text-muted-foreground",
							children: "Service"
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 font-medium",
							children: service && /* @__PURE__ */ jsx(Link, {
								to: "/services/$slug",
								params: { slug: service.slug },
								className: "hover:text-brand-ink",
								children: service.name
							})
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "text-muted-foreground",
							children: "Year"
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 font-medium",
							children: work.year
						})] })
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "container-site mt-12",
			children: /* @__PURE__ */ jsx("img", {
				src: img(work.image, 1800),
				srcSet: `${img(work.image, 900)} 900w, ${img(work.image, 1400)} 1400w, ${img(work.image, 1800)} 1800w`,
				sizes: "(min-width: 1280px) 1216px, 100vw",
				alt: `${work.client} ${work.tags.join(", ")} project by UIUX Minimal Agency`,
				width: 1800,
				height: 1350,
				fetchPriority: "high",
				className: "aspect-[16/10] w-full rounded-3xl bg-muted object-cover"
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site grid gap-10 py-20 md:grid-cols-12",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl md:col-span-4 md:text-5xl",
				children: "The challenge"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xl leading-relaxed md:col-span-8",
				children: work.challenge
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site grid gap-10 pb-20 md:grid-cols-12",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl md:col-span-4 md:text-5xl",
				children: "Our approach"
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8",
				children: [work.solution.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p)), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2 pt-2",
					children: work.tags.map((t) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-border px-3 py-1 text-xs text-foreground",
						children: t
					}, t))
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-foreground text-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-site py-20",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-xs font-semibold tracking-[0.18em] text-background/60 uppercase",
						children: "The results"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-10 md:grid-cols-3",
						children: work.results.map((r) => /* @__PURE__ */ jsxs("div", {
							className: "border-t border-background/20 pt-6",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-7xl text-brand md:text-8xl",
								children: r.value
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-background/70",
								children: r.label
							})]
						}, r.label))
					}),
					work.quote && /* @__PURE__ */ jsxs("figure", {
						className: "mt-20 max-w-4xl",
						children: [/* @__PURE__ */ jsxs("blockquote", {
							className: "font-display text-3xl leading-tight md:text-5xl",
							children: [
								"“",
								work.quote.text,
								"”"
							]
						}), /* @__PURE__ */ jsxs("figcaption", {
							className: "mt-6 text-sm text-background/70",
							children: [
								work.quote.author,
								" — ",
								work.quote.role
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("nav", {
			"aria-label": "Next project",
			className: "container-site pt-20",
			children: /* @__PURE__ */ jsxs(Link, {
				to: "/work/$slug",
				params: { slug: next.slug },
				className: "group block border-b border-border pb-10",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Next project"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-4 flex items-center justify-between gap-6 font-display text-4xl transition-colors group-hover:text-brand-ink md:text-6xl",
					children: [next.client, /* @__PURE__ */ jsx(ArrowRight, { className: "size-10 shrink-0 transition-transform group-hover:translate-x-2 motion-reduce:transition-none" })]
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { WorkDetail as component };
