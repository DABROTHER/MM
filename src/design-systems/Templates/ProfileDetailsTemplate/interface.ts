import { Dispatch, SetStateAction } from 'react'

export interface ProfileDetailsProps {
  className?: string
  onSetCategory: (type: string) => void
  categoryType: string
  trendingCardInfo: TrendingCardInfo[]
  loading: boolean
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

export interface TrendingCardInfo {
  [key: string]: string
}
