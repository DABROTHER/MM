import { StaticImageData } from 'next/image'

export interface ResourcesCardProps {
  id?: number | string
  image: string
  imageWhite?: string
  name: string
  height?: number
  width?: number
  heightMobile?: number
  widthMobile?: number
  onClick?: React.Dispatch<React.SetStateAction<string>>
}
