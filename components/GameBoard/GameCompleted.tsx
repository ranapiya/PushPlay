// components/GameBoard/GameCompleted.tsx
import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"

export default function GameCompleted({ time, moves, isConnected, onSubmit }: { time: number; moves: number; isConnected: boolean; onSubmit: () => void }) {
  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`
  return (
    <div className="text-center p-8 bg-emerald-500/10 rounded-3xl space-y-6">
      <h3 className="text-3xl font-bold text-emerald-400">🎉 Congratulations!</h3>
      <p className="text-xl text-white/80">
        Time: <span className="font-bold">{formatTime(time)}</span>, Moves: <span className="font-bold">{moves}</span>
      </p>
      {isConnected ? (
        <Button onClick={onSubmit} className="bg-violet-600 hover:bg-violet-700">
          <Trophy className="w-5 h-5 mr-2" /> Submit Score
        </Button>
      ) : (
        <p className="text-amber-400 text-sm">Connect your wallet to submit score.</p>
      )}
    </div>
  )
}
