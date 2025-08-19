'use client'

import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Heading, Lead } from "@/components/text"
import { Navbar } from "@/components/navbar"
import { GradientBackground } from "@/components/gradient"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { useToast } from "@/components/toast-provider"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"

function TermsSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    const router = useRouter()
    const { showToast } = useToast()

    return (
        <Container className="mt-16">
            <section id={id} className="scroll-mt-24">
                <h2
                    className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => {
                        const url = `${window.location.origin}/terms#${id}`
                        import('@/utils/clipboard').then(({ copyToClipboard }) => {
                            copyToClipboard(url, showToast)
                        })
                        router.push(`/terms#${id}`)
                        const element = document.getElementById(id)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}
                >
                    {title}
                </h2>
                <div className="text-gray-600 space-y-4">
                    {children}
                </div>
                <hr className="mt-16 border-t border-gray-300" />
            </section>
        </Container>
    )
}

export default function Terms() {
    const { showToast } = useToast()

    const navigationItems = [
        { id: 'acceptance', label: 'Acceptance of Terms', icon: '✅' },
        { id: 'privacy', label: 'Privacy Policy', icon: '🔒' },
        { id: 'services', label: 'Services Description', icon: '✍️' },
        { id: 'user-accounts', label: 'User Accounts', icon: '👤' },
        { id: 'intellectual-property', label: 'Intellectual Property', icon: '💡' },
        { id: 'limitations', label: 'Limitations of Liability', icon: '⚠️' },
    ]

    const sections = [
        {
            id: 'acceptance',
            title: 'Acceptance of Terms',
            children: [
                <p>
                    By accessing and using Social Capital, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
            ]
        },
        {
            id: 'privacy',
            title: 'Privacy Policy',
            children: [
                <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.
                </p>
            ]
        },
        {
            id: 'services',
            title: 'Services Description',
            children: [
                <p>
                    Social Capital provides a decentralized exchange platform for trading digital assets.
                </p>
            ]
        },
        {
            id: 'user-accounts',
            title: 'User Accounts',
            children: [
                <p>
                    You are responsible for maintaining the confidentiality of your account information.
                </p>
            ]
        },
        {
            id: 'intellectual-property',
            title: 'Intellectual Property',
            children: [
                <p>
                    The service and its original content, features, and functionality are owned by Social Capital and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>,
            ]
        },
        {
            id: 'limitations',
            title: 'Limitations of Liability',
            children: [
                <p>
                    In no event shall Social Capital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
            ]
        },
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

            <div className="relative">
                <aside className="hidden lg:block fixed left-6 top-56 w-56">
                    <div className="max-h-[calc(100vh-24rem-6rem)] overflow-y-auto">
                        <NavigationSidebar
                            showToast={showToast}
                            navigationItems={navigationItems}
                            title="Terms Sections"
                            basePath="/terms"
                        />
                    </div>
                </aside>

                <div className="lg:mx-68">
                    <Header heading="Terms of Service" lead="Last updated: August 19, 2025" />

                    {sections.map(section => (
                        <TermsSection key={section.id} id={section.id} title={section.title} children={section.children} />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}