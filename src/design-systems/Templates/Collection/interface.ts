import { AnyFunction, CollectionPriceDistributionPayload, CollectionPriceVolume } from 'interfaces'

export interface CollectionPageTemplateProps {
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  collectionData: DataCollection[]
  isLoadingCollection: boolean
  hasMoreCollection: boolean
  isFetchingNextCollection: boolean
  fetchMoreCollection: AnyFunction
  isRefetching: boolean
  onSetTab: (type: string) => void
  isLoadingCollectionDetail: boolean
  collectionDetail: CollectionDetailsData
  isLoadingOwnersTop50: boolean
  getOwnersTop50Async: (walletAddress: { walletAddress: string }) => Promise<CollectionDataOwnerTop50Response>
  getOwnerDistributionAsync: (walletAddress: { walletAddress: string }) => Promise<CollectionDataOwnerResponse>
  getPriceVolumeAsync: (data: CollectionPriceVolume) => Promise<CollectionVolumePriceResponse>
  isLoadingPriceVolume: boolean
  onSortByPrice: (data: ExploreBlock) => void
  onChangePrice: (price: number[]) => void
  onCheckClick: (label: string, selectedValue: string) => void
  isLoadingOwnerDistribution: boolean
  getPriceDistributionAsync: (data: CollectionPriceDistributionPayload) => Promise<CollectionPriceDistributionResponse>
  isLoadingPriceDistribution: boolean
  totalCOunt: number
  onSearch: (searchValue: string) => void
}
