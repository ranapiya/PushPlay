'use client';

import { Wallet, ScanSearch, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: Wallet,
    step: '01',
    title: 'Connect Your Wallet',
    description: 'Link your wallet in seconds. We support all major wallet providers.'
  },
  {
    icon: ScanSearch,
    step: '02',
    title: 'Auto-Discovery',
    description: 'We automatically scan all supported chains to find your NFTs.'
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Enjoy Your Collection',
    description: 'Browse, organize, and share your complete NFT portfolio instantly.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get started in <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From connection to collection in under a minute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass rounded-2xl p-8 hover-lift smooth-transition text-center space-y-6 relative z-10 bg-background/80">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold shadow-xl">
                  {step.step}
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
