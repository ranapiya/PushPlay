"use client";

import {useState, useMemo } from "react";
import GameStats from "./GameStats";
import GameGrid from "./GameGrid";
import GameControls from "./GameControls";
import GameCompleted from "./GameCompleted";
import GameCard from "./GameCard";
import { useAppKitAccount } from "@reown/appkit/react";
import { useGameLogic } from "./useGameLogic";
import { useSubmitScore } from "@/hooks/useSubmitScore";
import { toast } from "sonner";
import GameRules from "../GameRules";
import { ConfettiSideCannons } from "../ConfettiSideCannons";
export default function GameBoard({ onBackToHome }: { onBackToHome: () => void }) {
  
  // Stable card symbols to prevent re-renders
  const cardSymbols = useMemo(
    () => [
      "/8.jpeg", "/1.jpg", "/2.jpg", "/3.jpg",
      "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"
    ],
    []
  );

  const {
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
  } = useGameLogic(cardSymbols);

  const [showRules, setShowRules] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [fakeSuccessMsg, setFakeSuccessMsg] = useState(false);
  const [showWalletPopup, setShowWalletPopup] = useState(false);
  const [name, setName] = useState("");
  const { address, isConnected } = useAppKitAccount();
  const { submitScore: submitOnChainScore } = useSubmitScore();

  // Handle card clicks
  const handleCardClick = (id: number) => {
  if (!isGameActive) return;

  const clickedCard = cards.find((c) => c.id === id);
  if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

  // Don’t allow clicking while two cards are flipped
  if (flippedCards.length === 2) return;

  const newFlipped = [...flippedCards, id];
  const newCards = cards.map((card) =>
    card.id === id ? { ...card, isFlipped: true } : card
  );

  setCards(newCards);
  setFlippedCards(newFlipped);

  // When 2 cards are flipped, check for match
  if (newFlipped.length === 2) {
    setMoves((prev) => prev + 1);
    const [first, second] = newFlipped;

    setTimeout(() => {
      setCards((prevCards) => {
        const firstCard = prevCards.find((c) => c.id === first);
        const secondCard = prevCards.find((c) => c.id === second);

        if (firstCard && secondCard && firstCard.symbol === secondCard.symbol) {
          const updatedCards = prevCards.map((c) =>
            c.id === first || c.id === second ? { ...c, isMatched: true } : c
          );

          // ✅ Update matchedPairs and check completion
          setMatchedPairs((prev) => {
            const newCount = prev + 1;
            const totalPairs = cardSymbols.length*2; // 8 in your case
            if (newCount === totalPairs) {
              setIsGameActive(false);
              // small delay before marking completed (optional)
              setTimeout(() => {
                setGameCompleted(true);
              }, 400);
            }
            return newCount;
          });

          return updatedCards;
        } else {
          // ❌ Not a match — flip them back
          return prevCards.map((c) =>
            c.id === first || c.id === second ? { ...c, isFlipped: false } : c
          );
        }
      });

      setFlippedCards([]);
    }, 800);
  }
};

//--------------------------------------------------------------------------------------------------------------


  const handleStart = () => {
   
    setIsGameActive(true);
  };

  const handleOpenNameForm = () => setShowNameModal(true);

//---------------------------------------------------------------------------------------------------------------------------
  const handleSubmitName = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }
    setFakeSuccessMsg(true);
    setShowNameModal(false);

    try {
      await submitOnChainScore(moves);
      console.log("✅ Score submitted on-chain");
    } catch (err) {
      console.error("❌ Background submission failed:", err);
    }
  };





  return (
    <div className="max-w-4xl mx-auto space-y-12 relative pt-24 pb-24">
      <ConfettiSideCannons trigger={gameCompleted} />
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 ">
       PlayPush On-Chain Arena 
      </h2>

      {fakeSuccessMsg && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="rounded-xl p-6 max-w-sm w-full shadow-lg text-center flex flex-col items-center justify-center bg-black">
            <h2 className="text-lg text-green-500 font-semibold animate-pulse">
              ⏳ Submit on-chain so that you can receive tokens and rewards
            </h2>
            <h3 className="text-lg text-green-500 font-semibold animate-pulse">
              🎉 If you are in the top 4, you will receive tokens soon!
            </h3>
            <button
              onClick={() => setFakeSuccessMsg(false)}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-6"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => setShowRules(true)}
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 hover:from-violet-600 hover:via-purple-700 hover:to-pink-700 text-white transition"
        >
          📜 How to Play
        </button>
      </div>

      <GameStats time={time} moves={moves} matchedPairs={matchedPairs} />
      <GameGrid cards={cards} onCardClick={handleCardClick} CardComponent={GameCard} />


      <GameControls
        isGameActive={isGameActive}
        gameCompleted={gameCompleted}
        onStart={handleStart}
        onStop={() => setIsGameActive(false)}
        onReset={initializeGame}
        onHome={onBackToHome}
      />

      {gameCompleted && (
        <GameCompleted
          time={time}
          moves={moves}
          isConnected={isConnected}
          onSubmit={handleOpenNameForm}
        />
      )}

      {/* Rules Modal */}
      {showRules && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowRules(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl w-full overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <GameRules />
            <div className="text-center mt-4">
              <button
                onClick={() => setShowRules(false)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet popup */}
      {showWalletPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowWalletPopup(false)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Please connect your wallet first
            </h3>
            <button
              onClick={() => setShowWalletPopup(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Name Registration Modal */}
      {showNameModal && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowNameModal(false)}
        >
          <div
            className="bg-white text-black rounded-2xl shadow-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Enter Your Name</h3>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4 text-black bg-white"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowNameModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitName}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
