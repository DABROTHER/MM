interface CollectionResponse {
  data: CollectionData
  message: string
  success: boolean
}
interface CollectionData {
  data: DataCollection[]
  totalCount: number
}
interface DataCollection {
  id: string
  fileUrl: string
  name: string
  description: string
  tokenId: number
  usdAmount: number
  highestBid: number
  bestOffer: number
  lastSale: number
  timeListed: string
  from: string
  to: string
  nftStatus: string
  tokenId: number
}

interface CollectionDetailsResponse {
  data: CollectionDetailsData
  message: string
  success: boolean
}

interface CollectionDetailsData {
  address: string
  bannerImage: string
  bestOffer: number
  chainId: number
  createdAt: string
  creator: string
  creatorEarningPercentage: number
  description: string
  displayTheme: string
  externalLink: string
  featureImage: string
  floorPrice: number
  id: string
  img: string
  isSensitive: false
  itemCount: number
  listed: number
  logoImage: string
  name: string
  noOfOwner: number
  paymentToken: string
  royalties: number
  slug: string
  supply: number
  symbol: string
  tags: string
  totalVolume: number
  trending: true
  trendingCount: number
  uniqueOwner: number
  updatedAt: string
  v: number
  floorprice: Floorprice
  filter: Filter
  creatorEarning: CreatorEarning[]
  categoryId: CategoryId
  blockChainId: BlockChainId
}
interface BlockChainId {
  greyImageUrl: string
  id: string
  imageUrl: string
  name: string
  symbol: string
  v: number
}
interface Floorprice {
  numberDecimal: string
}
interface Filter {
  traits: Traits
  nftStatus: string[]
}
interface Traits {
  [key: string]: string[]
}
interface CreatorEarning {
  id: string
  percentage: number
  walletAddress: string
}
interface CategoryId {
  id: string
  imageUrl: string
  name: string
  slug: string
  trending: boolean
  v: number
}

interface CollectionDataOwnerTop50Response {
  data: DataOwnerTop50[]
  message: string
  success: boolean
}
interface DataOwnerTop50 {
  collectionAddress: string
  itemCount: number
  nftOwner: string
  percentage: number
  totalItems: number
  name: string
  image: string
}
interface CollectionVolumePriceResponse {
  data: VolumePriceData
  message: string
  success: boolean
}
interface CollectionCollectedTabResponse {
  data: CollectionCollectedItem
  message: string
  success: boolean
}
interface VolumePriceData {
  Range: number[]
  data: PriceData[]
}
interface PriceData {
  avgPrice: number
  dateAndTime: string
  sale: number
  id: string
}
interface CollectionDataOwnerResponse {
  success: boolean
  message: string
  data: FormattedDistributionItem[]
}

interface FormattedDistributionItem {
  0: string
  1: string | number
  2:
    | {
        type: 'string'
        role: 'annotation'
      }
    | string
}

interface CollectionPriceDistributionResponse {
  data: CollectionPriceDistribution
  message: string
  success: boolean
}
interface CollectionPriceDistribution {
  offerData: [string, string | number]
  listingData: [string, string | number]
  range: number[]
}
