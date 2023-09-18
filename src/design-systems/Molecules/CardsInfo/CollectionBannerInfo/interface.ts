import { IconProps } from 'design-systems/Atoms/Icons/interface'

export interface CollectionBannerInfoProps {
  className?: string
  ExploreChildrenData: ExploreChildrenData[]
  iconClassName?: string
  stroke?: string
}
export interface ExploreChildrenData {
  url: string
  target: string
  Icon: React.FC<IconProps>
}
