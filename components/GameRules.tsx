"use client"
import React from "react";

const GameRules = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
        🧠 PlayPush – How to Play
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🎯 Objective</h2>
        <p className="text-gray-600 leading-relaxed">
          Your mission is to test and improve your memory by matching pairs of cards
          as quickly as possible. The faster you complete the game, the higher your
          score!
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📜 Rules</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Click on a card to flip it over.</li>
          <li>Find the matching card by remembering previous flips.</li>
          <li>You can only flip two cards at a time.</li>
          <li>Matched pairs stay revealed, unmatched pairs flip back.</li>
          <li>Complete the game in the shortest time possible to earn a high score.</li>
          <li>Cheating, refreshing mid-game, or leaving will reset your progress.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🏆 Rewards</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          Every victory in the arena earns you bragging rights, and depending on the
          event or season, you may also unlock:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>🎁 In-game badges and titles.</li>
          <li>💎 Token rewards for top scorers of the day/week.</li>
          <li>🔥 Access to special themed challenges.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">💡 Tips for Success</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Focus on remembering positions instead of random guessing.</li>
          <li>Start with the corners and work inward for better recall.</li>
          <li>Practice regularly to improve speed and memory retention.</li>
        </ul>
      </section>

      <div className="mt-8 text-center">
        
      </div>
    </div>
  );
};

export default GameRules;
