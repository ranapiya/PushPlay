// hooks/useIsRegistered.ts

import { useReadContract } from 'wagmi'
import { memoryArenaConfig } from '@/lib/contracts/memoryArena'
import { useAccount } from 'wagmi'

export const useIsRegistered = () => {
  const { address } = useAccount()

  const { data, isLoading, refetch } = useReadContract({
    ...memoryArenaConfig,
    functionName: 'isRegistered',
    args: [address],
    query: {
      enabled: !!address,
    },
  })

  return {
    isRegistered: Boolean(data),
    isLoading,
    refetch,
  }
}
