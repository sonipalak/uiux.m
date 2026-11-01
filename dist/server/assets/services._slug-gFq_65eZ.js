import { o as cn, r as Route } from "./router-Bhf8fXaH.js";
import { a as WorkCard, i as ServiceIcon, t as CtaSection } from "./blocks-B5414-iI.js";
import { d as services, p as works } from "./seo-Bi9_Cakm.js";
import "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Check, ChevronDownIcon } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// src/components/ui/accordion.tsx
function Accordion({ ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Root, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
		"data-slot": "accordion-item",
		className: cn("border-b last:border-b-0", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
		className: "flex",
		children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ jsx(ChevronDownIcon, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("pt-0 pb-4", className),
			children
		})
	});
}
// src/routes/services.$slug.tsx?tsr-split=component
function ServiceDetail() {
	const { service } = Route.useLoaderData();
	const related = works.filter((w) => w.service === service.slug);
	const others = services.filter((s) => s.slug !== service.slug);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-site pt-12 pb-16 md:pt-20",
			children: [/* @__PURE__ */ jsx("nav", {
				"aria-label": "Breadcrumb",
				className: "text-sm text-muted-foreground",
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/services",
					className: "inline-flex items-center gap-1.5 hover:text-foreground",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " All services"]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 grid gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "eyebrow flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(ServiceIcon, {
								slug: service.slug,
								className: "size-4 text-brand-ink"
							}), " Service"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-5 font-display text-6xl leading-none tracking-tight md:text-8xl",
							children: service.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-2xl text-muted-foreground",
							children: service.tagline
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 text-lg leading-relaxed md:col-span-5 md:pt-6",
					children: [service.description.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p)), /* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						search: { service: service.name },
						className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground",
						children: [
							"Get a ",
							service.name,
							" quote"
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-site grid gap-10 py-16 md:grid-cols-12",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl md:col-span-4 md:text-5xl",
					children: "What’s included"
				}), /* @__PURE__ */ jsx("ul", {
					className: "grid gap-x-8 gap-y-5 sm:grid-cols-2 md:col-span-8",
					children: service.deliverables.map((d) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 border-b border-border pb-5",
						children: [/* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-5 shrink-0 text-brand-ink" }), /* @__PURE__ */ jsx("span", { children: d })]
					}, d))
				})]
			})
		}),
		related.length > 0 && /* @__PURE__ */ jsxs("section", {
			className: "container-site py-20",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Case study"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: [service.name, " in action"]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-10 md:grid-cols-2",
					children: related.map((w) => /* @__PURE__ */ jsx(WorkCard, {
						work: w,
						large: true
					}, w.slug))
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site grid gap-10 pb-10 md:grid-cols-12",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl md:col-span-4 md:text-5xl",
				children: "Frequently asked questions"
			}), /* @__PURE__ */ jsx(Accordion, {
				type: "single",
				collapsible: true,
				className: "md:col-span-8",
				children: service.faqs.map((f) => /* @__PURE__ */ jsxs(AccordionItem, {
					value: f.q,
					children: [/* @__PURE__ */ jsx(AccordionTrigger, {
						className: "text-left text-lg",
						children: f.q
					}), /* @__PURE__ */ jsx(AccordionContent, {
						className: "text-base leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site pt-16",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "eyebrow",
				children: "Other services"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: others.map((s) => /* @__PURE__ */ jsxs(Link, {
					to: "/services/$slug",
					params: { slug: s.slug },
					className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground",
					children: [
						/* @__PURE__ */ jsx(ServiceIcon, {
							slug: s.slug,
							className: "size-4 text-brand-ink"
						}),
						" ",
						s.name
					]
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { ServiceDetail as component };
