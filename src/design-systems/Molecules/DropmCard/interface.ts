import { SetStateAction } from 'react'

import { CollectionCollectedItem } from 'api-services/interfaces/profileCollected'
import { ResultingFilterProfileFinal } from 'hooks/apis/useProfileFinal'

export interface DropCardProps {
  className?: string
  title: string
  children?: React.ReactNode
  isSearch?: boolean
  isSearchProfile?: boolean
  onSearchCategory?: (data: string) => void
  sortBy?: boolean
  category?: string
  isHover?: boolean
  CollectionData?: CollectionCollectedItem
  onSearch?: (searchValue: string) => void
  onChangeFilter?: (filter: FilterValues) => void
  setFilters?: React.Dispatch<SetStateAction<ResultingFilterProfileFinal>>
}
type FilterValues = {
  [key: string]: string | boolean
}
