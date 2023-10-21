'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import ResourcesDetailsTemplate from 'design-systems/Templates/ResourcesDetailsTemplate'
import { useSearchResource } from 'hooks'

const SearchResource: React.FC = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('query') ?? ''

  const { isLoadingSearch, resourceItem } = useSearchResource(search)

  return (
    <ResourcesDetailsTemplate slug={search} isLoadingResourceType={isLoadingSearch} resourceTypeItem={resourceItem} />
  )
}

export default SearchResource
