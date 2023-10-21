import { SingleArticleData } from 'api-services/interfaces/resources'

export interface ArticleTemplateProps {
  className?: string
  slug?: string
  isLoadingSingleArticle: boolean
  singleArticleItem: SingleArticleData[]
  relatedArticle: SingleArticleData[]
  isLoadingRelatedArticle: boolean
}
