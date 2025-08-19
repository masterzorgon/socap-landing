'use client'

import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Heading, Lead } from "@/components/text"
import { Navbar } from "@/components/navbar"
import { GradientBackground } from "@/components/gradient"
import { NavigationSidebar } from "@/components/NavigationSidebar"
import { useToast } from "@/components/toast-provider"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

function Header() {
    return (
        <Container className="mt-16 bg-white">
            <Heading as="h1" className="text-gray-900">
                Terms of Service
            </Heading>
            <Lead className="mt-6 max-w-3xl text-gray-600">
                Last updated: August 19, 2025
            </Lead>
        </Container>
    )
}

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
        { id: 'termination', label: 'Termination', icon: '🚨' },
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
                    <Header />

                    <TermsSection id="acceptance" title="Acceptance of Terms">
                        <p>
                            By accessing and using Social Capital, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                        <p>
                            If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </TermsSection>

                    <TermsSection id="services" title="Services Description">
                        <p>
                            Social Capital provides a decentralized exchange platform for trading digital assets.
                        </p>
                        <p>
                            Our services include but are not limited to: asset trading, portfolio management, and market analysis tools.
                        </p>
                    </TermsSection>

                    <TermsSection id="user-accounts" title="User Accounts">
                        <p>
                            You are responsible for maintaining the confidentiality of your account information.
                        </p>
                        <p>
                            You agree to accept responsibility for all activities that occur under your account.
                        </p>
                    </TermsSection>

                    <TermsSection id="privacy" title="Privacy Policy">
                        <p>
                            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.
                        </p>
                    </TermsSection>

                    <TermsSection id="intellectual-property" title="Intellectual Property">
                        <p>
                            The service and its original content, features, and functionality are owned by Social Capital and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                    </TermsSection>

                    <TermsSection id="limitations" title="Limitations of Liability">
                        <p>
                            In no event shall Social Capital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
                        </p>
                    </TermsSection>

                    <TermsSection id="termination" title="Termination">
                        <p>
                            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion.
                        </p>
                    </TermsSection>

                    <TermsSection id="governing-law" title="Governing Law">
                        <p>
                            These terms shall be interpreted and governed by the laws of the jurisdiction in which Social Capital operates.
                        </p>
                    </TermsSection>
                </div>
            </div>

            <Footer />
        </main>
    )
}