import { Footer } from "@/components/footer";




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
            <Footer />
        </main>
    )
}