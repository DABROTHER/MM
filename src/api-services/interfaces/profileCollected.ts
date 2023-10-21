export interface CollectedQuery {
  wallet_address?: string
}
export interface CollectedQuery {
  wallet_address?: string
}
export interface NftItem {
  _id: string
  fileUrl: string
  name: string
}
export interface CollectionItem {
  _id: string
  name: string
  nfts: NftItem[]
}
export interface CollectionCollectedItem {
  filter(arg0: (item: any) => any): import('react').SetStateAction<CollectionCollectedItem>
  map(arg0: (item: CollectionCollectedItem, index: number) => import('react').JSX.Element): unknown
  _id: string
  name: string
  slug: string
  ethPrice: number
  floorPrice: number
  totalNft: number
  listed: number
}
