import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { Preview } from '@/components/preview'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Carousel from '@/components/carousel'
import { AnimatedNumber } from '@/components/animated-number'

export const metadata: Metadata = {
  description:
    'Social Capital is where attention becomes a market. Anyone on X can be tokenized and traded like a speculative asset.',
}

function Hero() {
  return (
    <div className="relative">
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
            Like They're Memecoins
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
            <Button variant="secondary" href="/pricing">
              <img src="/chrome-icon.png" alt="Chrome Icon" width={20} height={20} className="inline-block align-middle mr-2" />
              Download Chrome Extension
            </Button>
            <p className="text-sm text-gray-950/75">
              Also available for other browsers.<br />
              <a href="https://github.com/social-capital/social-capital" className="text-gray-950/75 underline hover:text-gray-950">Discover more</a>
            </p>
          </div>
        </div>

      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function PreviewSection() {
  return (
    <Preview />
  )
}

function CarouselSection() {
  return (
    <div className="overflow-hidden w-screen mt-10">
        <Carousel />
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/* <Container className="mt-10"> */}
        {/* <LogoCloud /> */}
        <CarouselSection />
        {/* </Container> */}
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          {/* <PreviewSection /> */}
          {/* <FeatureSection /> */}
          {/* <BentoSection /> */}
        </div>
        {/* <DarkBentoSection /> */}
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
