export interface CollectionSideBarFilterProps {
  isShow: boolean
  category: ExploreBlock
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  traits?: CollectionTraits
  onChangePrice: (price: number[]) => void
  onCheckClick: (label: string, selectedValue: string) => void
}

export interface CollectionTraits {
  [key: string]: string[]
}
