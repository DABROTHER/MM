import { MM_BLOCKCHAIN_NETWORK } from './constant'

import { AddressString } from 'interfaces'
import ABIs from 'abis'
export const NULL_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MARKETPLACE_CONTRACT_ADDRESS_LIST: MarketplaceContractABISList = {
  'erc-721': '0xF75f85a082Fb000daFc4337d278083D0728eF154',
  'erc-1155': '0xF75f85a082Fb000daFc4337d278083D0728eF154',
  'polygon-erc-721': '0xaddress_for_polygon_marketplace',
  'polygon-erc-1155': '0xaddress_for_polygon_marketplace',
  'solana-erc-721': '0xaddress_for_solana_marketplace',
  'solana-erc-1155': '0xaddress_for_solana_marketplace',
} as const
type MarketplaceContractABISList = {
  [key in TypeNFT]: any
}
type MarketplaceMintContractAddressList = {
  [key in TypeNFT]: AddressString
}
type MarketplaceMintContractABISList = {
  [key in TypeNFT]: any
}
export const MARKETPLACE_MINT_CONTRACT_ADDRESS_LIST: MarketplaceMintContractAddressList = {
  'erc-721': '0x956738E782471AF93373b94D693A9783C50eac39',
  'erc-1155': '0x6D279bF9D27f5193b4AC4309b7a376054315ec98',
  'polygon-erc-721': '0xaddress_for_polygon_erc_721',
  'polygon-erc-1155': '0xaddress_for_polygon_erc_1155',
  'solana-erc-721': '0xaddress_for_solana_erc_721',
  'solana-erc-1155': '0xaddress_for_solana_erc_1155',
} as const
export const MARKETPLACE_MINT_CONTRACT_ABIS_LIST: MarketplaceMintContractABISList = {
  'erc-721': ABIs.MarketPlaceERC721ABI,
  'erc-1155': ABIs.MarketPlaceERC1155ABI,
  'polygon-erc-721': 'ABIS_for_polygon_erc_721',
  'polygon-erc-1155': 'ABIS_for_polygon_erc_1155',
  'solana-erc-721': 'ABIS_for_solana_erc_721',
  'solana-erc-1155': 'ABIS_for_solana_erc_1155',
} as const
export const MARKETPLACE_CONTRACT_ABIS_LIST: MarketplaceMintContractABISList = {
  'erc-721': ABIs.MarketplaceABI,
  'erc-1155': ABIs.MarketplaceABI,
  'polygon-erc-721': 'ABIS_for_polygon_erc_721',
  'polygon-erc-1155': 'ABIS_for_polygon_erc_1155',
  'solana-erc-721': 'ABIS_for_solana_erc_721',
  'solana-erc-1155': 'ABIS_for_solana_erc_1155',
} as const

export type TypeNFT =
  | 'polygon-erc-1155'
  | 'polygon-erc-721'
  | 'erc-1155'
  | 'erc-721'
  | 'solana-erc-721'
  | 'solana-erc-1155'

export const SINGLE_BLOCKCHAIN = ['polygon-erc-721', 'erc-721', 'solana-erc-721']
export const MULTI_BLOCKCHAIN = ['polygon-erc-1155', 'erc-1155', 'solana-erc-1155']

export const MARKETPLACE_MINT_CONTRACT_ADDRESS = (type: TypeNFT) => MARKETPLACE_MINT_CONTRACT_ADDRESS_LIST[type]
export const MARKETPLACE_MINT_CONTRACT_ABIS = (type: TypeNFT) => MARKETPLACE_MINT_CONTRACT_ABIS_LIST[type]

export const PUT_ON_MARKETPLACE_TYPE = [
  { name: 'seller', type: 'address' },
  { name: 'contractAddress', type: 'address' },
  { name: 'royaltyFee', type: 'uint256' },
  { name: 'royaltyReceiver', type: 'address' },
  { name: 'paymentToken', type: 'address' },
  { name: 'basePrice', type: 'uint256' },
  { name: 'listingTime', type: 'uint256' },
  { name: 'expirationTime', type: 'uint256' },
  { name: 'nonce', type: 'uint256' },
  { name: 'tokenId', type: 'uint256' },
  { name: 'orderType', type: 'uint8' },
  { name: 'uri', type: 'string' },
  { name: 'objId', type: 'string' },
] as const

export const SETTINGS = {
  name: 'Modern Museum',
  platformFee: 2.5,
  version: '1.0.1',
} as const

export const PAYMENT_TOKEN = '0x0000000000000000000000000000000000000000'

export const AUCTION_TYPE: AuctionType[] = ['1', '2', '3']
export type AuctionType = '1' | '2' | '3'
