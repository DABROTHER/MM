import { StaticImageData } from 'next/image'

export interface ArticleAccordionProps {
  id?: number
  icon: string | StaticImageData
  article?: string
  widthMobile?: number
  onClick?: () => void
  height?: number
  width?: number
}
