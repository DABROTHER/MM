import { StaticImageData } from 'next/image'

import { AnyObject } from 'interfaces'

export type BorderRadiusVariant = 'all' | 'top' | 'bottom' | 'none'
export type BorderRadiusVariantSize = 'sm' | 'xs'
export type TransformVariant = 'x-direction' | 'y-direction' | 'z-direction' | undefined

export interface CardProps {
  alt: string
  children?: React.ReactNode
  className?: string
  fileClassName?: string
  src: string | StaticImageData
  variant?: BorderRadiusVariant
  notification?: React.ReactNode
  direction?: TransformVariant
  onClick?: (nft: string | StaticImageData) => void
  href?: string | UrlObject
  borderSize?: BorderRadiusVariantSize
  onSelect?: () => void
  scroll?: boolean
}
interface UrlObject {
  auth?: string | null | undefined
  hash?: string | null | undefined
  host?: string | null | undefined
  hostname?: string | null | undefined
  href?: string | null | undefined
  pathname?: string | null | undefined
  protocol?: string | null | undefined
  search?: string | null | undefined
  slashes?: boolean | null | undefined
  port?: string | number | null | undefined
  query?: string | null | undefined | AnyObject
}
