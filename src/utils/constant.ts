export const defaultImage =
  'https://res.cloudinary.com/ddkpnnmae/image/upload/v1687159062/imgs-mm/vvlbzxlpon151ofkk68k.jpg'
export const defaultVideo = 'https://d1gqvtt7oelrdv.cloudfront.net/nftdata/compressed_1673358879632_sample_mp4_file.mp4'
export const PAGE_SIZE = 7
export enum MM_NETWORKS {
  ETHEREUM = '1',
  POLYGON = '8001',
  SOLANA = '3',
  ALL = '0',
}

export const HOME_TIME = {
  SEVEN_DAYS: '2',
  ONE_DAYS: '1',
  ALL_TIME: '0',
}
export const PROJECT_ID_WALLET_CONNECT = '10f3ab7a27c80cf88f264abd09112562'
export enum MM_BLOCKCHAIN_NETWORK {
  ETHEREUM = '64de1922637e465863bc6a2e',
  POLYGON = '64de19aa9f37ea6830e5d28a',
  SOLANA = '64de19efad7891c4d09897c7',
  ALL = '6523c038472d3182bc7b4419',
}
declare global {
  type MMNetworks = MM_NETWORKS
}
export const parseBoolean = (value?: string) => {
  return value && value.toLowerCase() === 'true'
}
export const IS_PRODUCTION = false
export const INFURA_ID = 'f7645f4fb2f7464cb5c407643d34e1c9'

// to do depend on the url
export const BASE_API_ENDPOINT = IS_PRODUCTION ? '' : 'https://2ar4gq9xj4.execute-api.us-east-1.amazonaws.com/dev'

export const PAGE_SCROLL_TRIGGER_DELAY = 250
export const CURRENT_TIME = new Date()
