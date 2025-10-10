'use client';

import { Button } from '@/components/ui/button';
import { Wallet, ArrowRight, Github } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Step into the <span className="gradient-text">PushPlay Arena</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Where memory meets mastery. Connect your wallet, test your reflexes, and climb the on-chain leaderboard in the ultimate card-matching challenge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 smooth-transition shadow-xl hover:shadow-2xl rounded-full text-base"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base hover:border-primary smooth-transition"
              asChild
            >
              <a
                href="https://github.com/ranapiya/PushPlay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-16 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} PushPlay by Priya Rana — All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
