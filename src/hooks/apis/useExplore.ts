import { useQuery, useMutation } from 'wagmi'

import { usePaginatedQuery } from './usePaginatedQuery'

import { ExploreService } from 'api-services'
import { ExploreFilters } from 'interfaces'
import { PAGE_SIZE, QUERIES, filterEmptyValues } from 'utils'

export const useExplore = (filters: ExploreFilters) => {
  const { isLoading: isLoadingExploreCategory, data: category } = useQuery(
    [QUERIES.PUBLIC.GET_EXPLORE_CATEGORY],
    () => ExploreService.getExploreCategory(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )

  const query = filterEmptyValues(filters)
  const {
    isLoading: isLoadingExplore,
    data: data,
    isRefetching: isRefetching,
    hasNextPage: hasMoreExplore,
    isFetchingNextPage: isFetchingNextExplore,
    fetchNextPage: fetchMoreExplore,
  } = usePaginatedQuery(
    [QUERIES.PUBLIC.GET_EXPLORE_PAGE, ...Object.values(query)],
    ({ page, page_size, ...props }) =>
      ExploreService.getExplore({
        ...props,
        limit: page_size ?? PAGE_SIZE,
        page: page ?? 1,
      }),
    res => res.data.data,
    {
      enabled: Boolean(filters?.categoryId),
      refetchOnWindowFocus: false,
    },
    { ...query }
  )
  const exploreData =
    data
      ?.filter(asset => Boolean(asset.data))
      .map(asset => asset.data.data as ExploreListData)
      ?.flat() ?? []

  const exploreCategory = category as ExploreBlock[]
  return {
    isLoadingExplore,
    exploreData,
    hasMoreExplore,
    isFetchingNextExplore,
    fetchMoreExplore,
    isRefetching,
    isLoadingExploreCategory,
    exploreCategory,
  }
}
