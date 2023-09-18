export interface ActivityPageTemplateProps {
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  onChangeFilter: (filter: FilterValues) => void
}
type FilterValues = {
  [key: string]: string | boolean
}
