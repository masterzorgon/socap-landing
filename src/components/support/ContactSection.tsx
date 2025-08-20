import { Container } from "../container";
import { handleSectionClick } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "../toast-provider";
import { Button } from "../button";
import { useState } from "react";

export function ContactSection() {
	const router = useRouter();
	const { showToast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(event.currentTarget);
		const telegramUsername = formData.get('telegram-username') as string;
		const twitterUsername = formData.get('twitter-username') as string;
		const message = formData.get('message') as string;

		// Validate required fields
		if (!telegramUsername || !message) {
			showToast("Telegram username and message are required", "error");
			setIsSubmitting(false);
			return;
		}

		// Validate message length
		if (message.length < 10) {
			showToast("Message must be at least 10 characters long", "error");
			setIsSubmitting(false);
			return;
		}

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					telegramUsername,
					twitterUsername,
					message
				}),
			});

			const result = await response.json();

			if (response.ok) {
				showToast("Message sent successfully! We'll get back to you soon.", "success");
				// Reset form
				event.currentTarget.reset();
			} else {
				console.error("Error sending message:", result.error);
				showToast("Failed to send message. Please try again.", "error");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			showToast("An error occurred. Please try again later.", "error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Container className="mt-16">
			<section id="contact" className="scroll-mt-24">
				<h2
					className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
					onClick={() => handleSectionClick('contact', router, showToast)}
				>
					Contact Us
				</h2>
				<p className="text-gray-600">
					If you have any questions, please contact us at <a href="mailto:support@socapital.trade" className="text-primary hover:underline">support@socapital.trade</a> or join our <a href="https://t.me/socapitaltrade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>, or feel free to leave us a message below.
				</p>
				<form onSubmit={handleSubmit} className="lg:flex-auto mt-8">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<div className="flex justify-between items-center">
								<label htmlFor="telegram-username" className="block text-sm/6 font-semibold text-gray-900">
									Telegram Username
								</label>
								<p className="text-sm/6 text-gray-500 font-normal">
									Required
								</p>
							</div>
							<div className="mt-2.5">
								<input
									id="telegram-username"
									name="telegram-username"
									placeholder="@johndoe"
									type="text"
									required
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="twitter-username" className="block text-sm/6 font-semibold text-gray-900">
								X (Twitter) Username
							</label>
							<div className="mt-2.5">
								<input
									id="twitter-username"
									name="twitter-username"
									placeholder="@elonmusk"
									type="text"
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<div className="flex justify-between items-center">
								<label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
									Message
								</label>
								<p className="text-sm/6 text-gray-500 font-normal">
									Required
								</p>
							</div>
							<div className="mt-2.5">
								<textarea
									id="message"
									name="message"
									placeholder="You look pretty today <3"
									rows={4}
									required
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
									defaultValue={''}
								/>
							</div>
						</div>
					</div>
					<div className="mt-8">
						<Button
							className="w-full sm:w-auto rounded-md"
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</div>
					<p className="mt-4 text-sm/6 text-gray-500">
						By submitting this form, you agree to the{' '}
						<a href="/terms#privacy" className="whitespace-nowrap text-primary hover:underline">
							privacy policy
						</a>
						.
					</p>
				</form>
				<hr className="mt-16 border-none" />
			</section>
		</Container>
	)
}