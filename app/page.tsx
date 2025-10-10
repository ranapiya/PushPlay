"use client";

import { useState } from "react";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import GameBoard from "@/components/GameBoard/game-board";
import { TrustSection } from "@/components/trust-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CTASection } from "@/components/cta-section";

export default function MemoryArenaPage() {
  const [currentView, setCurrentView] = useState<
    "landing" | "game" | "leaderboard"
  >("landing");

  return (
    <main className="min-h-screen">
      <Header onHomeClick={() => setCurrentView("landing")} />

      
        {currentView === "landing" && (
          <LandingPage onStartGame={() => setCurrentView("game")} />
        )}
        {currentView === "game" && (
          <GameBoard onBackToHome={() => setCurrentView("landing")} />
        )}
    </main>
  );
}
