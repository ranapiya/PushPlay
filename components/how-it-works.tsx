'use client';

import { Wallet, Play, Trophy } from 'lucide-react';

const STEPS = [
  {
    icon: Wallet,
    step: '01',
    title: 'Connect Your Wallet',
    description:
      'Begin your PushPlay journey by securely linking your wallet — no chain switching, no gas hassle.',
  },
  {
    icon: Play,
    step: '02',
    title: 'Start the Game',
    description:
      'Flip cards, test your memory, and race against time in dynamic arenas built on Push Chain.',
  },
  {
    icon: Trophy,
    step: '03',
    title: 'Climb the Leaderboard',
    description:
      'Submit your score on-chain and see your name rise among global champions',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative bg-muted/30 overflow-hidden">
      {/* Background gradient lights */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get started in{' '}
            <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jump into the world of PushPlay — connect, play, and prove your memory mastery on-chain.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktops */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass rounded-2xl p-8 hover-lift smooth-transition text-center space-y-6 relative z-10 bg-background/80 shadow-lg hover:shadow-primary/20">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold shadow-xl">
                  {step.step}
                </div>

                {/* Step Details */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mx-auto">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
