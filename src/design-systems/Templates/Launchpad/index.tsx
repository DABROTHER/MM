'use client'
/* eslint-disable react/no-children-prop */
import { useMemo } from 'react'

import { LaunchpadProps } from './interface'
import { CATEGORY_LAUNCHPAD, LaunchpadCss, buttonCSS } from './utils'

import Card from 'design-systems/Molecules/Cards/Card'
import LaunchPadBannerInfo from 'design-systems/Molecules/CardsInfo/LaunchPadBannerInfo'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton'
import SkeletonLaunchPadInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonLaunchPadInfo'
import LaunchpadBannerSkeleton from 'design-systems/Molecules/Skeleton/LaunchpadBannerSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import IconButton from 'design-systems/Atoms/IconButton'
import { IconNotification } from 'design-systems/Atoms/Icons'
import { launchpadNotification } from 'design-systems/Molecules/Cards/Card/utils'
import Button from 'design-systems/Atoms/Button'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import { PAGE_SIZE } from 'utils'

export const LaunchpadCardSkeltonList = () => {
  return (
    <>
      {Array(PAGE_SIZE)
        .fill('')
        .map((_: string, i: number) => (
          <CardSkeleton
            cardClassName="!h-[256px]"
            children={<SkeletonLaunchPadInfo className="bg-neutral-800" variant="bottom" />}
            className="card-shadow h-[353px] w-full"
            key={i}
            variant="all"
          />
        ))}
    </>
  )
}

const LaunchPageTemplate: React.FC<LaunchpadProps> = ({
  assets,
  onChangeBanner,
  defaultBannerSrc,
  isLoadingLaunchpad,
  hasMoreAssets,
  isFetchingMoreAssets,
  isRefetchingAssets,
  trendingCardInfo,
  onFetchMoreAssets,
  onSetCategory,
  isLoadingLaunchpadBanner,
  launchpadBanner,
}) => {
  const assetsArrayObject = useMemo(() => {
    const listArrays = assets.map(test => test.list)
    return listArrays.flat()
  }, [assets])

  return (
    <div className="container mb-[72px]">
      <div className="mt-8 flex flex-col">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          {isLoadingLaunchpadBanner ? (
            <LaunchpadBannerSkeleton className="relative h-[673px] w-full md:h-[400px] lmd:h-[560px]" />
          ) : launchpadBanner?.length ? (
            <>
              <div className="relative h-[567px] w-full md:h-[400px] lmd:h-[560px]">
                <Card
                  alt={defaultBannerSrc?.name}
                  // eslint-disable-next-line react/no-children-prop
                  children={
                    <LaunchPadBannerInfo
                      creator={defaultBannerSrc.creator}
                      description={defaultBannerSrc.description}
                      name={defaultBannerSrc.name}
                      type="10h 15m 10s"
                    />
                  }
                  className="group !h-full !w-full"
                  direction="z-direction"
                  fileClassName="!h-full !w-full opacity-100"
                  notification={
                    <div className="justify-between">
                      <Button className={buttonCSS}>View</Button>
                      <IconButton
                        // eslint-disable-next-line react/no-children-prop
                        children={<IconNotification className="flex" fill="white" />}
                        className={`${launchpadNotification} !h-12 !w-12 bg-[#e2e2e299] backdrop-blur-[20px]`}
                      />
                    </div>
                  }
                  src={defaultBannerSrc.img}
                  variant="all"
                />
              </div>
              <div className="flex flex-row justify-between gap-4 md:flex-col">
                {launchpadBanner?.map((data, i) => {
                  const { collectionId } = data
                  const { name, img } = collectionId
                  return (
                    <Card
                      alt={name}
                      className="!mt-0 h-[80px] w-full sm:!h-[122px] sm:!w-[122px] md:!h-[125px] md:!w-[125px]  lmd:!h-[176px] lmd:!w-[176px]"
                      fileClassName="!h-full !w-full"
                      key={i}
                      src={img}
                      variant="all"
                      onClick={() => onChangeBanner(collectionId)}
                    />
                  )
                })}
              </div>
            </>
          ) : (
            <DataNotFound className="h-[560px] items-center !text-[37px]" size="h3" text="No Data Found" />
          )}
        </div>
      </div>
      <div>
        <div className="mt-[23px] flex w-full border-b-2 border-grayBorder md:mt-8">
          <div className="flex w-full flex-col">
            <CategoryList categories={CATEGORY_LAUNCHPAD} onClick={e => onSetCategory(e.id as string)} />
          </div>
        </div>
        <div className="mt-8">
          {(isLoadingLaunchpad || isRefetchingAssets) && !isFetchingMoreAssets ? (
            <div className={LaunchpadCss}>
              <LaunchpadCardSkeltonList />
            </div>
          ) : assetsArrayObject?.length ? (
            <>
              <div className={LaunchpadCss}>
                {assetsArrayObject?.map(({ collectionId: { name, img } }, i) => (
                  <Card
                    alt={name}
                    // eslint-disable-next-line react/no-children-prop
                    children={<TrendingInfo className="!pt-3 md:!pt-[17px]" data={trendingCardInfo} name={name} />}
                    className="w-full"
                    direction="y-direction"
                    fileClassName="!h-[182px] md:!h-[256px]"
                    key={i}
                    src={img}
                    variant="top"
                  />
                ))}
                {isFetchingMoreAssets && <LaunchpadCardSkeltonList />}
              </div>
            </>
          ) : (
            <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
          )}
        </div>
        <ScrollTrigger
          isLoading={isFetchingMoreAssets}
          onTrigger={() => !isLoadingLaunchpad && !isFetchingMoreAssets && hasMoreAssets && onFetchMoreAssets?.()}
        />
      </div>
    </div>
  )
}
export default LaunchPageTemplate
