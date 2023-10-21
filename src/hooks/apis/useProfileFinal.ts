import { useQuery } from 'react-query'
import { useMemo } from 'react'

import { usePaginatedQuery } from './usePaginatedQuery'

import { profileFinalDetails, profileFinalFilters } from 'interfaces'
import { PAGE_SIZE, QUERIES, filterEmptyValue } from 'utils'
import ProfileFinalService from 'api-services/ProfileFinalService'
import { CollectionItem } from 'api-services/interfaces/profileCollected'

type Filter<T, U> = {
  [K in keyof (T & U)]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never
}

export type ResultingFilterProfileFinal = Filter<profileFinalFilters, profileFinalDetails>

export const useProfileFinal = (filters: ResultingFilterProfileFinal) => {
  const filter = filterEmptyValue(filters)

  const queryCollectionFilter = {
    tab: filter.tab,
    sortBy: filter.sortBy,
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    traits: filter.traits,
    search: filter.search,
    event: filter.event,
    filter: filter.filter,
    walletAddress: filter.walletAddress,
    time: filter.time,
    trending: filter.trending,
    quantity: filter.quantity,
    blockChainId: filter.blockChainId,
  }

  const { isLoading: isLoadingCollectedTab, data: CollectedTabData } = useQuery(
    [QUERIES.PUBLIC.GET_LAUNCHPAD, filters.walletAddress],
    () => ProfileFinalService.getCollectedTab(filters.walletAddress),
    {
      select: res => res.data.data,
      refetchOnWindowFocus: false,
    }
  )

  const query = filterEmptyValue(queryCollectionFilter)

  const {
    isLoading: isLoadingProfile,
    data: data,
    isRefetching: isRefetching,
    hasNextPage: hasMoreprofileCollection,
    isFetchingNextPage: isFetchingNextCollection,
    fetchNextPage: fetchMoreProfileCollection,
  } = usePaginatedQuery(
    [QUERIES.PUBLIC.GET_COLLECTION_PROFILE_FINAL, ...Object.values(query)],
    ({ page, page_size, ...props }) =>
      ProfileFinalService.getCollection({
        ...props,
        limit: page_size ?? PAGE_SIZE,
        page: page ?? 1,
      }),
    res => res.data.data,
    {
      enabled: Boolean(filters?.walletAddress),
      refetchOnWindowFocus: false,
    },
    { ...query }
  )
  const ProfileFinalData =
    data
      ?.filter(asset => Boolean(asset.data))
      .map(asset => asset.data.data as DataCollection)
      ?.flat() ?? []
  const totalCOunt = useMemo(() => data?.[0]?.data?.totalCount, [data])

  const ProfileCreatData =
    data
      ?.filter(asset => Boolean(asset.data))
      .map(asset => asset.data.collectionData as CollectionItem)
      ?.flat() ?? []

  return {
    isLoadingProfile,
    ProfileFinalData,
    hasMoreprofileCollection,
    isFetchingNextCollection,
    fetchMoreProfileCollection,
    isRefetching,
    totalCOunt,
    ProfileCreatData,
    CollectedTabData,
    isLoadingCollectedTab,
  }
}
