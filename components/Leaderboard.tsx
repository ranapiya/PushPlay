// components/Leaderboard.tsx
"use client";

import React from "react";
import { useLeaderboard } from "@/hooks/useLeaderboard";

export default function Leaderboard() {
  const { leaderboard, isLoading, refetch } = useLeaderboard();

  return (
    <div className="max-w-md mx-auto p-4 bg-white/5 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Leaderboard</h3>
        <button
          className="text-sm px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600"
          onClick={() => refetch()}
        >
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : leaderboard && leaderboard.length > 0 ? (
        <ol className="space-y-2">
          {leaderboard.map((p, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-2 rounded-md bg-slate-800/30"
            >
              <span className="font-medium">{i + 1}. {p.name || "Unnamed"}</span>
              <span className="text-sm">{p.score}</span>
            </li>
          ))}
        </ol>
      ) : (
        <div>No players yet</div>
      )}
    </div>
  );
}
