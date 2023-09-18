import { useQuery } from 'react-query'

import { usePaginatedQuery } from 'hooks'
import { PAGE_SIZE, QUERIES } from 'utils'
import { LaunchpadService } from 'api-services'

export const useLaunchpad = (type: string) => {
  const { isLoading: isLoadingLaunchpadBanner, data: launchpadBanner } = useQuery(
    [QUERIES.PUBLIC.GET_LAUNCHPAD_BANNER_PAGE],
    () => LaunchpadService.getLaunchpadBanner(),
    {
      select: res => res.data,
    }
  )

  const {
    isLoading: isLoadingAssets,
    data: assetData,
    refetch: refetchAssets,
    isRefetching: isRefetchingAssets,
    hasNextPage: hasMoreAssets,
    isFetchingNextPage: isFetchingNextAssets,
    fetchNextPage: fetchMoreAssets,
  } = usePaginatedQuery(
    [QUERIES.PUBLIC.GET_LAUNCHPAD_PAGE, ...Object.values(type)],
    ({ page, page_size, ...props }) =>
      LaunchpadService.getLaunchpad({
        ...props,
        limit: page_size ?? PAGE_SIZE,
        page: page ?? 1,
      }),
    res => res.data.list,
    {
      enabled: Boolean(type),
      refetchOnWindowFocus: false,
    },
    { type }
  )

  const assets =
    assetData
      ?.filter(asset => Boolean(asset.data))
      .map(asset => asset.data as LaunchpadList)
      ?.flat() ?? []
  const launchpadBannerData = launchpadBanner as LaunchpadData[]

  return {
    assets,
    isLoadingAssets,
    isRefetchingAssets,
    hasMoreAssets,
    isFetchingNextAssets,
    refetchAssets,
    fetchMoreAssets,
    isLoadingLaunchpadBanner,
    launchpadBannerData,
  }
}
