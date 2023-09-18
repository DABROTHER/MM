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
  blockchainId?: string
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
}
type CollectionDetails = {
  _id: string
  filter: boolean
}
