// hooks/useSubmitScore.ts

import { useWriteContract } from 'wagmi'
import { memoryArenaConfig } from '@/lib/contracts/memoryArena'

import { toast } from 'sonner'

export const useSubmitScore = () => {
  const { writeContractAsync, isPending } = useWriteContract();

  const submitScore = async (newScore: number) => {
    try {
      const tx = await writeContractAsync({
        ...memoryArenaConfig,
        functionName: "submitScore",
        args: [BigInt(newScore)], // submit as bigint if needed
      });

      if (tx && typeof (tx as any).wait === "function") {
        await (tx as any).wait();
      }

      toast.success("Score submitted on-chain");
      return tx;
    } catch (err: any) {
      console.error("Submit score error:", err);
      // contract will revert if newScore <= existing score; show that message if present
      toast.error(err?.message ?? "Score submission failed");
      throw err;
    }
  };

  return { submitScore, isPending };
};