'use client'

import React, { useState } from 'react'

import { useExplore } from 'hooks'
import { ExploreFilters } from 'interfaces'

const initialFilter = { categoryId: '', blockChainId: '', trending: '' }

import CollectionsDetails from 'design-systems/Templates/CollectionsDetails'
import { useBlockchain } from 'hooks/apis/useBlockchain'

const Collections: React.FC = () => {
  const [filters, setFilters] = useState<ExploreFilters>(initialFilter)
  const { exploreBlockChain } = useBlockchain()

  return (
    <CollectionsDetails
      exploreBlockChain={exploreBlockChain as ExploreBlock[]}
      onChangeFilter={filter => setFilters(pre => ({ ...pre, ...filter }))}
    />
  )
}

export default Collections
