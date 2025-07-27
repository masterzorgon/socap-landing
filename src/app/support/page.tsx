'use client'

import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient"
import { Navbar } from "@/components/navbar"
import { Container } from "@/components/container"
import { Heading, Lead } from "@/components/text"
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, CloudArrowUpIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon, PlusIcon, ServerIcon } from '@heroicons/react/24/solid';
import Link from "next/link"

const faqs = [
  {
    question: "What fees do you take?",
    answer:
      "...",
  },
  {
    question: 'Which blockchains are you built on?',
    answer:
      "...",
  },
  {
    question: 'Can I use my Solana assets on Social Capital?',
    answer:
      "...",
  },
  {
    question: 'Is Social Capital audited?',
    answer:
      "...",
  },
  {
    question: 'Which browsers are supported?',
    answer:
      "...",
  },
  {
    question: 'Will Social Capital have a token?',
    answer:
      "...",
  },
]

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

function FAQ() {
  // Split FAQs into two arrays for left and right columns
  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <Container className="mt-16">
      <h2 className="text-2xl font-medium tracking-tight text-gray-800 mb-16">
        Frequently Asked Questions
      </h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div>
          <dl className="divide-y divide-gray-200">
            {leftFaqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="group flex w-full items-start justify-between text-left cursor-pointer">
                        <span className="text-base font-semibold text-gray-800">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            className={`h-6 w-6 text-gray-500 ${open ? 'hidden' : 'block'}`}
                          />
                          <MinusSmallIcon
                            className={`h-6 w-6 text-gray-500 ${open ? 'block' : 'hidden'}`}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        {/* Right column */}
        <div>
          <dl className="divide-y divide-gray-200">
            {rightFaqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="group flex w-full items-start justify-between text-left cursor-pointer">
                        <span className="text-base font-semibold text-gray-800">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            className={`h-6 w-6 text-gray-500 ${open ? 'hidden' : 'block'}`}
                          />
                          <MinusSmallIcon
                            className={`h-6 w-6 text-gray-500 ${open ? 'block' : 'hidden'}`}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Audits() {
  return (
    <Container className="mt-16">
      <h2 className="text-2xl font-medium tracking-tight text-gray-800">
        Audits and Contracts
      </h2>
      <section>
        <div className="max-w-lg">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#fd3bb8]" />
              <span>
                <strong className="font-semibold text-gray-900">Double audited.</strong> Social Capital is audited by two independent auditors, <a href="https://www.certik.com/projects/social-capital" target="_blank" rel="noopener noreferrer" className="text-[#fd3bb8] hover:underline">Certik</a> and <a href="https://www.certik.com/projects/social-capital" target="_blank" rel="noopener noreferrer" className="text-[#fd3bb8] hover:underline">Certik</a>. The audit report is available <a href="https://www.certik.com/projects/social-capital" target="_blank" rel="noopener noreferrer" className="text-[#fd3bb8] hover:underline">here</a>.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-[#fd3bb8]" />
              <span>
                <strong className="font-semibold text-gray-900">Open sourced.</strong> Social Capital is open sourced, and the code is available <a href="https://github.com/social-capital" target="_blank" rel="noopener noreferrer" className="text-[#fd3bb8] hover:underline">here</a>.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  )
}

function Points() {
  return (
    <Container className="mt-16">
      <h2 className="text-2xl font-medium tracking-tight text-gray-800">
        Our Points System
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 border-2 border-[#fd3bb8] rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">1</span>
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Providing Liquidity</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Earn points by providing liquidity to our pools. The more liquidity you provide and the longer you keep it, the more points you earn.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 border-2 border-[#fd3bb8] rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">3</span>
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Trading Activity</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Active traders earn points based on their trading volume and frequency. Higher volume and consistent trading activity yield more points.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 border-2 border-[#fd3bb8] rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">2</span>
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Early Adopters</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Users who join Social Capital early receive bonus points. The earlier you join, the more bonus points you'll receive.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 border-2 border-[#fd3bb8] rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">4</span>
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Slashing</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Users engaging in malicious behavior or violating Social Capital policy are subject to having their points slashed partially or completely.
          </p>
        </div>
      </section>
    </Container>
  )
}

function GetInTouch() {
  return (
    <Container className="mt-16">
      <h2 className="text-2xl font-medium tracking-tight text-gray-800">
        Get in touch
      </h2>
      <section>
     
      </section>
    </Container>
  )
}

function Divider() {
  return (
    <Container className="mt-16">
      <div className="relative border-t border-gray-300">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="max-w-lg mx-auto">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Support() {
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
      <FAQ />
      <Divider />
      <Audits />
      <Divider />
      <Points />
      <Divider />
      <Footer />
    </main>
  )
}
