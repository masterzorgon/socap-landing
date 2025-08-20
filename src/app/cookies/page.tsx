import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { Heading } from '@/components/text';
import { CookiePreferences } from '@/components/cookies/cookie-preferences';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies on our website and manage your preferences.',
};

export default function CookiesPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <div className="mt-16">
          <Heading as="h1" className="text-center">
            Cookie Policy
          </Heading>
        </div>
        <CookiePreferences />
      </Container>
      <Footer />
    </main>
  );
} 