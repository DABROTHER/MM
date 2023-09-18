import { SlideCount } from 'design-systems/Molecules/Carousel/interface'

export interface HomePageTemplateProps {
  NFT: any
  launchpad?: any
  trending?: any
  trendingArts?: any
  spotLight?: any
  collectionTable?: any
  collectionTop?: any
  isLoadingTrending?: boolean
  isLoadingLaunchpad?: boolean
  isLoadingCollection?: boolean
  isLoadingCollectionTop?: boolean
  isLoadingSpotLight?: boolean
  setQuery?: React.Dispatch<React.SetStateAction<CollectionTableListQuery>>
  query?: CollectionTableListQuery
}
export interface ColsProps {
  trendingCols: SlideCount
  launchpadCols: SlideCount
  galleryCols: SlideCount
  NFTCols: SlideCount
}
