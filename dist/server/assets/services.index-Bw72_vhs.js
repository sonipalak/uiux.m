import { i as ServiceIcon, n as PageIntro, t as CtaSection } from "./blocks-B5414-iI.js";
import { d as services } from "./seo-Bi9_Cakm.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Check } from "lucide-react";
// src/routes/services.index.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageIntro, {
			eyebrow: "Services",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Everything your brand needs, ",
				/* @__PURE__ */ jsx("em", {
					className: "text-brand-ink",
					children: "nothing"
				}),
				" it doesn’t."
			] }),
			children: "From the first logo sketch to the hundredth blog post ranking on Google, we cover the full journey of a modern digital brand — with one team and one consistent standard."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-site",
			children: /* @__PURE__ */ jsx("ul", {
				className: "border-t border-border",
				children: services.map((s, i) => /* @__PURE__ */ jsx("li", {
					className: "border-b border-border",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "group grid gap-6 py-10 md:grid-cols-12 md:items-start md:py-14",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4 md:col-span-5",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-sm text-muted-foreground",
									children: ["0", i + 1]
								}), /* @__PURE__ */ jsx("h2", {
									className: "font-display text-5xl transition-colors group-hover:text-brand-ink md:text-6xl",
									children: s.name
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-6",
								children: [
									/* @__PURE__ */ jsxs("p", {
										className: "flex items-center gap-2 text-lg font-medium",
										children: [
											/* @__PURE__ */ jsx(ServiceIcon, {
												slug: s.slug,
												className: "size-5 text-brand-ink"
											}),
											" ",
											s.tagline
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 leading-relaxed text-muted-foreground",
										children: s.summary
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "mt-5 grid gap-2 text-sm sm:grid-cols-2",
										children: s.deliverables.slice(0, 4).map((d) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx(Check, { className: "size-4 text-brand-ink" }),
												" ",
												d
											]
										}, d))
									})
								]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "hidden size-12 place-items-center justify-self-end rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground md:col-span-1 md:grid",
								children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5" })
							})
						]
					})
				}, s.slug))
			})
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { ServicesPage as component };
