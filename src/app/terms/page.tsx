import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Heading, Lead } from "@/components/text";
import { Navbar } from "@/components/navbar";
import { GradientBackground } from "@/components/gradient";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

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

export default function Terms() {

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
            <Header />
            <Container>
                <p>
                    Welcome to Social Capital!
                </p>
            </Container>
            <Footer />
        </main>
    )
}