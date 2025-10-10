// components/GameBoard/GameControls.tsx
import { Button } from "@/components/ui/button"
import { RotateCcw, Home, Play } from "lucide-react"

export default function GameControls({
  isGameActive,
  gameCompleted,
  onStart,
  onStop,
  onReset,
  onHome,
}: {
  isGameActive: boolean
  gameCompleted: boolean
  onStart: () => void
  onStop: () => void
  onReset: () => void
  onHome: () => void
}) {
  return (
    <div className="flex justify-center space-x-4 flex-wrap gap-4">
      {!isGameActive && !gameCompleted && (
        <Button onClick={onStart} className="bg-emerald-500 hover:bg-emerald-600">
          <Play className="w-5 h-5 mr-2" /> Start Game
        </Button>
      )}
      {isGameActive && (
        <Button onClick={onStop} className="bg-red-500 hover:bg-red-600">
          Stop Game
        </Button>
      )}
      <Button onClick={onReset}><RotateCcw className="w-5 h-5 mr-2" /> Reset</Button>
      <Button onClick={onHome}><Home className="w-5 h-5 mr-2" /> Home</Button>
    </div>
  )
}
