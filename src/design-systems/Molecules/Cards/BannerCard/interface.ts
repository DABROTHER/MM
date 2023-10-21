import { StaticImageData } from 'next/image'

export type BorderRadiusVariant = 'all' | 'top' | 'bottom' | 'none'
export type BorderRadiusVariantSize = 'sm' | 'xs'
export type TransformVariant = 'x-direction' | 'y-direction' | 'z-direction' | undefined

export interface BannerCardProps {
  alt: string
  children?: React.ReactNode
  className?: string
  fileClassName?: string
  src: string | StaticImageData
  variant?: BorderRadiusVariant
  onClick?: (nft: string | StaticImageData) => void
  href?: string
  borderSize?: BorderRadiusVariantSize
  direction?: TransformVariant
}
