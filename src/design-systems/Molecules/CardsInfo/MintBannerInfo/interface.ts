import { IconProps } from 'design-systems/Atoms/Icons/interface'

export interface MintBannerInfoProps {
  className?: string
  ExploreChildrenData: ExploreChildrenData[]
  iconClassName?: string
  stroke?: string
  type?: string
  categoryType?: string
}
export interface ExploreChildrenData {
  url: string
  target: string
  Icon: React.FC<IconProps>
}
