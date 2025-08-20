'use client'

import { useState } from "react";
import { Container } from "./container";
import { useToast } from "./toast-provider";
import { validateEmail } from "@/utils/validate-email";
import { clsx } from "clsx";

interface NewsletterProps {
	// Container and layout props
	className?: string;
	containerClassName?: string;

	// Background and styling props
	backgroundClassName?: string;
	gradientClassName?: string;

	// Content props
	title?: string;
	description?: string;
	buttonText?: string;
	loadingText?: string;

	// Form styling props
	formClassName?: string;
	inputClassName?: string;
	buttonClassName?: string;

	// Spacing props
	padding?: string;
	margin?: string;

	// Variant props
	variant?: 'default' | 'compact' | 'hero' | 'minimal';
}

export function Newsletter({
	className,
	containerClassName,
	backgroundClassName = "bg-gradient-to-br from-primary/10 to-slate-100",
	gradientClassName,
	title = "Join the Social Capital Newsletter",
	description = "Stay up to date with the latest features and developments.",
	buttonText = "Sign up",
	loadingText = "Signing up...",
	formClassName,
	inputClassName,
	buttonClassName,
	padding = "py-16 sm:py-24",
	margin = "my-16 sm:my-32",
	variant = 'default'
}: NewsletterProps) {
	const [isSending, setIsSending] = useState<boolean>(false);
	const { showToast } = useToast();

	const handleNewsletterSignup = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsSending(true);

		const form = event.target as HTMLFormElement;
		const emailInput = form.email as HTMLInputElement;
		const email = emailInput.value;

		if (!validateEmail(email)) {
			showToast("Invalid email format", "error");
			setIsSending(false);
			return;
		}

		const url = "/api/newsletter";

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			const result = await response.json();
			console.log("RESULT", result);

			if (response.ok) {
				showToast("Successfully signed up!", "success");
			} else {
				showToast("An error occurred. Try again later.", "error");
			}
		} catch (error) {
			console.error("Request failed:", error);
			showToast("An error occurred. Try again later.", "error");
		} finally {
			setIsSending(false);
			emailInput.value = '';
		}
	};

	// Variant-based styling
	const getVariantStyles = () => {
		switch (variant) {
			case 'compact':
				return {
					container: "max-w-2xl",
					title: "text-2xl sm:text-3xl",
					description: "text-base",
					padding: "py-8 sm:py-12",
					margin: "my-8 sm:my-16"
				};
			case 'hero':
				return {
					container: "max-w-4xl",
					title: "text-4xl sm:text-5xl lg:text-6xl",
					description: "text-lg sm:text-xl",
					padding: "py-20 sm:py-32",
					margin: "my-20 sm:my-40"
				};
			case 'minimal':
				return {
					container: "w-full",
					title: "text-4xl sm:text-5xl",
					description: "text-lg",
					padding: "py-z sm:py-8",
					margin: "my-6 sm:my-12"
				};
			default:
				return {
					container: "max-w-3xl",
					title: "text-4xl sm:text-5xl",
					description: "text-lg",
					padding: "py-16 sm:py-24",
					margin: "my-16 sm:my-32"
				};
		}
	};

	const variantStyles = getVariantStyles();

	return (
		<Container className={containerClassName}>
			<div className={clsx(
				padding || variantStyles.padding,
				margin || variantStyles.margin,
				className
			)}>
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className={clsx(
						"relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 border border-gray-200",
						backgroundClassName
					)}>
						<h2 className={clsx(
							"mx-auto text-center font-semibold tracking-tight text-slate-900",
							variantStyles.container,
							variantStyles.title
						)}>
							{title}
						</h2>
						<p className={clsx(
							"mx-auto mt-6 text-center text-slate-600",
							variantStyles.container,
							variantStyles.description
						)}>
							{description}
						</p>
						<form className={clsx(
							"mx-auto mt-10 flex max-w-md gap-x-4",
							formClassName
						)} onSubmit={handleNewsletterSignup}>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								placeholder="Enter your email"
								autoComplete="email"
								disabled={isSending}
								className={clsx(
									"min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-primary/20 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary/50 sm:text-sm/6 border border-slate-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
									inputClassName
								)}
							/>
							<button
								type="submit"
								disabled={isSending}
								className={clsx(
									"cursor-pointer flex-none rounded-md bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
									buttonClassName
								)}
							>
								{isSending ? loadingText : buttonText}
							</button>
						</form>
						{gradientClassName && (
							<svg
								viewBox="0 0 1024 1024"
								aria-hidden="true"
								className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
							>
								<circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
								<defs>
									<radialGradient
										r={1}
										cx={0}
										cy={0}
										id="759c1415-0410-454c-8f7c-9a820de03641"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(512 512) rotate(90) scale(512)"
									>
										<stop stopColor="#3B82F6" />
										<stop offset={1} stopColor="#8B5CF6" stopOpacity={0} />
									</radialGradient>
								</defs>
							</svg>
						)}
					</div>
				</div>
			</div>
		</Container>
	)
}
