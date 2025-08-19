'use client'

import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient"
import { Navbar } from "@/components/navbar"
import { Container } from "@/components/container"
import { Heading, Lead } from "@/components/text"
import { useToast } from "@/components/toast-provider"

import { FAQSection } from "@/components/support/FAQSection"
import { AuditsSection } from "@/components/support/AuditsSection"
import { PointsSection } from "@/components/support/PointsSection"
import { IntroSection } from "@/components/support/IntroSection"
import { UserGuidesSection } from "@/components/support/UserGuideSection"
import { ArchitectureSection } from "@/components/support/ArchitectureSection"
import { BrowserSupportSection } from "@/components/support/BrowserSupportSection"
import { ContactSection } from "@/components/support/ContactSection"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { Header } from "@/components/header"

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

export default function Support() {
	const { showToast } = useToast()

	const navigationItems = [
		{ id: 'introduction', label: 'Introduction', icon: '🎯' },
		{ id: 'user-guides', label: 'User Guides', icon: '📖' },
		{ id: 'architecture', label: 'Architecture', icon: '⚙️' },
		{ id: 'faq', label: 'FAQ', icon: '💡' },
		{ id: 'audits', label: 'Audits & Contracts', icon: '🛡️' },
		{ id: 'points', label: 'Points System', icon: '🏆' },
		{ id: 'browser-support', label: 'Browser Support', icon: '🔧' },
		{ id: 'contact', label: 'Contact Us', icon: '📞' },
	]

	return (
		<main className="overflow-x-hidden">
			<GradientBackground />
			<Container>
				<Navbar
					banner={
						<Link
							href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
							className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
						>
							Open Beta Is Now Live!
							<ChevronRightIcon className="size-4" />
						</Link>
					}
				/>
			</Container>

			<div className="relative lg:mx-68">
				<aside className="hidden lg:block fixed left-6 top-56 w-56">
					<div className="max-h-[calc(100vh-24rem-6rem)] overflow-y-auto">
						<NavigationSidebar
							showToast={showToast}
							navigationItems={navigationItems}
							title="Support Sections"
							basePath="/support"
						/>
					</div>
				</aside>

				<div className="">
					<Header 
						heading="Everything you need to know" 
						lead="We're here to help you get the most out of Social Capital." 
					/>
					<IntroSection />
					<UserGuidesSection />
					<ArchitectureSection />
					<FAQSection />
					<AuditsSection />
					<PointsSection />
					<BrowserSupportSection />
					<ContactSection />
				</div>
			</div>

			<Footer />
		</main>
	)
}