import { PropsWithChildren } from 'react'

export interface HeaderSearchDropdownProps extends PropsWithChildren {
  open?: boolean
  onClose?: () => void
  heading?: string | React.ReactElement
  jsxElement?: JSX.Element
  className?: string
  searchValue?: string
  collectionData?: CollectionType[]
  nftsData?: CollectionType[]
  userData?: CollectionType[]
  isLoading?: boolean
  setIsLoading: (isLoading: boolean) => void
}

export type CollectionType = {
  address: string
  category: string
  chainId?: string
  createdAt?: string
  creator: string
  description: string
  _id: string
  img: string
  name: string
  bannerImage?: string
  imgUrl?: string
  floor: number
  price: number
  symbol?: string
  fileUrl?: string
}

export type ButtonType = {
  id: number
  name: string
}
export type SkeletonType = {
  id: number
  button: string
}
