import { useState, useEffect, useCallback } from "react"

export interface GameCard {
  id: number
  symbol: string
  isFlipped: boolean
  isMatched: boolean
}

export const useGameLogic = (cardSymbols: string[]) => {
  const [cards, setCards] = useState<GameCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)
  const [isGameActive, setIsGameActive] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  const initializeGame = useCallback(() => {
    const shuffled = [...cardSymbols, ...cardSymbols].sort(() => Math.random() - 0.5)
    const newCards = shuffled.map((symbol, i) => ({
      id: i,
      symbol,
      isFlipped: false,
      isMatched: false,
    }))
    setCards(newCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setTime(0)
    setIsGameActive(false)
    setGameCompleted(false)
  }, [cardSymbols])

  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isGameActive && !gameCompleted) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [isGameActive, gameCompleted])

  // Game completion (dynamic pairs)
  useEffect(() => {
    if (matchedPairs === cardSymbols.length*2) {
      setIsGameActive(false)
      setGameCompleted(true)
    }
  }, [matchedPairs, cardSymbols.length])

  return {
    cards,
    setCards,
    flippedCards,
    setFlippedCards,
    matchedPairs,
    setMatchedPairs,
    moves,
    setMoves,
    time,
    isGameActive,
    setIsGameActive,
    gameCompleted,
     setGameCompleted,
    initializeGame,
  }
}
