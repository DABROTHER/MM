import { StaticImageData } from 'next/image'

export interface ResourcesCardProps {
  id?: number
  image: string | StaticImageData
  imageWhite?: string
  name: string
  height?: number
  width?: number
  heightMobile?: number
  widthMobile?: number
  onClick?: () => void
}
