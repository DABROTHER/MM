import { useQuery } from 'react-query'

import { ResourceService } from 'api-services'
import { QUERIES } from 'utils'

export const useArticle = (id: string) => {
  const { isLoading: isLoadingSingleArticle, data: singleArticleItem } = useQuery(
    [QUERIES.PUBLIC.GET_SINGLE_ARTICLE],
    () => ResourceService.getSingleArticle({ id }),

    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )

  const { isLoading: isLoadingRelatedArticle, data: relatedArticleItem } = useQuery(
    [QUERIES.PUBLIC.GET_RELATED_ARTICLE],
    () => ResourceService.getRelatedArticle({ id }),

    {
      select: res => res.data,
      refetchOnWindowFocus: false,
    }
  )

  const processedRelatedArticleItem = relatedArticleItem || []

  const processedsingleArticleItem = singleArticleItem || []
  return {
    singleArticleItem: processedsingleArticleItem,
    isLoadingSingleArticle,
    relatedArticle: processedRelatedArticleItem,
    isLoadingRelatedArticle,
  }
}
