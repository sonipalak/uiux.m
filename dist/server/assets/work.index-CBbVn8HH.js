import { a as WorkCard, n as PageIntro, t as CtaSection } from "./blocks-B5414-iI.js";
import { d as services, p as works } from "./seo-Bi9_Cakm.js";
import { o as cn } from "./router-Bhf8fXaH.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/routes/work.index.tsx?tsr-split=component
function WorkPage() {
	const [filter, setFilter] = useState("all");
	const list = filter === "all" ? works : works.filter((w) => w.service === filter);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageIntro, {
			eyebrow: "Work",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Selected projects, ",
				/* @__PURE__ */ jsx("em", {
					className: "text-brand-ink",
					children: "measured"
				}),
				" results."
			] }),
			children: "A selection of case studies across UI design, brand design, SaaS, WordPress development, social media design and SEO."
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-site",
			children: [
				/* @__PURE__ */ jsx("div", {
					role: "group",
					"aria-label": "Filter projects by service",
					className: "flex flex-wrap gap-2 border-b border-border pb-8",
					children: [{
						slug: "all",
						name: "All work"
					}, ...services].map((s) => /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-pressed": filter === s.slug,
						onClick: () => setFilter(s.slug),
						className: cn("rounded-full border px-4 py-2 text-sm transition-colors", filter === s.slug ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"),
						children: s.name
					}, s.slug))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2",
					children: list.map((w) => /* @__PURE__ */ jsx(WorkCard, {
						work: w,
						large: true
					}, w.slug))
				}),
				list.length === 0 && /* @__PURE__ */ jsx("p", {
					className: "py-20 text-center text-muted-foreground",
					children: "New case studies coming soon."
				})
			]
		}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
export { WorkPage as component };
