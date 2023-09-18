interface ExploreBlockChainResponse {
  data: ExploreBlock[]
  message: string
  success: boolean
}
interface ExploreBlock {
  id: string
  name: string
  symbol?: string
  v?: number
  slug?: string
  imageUrl?: string
  greyImageUrl?: string
}
interface ExploreCategoryResponse {
  data: ExploreBlock[]
  message: string
  success: boolean
}
interface ExploreListResponse {
  data: ExploreListData[]
  message: string
  success: boolean
}
interface ExploreListData {
  _id: string
  name: string
  slug: string
  address: string
  chainId: number
  creator: string
  supply: number
  royalties: number
  externalLink: string
  description: string
  trending: boolean
  category: string
  symbol: string
  img: string
  __v: number
  tags: string
  paymentToken: string
  displayTheme: string
  isSensitive: boolean
  logoImage: string
  featureImage: string
  bannerImage: string
  createdAt: string
  trendingCount: number
  categoryId: ExploreCategory
  blockChainId: ExploreBlock
  creatorEarning: CreatorEarning[]
  nfts: NFTData[]
  floorprice: FloorPrice
}
interface NFTData {
  id: string
  fileUrl: string
  name: string
}
interface FloorPrice {
  $numberDecimal: string
}
interface CreatorEarning {
  walletAddress: string
  percentage: number
  id: string
}
