import { Container } from "../container";
import { handleSectionClick } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "../toast-provider";

export function ContactSection() {
	const router = useRouter();
	const { showToast } = useToast();

	return (
		<Container className="mt-16">
			<h2
				id="contact"
				className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
				onClick={() => handleSectionClick('contact', router, showToast)}
			>
				Contact Us
			</h2>
			<section>
				<p className="text-gray-600">
					If you have any questions, please contact us at <a href="mailto:support@socapital.trade" className="text-primary hover:underline">support@socialcapital.com</a> or join our <a href="https://t.me/socapitaltrade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>.
				</p>
			</section>
			<hr className="mt-16 border-none" />
		</Container>
	)
}