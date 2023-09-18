import { useMutation, useQuery } from 'react-query'
import { useMemo } from 'react'

import { usePaginatedQuery } from './usePaginatedQuery'

import { CollectionService } from 'api-services'
import {
  CollectionDetails,
  CollectionFilters,
  CollectionPriceDistributionPayload,
  CollectionPriceVolume,
} from 'interfaces'
import { PAGE_SIZE, QUERIES, filterEmptyValue } from 'utils'

type Filter<T, U> = {
  [K in keyof (T & U)]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never
}

export type ResultingFilter = Filter<CollectionFilters, CollectionDetails>

export const useCollection = (filters: ResultingFilter) => {
  const filter = filterEmptyValue(filters)
  const queryDetails = {
    _id: filter._id,
    filter: filter.filter,
  }
  const queryCollectionFilter = {
    slug: filter.slug,
    tab: filter.tab,
    sortBy: filter.sortBy,
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    traits: filter.traits,
    search: filter.search,
  }

  const { isLoading: isLoadingPriceVolume, mutateAsync: getPriceVolumeAsync } = useMutation(
    ({ walletAddress, startDateTime, endDateTime }: CollectionPriceVolume) =>
      CollectionService.getVolumePrice({ walletAddress, startDateTime, endDateTime })
  )
  const { isLoading: isLoadingPriceDistribution, mutateAsync: getPriceDistributionAsync } = useMutation(
    ({ walletAddress, startTime, endTime }: CollectionPriceDistributionPayload) =>
      CollectionService.getPriceDistribution({ walletAddress, startTime, endTime })
  )
  const { isLoading: isLoadingOwnerDistribution, mutateAsync: getOwnerDistributionAsync } = useMutation(
    ({ walletAddress }: { walletAddress: string }) => CollectionService.getOwnerDistribution({ walletAddress })
  )

  const { isLoading: isLoadingOwnersTop50, mutateAsync: getOwnersTop50Async } = useMutation(
    ({ walletAddress }: { walletAddress: string }) =>
      CollectionService.getDataOwnerTop50({
        walletAddress,
      })
  )

  const { isLoading: isLoadingCollectionDetail, data: collectionDetail } = useQuery(
    [QUERIES.PUBLIC.GET_COLLECTION_DETAILS],
    () => CollectionService.getCollectionDetail(queryDetails),
    {
      select: res => res.data,
      enabled: Boolean(queryDetails?._id),
      refetchOnWindowFocus: false,
    }
  )
  const query = filterEmptyValue(queryCollectionFilter)

  const {
    isLoading: isLoadingCollection,
    data: data,
    isRefetching: isRefetching,
    hasNextPage: hasMoreCollection,
    isFetchingNextPage: isFetchingNextCollection,
    fetchNextPage: fetchMoreCollection,
  } = usePaginatedQuery(
    [QUERIES.PUBLIC.GET_EXPLORE_PAGE, ...Object.values(query)],
    ({ page, page_size, ...props }) =>
      CollectionService.getCollection({
        ...props,
        limit: page_size ?? PAGE_SIZE,
        page: page ?? 1,
      }),
    res => res.data.data,
    {
      enabled: Boolean(queryCollectionFilter?.tab),
      refetchOnWindowFocus: false,
    },
    { ...query }
  )
  const collectionData =
    data
      ?.filter(asset => Boolean(asset.data))
      .map(asset => asset.data.data as DataCollection)
      ?.flat() ?? []
  const totalCOunt = useMemo(() => data?.[0]?.data?.totalCount, [data])

  return {
    isLoadingCollection,
    collectionData,
    hasMoreCollection,
    isFetchingNextCollection,
    fetchMoreCollection,
    isRefetching,
    collectionDetail,
    isLoadingCollectionDetail,
    isLoadingOwnersTop50,
    getOwnersTop50Async,
    isLoadingPriceVolume,
    getPriceVolumeAsync,
    isLoadingOwnerDistribution,
    getOwnerDistributionAsync,
    isLoadingPriceDistribution,
    getPriceDistributionAsync,
    totalCOunt,
  }
}
