import { useQuery } from 'wagmi'

import { CollectionService } from 'api-services'
import { QUERIES, filterEmptyValue } from 'utils'
import { CollectionDetails } from 'interfaces'

export const useCollectionDetail = (filters: CollectionDetails) => {
  const filter = filterEmptyValue(filters)
  const queryDetails = {
    slug: filter.slug,
    filter: filter.filter,
  }
  const { isLoading: isLoadingCollectionDetail, data: collectionDetail } = useQuery(
    [QUERIES.PUBLIC.GET_COLLECTION_DETAILS],
    () => CollectionService.getCollectionDetail(filterEmptyValue(queryDetails)),
    {
      select: res => res.data,
      enabled: Boolean(queryDetails?.slug),
      refetchOnWindowFocus: false,
    }
  )
  return {
    collectionDetail,
    isLoadingCollectionDetail,
  }
}
