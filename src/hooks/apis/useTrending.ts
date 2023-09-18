import { usePaginatedQuery } from './usePaginatedQuery'

import { PAGE_SIZE, QUERIES, filterEmptyValues } from 'utils'
import TrendingService from 'api-services/TrendingService'
import { ExploreFilters } from 'interfaces'

export const useTrending = (filters: ExploreFilters) => {
  const query = filterEmptyValues(filters)
  const {
    isLoading: trendingIsLoading,
    data: data,
    isRefetching: isRefetching,
    hasNextPage: hasMoreTrending,
    isFetchingNextPage: isFetchingNextTrending,
    fetchNextPage: fetchMoreTrending,
  } = usePaginatedQuery(
    [QUERIES.PUBLIC.GET_TRENDING_TABLE, ...Object.values(query)],
    ({ page, page_size, ...props }) =>
      TrendingService.getAllTrendingCollection({
        ...props,
        limit: page_size ?? PAGE_SIZE,
        page: page ?? 1,
      }),
    res => res.data.data,
    {
      // enabled: Boolean(filters?.categoryId),
      refetchOnWindowFocus: false,
    },
    { ...query }
  )
  const trendingData =
    data
      ?.filter(asset => Boolean(asset.data))
      .map(asset => asset.data.data)
      ?.flat() ?? []

  return {
    trendingIsLoading,
    trendingData,
    hasMoreTrending,
    isFetchingNextTrending,
    fetchMoreTrending,
    isRefetching,
  }
}
