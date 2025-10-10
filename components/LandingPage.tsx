'use client';

import { Button } from '@/components/ui/button';
import { Wallet, ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GameHighlightsSection } from "@/components/trust-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CTASection } from "@/components/cta-section";

const SAMPLE_CARDS = [
  {
    id: 1,
    name: 'Flip Card',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600',
    
  },
  {
    id: 2,
    name: 'Swap Card',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600',
    
  },
  {
    id: 3,
    name: 'On Chain Card',
    image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600',
    
  },
];

export default function LandingPage({ onStartGame }: { onStartGame: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SAMPLE_CARDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🟣 HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 🧠 Text Section */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  PushPlay <span className="gradient-text">On Chain Arena</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Flip, match, and win on Push Chain — the universal cross-chain on-chain game.
                  Deploy once, play anywhere, no chain switching required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={onStartGame}
                  size="lg"
                  className="gradient-primary text-white hover:opacity-90 smooth-transition shadow-xl hover:shadow-2xl rounded-full text-base"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Enter in Playground
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base hover:border-primary smooth-transition"
                >
                  Explore Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-cyan-500"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">200+</span> On Push Chain Players
                </div>
              </div>
            </div>

            {/* 🪞 NFT Carousel */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                {SAMPLE_CARDS.map((nft, index) => {
                  const offset = (index - activeIndex + SAMPLE_CARDS.length) % SAMPLE_CARDS.length;
                  const zIndex = SAMPLE_CARDS.length - Math.abs(offset);
                  const scale = offset === 0 ? 1 : 0.85 - Math.abs(offset) * 0.1;
                  const translateX = offset * 120;
                  const opacity = offset === 0 ? 1 : 0.5;

                  return (
                    <div
                      key={nft.id}
                      className="absolute w-80 h-96 smooth-transition"
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale}) rotateY(${offset * -10}deg)`,
                        zIndex,
                        opacity,
                      }}
                    >
                      <div className="glass rounded-2xl overflow-hidden shadow-2xl hover-lift h-full">
                        <div className="relative h-full">
                          <img
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                            <h3 className="text-xl font-semibold text-white">{nft.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 OTHER SECTIONS - stack vertically */}
      <Features />
      <HowItWorks />
      <CTASection />
    </>
  );
}
