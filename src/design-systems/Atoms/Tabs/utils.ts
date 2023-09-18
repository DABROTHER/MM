import { Tab } from './interface'

import { IconSolana, IconPolygon, IconEther } from 'design-systems/Atoms/Icons'

export const tabs = [
  { value: 'ether', Label: IconEther, type: 'image' },
  { value: 'solana', Label: IconSolana, type: 'image' },
  { value: 'polygon', Label: IconPolygon, type: 'image' },
]

export const timeTab: Tab[] = [
  { Label: '24h', value: '1', type: 'string' },
  { Label: '7d', value: '7', type: 'string' },
  { Label: '30d', value: '30', type: 'string' },
  { Label: 'All Time', value: 'alltime', type: 'string' },
]

export const trendingTab: Tab[] = [
  { Label: 'Trending', value: 'true', type: 'string' },
  { Label: 'Top', value: 'false', type: 'string' },
]

export const yesNoToggle: Tab[] = [
  { Label: 'Yes', value: 'Yes', type: 'string' },
  { Label: 'No', value: 'No', type: 'string' },
]
