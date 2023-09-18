'use client'
import type { NextPage } from 'next'
import { useState } from 'react'

import { NFTData } from './utils'

import HomePageTemplate from 'design-systems/Templates/HomePageTemplate'
import { useHome } from 'hooks/apis/useHome'

const initialFilter = { time: '1', blockchainId: '64de1922637e465863bc6a2e', trending: 'true' }

const HomePage: NextPage = () => {
  const [query, setQuery] = useState<CollectionTableListQuery>(initialFilter)

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
  } = useHome(query)

  return (
    <HomePageTemplate
      NFT={NFTData}
      collectionTable={collectionTable}
      collectionTop={collectionTop}
      isLoadingCollection={isLoadingCollection}
      isLoadingCollectionTop={isLoadingCollectionTop}
      isLoadingLaunchpad={isLoadingLaunchpad}
      isLoadingSpotLight={isLoadingSpotLight}
      isLoadingTrending={isLoadingTrending}
      launchpad={launchpaditem}
      query={query}
      setQuery={setQuery}
      spotLight={spotLight}
      trending={trending}
    />
  )
}

export default HomePage
