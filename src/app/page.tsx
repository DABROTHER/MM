'use client'
import type { NextPage } from 'next'
import { useState } from 'react'

import HomePageTemplate from 'design-systems/Templates/HomePageTemplate'
import { useHome } from 'hooks/apis/useHome'
import { MM_BLOCKCHAIN_NETWORK } from 'utils'
import { useLaunchPadLike } from 'hooks'
import { timeTab } from 'design-systems/Atoms/Tabs/utils'
import { useConnector } from 'context/connector'

const initialFilter = {
  time: timeTab?.[0].value,
  blockChainId: MM_BLOCKCHAIN_NETWORK.ETHEREUM,
  trending: true,
  walletAddress: '',
}

const HomePage: NextPage = () => {
  const [query, setQuery] = useState<CollectionTableListQuery>(initialFilter)
  const { isSigned, address } = useConnector()
  const {
    trending,
    spotLight,
    isLoadingLaunchpad,
    isLoadingTrending,
    isLoadingCollection,
    isLoadingCollectionTop,
    collectionTable,
    launchpaditem,
    collectionTop,
    isLoadingSpotLight,
    refetchLaunchpaditem,
  } = useHome({ ...query, walletAddress: address })
  const { isLoadingLike, likeAsync } = useLaunchPadLike()

  const likeHandler = async (launchPadId: string) => {
    const isLike = await likeAsync({ launchPadId, walletAddress: address })
    if (isLike?.success) refetchLaunchpaditem?.()
  }

  return (
    <HomePageTemplate
      collectionTable={collectionTable as collectionTableType[]}
      collectionTop={collectionTop as collectionTableType[]}
      isLoadingCollection={isLoadingCollection}
      isLoadingCollectionTop={isLoadingCollectionTop}
      isLoadingLaunchpad={isLoadingLaunchpad}
      isLoadingLike={isLoadingLike}
      isLoadingSpotLight={isLoadingSpotLight}
      isLoadingTrending={isLoadingTrending}
      isSigned={isSigned}
      launchpad={launchpaditem as HomeLaunchpadList[]}
      query={query}
      setQuery={setQuery}
      spotLight={spotLight as HomeSpotlightList[]}
      trending={trending as HomeTrendingCategoryList[]}
      onLike={likeHandler}
    />
  )
}

export default HomePage
