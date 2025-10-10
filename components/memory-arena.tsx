"use client"

import { useState } from "react"
import Header from "@/components/Header"
import LandingPage from "@/components/LandingPage"
import GameBoard from "./GameBoard/game-board"


export default function MemoryArena() {
  const [currentView, setCurrentView] = useState<"landing" | "game" | "leaderboard">("landing")


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
     

      <Header
        
        onHomeClick={() => setCurrentView("landing")}
      />

      <main className="relative z-10 container mx-auto px-6 py-12">
        {currentView === "landing" && <LandingPage onStartGame={() => setCurrentView("game")} />}
        {currentView === "game" && (
          <GameBoard
            onBackToHome={() => setCurrentView("landing")}
          />
        )}
      </main>
    </div>
  )
}
