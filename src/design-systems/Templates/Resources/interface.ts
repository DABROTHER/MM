import { ArticlesData } from 'api-services/interfaces/resources'
import { StaticImageData } from 'next/image'

export interface ResourcesTemplateProps {
  className?: string
  isLoadingResources: boolean
  resources: Item[]
  isLoadingArticle: boolean
  articles: ArticlesData[]
}

export interface Item {
  _id: string
  title: string
  metaTitle: string
  description: string
  type: string
  __v: number
  fileUrl: string
  isPopular: boolean
  userId?: string // userId is optional, as it's missing in some objects
  image: string
  imageWhite?: string
  name: string
  height?: number
  width?: number
  heightMobile?: number
  widthMobile?: number
  onClick?: () => void
}
