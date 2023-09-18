import { SetStateAction } from 'react'

export interface CollectionFilterProps {
  onClick?: () => void
  onDesign?: React.Dispatch<SetStateAction<string>>
  onMoffClick?: () => void
  moff: boolean
  category?: ExploreBlock
  onSortByPrice: (data: ExploreBlock) => void
  totalCOunt: number
  onSearch: (searchValue: string) => void
}
