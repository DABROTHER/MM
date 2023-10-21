interface NFTListQuery extends WithPaginationRequest {
  wallet_address?: string
  network_id?: MMNetworks
  type?: string
  redeemable?: boolean
}
interface NFTObject {
  chainId: number
  collection: string
  createdAt: number
  id: string
  isSale: boolean
  listing_time: number
  metadata: string
  name: string
  price: number
  seller: string
  seller_address: string
  token_address: string
  token_id: number
  type_sale: number
}
interface NFTAssetObject {
  address?: string
  category?: string
  chainId?: string
  createAt?: number
  creator?: string
  floor?: number
  id?: string
  img: string
  imgBanner?: string
  name: string
  supply?: number
  royalties?: number
  updateAt?: number
  symbol?: string
  slug: string
  banner?: string
  nfts: NFTObject[]
  bannerImage: string
  logoImage: string
  floorPrice: number
}
interface NFTListResponse {
  code: number
  data: NFTAssetObject[]
  message: string
  status: boolean
}
