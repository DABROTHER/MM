import { StringMappingType } from 'typescript'

import { MM_NETWORKS } from 'utils'

type AddressString = `0x${string}`

type AnyFunction = (...args: any[]) => any

type AnyObject<T = any> = Record<string, T>
type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R
type WithPaginationQuery = {
  pageNumber: number
  pageSize: number
}

type WithPaginationRequest = {
  page_number: number
  page_size: number
}
type ExploreFilters = {
  categoryId: string
  blockChainId?: string
  trending?: string | boolean
}
type CollectionPriceVolume = {
  startDateTime: string
  walletAddress: string
  endDateTime: string
}
type CollectionPriceVolume = {
  startDateTime: string
  walletAddress: string
  endDateTime: string
}
type CollectionPriceDistributionPayload = {
  startTime: string
  walletAddress: string
  endTime: string
}
type CollectionFilters = {
  slug: string
  tab: string
  sortBy: string
  minPrice: string
  maxPrice: string
  traits: { [key: string]: string[] }
  search: string
  event: string[]
}
type profileFinalFilters = {
  tab: string
  sortBy: string
  minPrice: string
  maxPrice: string
  traits: { [key: string]: string[] }
  search: string
  event: string[]
  time: string
  trending: boolean
  quantity: string
  blockChainId: string
}
type profileFinalDetails = {
  filter: boolean
  walletAddress: string
}
type CollectionDetails = {
  slug: string
  filter: boolean
}
type CollectedTabFinal = {
  walletAddress: string
}

type WalletTypes = 'METAMASK' | 'COINBASE' | 'WALLET-CONNECTION' | 'PHANTOM'
