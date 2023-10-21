'use client'

import React from 'react'

import ArticleTemplate from 'design-systems/Templates/Article'
import { ArticleTypeProps } from './interface'
import { useArticle } from 'hooks'

const Article: React.FC<ArticleTypeProps> = ({ params }) => {
  const { isLoadingSingleArticle, singleArticleItem, relatedArticle, isLoadingRelatedArticle } = useArticle(params.id)

  return (
    <ArticleTemplate
      slug={params.id}
      isLoadingSingleArticle={isLoadingSingleArticle}
      singleArticleItem={singleArticleItem}
      relatedArticle={relatedArticle}
      isLoadingRelatedArticle={isLoadingRelatedArticle}
    />
  )
}

export default Article
