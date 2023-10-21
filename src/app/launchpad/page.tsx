'use client'
import type { NextPage } from 'next'
import { useState } from 'react'

import { useLaunchpad } from 'hooks'
import LaunchPageTemplate from 'design-systems/Templates/Launchpad'
import { CardInfo } from 'design-systems/Templates/Launchpad/utils'

const LaunchpadPage: NextPage = () => {
  const [type, setType] = useState<string>('active')
  const [bannerSrc, setBannerSrc] = useState<CollectionId>()

  const {
    assets,
    isLoadingAssets,
    hasMoreAssets,
    isFetchingNextAssets,
    isRefetchingAssets,
    refetchAssets,
    fetchMoreAssets,
    isLoadingLaunchpadBanner,
    launchpadBannerData,
  } = useLaunchpad(type)
  return (
    <LaunchPageTemplate
      assets={assets}
      defaultBannerSrc={bannerSrc ?? launchpadBannerData?.[0]?.collectionId}
      hasMoreAssets={Boolean(hasMoreAssets)}
      isFetchingMoreAssets={isFetchingNextAssets}
      isLoadingLaunchpad={isLoadingAssets}
      isLoadingLaunchpadBanner={isLoadingLaunchpadBanner}
      isRefetchingAssets={isRefetchingAssets}
      launchpadBanner={launchpadBannerData}
      refetchCollectionAssets={refetchAssets}
      trendingCardInfo={CardInfo(type)}
      onChangeBanner={e => setBannerSrc(e)}
      onFetchMoreAssets={fetchMoreAssets}
      onSetCategory={e => setType(e)}
    />
  )
}

export default LaunchpadPage
