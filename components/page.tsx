'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { HowItWorks } from '@/components/how-it-works';
import { TrustSection } from '@/components/trust-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <Features />
      <HowItWorks />
      <CTASection />
    </main>
  );
}
