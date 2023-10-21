'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

import { useResource } from 'hooks/apis/useResource'
import { ResourceTypeProps } from './inetrface'
import ResourcesDetailsTemplate from 'design-systems/Templates/ResourcesDetailsTemplate'

const ResourceDetail: React.FC<ResourceTypeProps> = ({ params }) => {
  const { isLoadingResourceType, resourceTypeItem } = useResource(params.type)

  return (
    <ResourcesDetailsTemplate
      slug={params.type}
      isLoadingResourceType={isLoadingResourceType}
      resourceTypeItem={resourceTypeItem}
    />
  )
}

export default ResourceDetail
