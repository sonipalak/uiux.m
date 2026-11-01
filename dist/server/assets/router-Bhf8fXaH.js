import { a as seo, c as getService, d as services, i as jsonLd, l as getWork, n as breadcrumbs, p as works, s as getPost, t as SITE, u as posts } from "./seo-Bi9_Cakm.js";
import { useState } from "react";
import { HeadContent, Link, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, notFound, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { ArrowUpRight, CircleCheckIcon, InfoIcon, Loader2Icon, Menu, OctagonXIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import { Toaster } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { z } from "zod";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// src/components/ui/button.tsx
var buttonVariants = cva("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
// src/components/error-pages.tsx
function NotFoundPage() {
	return /* @__PURE__ */ jsx("main", {
		className: "grid min-h-svh place-items-center px-6 py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md space-y-6 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-medium text-muted-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-3xl font-semibold tracking-tight",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "This page doesn’t exist. Check the address or return to the home page."
				}),
				/* @__PURE__ */ jsx(Button, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						children: "Go home"
					})
				})
			]
		})
	});
}
function RouteErrorPage({ reset }) {
	const router = useRouter();
	return /* @__PURE__ */ jsx("main", {
		className: "grid min-h-svh place-items-center px-6 py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md space-y-6 text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-3xl font-semibold tracking-tight",
					children: "This page couldn’t load"
				}),
				/* @__PURE__ */ jsx("p", {
					role: "alert",
					className: "text-muted-foreground",
					children: "Please try again, or return to the home page."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ jsx(Button, {
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Try again"
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ jsx("a", {
							href: "/",
							children: "Go home"
						})
					})]
				})
			]
		})
	});
}
// src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		theme: "light",
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ jsx(CircleCheckIcon, { className: "size-4" }),
			info: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }),
			warning: /* @__PURE__ */ jsx(TriangleAlertIcon, { className: "size-4" }),
			error: /* @__PURE__ */ jsx(OctagonXIcon, { className: "size-4" }),
			loading: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		...props
	});
};
// src/components/ui/tooltip.tsx
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration,
		...props
	});
}
// src/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, {
		"data-slot": "sheet-trigger",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Overlay, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(SheetPrimitive.Content, {
		"data-slot": "sheet-content",
		className: cn("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", side === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(SheetPrimitive.Close, {
			className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ jsx(XIcon, { className: "size-4" }), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Title, {
		"data-slot": "sheet-title",
		className: cn("font-semibold text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(SheetPrimitive.Description, {
		"data-slot": "sheet-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
// src/components/site-header.tsx
var navLinks = [
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/blog",
		label: "Blog"
	}
];
function Logo() {
	return /* @__PURE__ */ jsx(Link, {
		to: "/",
		className: "flex items-center",
		"aria-label": "UIUX Minimal Agency — home",
		children: /* @__PURE__ */ jsx("img", {
			src: "/img/logo.png",
			alt: "UIUX Minimal — Clean Lines, Clear Minds",
			width: 206,
			height: 39,
			className: "h-8 w-auto"
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-site flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Main",
					className: "hidden items-center gap-8 md:flex",
					children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
						to: link.to,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground",
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground sm:inline-flex",
						children: ["Start a project ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
					}), /* @__PURE__ */ jsxs(Sheet, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ jsx(SheetTrigger, {
							className: "grid size-10 place-items-center rounded-full border border-border md:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ jsx(Menu, { className: "size-5" })
						}), /* @__PURE__ */ jsxs(SheetContent, {
							side: "right",
							className: "w-full max-w-sm bg-background p-8",
							children: [
								/* @__PURE__ */ jsx(SheetTitle, {
									className: "sr-only",
									children: "Menu"
								}),
								/* @__PURE__ */ jsx(SheetDescription, {
									className: "sr-only",
									children: "Site navigation"
								}),
								/* @__PURE__ */ jsx("nav", {
									"aria-label": "Mobile",
									className: "mt-10 flex flex-col gap-2",
									children: [...navLinks, {
										to: "/contact",
										label: "Contact"
									}].map((link) => /* @__PURE__ */ jsx(Link, {
										to: link.to,
										onClick: () => setOpen(false),
										className: "font-display text-5xl leading-tight transition-colors hover:text-brand-ink",
										children: link.label
									}, link.to))
								})
							]
						})]
					})]
				})
			]
		})
	});
}
// src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-site grid gap-12 py-16 md:grid-cols-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ jsx(Logo, {}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "A minimal design agency for UI/UX design, brand identity, SaaS products, WordPress development, social media design and SEO."
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `mailto:${SITE.email}`,
							className: "mt-6 inline-flex items-center gap-1.5 font-display text-3xl transition-colors hover:text-brand-ink",
							children: [
								SITE.email,
								" ",
								/* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5" })
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "eyebrow",
						children: "Services"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "hover:text-brand-ink",
							children: s.name
						}) }, s.slug))
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "eyebrow",
						children: "Agency"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: [...navLinks, {
							to: "/contact",
							label: "Contact"
						}].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: l.to,
							className: "hover:text-brand-ink",
							children: l.label
						}) }, l.to))
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "eyebrow",
						children: "Studio"
					}), /* @__PURE__ */ jsxs("address", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground not-italic",
						children: [
							SITE.address,
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("a", {
								href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
								className: "hover:text-foreground",
								children: SITE.phone
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "container-site flex flex-col justify-between gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row",
			children: [/* @__PURE__ */ jsxs("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" UIUX Minimal Agency. All rights reserved."
			] }), /* @__PURE__ */ jsx("p", { children: "UI Design · Brand Design · SaaS · WordPress · Social Media · SEO" })]
		})]
	});
}
// src/routes/__root.tsx
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${SITE.name} — UI Design, Branding, SaaS & SEO Agency` },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "keywords",
				content: SITE.keywords.join(", ")
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				name: "theme-color",
				content: "#faf8f3"
			},
			{
				property: "og:site_name",
				content: SITE.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
			}
		],
		scripts: [jsonLd({
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			name: SITE.name,
			url: SITE.url,
			image: `${SITE.url}/img/hero.jpg`,
			logo: `${SITE.url}/img/logo.png`,
			description: SITE.description,
			email: SITE.email,
			telephone: SITE.phone,
			address: {
				"@type": "PostalAddress",
				streetAddress: "214 Market Street, Suite 5",
				addressLocality: "San Francisco",
				addressRegion: "CA",
				postalCode: "94105",
				addressCountry: "US"
			},
			knowsAbout: SITE.keywords
		})]
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFoundPage
});
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsxs(TooltipProvider, { children: [
				/* @__PURE__ */ jsx("a", {
					href: "#main",
					className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background",
					children: "Skip to content"
				}),
				/* @__PURE__ */ jsx(SiteHeader, {}),
				/* @__PURE__ */ jsx("main", {
					id: "main",
					children
				}),
				/* @__PURE__ */ jsx(SiteFooter, {})
			] }),
			/* @__PURE__ */ jsx(Toaster$1, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
// src/routes/index.tsx
var $$splitComponentImporter$8 = () => import("./routes-D_41Fq2t.js");
var Route$9 = createFileRoute("/")({
	head: () => seo({
		title: `${SITE.name} — UI/UX Design, Branding, SaaS, WordPress & SEO Agency`,
		description: "UIUX Minimal Agency is a minimal design agency offering UI design, brand design, SaaS product design, WordPress development, social media design and SEO services for ambitious brands.",
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
// src/routes/about.tsx
var $$splitComponentImporter$7 = () => import("./about-BN8a-Yrw.js");
var Route$8 = createFileRoute("/about")({
	head: () => ({
		...seo({
			title: "About Us — A Minimal UI/UX Design & Branding Studio",
			description: "Meet UIUX Minimal Agency: a small, senior team of UI/UX designers, brand designers, WordPress developers and SEO specialists building clean, effective digital brands.",
			path: "/about",
			image: "/img/studio.jpg",
			keywords: [
				"about UIUX Minimal Agency",
				"design studio San Francisco",
				"creative agency team"
			]
		}),
		scripts: [breadcrumbs([{
			name: "Home",
			path: "/"
		}, {
			name: "About",
			path: "/about"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
// src/routes/contact.tsx
var $$splitComponentImporter$6 = () => import("./contact-B8mJDyCA.js");
var Route$7 = createFileRoute("/contact")({
	validateSearch: z.object({ service: z.string().optional() }),
	head: () => ({
		...seo({
			title: "Contact Us — Get a Quote for Design, WordPress or SEO",
			description: "Contact UIUX Minimal Agency to start your UI design, brand design, SaaS, WordPress development, social media design or SEO project. We reply within one business day.",
			path: "/contact",
			keywords: [
				"hire a design agency",
				"get a website quote",
				"contact UI UX agency"
			]
		}),
		scripts: [breadcrumbs([{
			name: "Home",
			path: "/"
		}, {
			name: "Contact",
			path: "/contact"
		}]), jsonLd({
			"@context": "https://schema.org",
			"@type": "ContactPage",
			name: "Contact UIUX Minimal Agency",
			url: `${SITE.url}/contact`
		})]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
// src/routes/sitemap[.]xml.ts
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		{
			path: "/",
			priority: "1.0"
		},
		{
			path: "/services",
			priority: "0.9"
		},
		{
			path: "/work",
			priority: "0.9"
		},
		{
			path: "/blog",
			priority: "0.8"
		},
		{
			path: "/about",
			priority: "0.7"
		},
		{
			path: "/contact",
			priority: "0.7"
		},
		...services.map((s) => ({
			path: `/services/${s.slug}`,
			priority: "0.9"
		})),
		...works.map((w) => ({
			path: `/work/${w.slug}`,
			priority: "0.7"
		})),
		...posts.map((p) => ({
			path: `/blog/${p.slug}`,
			priority: "0.6",
			lastmod: p.date
		}))
	].map((p) => `  <url><loc>${SITE.url}${p.path}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}<priority>${p.priority}</priority></url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
