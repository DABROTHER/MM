import { useQuery } from 'react-query'

import { QUERIES } from 'utils'
import { ExploreService } from 'api-services'

export const useCateory = () => {
  const { isLoading: isLoadingExploreCategory, data: category } = useQuery(
    [QUERIES.PUBLIC.GET_EXPLORE_CATEGORY],
    () => ExploreService.getExploreCategory(),
    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )
  return {
    isLoadingExploreCategory,
    category,
  }
}
