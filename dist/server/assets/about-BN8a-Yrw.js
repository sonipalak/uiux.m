import { n as PageIntro, t as CtaSection } from "./blocks-B5414-iI.js";
import { f as team, r as img } from "./seo-Bi9_Cakm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/routes/about.tsx?tsr-split=component
var values = [
	{
		title: "Clarity over decoration",
		text: "Every pixel earns its place. If it doesn’t help the user, it goes."
	},
	{
		title: "Design that performs",
		text: "Beautiful is the baseline. We measure success in conversions, rankings and retention."
	},
	{
		title: "Small, senior team",
		text: "You work directly with the designers and developers building your project."
	},
	{
		title: "Built to last",
		text: "Design systems, guidelines and clean code that your team can grow with."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageIntro, {
			eyebrow: "About us",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"A small studio with a ",
				/* @__PURE__ */ jsx("em", {
					className: "text-brand-ink",
					children: "big"
				}),
				" belief in less."
			] }),
			children: "UIUX Minimal Agency was founded on a simple idea: the best digital experiences feel effortless. Since 2017 we’ve helped startups and established brands simplify their products, sharpen their identity and grow online."
		}),
		/* @__PURE__ */ jsx("div", {
			className: "container-site",
			children: /* @__PURE__ */ jsx("img", {
				src: img("/img/studio.jpg", 1800),
				srcSet: `${img("/img/studio.jpg", 900)} 900w, ${img("/img/studio.jpg", 1800)} 1800w`,
				sizes: "(min-width: 1280px) 1216px, 100vw",
				alt: "Inside the UIUX Minimal Agency design studio",
				width: 1800,
				height: 1005,
				className: "aspect-[21/9] w-full rounded-3xl bg-muted object-cover"
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site grid gap-10 py-20 md:grid-cols-12 md:py-28",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-5xl leading-none md:col-span-5 md:text-6xl",
				children: "Our story"
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7",
				children: [/* @__PURE__ */ jsx("p", { children: "We started as two designers frustrated by bloated websites and confusing apps. Today we’re a multidisciplinary team spanning UI/UX design, brand design, SaaS product design, WordPress development, social media design and SEO." }), /* @__PURE__ */ jsx("p", { children: "That range means your brand, product and marketing are designed by one team with one standard — no hand-offs between agencies, no lost context, and a consistent experience at every touchpoint." })]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-site py-20",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "What we believe"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-10 md:grid-cols-4",
					children: values.map((v, i) => /* @__PURE__ */ jsxs("div", {
						className: "border-t border-foreground pt-6",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "text-sm text-brand-ink",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 text-xl font-medium",
								children: v.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: v.text
							})
						]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site py-20 md:py-28",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "The team"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-5xl leading-none md:text-6xl",
					children: "People behind the pixels"
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: team.map((m) => /* @__PURE__ */ jsxs("li", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid size-16 place-items-center rounded-full bg-muted font-display text-2xl",
								"aria-hidden": "true",
								children: m.name.split(" ").map((n) => n[0]).join("")
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-6 text-lg font-medium",
								children: m.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: m.role
							})
						]
					}, m.name))
				})
			]
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { AboutPage as component };
