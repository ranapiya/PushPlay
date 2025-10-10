'use client';

import { GamepadIcon, Trophy, Clock, Users } from 'lucide-react';

export function GameHighlightsSection() {
  const highlights = [
    {
      title: "Universal Access",
      description: "Play anywhere on Push Chain without switching wallets or chains. One deployment, all users.",
      icon: <GamepadIcon className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Earn Rewards",
      description: "Compete, match cards, and earn tokens for top scores. The more you play, the more you win!",
      icon: <Trophy className="w-8 h-8 text-amber-400" />
    },
    {
      title: "Track Time & Moves",
      description: "Your skill matters! Beat the clock and complete matches efficiently to top the leaderboard.",
      icon: <Clock className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Global Leaderboard",
      description: "See your ranking worldwide and compete with players across chains in real-time.",
      icon: <Users className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <section className="py-16 border-y border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Play <span className="gradient-text">PushPlay?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Experience the ultimate cross-chain memory game. Flip, match, and earn while enjoying seamless gameplay.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
