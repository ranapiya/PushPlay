import { type Chain } from 'viem'

export const pushChainDonutTestnet: Chain = {
  id: 42101,
  name: 'Push Chain Donut Testnet',
  nativeCurrency: {
    name: 'Push Coin',
    symbol: 'PC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://evm.rpc-testnet-donut-node1.push.org/'],
    },
    public: {
      http: ['https://evm.rpc-testnet-donut-node2.push.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Push Donut Explorer',
      url: 'https://donut.push.network',
    },
  },
  testnet: true,
}
