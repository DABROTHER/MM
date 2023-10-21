interface CollectionTableListQuery {
  trending: boolean
  blockChainId: string
  time: string
  walletAddress?: string
}
interface HomeLaunchpadListResponse {
  data: HomeLaunchpadList[]
  message: string
  status: boolean
  code: boolean
}
interface HomeLaunchpadList {
  end: string
  likeCount: number
  id: string
  isLike: boolean
  collectionId: collectionId
}
interface collectionId {
  bannerImage: string
  creator: string
  featureImage: string
  logoImage: string
  name: string
  id: string
}
interface HomeTrendingCategoryResponse {
  data: HomeTrendingCategoryList[]
  message: string
  status: boolean
  code: boolean
}
interface HomeTrendingCategoryList {
  category: string
  collections: HomeTrendingCollections[]
}
interface HomeTrendingCollections {
  floorPrice: number
  logoImage: string
  name: string
  sales: number
  slug: string
  volumes: number
  id: string
}

interface HomeSpotlightResponse {
  data: HomeSpotlightList[]
  message: string
  status: boolean
  code: boolean
}
interface HomeSpotlightList {
  floorPrice: number
  likeCount: number
  name: string
  sales: number
  slug: string
  volumes: number
  id: string
  nfts: NFTDataInn[]
}
interface HomeCollectionResponse {
  data: collectionTableType[]
  message: string
  status: boolean
  code: boolean
}
