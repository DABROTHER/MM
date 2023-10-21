import { SetStateAction } from 'react'

import { CollectionCollectedItem, CollectionItem } from 'api-services/interfaces/profileCollected'
import { ResultingFilterProfileFinal } from 'hooks/apis/useProfileFinal'
import { AnyFunction } from 'interfaces'
export interface ProfileFinalTemplateProps {
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  ProfileFinalData: DataCollection[]
  isLoadingCollection: boolean
  hasMoreCollection: boolean
  isFetchingNextCollection: boolean
  fetchMoreCollection: AnyFunction
  isRefetching: boolean
  onSetTab: (type: string) => void
  isLoadingCollectionDetail: boolean
  collectionDetail: CollectionDetailsData
  ProfileCreatData: CollectionItem[]
  isLoadingCollectedTab: boolean
  CollectedTabData: CollectionCollectedItem
  onChangeFilter: (filter: FilterValues) => void
  onClickEvent: (selectedValue: string) => void
  onSortByPrice: (data: ExploreBlock) => void
  onChangePrice: (price: number[]) => void
  onSearch: (searchValue: string) => void
  setFilters: React.Dispatch<SetStateAction<ResultingFilterProfileFinal>>
  filters: ResultingFilterProfileFinal
}

type FilterValues = {
  [key: string]: string | boolean
}
export interface NftItem {
  _id: string
  name: string
  fileUrl: string
  // Add other properties as needed
}
export interface NftCollection {
  name: string
  nfts: NftItem[]
}
