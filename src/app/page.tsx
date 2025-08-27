import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Preview } from '@/components/preview'
import Carousel from '@/components/carousel'
import { AnimatedNumber } from '@/components/animated-number'
import { Newsletter } from '@/components/newsletter'

import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Social Capital is where attention becomes a market. Anyone on X can be tokenized and traded like a speculative asset.',
}

function Hero() {
  return (
    <div id="hero" className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
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
        <div className="pt-16 pb-24 sm:py-24 flex flex-col justify-center items-center text-center">
          <h1 className="pb-1 font-display text-balance text-6xl leading-[1.1] sm:text-8xl font-medium tracking-tight text-black">
            Speculate
            <span className="inline-block align-middle mx-3">
              <img src="/so-cap-icon.svg" alt="Social Capital Icon" width={60} height={60} className="inline-block align-middle mb-6 mx-2" />
            </span>
            On People
            <br />
            Like They&apos;re Memecoins
          </h1>

          <p className="my-8 max-w-3xl text-xl leading-8 font-medium text-gray-950/75 sm:text-2xl sm:leading-9">
            Social Capital is where attention becomes a market. Anyone on X &#40;Twitter&#41; can be tokenized and traded like a speculative asset.
          </p>

          <div className="max-lg:mt-16 lg:col-span-1">
            <hr className="mt-6 border-t border-gray-600" />
            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-600 pb-4">
                <dt className="text-sm/6 text-gray-600">24h Volume</dt>
                <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  $<AnimatedNumber start={100} end={150} />M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-600 pb-4">
                <dt className="text-sm/6 text-gray-600">Markets</dt>
                <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  <AnimatedNumber start={2.5} end={30} />K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-600 pb-4">
                <dt className="text-sm/6 text-gray-600">Users</dt>
                <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  <AnimatedNumber start={150} end={200} />K
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4">
            <Button variant="secondary" href="#">
              <img src="/chrome-icon.png" alt="Chrome Icon" width={20} height={20} className="inline-block align-middle mr-2" />
              Download Chrome Extension
            </Button>
            <p className="text-sm text-gray-950/75">
              Also available for other browsers.<br />
              <a href="/support#browser-support" className="text-gray-950/75 underline hover:text-gray-950">Discover more</a>
            </p>
          </div>
        </div>

      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <div id="features">
      <Container>
        <Subheading>Features</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          A Whole New Asset Class.
        </Heading>

        {/* bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat */}
        <div className="sm:mb-[-500px] mt-10 grid grid-cols-1 gap-4 sm:mt-20 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Step 1"
            title="Token Creation"
            description="Users vote with SOL to fund launch. LP seeded below vote price for downside protection. Anti-sniper rules enforce fair access."
            graphic={
              <div className="h-80 bg-[url(/screenshots/token-creation-preview.png)]" />
            }
            fade={['bottom']}
            className="max-lg:rounded-t-4xl lg:col-span-2 lg:rounded-bl-4xl lg:rounded-tl-4xl"
          />

          {/* bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat */}
          <BentoCard
            eyebrow="Step 2"
            title="Spot Token Launch"
            description="SOL/token LP goes live. Presale wallets get early access. Spot traders earn 25% of perp fees. LP curve supports both stability and upside."
            graphic={
              <div className="absolute inset-0 bg-[url(/screenshots/spot-preview.png)]" />
            }
            fade={['bottom']}
            className="lg:col-span-2"
          />

          {/* bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat */}
          <BentoCard
            eyebrow="Step 3"
            title="Trade Perps with Leverage"
            description="Perps built with D8X. Funding via internal TWAP, no oracles needed. Trade sentiment with leverage. Each token gets its own market."
            graphic={
              <div className="absolute inset-0 bg-[url(/screenshots/perps-preview.png)]" />
            }
            fade={['bottom']}
            className="lg:col-span-2 lg:rounded-br-4xl lg:rounded-tr-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
        <section id="carousel">
          <Container className="mt-10">
            <Carousel />
          </Container>
        </section>
        <section className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <div id="preview">
            <Preview />
          </div>
          <div id="newsletter">
            <Newsletter />
          </div>
          <BentoSection />
        </section>
      <Footer />
    </main>
  )
}
