interface NFTDataInn {
  _id?: string
  fileUrl: string
  name: string
}
export interface SpotLightCardProps {
  className?: string
  name?: string
  likeNumber?: number
  sales?: string
  volume?: string
  floor?: string
  userCreator?: userCreator
  nfts?: NFTDataInn[]
  trendingInfo?: React.ReactNode
  collectionName?: React.ReactNode
  likes?: React.ReactNode
  href?: string
}
export interface userCreator {
  address: string
  name: string
}
