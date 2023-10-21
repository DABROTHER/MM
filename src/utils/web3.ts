import { polygonMumbai, polygon, mainnet, goerli } from 'wagmi/chains'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'

import { INFURA_ID, IS_PRODUCTION, MM_BLOCKCHAIN_NETWORK } from './constant'

import { IconEther, IconPolygon, IconSolana } from 'design-systems/Atoms/Icons'
export const CHAIN_IDS = {
  'mainnet': 1,
  'goerli': 5,
  'mumbai': 80001,
  'polygon': 137,
  'testnet': 'testnet',
  'mainnet-beta': 'mainnet-beta',
} as const
export const RPC_ENDPOINTS = {
  1: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  5: `https://goerli.infura.io/v3/${INFURA_ID}`,
  80001: `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`,
  137: `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`,
  'testnet': 'testnet',
  'mainnet-beta': 'mainnet-beta',
}
export type SupportedChainIds = keyof typeof RPC_ENDPOINTS

export const CHAIN_NAMES = {
  [CHAIN_IDS.mainnet]: 'Ethereum',
  [CHAIN_IDS.goerli]: 'Goerli',
  [CHAIN_IDS.polygon]: 'Polygon',
  [CHAIN_IDS.mumbai]: 'Mumbai',
  [CHAIN_IDS.testnet]: 'Solana Testnet',
  [CHAIN_IDS['mainnet-beta']]: 'Solana Mainnet',
} as const
export const BLOCKCHAIN_ID = {
  [CHAIN_IDS.mainnet]: MM_BLOCKCHAIN_NETWORK.ETHEREUM,
  [CHAIN_IDS.goerli]: MM_BLOCKCHAIN_NETWORK.ETHEREUM,
  [CHAIN_IDS.polygon]: MM_BLOCKCHAIN_NETWORK.POLYGON,
  [CHAIN_IDS.mumbai]: MM_BLOCKCHAIN_NETWORK.POLYGON,
  [CHAIN_IDS.testnet]: MM_BLOCKCHAIN_NETWORK.SOLANA,
  [CHAIN_IDS['mainnet-beta']]: MM_BLOCKCHAIN_NETWORK.SOLANA,
} as const

export const CHAIN_ICON = {
  [CHAIN_IDS.mainnet]: IconEther,
  [CHAIN_IDS.goerli]: IconEther,
  [CHAIN_IDS.polygon]: IconPolygon,
  [CHAIN_IDS.mumbai]: IconPolygon,
  [CHAIN_IDS.testnet]: IconSolana,
  [CHAIN_IDS['mainnet-beta']]: IconSolana,
} as const
export type SupportedNetworkIds = keyof typeof CHAIN_NAMES

export const SUPPORTED_MAINNET_CHAIN_IDS = [mainnet, polygon]
export const SUPPORTED_TESTNET_CHAIN_IDS = [goerli, polygonMumbai]
export const SUPPORTED_MAINNET_CHAIN_ID = [CHAIN_IDS.mainnet, CHAIN_IDS.polygon]
export const SUPPORTED_TESTNET_CHAIN_ID = [CHAIN_IDS.goerli, CHAIN_IDS.mumbai]
export const WAGMI_CHAINS = {
  [CHAIN_IDS.mainnet]: mainnet,
  [CHAIN_IDS.goerli]: goerli,
  [CHAIN_IDS.polygon]: polygon,
  [CHAIN_IDS.mumbai]: polygonMumbai,
}
export const SUPPORTED_CHAIN_ID = IS_PRODUCTION ? SUPPORTED_MAINNET_CHAIN_ID : SUPPORTED_TESTNET_CHAIN_ID
export const SUPPORTED_CHAIN_IDS = IS_PRODUCTION ? SUPPORTED_MAINNET_CHAIN_IDS : SUPPORTED_TESTNET_CHAIN_IDS

export const SUPPORTED_CHAIN_NAMES = SUPPORTED_CHAIN_ID.map(chainId => CHAIN_NAMES[chainId])

export const DEFAULT_ETHEREUM_CHAIN_ID = IS_PRODUCTION ? mainnet : goerli
export const DEFAULT_POLYGON_CHAIN_ID = IS_PRODUCTION ? polygon : polygonMumbai
export const DEFAULT_SOLANA_CHAIN_ID = IS_PRODUCTION ? WalletAdapterNetwork.Mainnet : WalletAdapterNetwork.Testnet
export const DEFAULT_ETHEREUM_CHAIN_NETWORK = IS_PRODUCTION ? CHAIN_IDS.mainnet : CHAIN_IDS.goerli
export const DEFAULT_POLYGON_CHAIN_NETWORK = IS_PRODUCTION ? CHAIN_IDS.polygon : CHAIN_IDS.mumbai

declare global {
  type ChainIds = keyof typeof CHAIN_NAMES
  type ChainNames = keyof typeof CHAIN_IDS
  type SupportedChainIds = (typeof SUPPORTED_CHAIN_IDS)[any]
  type SupportedChainNames = (typeof SUPPORTED_CHAIN_NAMES)[number]
}
