'use client'

import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient"
import { Navbar } from "@/components/navbar"
import { Container } from "@/components/container"
import { Heading, Lead } from "@/components/text"
import { useToast } from "@/components/toast-provider"
import { FAQSection } from "@/components/support/FAQSection"
import { AuditsSection } from "@/components/support/AuditsSection"
import { handleSectionClick } from "@/utils/navigation"

import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon, ServerIcon, StarIcon } from '@heroicons/react/24/solid';
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { copyToClipboard } from "@/utils"

// Navigation menu component
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

  // Handle navigation item click
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    handleSectionClick(sectionId, router, showToast);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

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
                className={`w-full text-left px-2 py-1.5 rounded-md cursor-pointer text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:bg-gray-100 ${
                  activeSection === item.id
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

interface PointItem {
  id: number;
  title: string;
  description: string;
}

function PointsSection({
  showToast,
  points
}: {
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  points: PointItem[];
}) {
  const router = useRouter();

  return (
    <Container className="mt-16">
      <h2
        id="points"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
        onClick={() => handleSectionClick('points', router, showToast)}
      >
        Our Points System
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {points.map((point) => (
          <div key={point.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">{point.id}</span>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">{point.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">
              {point.description}
            </p>
          </div>
        ))}
      </section>
      <hr className="mt-16 border-t border-gray-300" />
    </Container>
  )
}

interface BrowserItem {
  id: number;
  title: string;
  icon: string;
  extension: string;
}

function BrowserSupportSection({
  showToast,
  browserList
}: {
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  browserList: BrowserItem[];
}) {
  const router = useRouter();

  return (
    <Container className="mt-16">
      <h2
        id="browser-support"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
        onClick={() => handleSectionClick('browser-support', router, showToast)}
      >
        Browser Support
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {browserList.map((browserOption) => (
          <a href={browserOption.extension} target="_blank" rel="noopener noreferrer" className="">
            <div key={browserOption.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <img src={browserOption.icon} alt={browserOption.title} className="w-full h-full object-contain rounded-full" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">{browserOption.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Use Social Capital with the {browserOption.title} browser extension.
              </p>
            </div>
          </a>
        ))}
      </section>
      <hr className="mt-16 border-t border-gray-300" />
    </Container>
  )
}

function IntroSection({ showToast }: { showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void }) {
  const router = useRouter();

  return (
    <Container className="mt-16">
      <h2
        id="introduction"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
        onClick={() => handleSectionClick('introduction', router, showToast)}
      >
        Introduction
      </h2>
      <section>
        <p className="text-gray-600">
          Social Capital is a decentralized exchange that allows users to trade
        </p>
      </section>
      <hr className="mt-16 border-t border-gray-300" />
    </Container>
  )
}

interface UserGuideItem {
  title: string;
  content: string;
}

function UserGuidesSection({
  showToast,
  guides
}: {
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  guides: UserGuideItem[];
}) {
  const router = useRouter();

  return (
    <Container className="mt-16">
      <h2
        id="user-guides"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
        onClick={() => handleSectionClick('user-guides', router, showToast)}
      >
        User Guides
      </h2>
      <section>
        {guides.map((guide, index) => (
          <div key={guide.title}>
            <div className="flex items-center gap-2">
              <StarIcon className="size-4 text-primary" />
              <h3 className="text-gray-800 my-4 font-medium text-lg">{guide.title}</h3>
            </div>
            <p className="mb-4">{guide.content}</p>
            {index < guides.length - 1 && (
              <hr className="border-t border-gray-300 border-dashed" />
            )}
          </div>
        ))}
      </section>
      <hr className="mt-16 border-t border-gray-300" />
    </Container>
  )
}

interface ArchitectureItem {
  title: string;
  content: string;
}

function ArchitectureSection({
  showToast,
  architectureItems
}: {
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  architectureItems: ArchitectureItem[];
}) {
  const router = useRouter();

  return (
    <Container className="mt-16">
      <h2
        id="architecture"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
        onClick={() => handleSectionClick('architecture', router, showToast)}
      >
        Architecture
      </h2>
      <section>
        {architectureItems.map((item, index) => (
          <div key={item.title}>
            <div className="flex items-center gap-2">
              <StarIcon className="size-4 text-primary" />
              <h3 className="text-gray-800 my-4 font-medium text-lg">{item.title}</h3>
            </div>
            <p className="mb-4">{item.content}</p>
            {index < architectureItems.length - 1 && (
              <hr className="border-t border-gray-300 border-dashed" />
            )}
          </div>
        ))}
      </section>
      <hr className="mt-16 border-t border-gray-300" />
    </Container>
  )
}

function ContactSection({
  showToast,
}: {
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
}) {
  const router = useRouter();

  return (
    <Container className="mt-16">
      <h2
        id="contact"
        className="text-2xl font-medium tracking-tight text-gray-800 mb-8 cursor-pointer hover:text-primary transition-colors"
        onClick={() => handleSectionClick('contact', router, showToast)}
      >
        Contact Us
      </h2>
      <section>
        <p className="text-gray-600">
          If you have any questions, please contact us at <a href="mailto:support@socapital.trade" className="text-primary hover:underline">support@socialcapital.com</a> or join our <a href="https://t.me/socapitaltrade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>.
        </p>
      </section>
      <hr className="mt-16 border-none" />
    </Container>
  )
}

export default function Support() {
  const { showToast } = useToast();

  const pointsData: PointItem[] = [
    {
      id: 1,
      title: "Providing Liquidity",
      description: "Earn points by providing liquidity to our pools. The more liquidity you provide and the longer you keep it, the more points you earn."
    },
    {
      id: 2,
      title: "Early Adopters",
      description: "Users who join Social Capital early receive bonus points. The earlier you join, the more bonus points you'll receive."
    },
    {
      id: 3,
      title: "Trading Activity",
      description: "Active traders earn points based on their trading volume and frequency. Higher volume and consistent trading activity yield more points."
    },
    {
      id: 4,
      title: "Slashing",
      description: "Users engaging in malicious behavior or violating Social Capital policy are subject to having their points slashed."
    }
  ];

  const userGuides: UserGuideItem[] = [
    {
      title: "Creating a Market",
      content: "..."
    },
    {
      title: "Trading on Spot",
      content: "..."
    },
    {
      title: "Trading on Perps",
      content: "..."
    },
    {
      title: "Take Profit / Stop Loss",
      content: "..."
    },
  ];

  const architectureItems: ArchitectureItem[] = [
    {
      title: "Permissionless Markets",
      content: "..."
    },
    {
      title: "Margin (Cross & Isolated)",
      content: "..."
    },
    {
      title: "Liquidations",
      content: "..."
    },
    {
      title: "Funding",
      content: "..."
    }
  ];

  const browserList: BrowserItem[] = [
    {
      id: 1,
      title: "Chrome",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
      extension: "#"
    },
    {
      id: 2,
      title: "Firefox",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
      extension: "#"
    },
    {
      id: 3,
      title: "Brave",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png",
      extension: "#"
    },
  ];

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
        <div className="lg:mx-72 border-2 border-green-500">
          <Header />
          <IntroSection showToast={showToast} />
          <UserGuidesSection showToast={showToast} guides={userGuides} />
          <ArchitectureSection showToast={showToast} architectureItems={architectureItems} />
          <FAQSection />
          <AuditsSection showToast={showToast} />
          <PointsSection showToast={showToast} points={pointsData} />
          <BrowserSupportSection showToast={showToast} browserList={browserList} />
          <ContactSection showToast={showToast} />
        </div>
        
        <div className="hidden lg:block fixed left-6 top-0 bottom-0 w-56 border-2 border-purple-500">
          <div className="sticky top-6 h-fit transform translate-y-5/9">
            <NavigationMenu showToast={showToast} />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}