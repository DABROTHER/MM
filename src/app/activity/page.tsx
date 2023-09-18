'use client'

import { useState } from 'react'

import ActivityTemplate from 'design-systems/Templates/ActivityTemplate'
import { useBlockchain } from 'hooks/apis/useBlockchain'
import { ExploreFilters } from 'interfaces'

const initialFilter = { categoryId: '', blockchainId: '', trending: '' }

const Activity: React.FC = () => {
  const { exploreBlockChain, isLoadingExploreBlockChain } = useBlockchain()
  const [filters, setFilters] = useState<ExploreFilters>(initialFilter)

  return (
    <ActivityTemplate
      exploreBlockChain={exploreBlockChain as ExploreBlock[]}
      isLoadingExploreBlockChain={isLoadingExploreBlockChain}
      onChangeFilter={filter => setFilters(pre => ({ ...pre, ...filter }))}
    />
  )
}

export default Activity
