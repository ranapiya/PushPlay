'use client';

import { Layers, Shield, Zap, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Layers,
    title: 'Multi-Chain Support',
    description: 'View NFTs from Ethereum, Solana, Base, Polygon, and more - all in one place.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your wallet stays in your control. We never ask for private keys or seed phrases.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant sync and blazing-fast load times. No waiting, no chain switching.'
  },
  {
    icon: Globe,
    title: 'Universal Access',
    description: 'Access your collection from any device, anywhere. Always up-to-date.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything you need to{' '}
            <span className="gradient-text">manage your NFTs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most comprehensive NFT portfolio manager, built for collectors who demand the best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover-lift hover:border-primary/50 smooth-transition group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 smooth-transition">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
