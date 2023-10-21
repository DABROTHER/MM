import { SetStateAction } from 'react'

import { ResultingFilterProfileFinal } from 'hooks/apis/useProfileFinal'

export interface ProfileFinalFilterProps {
  onClick?: () => void
  onDesign?: React.Dispatch<SetStateAction<string>>
  onMoffClick?: () => void
  moff: boolean
  category?: ExploreBlock
  onSortByPrice: (data: ExploreBlock) => void
  totalCOunt: number
  onSearch: (searchValue: string) => void
  type: string
}
