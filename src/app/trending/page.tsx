'use client'
import React, { useState } from 'react'
import type { NextPage } from 'next'

import TrendingTemplate from 'design-systems/Templates/TrendingTemplate'
import { useBlockchain } from 'hooks/apis/useBlockchain'
import { ExploreFilters } from 'interfaces'
import { useCateory } from 'hooks/apis/useCateory'
import { useTrending } from 'hooks/apis/useTrending'
const initialFilter = { categoryId: '', blockChainId: '', trending: '' }

const Trending: NextPage = () => {
  const [filters, setFilters] = useState<ExploreFilters>(initialFilter)

  const { exploreBlockChain, isLoadingExploreBlockChain } = useBlockchain()
  const { category } = useCateory()
  const { trendingIsLoading, trendingData, hasMoreTrending, isFetchingNextTrending, fetchMoreTrending, isRefetching } =
    useTrending(filters)

  return (
    <TrendingTemplate
      category={category as ExploreBlock[]}
      exploreBlockChain={exploreBlockChain as ExploreBlock[]}
      fetchMoreTrending={fetchMoreTrending}
      hasMoreTrending={Boolean(hasMoreTrending)}
      isFetchingNextTrending={isFetchingNextTrending}
      isLoadingExploreBlockChain={isLoadingExploreBlockChain}
      isRefetching={isRefetching}
      trendingData={trendingData}
      trendingIsLoading={trendingIsLoading}
      onChangeFilter={filter => setFilters(pre => ({ ...pre, ...filter }))}
    />
  )
}

export default Trending
