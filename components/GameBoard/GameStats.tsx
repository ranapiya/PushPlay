// components/GameBoard/GameStats.tsx
import { Timer } from "lucide-react"

export default function GameStats({ time, moves, matchedPairs }: { time: number; moves: number; matchedPairs: number }) {
  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`
  return (
    <div className="flex justify-center items-center space-x-8 text-lg">
      <div className="flex items-center space-x-3 bg-white/5 rounded-xl px-4 py-2">
        <Timer className="w-5 h-5 text-violet-400" />
        <span className="text-white font-medium">{formatTime(time)}</span>
      </div>
      <div className="text-amber-400 font-medium">Moves: {moves}</div>
      <div className="text-emerald-400 font-medium">Pairs: {matchedPairs-1}/8</div>   {/*-------------------- */}
    </div>
  )
}
