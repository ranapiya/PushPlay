// hooks/usePlayer.ts
import { useReadContract } from "wagmi";
import { memoryArenaConfig } from "@/lib/contracts/memoryArena";
import { useAccount } from "wagmi";

export const usePlayer = () => {
  const { address } = useAccount();

  const { data, isLoading, refetch } = useReadContract({
    ...memoryArenaConfig,
    functionName: "players",
    args: address ? [address] : undefined,
  });

  const typedData = data as readonly [string, bigint, boolean] | undefined;

  const name = typedData?.[0] ?? null;
  const score = typedData ? Number(typedData[1]) : null;
  const isRegistered = typedData ? typedData[2] : false;

  return {
    name,
    score,
    isRegistered,
    isLoading,
    refetch,
  };
};