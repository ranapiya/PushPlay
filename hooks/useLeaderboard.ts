// hooks/useLeaderboard.ts

import { useReadContract } from 'wagmi'
import { memoryArenaConfig } from '@/lib/contracts/memoryArena'

export const useLeaderboard = () => {
  const { data, isLoading, refetch } = useReadContract({
    ...memoryArenaConfig,
    functionName: "getLeaderboard",
    args: [],
  });

  // getLeaderboard returns (string[] names, uint256[] scores)
  let list: { name: string; score: number }[] = [];

  if (data) {
    const names = (data as any)[0] as string[];
    const scores = (data as any)[1] as bigint[] | number[];
    list = names.map((n, i) => ({
      name: n,
      score: Number(scores[i] ?? 0),
    }));
    // sort descending by score
    list.sort((a, b) => b.score - a.score);
  }

  return {
    leaderboard: list,
    isLoading,
    refetch,
  };
};