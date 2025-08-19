import { handleHeaderClick } from "@/utils";
import { Container } from "@/components/container";
import { useRouter } from "next/navigation";
import { LockClosedIcon, ServerIcon } from "@heroicons/react/24/solid";
import { useToast } from "../toast-provider";

export function AuditsSection() {
	const router = useRouter();
	const { showToast } = useToast();

	return (
		<Container className="mt-16">
			<h2
				id="audits"
				className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
				onClick={() => handleHeaderClick('audits', router, showToast)}
			>
				Audits and Contracts
			</h2>
			<section>
				<div className="max-w-lg">
					<ul role="list" className="space-y-8 text-gray-600">
						<li className="flex gap-x-3">
							<LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
							<span>
								<strong className="font-semibold text-gray-900">Double audited.</strong> Social Capital is audited by two independent auditors, <a href="https://www.certik.com/projects/social-capital" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Certik</a> and <a href="https://www.certik.com/projects/social-capital" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Certik</a>. The audit report is available <a href="https://www.certik.com/projects/social-capital" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
							</span>
						</li>
						<li className="flex gap-x-3">
							<ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
							<span>
								<strong className="font-semibold text-gray-900">Open sourced.</strong> Social Capital is open sourced, and the code is available <a href="https://github.com/social-capital" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
							</span>
						</li>
					</ul>
				</div>
			</section>
			<hr className="mt-16 border-t border-gray-300" />
		</Container>
	)
}