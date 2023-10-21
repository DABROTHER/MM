'use client'

import React, { useState } from 'react'

import MintTemplate from 'design-systems/Templates/Mint'
import { useLaunchpad } from 'hooks'

const Mint: React.FC = () => {
  const [type, setType] = useState<string>('Mint')

  const [bannerSrc, setBannerSrc] = useState<CollectionId>()

  const { isLoadingLaunchpadBanner, launchpadBannerData } = useLaunchpad(type)

  return (
    <MintTemplate
      categoryType={type}
      defaultBannerSrc={bannerSrc ?? launchpadBannerData?.[0]?.collectionId}
      isLoadingLaunchpadBanner={isLoadingLaunchpadBanner}
      launchpadBanner={launchpadBannerData}
      onChangeBanner={e => setBannerSrc(e)}
      onSetCategory={setType}
    />
  )
}

export default Mint
