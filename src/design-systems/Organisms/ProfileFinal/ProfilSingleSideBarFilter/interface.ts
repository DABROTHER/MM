import { SetStateAction } from 'react'

import { CollectionCollectedItem } from 'api-services/interfaces/profileCollected'
import { ResultingFilterProfileFinal } from 'hooks/apis/useProfileFinal'

export interface ProfilSingleSideBarFilterProps {
  isShow: boolean
  category: string
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  traits?: CollectionTraits
  onChangePrice: (price: number[]) => void
  CollectedTabData: CollectionCollectedItem
  onSearch: (searchValue: string) => void
  onChangeFilter: (filter: FilterValues) => void
  setFilters: React.Dispatch<SetStateAction<ResultingFilterProfileFinal>>
  onClickEvent: (selectedValue: string) => void
}
export interface CollectionTraits {
  [key: string]: string[]
}
type FilterValues = {
  [key: string]: string | boolean
}

export interface profileCollectionQuantity {
  id: string
  name: string
  value: string
}
