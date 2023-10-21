import { useQuery } from 'react-query'

import { ResourceService } from 'api-services'
import { QUERIES } from 'utils'

export const useSearchResource = (query: string) => {
  const { isLoading: isLoadingSearch, data: resourceItem } = useQuery(
    [QUERIES.PUBLIC.GET_RESOURCE_SEARCH, query],
    () => ResourceService.getSearchResource({ query }),

    {
      select: res => res.data,
      enabled: Boolean(query),
      refetchOnWindowFocus: false,
    }
  )

  const processedResourceItem = resourceItem || []

  return {
    resourceItem: processedResourceItem,
    isLoadingSearch,
  }
}
