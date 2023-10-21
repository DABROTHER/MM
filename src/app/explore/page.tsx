'use client'
import type { NextPage } from 'next'
import { useMemo, useState } from 'react'

import ExplorePageTemplate from 'design-systems/Templates/Explore'
import { useExplore } from 'hooks'
import { ExploreFilters } from 'interfaces'
import { useBlockchain } from 'hooks/apis/useBlockchain'
const initialFilter = { categoryId: '', blockChainId: '', trending: '' }

const ExplorePage: NextPage = () => {
  const [filters, setFilters] = useState<ExploreFilters>(initialFilter)
  const {
    isLoadingExplore,
    isRefetching,
    exploreData,
    hasMoreExplore,
    isFetchingNextExplore,
    fetchMoreExplore,
    exploreCategory,
    isLoadingExploreCategory,
  } = useExplore(filters)
  const { exploreBlockChain, isLoadingExploreBlockChain } = useBlockchain()
  useMemo(() => {
    setFilters(pre => ({ ...pre, categoryId: exploreCategory?.[0].id }))
  }, [exploreCategory])
  return (
    <ExplorePageTemplate
      category={exploreCategory}
      exploreBlockChain={exploreBlockChain as ExploreBlock[]}
      exploreData={exploreData}
      fetchMoreExplore={fetchMoreExplore}
      hasMoreExplore={Boolean(hasMoreExplore)}
      isFetchingNextExplore={isFetchingNextExplore}
      isLoadingExplore={isLoadingExplore}
      isLoadingExploreBlockChain={isLoadingExploreBlockChain}
      isLoadingExploreCategory={isLoadingExploreCategory}
      isRefetching={isRefetching}
      onChangeFilter={filter => setFilters(pre => ({ ...pre, ...filter }))}
    />
  )
}

export default ExplorePage
