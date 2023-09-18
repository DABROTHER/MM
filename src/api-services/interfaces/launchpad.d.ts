interface LaunchpadListResponse {
  data: LaunchpadList
  message: string
  status: boolean
  code: boolean
}
interface LaunchpadBannerListResponse {
  data: LaunchpadData[]
  message: string
  status: boolean
  code: boolean
}
interface LaunchpadList {
  list: LaunchpadData[]
  newest: LaunchpadData[]
}
interface LaunchpadData {
  _id: string
  collectionId: CollectionId
  isDeleted: boolean
  end: string
  price: number
  url: string
  start: string
  __v: 0
}
interface CollectionId {
  _id: string
  name: string
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
  nft: [string, string, string, string]
  trendingCount: number
}

interface LaunchPadQuery {
  page_number: number
  page_size: number
}
