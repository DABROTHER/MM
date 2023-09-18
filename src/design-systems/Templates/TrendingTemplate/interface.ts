import { AnyFunction } from 'interfaces'

export interface TrendingPageTemplateProps {
  isLoadingExploreBlockChain: boolean
  exploreBlockChain: ExploreBlock[]
  category: ExploreBlock[]
  onChangeFilter: (filter: FilterValues) => void
  fetchMoreTrending: AnyFunction
  hasMoreTrending: boolean
  isRefetching: boolean
  isFetchingNextTrending: boolean
  trendingData: ExploreListData[]
  trendingIsLoading: boolean
}
type FilterValues = {
  [key: string]: string | boolean
}
