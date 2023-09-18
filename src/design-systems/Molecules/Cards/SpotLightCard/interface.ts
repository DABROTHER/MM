export interface SpotLightCardProps {
  className?: string
  name: string
  likeNumber: number
  sales: string
  volume: string
  floor: string
  userCreator?: userCreator
  nfts: NFTData[]
}
export interface userCreator {
  address: string
  name: string
}
