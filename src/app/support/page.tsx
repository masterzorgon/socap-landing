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

import { handleSectionClick } from "@/utils/navigation"

import { ChevronRightIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

function NavigationMenu({ showToast }: { showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void }) {
	const router = useRouter();
	const [activeSection, setActiveSection] = useState<string>('');

	const navigationItems = [
		{ id: 'introduction', label: 'Introduction', icon: '🎯' },
		{ id: 'user-guides', label: 'User Guides', icon: '📖' },
		{ id: 'architecture', label: 'Architecture', icon: '⚙️' },
		{ id: 'faq', label: 'FAQ', icon: '💡' },
		{ id: 'audits', label: 'Audits & Contracts', icon: '🛡️' },
		{ id: 'points', label: 'Points System', icon: '🏆' },
		{ id: 'browser-support', label: 'Browser Support', icon: '🔧' },
		{ id: 'contact', label: 'Contact Us', icon: '📞' },
	];

	const handleNavClick = (sectionId: string) => {
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		handleSectionClick(sectionId, router, showToast);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = navigationItems.map(item => item.id);
			const scrollPosition = window.scrollY + 100; 

			for (let i = sections.length - 1; i >= 0; i--) {
				const element = document.getElementById(sections[i]);
				if (element && element.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className="w-full">
			<div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3">
				<h3 className="text-md font-semibold text-gray-900 mb-3 px-2">Page Sections</h3>
				<ul className="space-y-1">
					{navigationItems.map((item) => (
						<li key={item.id}>
							<button
								onClick={() => handleNavClick(item.id)}
								className={`w-full text-left px-2 py-1.5 rounded-md cursor-pointer text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:bg-gray-100 ${activeSection === item.id
									? 'bg-primary/10 text-primary border-l-2 border-primary'
									: 'text-gray-600 hover:text-gray-900'
									}`}
							>
								<span className="text-sm">{item.icon}</span>
								<span>{item.label}</span>
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

function Header() {
	return (
		<Container className="mt-16 bg-white">
			<Heading as="h1" className="text-gray-900">
				Everything you need to know
			</Heading>
			<Lead className="mt-6 max-w-3xl text-gray-600">
				We're here to help you get the most out of Social Capital.
			</Lead>
		</Container>
	)
}

export default function Support() {
	const { showToast } = useToast();

	return (
		<main className="overflow-hidden">
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

			<div className="relative">
				<div className="lg:mr-6 lg:ml-68 border-2 border-green-500">
					<Header />
					<IntroSection />
					<UserGuidesSection />
					<ArchitectureSection />
					<FAQSection />
					<AuditsSection />
					<PointsSection />
					<BrowserSupportSection />
					<ContactSection />
				</div>

				<div className="hidden lg:block fixed left-6 top-56 bottom-84 w-56 border-2 border-purple-500">
					<div className="sticky h-fit ">
						<NavigationMenu showToast={showToast} />
					</div>
				</div>
			</div>

			<Footer />
		</main>
	)
}