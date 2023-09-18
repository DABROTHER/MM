import { useQuery } from 'react-query'

import { ExploreService } from 'api-services'
import { QUERIES } from 'utils'

export const useBlockchain = () => {
  const { isLoading: isLoadingExploreBlockChain, data: exploreBlockChain } = useQuery(
    [QUERIES.PUBLIC.GET_EXPLORE_BLOCKCHAIN],
    () => ExploreService.getExploreBlackChain(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  return {
    isLoadingExploreBlockChain,
    exploreBlockChain,
  }
}
