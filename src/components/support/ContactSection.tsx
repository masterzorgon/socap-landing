import { Container } from "../container";
import { handleSectionClick } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "../toast-provider";
import { Button } from "../button";

export function ContactSection() {
	const router = useRouter();
	const { showToast } = useToast();

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
					If you have any questions, please contact us at <a href="mailto:support@socapital.trade" className="text-primary hover:underline">support@socialcapital.com</a> or join our <a href="https://t.me/socapitaltrade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>, or feel free to leave us a message below.
				</p>
				<form action="#" method="POST" className="lg:flex-auto mt-8">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<div className="flex justify-between items-center">
								<label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
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
									type="text"
									required
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
								X (Twitter) Username
							</label>
							<div className="mt-2.5">
								<input
									id="twitter-username"
									name="twitter-username"
									type="text"
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
						<div className="flex justify-between items-center">
								<label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
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
									rows={4}
									required
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
									defaultValue={''}
								/>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<Button className="w-full sm:w-auto rounded-md" type="submit">
							Get Started
						</Button>
					</div>
					<p className="mt-4 text-sm/6 text-gray-500">
						By submitting this form, you agree to the{' '}
						<a href="/terms" className="whitespace-nowrap text-primary hover:underline">
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