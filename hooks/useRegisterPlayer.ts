// hooks/useRegisterPlayer.ts

import { useWriteContract } from 'wagmi'
import { memoryArenaConfig } from '@/lib/contracts/memoryArena'
import { toast } from 'sonner'

export const useRegisterPlayer = () => {
  const { writeContractAsync, isPending } = useWriteContract();

  const register = async (name: string) => {
    if (!name || name.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }

    try {
      const tx = await writeContractAsync({
        ...memoryArenaConfig,
        functionName: "registerPlayer",
        args: [name],
      });
      // tx may be a transaction object or a hash depending on setup; try to wait if possible
      if (tx && typeof (tx as any).wait === "function") {
        await (tx as any).wait();
      }
      toast.success("Registered on-chain");
      return tx;
    } catch (err: any) {
      console.error("Register failed:", err);
      toast.error(err?.message ?? "Registration failed");
      throw err;
    }
  };

  return { register, isPending};
};