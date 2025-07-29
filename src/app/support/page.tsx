'use client'

import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient"
import { Navbar } from "@/components/navbar"
import { Container } from "@/components/container"
import { Heading, Lead } from "@/components/text"
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon, ServerIcon } from '@heroicons/react/24/solid';
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

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

// Toast component with smooth animations
function Toast({ message, isVisible, onClose }: { message: string; isVisible: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ease-in-out ${
      isVisible 
        ? 'opacity-100' 
        : 'opacity-0 pointer-events-none'
    }`}>
      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-[#fd3bb8]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Utility function to copy URL to clipboard
const copyToClipboard = async (url: string, setToast: (message: string) => void) => {
  try {
    await navigator.clipboard.writeText(url);
    setToast("URL copied to clipboard!");
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    setToast("Failed to copy URL to clipboard");
  }
};

// Utility function to handle header clicks
const handleHeaderClick = (sectionId: string, router: any, setToast: (message: string) => void) => {
  const url = `${window.location.origin}/support#${sectionId}`;
  copyToClipboard(url, setToast);
  
  // Update the URL without page reload
  router.push(`/support#${sectionId}`);
  
  // Smooth scroll to the section
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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

function FAQSection({ setToast }: { setToast: (message: string) => void }) {
  const router = useRouter();
  // Split FAQs into two arrays for left and right columns
  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <Container className="mt-16">
      <h2 
        id="faq"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-[#fd3bb8] transition-colors"
        onClick={() => handleHeaderClick('faq', router, setToast)}
      >
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
      <Divider />
    </Container>
  )
}

function AuditsSection({ setToast }: { setToast: (message: string) => void }) {
  const router = useRouter();
  
  return (
    <Container className="mt-16">
      <h2 
        id="audits"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-[#fd3bb8] transition-colors"
        onClick={() => handleHeaderClick('audits', router, setToast)}
      >
        Audits and Contracts
      </h2>
      <section>
        <div className="max-w-lg">
          <ul role="list" className="space-y-8 text-gray-600">
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
      <Divider />
    </Container>
  )
}

function PointsSection({ setToast }: { setToast: (message: string) => void }) {
  const router = useRouter();
  
  return (
    <Container className="mt-16">
      <h2 
        id="points"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-[#fd3bb8] transition-colors"
        onClick={() => handleHeaderClick('points', router, setToast)}
      >
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
            Users engaging in malicious behavior or violating Social Capital policy are subject to having their points slashed.
          </p>
        </div>
      </section>
      <Divider hidden={false} />
    </Container>
  )
}

function IntroSection({ setToast }: { setToast: (message: string) => void }) {
  const router = useRouter();
  
  return (
    <Container className="mt-16">
      <h2 
        id="introduction"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-[#fd3bb8] transition-colors"
        onClick={() => handleHeaderClick('introduction', router, setToast)}
      >
        Introduction
      </h2>
      <section>
        <p className="text-gray-600">
          Social Capital is a decentralized exchange that allows users to trade 
        </p>
      </section>
      <Divider />
    </Container>
  )
}

function DesignSection({ setToast }: { setToast: (message: string) => void }) {
  const router = useRouter();
  
  return (
    <Container className="mt-16">
      <h2 
        id="design"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-[#fd3bb8] transition-colors"
        onClick={() => handleHeaderClick('design', router, setToast)}
      >
        Design Panorama
      </h2>
      <section>
        <p className="text-gray-600">Token Creation</p>
        <p className="text-gray-600">Orderbook</p>
        <p className="text-gray-600">Order Types</p>
        <p className="text-gray-600">TP/SL</p>
        <p className="text-gray-600">Margin</p>
        <p className="text-gray-600">Liquidations</p>
        <p className="text-gray-600">Funding</p>
      </section>
      <Divider />
    </Container>
  )
}

function Divider({ hidden = true }: { hidden?: boolean }) {
  return (
    <div className="mt-16 w-full">
      <div className={`relative ${hidden ? 'border-t border-gray-300' : 'border-none'}`} />
    </div>
  )
}

export default function Support() {
  const [toast, setToast] = useState({ message: '', isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', isVisible: false });
  };

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
      <IntroSection setToast={showToast} />
      <DesignSection setToast={showToast} />
      <FAQSection setToast={showToast} />
      <AuditsSection setToast={showToast} />
      <PointsSection setToast={showToast} />
      <Footer />
      
      <Toast 
        message={toast.message} 
        isVisible={toast.isVisible} 
        onClose={hideToast} 
      />
    </main>
  )
}