// src/routes/blog.index.tsx
var $$splitComponentImporter$5 = () => import("./blog.index-OjuEWe8p.js");
var Route$5 = createFileRoute("/blog/")({
	head: () => ({
		...seo({
			title: "Blog — UI/UX Design, Branding, SaaS, WordPress & SEO Insights",
			description: "Practical articles on UI design principles, brand identity, SaaS onboarding UX, WordPress development, social media design and technical SEO from UIUX Minimal Agency.",
			path: "/blog",
			keywords: [
				"design blog",
				"UI UX blog",
				"SEO tips",
				"branding tips",
				"WordPress tips"
			]
		}),
		scripts: [breadcrumbs([{
			name: "Home",
			path: "/"
		}, {
			name: "Blog",
			path: "/blog"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
// src/routes/blog.$slug.tsx
var $$splitComponentImporter$4 = () => import("./blog._slug-6rG468dx.js");
var Route$4 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { post } = loaderData;
		const path = `/blog/${post.slug}`;
		const base = seo({
			title: post.title,
			description: post.excerpt,
			path,
			image: post.image,
			keywords: post.keywords,
			type: "article"
		});
		return {
			...base,
			meta: [
				...base.meta,
				{
					property: "article:published_time",
					content: post.date
				},
				{
					property: "article:section",
					content: post.category
				},
				{
					name: "author",
					content: post.author
				}
			],
			scripts: [breadcrumbs([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Blog",
					path: "/blog"
				},
				{
					name: post.title,
					path
				}
			]), jsonLd({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: post.title,
				description: post.excerpt,
				image: `${SITE.url}${post.image}`,
				datePublished: post.date,
				dateModified: post.date,
				author: {
					"@type": "Person",
					name: post.author
				},
				publisher: {
					"@type": "Organization",
					name: SITE.name,
					url: SITE.url
				},
				mainEntityOfPage: `${SITE.url}${path}`,
				keywords: post.keywords.join(", ")
			})]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
// src/routes/services.index.tsx
var $$splitComponentImporter$3 = () => import("./services.index-Bw72_vhs.js");
var Route$3 = createFileRoute("/services/")({
	head: () => ({
		...seo({
			title: "Design & Development Services — UI, Branding, SaaS, WordPress, Social, SEO",
			description: "Explore our services: UI/UX design, brand identity design, SaaS product design, custom WordPress development, social media design and SEO services.",
			path: "/services",
			keywords: services.flatMap((s) => s.keywords.slice(0, 1))
		}),
		scripts: [breadcrumbs([{
			name: "Home",
			path: "/"
		}, {
			name: "Services",
			path: "/services"
		}]), jsonLd({
			"@context": "https://schema.org",
			"@type": "ItemList",
			itemListElement: services.map((s, i) => ({
				"@type": "ListItem",
				position: i + 1,
				url: `${SITE.url}/services/${s.slug}`,
				name: s.name
			}))
		})]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
// src/routes/services.$slug.tsx
var $$splitComponentImporter$2 = () => import("./services._slug-gFq_65eZ.js");
var Route$2 = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { service } = loaderData;
		const path = `/services/${service.slug}`;
		return {
			...seo({
				title: `${service.name} Services — ${service.tagline}`,
				description: service.summary,
				path,
				keywords: service.keywords
			}),
			scripts: [
				breadcrumbs([
					{
						name: "Home",
						path: "/"
					},
					{
						name: "Services",
						path: "/services"
					},
					{
						name: service.name,
						path
					}
				]),
				jsonLd({
					"@context": "https://schema.org",
					"@type": "Service",
					name: service.name,
					serviceType: service.name,
					description: service.summary,
					url: `${SITE.url}${path}`,
					provider: {
						"@type": "ProfessionalService",
						name: SITE.name,
						url: SITE.url
					}
				}),
				jsonLd({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: service.faqs.map((f) => ({
						"@type": "Question",
						name: f.q,
						acceptedAnswer: {
							"@type": "Answer",
							text: f.a
						}
					}))
				})
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
// src/routes/work.index.tsx
var $$splitComponentImporter$1 = () => import("./work.index-CBbVn8HH.js");
var Route$1 = createFileRoute("/work/")({
	head: () => ({
		...seo({
			title: "Our Work — UI/UX, Branding & Web Design Portfolio",
			description: "Browse the UIUX Minimal Agency portfolio: UI design, brand identity, SaaS dashboards, WordPress websites, social media campaigns and SEO case studies with real results.",
			path: "/work",
			keywords: [
				"design agency portfolio",
				"UI UX case studies",
				"branding portfolio",
				"web design portfolio"
			]
		}),
		scripts: [breadcrumbs([{
			name: "Home",
			path: "/"
		}, {
			name: "Work",
			path: "/work"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
// src/routes/work.$slug.tsx
var $$splitComponentImporter = () => import("./work._slug-DU4MybQi.js");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const work = getWork(params.slug);
		if (!work) throw notFound();
		return { work };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { work } = loaderData;
		const path = `/work/${work.slug}`;
		return {
			...seo({
				title: `${work.client} — ${work.tags[0]} Case Study`,
				description: work.summary,
				path,
				image: work.image,
				keywords: [...work.tags, `${work.industry} design`],
				type: "article"
			}),
			scripts: [breadcrumbs([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Work",
					path: "/work"
				},
				{
					name: work.client,
					path
				}
			]), jsonLd({
				"@context": "https://schema.org",
				"@type": "CreativeWork",
				name: `${work.client}: ${work.title}`,
				description: work.summary,
				image: `${SITE.url}${work.image}`,
				dateCreated: work.year,
				creator: {
					"@type": "Organization",
					name: SITE.name,
					url: SITE.url
				},
				keywords: work.tags.join(", ")
			})]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
// src/routeTree.gen.ts
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$8.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$10
});
var BlogIndexRoute = Route$5.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$10
});
var BlogSlugRoute = Route$4.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$10
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$10
});
var ServicesSlugRoute = Route$2.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$10
});
var WorkIndexRoute = Route$1.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	SitemapDotxmlRoute,
	BlogSlugRoute,
	ServicesSlugRoute,
	WorkSlugRoute: Route.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$10
	}),
	BlogIndexRoute,
	ServicesIndexRoute,
	WorkIndexRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
// src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	return createRouter({
		routeTree,
		defaultErrorComponent: RouteErrorPage,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { Route$7 as a, getRouter, Route$4 as i, Route as n, cn as o, Route$2 as r, router_exports as t };
