import { AuctionType } from 'utils'

interface PutOnMarketplaceResponse {
  code: number
  data: PutOnMarketplaceData
  message: string
  status: boolean
}

interface PutOnMarketplaceData {
  collectionAddress: string
  tokenId: string
  networkId: string
  nftId: string
  nonce: string
  signature: string
  contractAddress: string
  lastOwner: string
  currentBid: string
  highestBidder: string
  auctionType: string
  startingPrice: string
  buyPrice: string
  buyer: string
  isTokenGated: boolean
  tokenGateAddress: string
  collector: string
  startingTime: string
  closingTime: string
  initialClosingTime: string
  erc20Token: string
  isActive: boolean
  isMetamask: boolean
  id: string
  bidTime: string
  createdAt: string
  updatedAt: string
  v: number
}

interface putOnMarketplacePayload {
  _id: string
  auctionType: AuctionType
  amount: string
  erc20Address: string
  nonce: string
  signature: string
  startingTime: number
  closingTime: number
  isTokenGated: boolean
  tokenGateAddress: string
}
