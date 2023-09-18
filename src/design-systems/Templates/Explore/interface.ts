import { AnyFunction } from 'interfaces'

export interface ExplorePageTemplateProps {
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  category: ExploreBlock[]
  isLoadingExploreCategory: boolean
  isLoadingExplore: boolean
  isRefetching: boolean
  exploreData: ExploreListData[]
  hasMoreExplore: boolean
  isFetchingNextExplore: boolean
  fetchMoreExplore: AnyFunction

  onChangeFilter: (filter: FilterValues) => void
}
type FilterValues = {
  [key: string]: string | boolean
}
