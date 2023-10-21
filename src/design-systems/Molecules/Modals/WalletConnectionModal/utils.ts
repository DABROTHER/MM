import { WalletTypes } from 'interfaces'
import { DEFAULT_ETHEREUM_CHAIN_NETWORK, DEFAULT_POLYGON_CHAIN_NETWORK, DEFAULT_SOLANA_CHAIN_ID } from 'utils/web3'

export const NETWORK_CATEGORY = [
  { name: 'Ethereum', id: DEFAULT_ETHEREUM_CHAIN_NETWORK },
  { name: 'Polygon', id: DEFAULT_POLYGON_CHAIN_NETWORK },
  { name: 'Solana', id: DEFAULT_SOLANA_CHAIN_ID },
]

export const WALLET_LIST: { name: string; id: WalletTypes }[] = [
  { name: 'MetaMask', id: 'METAMASK' },
  { name: 'CoinBase', id: 'COINBASE' },
  { name: 'WalletConnect', id: 'WALLET-CONNECTION' },
  { name: 'Phantom', id: 'PHANTOM' },
]
