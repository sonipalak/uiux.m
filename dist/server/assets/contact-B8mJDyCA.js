import { a as Route, o as cn } from "./router-Bhf8fXaH.js";
import { n as PageIntro } from "./blocks-B5414-iI.js";
import { d as services, t as SITE } from "./seo-Bi9_Cakm.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import * as LabelPrimitive from "@radix-ui/react-label";
// src/components/ui/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		"data-slot": "input",
		className: cn("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
// src/components/ui/label.tsx
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx(LabelPrimitive.Root, {
		"data-slot": "label",
		className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
// src/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
// src/routes/contact.tsx?tsr-split=component
var budgets = [
	"Under $5k",
	"$5k – $15k",
	"$15k – $40k",
	"$40k+"
];
var selectClass = "h-11 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";
function ContactPage() {
	const { service: preselected } = Route.useSearch();
	const [state, setState] = useState("idle");
	async function submit(event) {
		event.preventDefault();
		if (state === "pending") return;
		const body = new URLSearchParams();
		new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)));
		setState("pending");
		try {
			const response = await fetch("/contact-form.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: body.toString(),
				signal: AbortSignal.timeout(15e3)
			});
			if (!response.ok) throw new Error("Submission failed");
			if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error("Form handling is unavailable");
			setState("success");
		} catch {
			setState("error");
		}
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageIntro, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ jsxs(Fragment, { children: ["Tell us about your ", /* @__PURE__ */ jsx("em", {
			className: "text-brand-ink",
			children: "project."
		})] }),
		children: "Whether you need a new brand, a SaaS product, a WordPress website or better Google rankings — share a few details and we’ll get back to you within one business day."
	}), /* @__PURE__ */ jsxs("section", {
		className: "container-site grid gap-12 pb-24 md:grid-cols-12",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "space-y-8 md:col-span-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ jsx(Mail, {
						className: "mt-1 size-5 text-brand-ink",
						"aria-hidden": "true"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-sm text-muted-foreground",
						children: "Email"
					}), /* @__PURE__ */ jsx("a", {
						href: `mailto:${SITE.email}`,
						className: "text-lg hover:text-brand-ink",
						children: SITE.email
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ jsx(Phone, {
						className: "mt-1 size-5 text-brand-ink",
						"aria-hidden": "true"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-sm text-muted-foreground",
						children: "Phone"
					}), /* @__PURE__ */ jsx("a", {
						href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
						className: "text-lg hover:text-brand-ink",
						children: SITE.phone
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ jsx(MapPin, {
						className: "mt-1 size-5 text-brand-ink",
						"aria-hidden": "true"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-sm text-muted-foreground",
						children: "Studio"
					}), /* @__PURE__ */ jsx("address", {
						className: "text-lg not-italic",
						children: SITE.address
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-medium text-foreground",
						children: "What happens next?"
					}), /* @__PURE__ */ jsxs("ol", {
						className: "mt-3 list-decimal space-y-1.5 pl-4",
						children: [
							/* @__PURE__ */ jsx("li", { children: "We review your brief and reply within 24 hours." }),
							/* @__PURE__ */ jsx("li", { children: "A free 30-minute discovery call." }),
							/* @__PURE__ */ jsx("li", { children: "A tailored proposal with timeline and budget." })
						]
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "md:col-span-8",
			children: state === "success" ? /* @__PURE__ */ jsxs("div", {
				role: "status",
				className: "flex flex-col items-start rounded-3xl border border-border bg-card p-10 md:p-14",
				children: [
					/* @__PURE__ */ jsx(CheckCircle2, {
						className: "size-10 text-brand-ink",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-6 font-display text-5xl",
						children: "Thank you!"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-md text-muted-foreground",
						children: "Your message was received. We’ll be in touch within one business day."
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setState("idle"),
						className: "mt-8 rounded-full border border-border px-5 py-2.5 text-sm hover:border-foreground",
						children: "Send another message"
					})
				]
			}) : /* @__PURE__ */ jsxs("form", {
				name: "contact",
				method: "POST",
				action: "/contact-form.html",
				"data-netlify": "true",
				"netlify-honeypot": "bot-field",
				onSubmit: submit,
				onChange: () => {
					if (state === "error") setState("idle");
				},
				className: "rounded-3xl border border-border bg-card p-6 md:p-10",
				children: [
					/* @__PURE__ */ jsx("input", {
						type: "hidden",
						name: "form-name",
						value: "contact"
					}),
					/* @__PURE__ */ jsx("p", {
						hidden: true,
						children: /* @__PURE__ */ jsxs("label", { children: ["Leave empty ", /* @__PURE__ */ jsx("input", {
							name: "bot-field",
							tabIndex: -1,
							autoComplete: "off"
						})] })
					}),
					/* @__PURE__ */ jsxs("fieldset", {
						disabled: state === "pending",
						className: "grid gap-6 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsx("legend", {
								className: "sr-only",
								children: "Project enquiry"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "name",
									children: "Your name"
								}), /* @__PURE__ */ jsx(Input, {
									id: "name",
									name: "name",
									autoComplete: "name",
									required: true,
									maxLength: 100,
									className: "h-11"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ jsx(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email",
									required: true,
									maxLength: 254,
									className: "h-11"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "company",
									children: "Company (optional)"
								}), /* @__PURE__ */ jsx(Input, {
									id: "company",
									name: "company",
									autoComplete: "organization",
									maxLength: 120,
									className: "h-11"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "service",
									children: "Service"
								}), /* @__PURE__ */ jsxs("select", {
									id: "service",
									name: "service",
									defaultValue: preselected ?? "",
									required: true,
									className: selectClass,
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											disabled: true,
											children: "Select a service"
										}),
										services.map((s) => /* @__PURE__ */ jsx("option", {
											value: s.name,
											children: s.name
										}, s.slug)),
										/* @__PURE__ */ jsx("option", {
											value: "Not sure yet",
											children: "Not sure yet"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2 sm:col-span-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "budget",
									children: "Budget"
								}), /* @__PURE__ */ jsxs("select", {
									id: "budget",
									name: "budget",
									defaultValue: "",
									className: selectClass,
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										children: "Prefer not to say"
									}), budgets.map((b) => /* @__PURE__ */ jsx("option", {
										value: b,
										children: b
									}, b))]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2 sm:col-span-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "message",
									children: "Project details"
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "message",
									name: "message",
									required: true,
									maxLength: 3e3,
									rows: 6,
									placeholder: "Tell us about your goals, timeline and anything else we should know."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: "We’ll only use your details to reply to your enquiry."
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-brand hover:text-brand-foreground disabled:opacity-60",
									children: state === "pending" ? "Sending…" : "Send message"
								})]
							})
						]
					}),
					state === "error" && /* @__PURE__ */ jsxs("p", {
						role: "alert",
						className: "mt-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive",
						children: [
							"Your message couldn’t be sent. Your details are still here — please try again, or email us at ",
							SITE.email,
							"."
						]
					})
				]
			})
		})]
	})] });
}
export { ContactPage as component };
