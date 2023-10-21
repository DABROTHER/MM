import { useQuery } from 'react-query'

import { ResourceService } from 'api-services'
import { QUERIES } from 'utils'

export const useResource = (type?: string) => {
  const { isLoading: isLoadingResourceType, data: resourceTypeItem } = useQuery(
    [QUERIES.PUBLIC.GET_TYPE_RESOURCE],
    () => (type ? ResourceService.getTypeResource({ type }) : ResourceService.getResource()),

    {
      select: res => res.data,
      enabled: Boolean(type),
      refetchOnWindowFocus: false,
    }
  )

  const { isLoading: isLoadingResources, data: resourcesItem } = useQuery(
    [QUERIES.PUBLIC.GET_RESOURCE],
    () => ResourceService.getResource(),
    {
      select: res => res.data,
      enabled: !type ? true : false,
      refetchOnWindowFocus: false,
    }
  )

  const { isLoading: isLoadingArticle, data: articleItem } = useQuery(
    [QUERIES.PUBLIC.GET_POPULAR_ARTICLE],
    () => ResourceService.getArticle(),
    {
      select: res => res.data,
      enabled: !type ? true : false,

      refetchOnWindowFocus: false,
    }
  )

  const processedResourcesItem = resourcesItem || []
  const processedArticleItem = articleItem || []
  const processedResourcesItemdetails = resourceTypeItem || []
  return {
    isLoadingResources,

    resourcesItem: processedResourcesItem,
    isLoadingArticle,
    articleItem: processedArticleItem,
    isLoadingResourceType,
    resourceTypeItem: processedResourcesItemdetails,
  }
}
