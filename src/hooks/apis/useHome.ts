import { useQuery } from 'react-query'

import { HomeService } from 'api-services'
import { QUERIES } from 'utils'

export const useHome = (query: CollectionTableListQuery) => {
  const { isLoading: isLoadingCollection, data: collectionTable } = useQuery(
    [QUERIES.PUBLIC.GET_COLECTION_TABLE, query],
    () => HomeService.getCollectionTable(query),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const queryTop = { time: '', blockchainId: '', trending: '' }
  const { isLoading: isLoadingCollectionTop, data: collectionTop } = useQuery(
    [QUERIES.PUBLIC.GET_COLECTION_TABLE],
    () => HomeService.getCollectionTable(queryTop),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const { isLoading: isLoadingLaunchpad, data: launchpaditem } = useQuery(
    [QUERIES.PUBLIC.GET_LAUNCHPAD],
    () => HomeService.getLaunchpad(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const { isLoading: isLoadingTrending, data: trending } = useQuery(
    [QUERIES.PUBLIC.GET_TRENDING],
    () => HomeService.getTrending(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  const { isLoading: isLoadingSpotLight, data: spotLight } = useQuery(
    [QUERIES.PUBLIC.GET_SPOT_LIGHT],
    () => HomeService.getSpotLight(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )

  return {
    trending,
    spotLight,
    isLoadingCollection,
    collectionTable,
    isLoadingLaunchpad,
    launchpaditem,
    isLoadingTrending,
    isLoadingCollectionTop,
    collectionTop,
    isLoadingSpotLight,
  }
}
