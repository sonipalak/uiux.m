import { n as PageIntro, r as PostCard, t as CtaSection } from "./blocks-B5414-iI.js";
import { o as formatDate, r as img, u as posts } from "./seo-Bi9_Cakm.js";
import { o as cn } from "./router-Bhf8fXaH.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/routes/blog.index.tsx?tsr-split=component
var categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
function BlogPage() {
	const [category, setCategory] = useState("All");
	const [featured, ...rest] = posts;
	const list = category === "All" ? rest : posts.filter((p) => p.category === category);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageIntro, {
			eyebrow: "Journal",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Notes on design, brand ", /* @__PURE__ */ jsx("em", {
				className: "text-brand-ink",
				children: "& growth."
			})] }),
			children: "Ideas, guides and lessons from our studio — written for founders, marketers and product teams."
		}),
		category === "All" && /* @__PURE__ */ jsx("section", {
			className: "container-site pb-16",
			children: /* @__PURE__ */ jsxs(Link, {
				to: "/blog/$slug",
				params: { slug: featured.slug },
				className: "group grid gap-8 md:grid-cols-12 md:items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-3xl bg-muted md:col-span-7",
					children: /* @__PURE__ */ jsx("img", {
						src: img(featured.image),
						alt: featured.title,
						width: 1600,
						height: 900,
						className: "aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "font-semibold text-brand-ink",
									children: ["Featured · ", featured.category]
								}),
								" ·",
								" ",
								/* @__PURE__ */ jsx("time", {
									dateTime: featured.date,
									children: formatDate(featured.date)
								})
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl leading-tight group-hover:text-brand-ink md:text-5xl",
							children: featured.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: featured.excerpt
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-sm font-medium underline decoration-brand underline-offset-4",
							children: "Read article"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site",
			children: [/* @__PURE__ */ jsx("div", {
				role: "group",
				"aria-label": "Filter articles by category",
				className: "flex flex-wrap gap-2 border-y border-border py-6",
				children: categories.map((c) => /* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-pressed": category === c,
					onClick: () => setCategory(c),
					className: cn("rounded-full border px-4 py-2 text-sm transition-colors", category === c ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"),
					children: c
				}, c))
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ jsx(PostCard, { post: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { BlogPage as component };
