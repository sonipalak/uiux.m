import { r as PostCard, t as CtaSection } from "./blocks-B5414-iI.js";
import { f as team, o as formatDate, r as img, u as posts } from "./seo-Bi9_Cakm.js";
import { i as Route } from "./router-Bhf8fXaH.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
// src/routes/blog.$slug.tsx?tsr-split=component
function BlogPost() {
	const { post } = Route.useLoaderData();
	const role = team.find((m) => m.name === post.author)?.role;
	const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("article", { children: [
			/* @__PURE__ */ jsxs("header", {
				className: "container-site pt-12 md:pt-20",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " All articles"]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mx-auto mt-10 max-w-4xl text-center",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-brand-ink",
									children: post.category
								}),
								" ·",
								" ",
								/* @__PURE__ */ jsx("time", {
									dateTime: post.date,
									children: formatDate(post.date)
								}),
								" · ",
								post.readTime
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-5 font-display text-5xl leading-[1.04] tracking-tight md:text-7xl",
							children: post.title
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-6 text-sm",
							children: [
								"By ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: post.author
								}),
								role && /* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: [" · ", role]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "container-site mt-12",
				children: /* @__PURE__ */ jsx("img", {
					src: img(post.image, 1800),
					srcSet: `${img(post.image, 900)} 900w, ${img(post.image, 1400)} 1400w, ${img(post.image, 1800)} 1800w`,
					sizes: "(min-width: 1280px) 1216px, 100vw",
					alt: post.title,
					width: 1800,
					height: 1012,
					fetchPriority: "high",
					className: "aspect-[16/8] w-full rounded-3xl bg-muted object-cover"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-reading px-5 py-16 text-lg leading-relaxed sm:px-8",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xl leading-relaxed text-muted-foreground",
						children: post.excerpt
					}),
					post.content.map((block, i) => {
						switch (block.type) {
							case "h2": return /* @__PURE__ */ jsx("h2", {
								className: "mt-12 font-display text-4xl leading-tight",
								children: block.text
							}, i);
							case "ul": return /* @__PURE__ */ jsx("ul", {
								className: "mt-6 space-y-3",
								children: block.items.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mt-3 size-1.5 shrink-0 rounded-full bg-brand",
										"aria-hidden": "true"
									}), item]
								}, item))
							}, i);
							case "quote": return /* @__PURE__ */ jsx("blockquote", {
								className: "my-10 border-l-2 border-brand pl-6 font-display text-3xl leading-snug",
								children: block.text
							}, i);
							default: return /* @__PURE__ */ jsx("p", {
								className: "mt-6",
								children: block.text
							}, i);
						}
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 flex flex-wrap gap-2 border-t border-border pt-8",
						children: post.keywords.map((k) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground",
							children: k
						}, k))
					})
				]
			})
		] }),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site border-t border-border pt-16",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl",
				children: "Keep reading"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 grid gap-10 md:grid-cols-3",
				children: related.map((p) => /* @__PURE__ */ jsx(PostCard, { post: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { BlogPost as component };
