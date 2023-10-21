export interface ResourcesTemplateProps {
  className?: string
  isLoadingResourceType: boolean
  resourceTypeItem: Item[]
  slug?: string
}

export interface Item {
  _id: string
  title: string
  metaTitle: string
  description: string
  type: string
  __v: number
  isPopular: boolean
  userId?: string // userId is optional, as it's missing in some objects
}
