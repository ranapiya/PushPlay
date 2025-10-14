'use client';

import { Brain, Zap, Trophy, Users, Globe, Shield } from 'lucide-react';

const GAME_FEATURES = [
  {
    icon: Brain,
    title: 'Cognitive Mastery',
    description: 'Challenge your mind with unique cards that test memory and adaptability in dynamic arenas.'
  },
  {
    icon: Zap,
    title: 'Lightning Reflexes',
    description: 'Race against the clock to secure leaderboard glory with pixel-perfect precision and speed.'
  },
  {
    icon: Trophy,
    title: 'On-Chain Champions',
    description: 'Connect your wallet and etch your name in memory history—secured on-chain for all to admire.'
  },
  {
    icon: Users,
    title: 'Skill-Based Progression',
    description: 'Level up by mastering each arena, unlock achievements, and climb the global leaderboard.'
  },
  {
    icon: Globe,
    title: 'Dynamic Arenas',
    description: 'Play in beautifully crafted arenas with smooth animations and responsive gameplay.'
  },
  {
    icon: Shield,
    title: 'Secure & Gasless',
    description: 'Enjoy safe matchmaking and gasless matches while your wallet stays in control.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Where memory meets mastery in the ultimate <span className="gradient-text">card-matching challenge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into an elegant playground of cognitive challenges. Test your memory, compete with players worldwide, and claim your place among the champions in this beautifully crafted Web3 experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 7">
          {GAME_FEATURES.map((feature, index) => (
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
