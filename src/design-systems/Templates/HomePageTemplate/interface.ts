import { SlideCount } from 'design-systems/Molecules/Carousel/interface'

export interface HomePageTemplateProps {
  launchpad: HomeLaunchpadList[]
  trending: HomeTrendingCategoryList[]
  spotLight: HomeSpotlightList[]
  collectionTable: collectionTableType[]
  collectionTop: collectionTableType[]
  isLoadingTrending?: boolean
  isLoadingLaunchpad?: boolean
  isLoadingCollection?: boolean
  isLoadingCollectionTop?: boolean
  isLoadingSpotLight?: boolean
  setQuery?: React.Dispatch<React.SetStateAction<CollectionTableListQuery>>
  query: CollectionTableListQuery
  onLike?: (launchPadId: string) => void
  isSigned: boolean
  isLoadingLike: boolean
}
export interface ColsProps {
  trendingCols: SlideCount
  launchpadCols: SlideCount
  galleryCols: SlideCount
  NFTCols: SlideCount
}
