import { StaticImageData } from 'next/image'

interface ArticlesData {
  title: string
  id: string
}

interface SingleArticleData {
  title: string
  id: string
  metaTitle: string
  description: string
  type: string
  popular: boolean
  authorName: string
  authorImage: string | StaticImageData
}

interface ResourceTypeQuery {
  type: string
}

interface ResourceSearchQuery {
  query: string
}

interface SingleArticleQuery {
  id: string
}
export interface ResourceItem {
  _id: string
  title: string
  metaTitle: string
  description: string
  type: string
  __v: number
  isPopular: boolean
  fileUrl: string

  userId?: string
  file
  image: string
  imageWhite?: string
  name: string
  height?: number
  width?: number
  heightMobile?: number
  widthMobile?: number
  onClick?: () => void
}

interface DataResponse {
  data: Item[]
}

interface ResourceResponse {
  data: ResourceItem[]
  message: string
  success: boolean
}

interface ArticleResponse {
  data: ArticlesData[]
  message: string
  success: boolean
}

interface SingleArticleResponse {
  data: SingleArticleData[]
  message: string
  success: boolean
}
