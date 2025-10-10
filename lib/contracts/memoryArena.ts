// lib/contracts/memoryArena.ts
import type { Address } from "viem";
import { memoryArenaAbi } from "@/lib/abi/memoryArena";

export const MEMORY_ARENA_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as Address;

export const memoryArenaConfig = {
  address: MEMORY_ARENA_ADDRESS,
  abi: memoryArenaAbi,
};
