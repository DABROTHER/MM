export interface BlockchainCardProps {
  id?: number
  image: string
  imageWhite: string
  name: string
  height?: number
  width?: number
  heightMobile?: number
  widthMobile?: number
  onClick?: () => void
  selectedBlockchain?: string
}
