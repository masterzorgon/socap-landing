import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading } from '@/components/text';
import { CookiePreferences } from '@/components/cookies/cookie-preferences';
import type { Metadata } from 'next';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies on our website and manage your preferences.',
};

export default function CookiesPage() {
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

      <div className="relative lg:mx-68">
      <Header 
						heading="Cookie Preferences" 
						lead="Manage your cookie preferences to control how we use cookies on our website." 
					/>
        <CookiePreferences />
      </div>
      <Footer />
    </main>
  );
} 