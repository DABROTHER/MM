'use client'
import React from 'react'
import ResourcesTemplate from 'design-systems/Templates/Resources'
import { useResource } from 'hooks/apis/useResource'

const Resources: React.FC = () => {
  const { isLoadingResources, resourcesItem, isLoadingArticle, articleItem } = useResource()

  return (
    <ResourcesTemplate
      isLoadingResources={isLoadingResources}
      isLoadingArticle={isLoadingArticle}
      articles={articleItem}
      resources={resourcesItem}
    />
  )
}

export default Resources
