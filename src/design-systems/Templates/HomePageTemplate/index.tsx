'use client'
import { useEffect, useMemo, useState } from 'react'
import { StaticImageData } from 'next/image'

import { LaunchpadCardSkeltonList } from '../Launchpad'
import { ExploreCardSkeltonList } from '../Explore'

import { ColsProps, HomePageTemplateProps } from './interface'
import { commHead, homSkeletonCss } from './utils'

import handImage from 'assets/images/hand.png'
import { IconCheck, IconNotification } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import Table from 'design-systems/Molecules/Table'
import CardCarousel from 'design-systems/Molecules/Carousel'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import { getTimeFromTimestamp, getCurrentDate, getDateFromTimestamp } from 'utils'
import GalleryCard from 'design-systems/Molecules/Cards/GalleryCard'
import SpotLightCard from 'design-systems/Molecules/Cards/SpotLightCard'
import useWindowDimensions from 'hooks/useWindowDimensions'
import Card from 'design-systems/Molecules/Cards/Card'
import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'
import LaunchPadInfo from 'design-systems/Molecules/CardsInfo/LaunchPadInfo'
import { tabs, timeTab, trendingTab } from 'design-systems/Atoms/Tabs/utils'
import Tab from 'design-systems/Atoms/Tabs'
import HomeTopCardInfo from 'design-systems/Molecules/CardsInfo/HomeTopCardInfo'
import IconButton from 'design-systems/Atoms/IconButton'
import { launchpadNotification } from 'design-systems/Molecules/Cards/Card/utils'
import { useBlockchain } from 'hooks/apis/useBlockchain'
import { Tab as TabType } from 'design-systems/Atoms/Tabs/interface'
import SkeletonCollectionTable from 'design-systems/Molecules/Skeleton/SkeletonCollectionTable'
import { SkeletonTopCollection } from 'design-systems/Molecules/SkeletonCardInfo/SkeletonTopCollection'

const HomeTopCardElements = ({ nft }: { nft: NFTAssetObject }) => {
  const { bannerImage, name, floorPrice } = nft
  const [imageNft, setImageNft] = useState<string | StaticImageData>(bannerImage)
  const onImageNftHandle = (src: string | StaticImageData) => {
    setImageNft(src)
  }

  return (
    <div className="flex w-full flex-col">
      <Card
        alt={name}
        // eslint-disable-next-line react/no-children-prop
        children={<HomeTopCardInfo floorPrice={floorPrice} name={name} />}
        className="relative h-[331px] w-full cursor-pointer opacity-100 smd:h-[291px] xl:h-[331.03px] xl:w-[332.03px]"
        fileClassName="opacity-100"
        src={imageNft}
        variant="all"
      />
      <div className={`mt-4 flex items-center`}>
        <div className="flex w-full gap-[10px] text-left xl:w-[332.03px] xl:gap-4">
          <Card
            alt={name}
            className={`${
              imageNft === nft.logoImage && '!border-black'
            } !h-[92px] w-1/4 border border-transparent sm:h-24 md:h-[100px] slg:h-[72px] lg:!h-[69.10px] lg:!max-w-[69.25px] xlg:!max-h-[63.90px] xlg:!max-w-[64.5px] xl:!h-[70.85px] xl:!max-h-[70.85px] xl:!w-[71px] xl:!max-w-[71px]`}
            fileClassName="opacity-100"
            src={nft.logoImage}
            variant="all"
            onClick={onImageNftHandle}
          />
        </div>
      </div>
    </div>
  )
}

const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  launchpad,
  trending,
  collectionTop,
  isLoadingLaunchpad,
  isLoadingTrending,
  spotLight,
  collectionTable,
  isLoadingCollection,
  isLoadingCollectionTop,
  isLoadingSpotLight,
  setQuery,
  query,
}) => {
  const [launchpadData, setLaunchpadData] = useState<React.ReactElement[]>([])
  const [trendingData, setTrendingData] = useState<React.ReactElement[]>([])
  const [trendingArtsData, setTrendingArtsData] = useState<React.ReactElement[]>([])
  const [galleryData, setGalleryData] = useState<React.ReactElement[]>([])
  const [spotLightData, setSpotLightData] = useState<React.ReactElement[]>([])
  const [currentDate, setCurrentDate] = useState<string>('')

  const [cols, setCols] = useState<ColsProps>({
    trendingCols: 4,
    launchpadCols: 4,
    galleryCols: 3,
    NFTCols: 4,
  })
  const { width }: any = useWindowDimensions()
  const { exploreBlockChain } = useBlockchain()
  const [active, setActive] = useState<string>('64de1922637e465863bc6a2e')
  const [activetime, setActivetime] = useState<string>('1')
  const [activeTrending, setActiveTrending] = useState<string>('true')

  const collectionlimitedData = collectionTable?.slice(0, 5)
  const collectionlimitedNextData = collectionTable?.slice(5, 10)

  const [blockchainTab, setBlockchainTab] = useState<TabType[]>()

  useMemo(() => {
    const modifiedArrayOfObjects = exploreBlockChain?.map(obj => ({
      value: obj.id,
      Label: obj.imageUrl,
      hoverLabel: obj.greyImageUrl,
      type: 'image',
    }))
    modifiedArrayOfObjects && setBlockchainTab(modifiedArrayOfObjects)
  }, [exploreBlockChain])

  useMemo(() => {
    const updatedQuery = { ...query, time: activetime } as CollectionTableListQuery
    setQuery && setQuery(updatedQuery)
  }, [activetime])

  useMemo(() => {
    const updatedQuery = { ...query, trending: activeTrending } as CollectionTableListQuery
    setQuery && setQuery(updatedQuery)
  }, [activeTrending])

  useMemo(() => {
    const updatedQuery = { ...query, blockchainId: active } as CollectionTableListQuery
    setQuery && setQuery(updatedQuery)
  }, [active])

  useMemo(() => {
    if (1024 < width && width <= 4000) {
      setCols(pre => ({ ...pre, trendingCols: 4, launchpadCols: 4, galleryCols: 3, NFTCols: 4 }))
    } else if (786 < width && width <= 1024) {
      setCols(pre => ({ ...pre, trendingCols: 3, launchpadCols: 3, galleryCols: 2, NFTCols: 2 }))
    } else if (650 <= width && width <= 786) {
      setCols(pre => ({ ...pre, trendingCols: 2, launchpadCols: 2, galleryCols: 1, NFTCols: 2 }))
    } else if (0 <= width && width < 650) {
      setCols(pre => ({ ...pre, trendingCols: 1, launchpadCols: 1, galleryCols: 1, NFTCols: 1 }))
    }
  }, [width])

  useEffect(() => {
    const currentDateStr = getCurrentDate()
    setCurrentDate(currentDateStr)
  }, [])

  const homeTopCardElements = useMemo(() => {
    return collectionTop?.map((nft: any, i: number) => <HomeTopCardElements key={i} nft={nft} />)
  }, [collectionTop])

  const onTrending = async () => {
    setTrendingData(
      trending &&
        trending[0]?.collections?.map((trendingitem: any, i: number) => {
          return (
            <div className="flex w-full flex-col" key={i}>
              <Card
                alt={trendingitem.name}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <TrendingInfo
                    data={[
                      {
                        Floor: `${trendingitem.floorPrice} ETH`,
                        Volume: `${trendingitem.volumes}`,
                        Sales: `${trendingitem.sales}`,
                      },
                    ]}
                    name={trendingitem.name}
                  />
                }
                className="mt-1 h-full w-full opacity-100 xl:!h-[353px] xl:!w-[332.03px] "
                direction="y-direction"
                fileClassName="!h-[216px] xl:!h-[256px] opacity-100"
                src={trendingitem.logoImage}
                variant="top"
              />
            </div>
          )
        })
    )
  }

  const onLaunchpad = async () => {
    setLaunchpadData(
      launchpad?.map((launch: any, i: number) => (
        //  todo according to API docs
        <div className="flex w-full flex-col" key={i}>
          <Card
            alt={launch.collectionId.name}
            // eslint-disable-next-line react/no-children-prop
            children={
              <LaunchPadInfo
                isLiked={i / 2 === 0 ? true : false}
                likeCount={launch.like}
                name={launch.collectionId.name}
                type={currentDate > getDateFromTimestamp(launch.end) ? 'Live' : getTimeFromTimestamp(launch.end)}
              />
            }
            className="mt-1 h-full w-full xl:!h-[351.60px] xl:!w-[332.03px]"
            direction="y-direction"
            fileClassName="!h-[214px] xl:!h-[254.99px]"
            href="/launchpad"
            notification={
              i / 2 === 0 ? (
                <IconButton
                  // eslint-disable-next-line react/no-children-prop
                  children={<IconNotification className="flex" fill="white" />}
                  className={`${launchpadNotification} bg-[#9fb1ba]   `}
                />
              ) : (
                <IconButton
                  // eslint-disable-next-line react/no-children-prop
                  children={<IconNotification className="flex" />}
                  className={`${launchpadNotification} bg-neutral-800`}
                />
              )
            }
            src={launch.collectionId.bannerImage}
            variant="top"
          />
        </div>
      ))
    )
  }

  const onGallery = async () => {
    setGalleryData(
      Array(6)
        .fill(0)
        .map((i: number) => <GalleryCard key={i} src={handImage} />)
    )
  }

  const onTrendingArts = async () => {
    setTrendingArtsData(
      trending &&
        trending[1]?.collections?.map((trendingArt: any, i: number) => {
          return (
            <div className="flex w-full flex-col" key={i}>
              <Card
                alt={trendingArt?.name}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <TrendingInfo
                    data={[
                      {
                        Floor: `${trendingArt.floorPrice} ETH`,
                        Volume: `${trendingArt.volumes} ETH`,
                        Sales: `${trendingArt.sales} ETH`,
                      },
                    ]}
                    name={trendingArt.name}
                  />
                }
                className="mt-1 h-full w-full opacity-100 xl:!h-[353px] xl:!w-[332.03px] "
                direction="y-direction"
                fileClassName="!h-[216px] xl:!h-[256px] opacity-100"
                src={trendingArt.logoImage}
                variant="top"
              />
            </div>
          )
        })
    )
  }

  const onSpotLight = async () => {
    const spotLightArray = Array.isArray(spotLight) ? spotLight : []
    setSpotLightData(
      spotLightArray?.map((spotLight: any, i: number) => {
        return (
          <div className="flex w-full flex-col" key={i}>
            <SpotLightCard
              className="w-full xl:!w-[332.03px]"
              floor={spotLight.floorPrice}
              likeNumber={32}
              name={spotLight.name}
              nfts={spotLight.nfts}
              sales={spotLight.sales}
              volume={spotLight.volumes}
            />
          </div>
        )
      })
    )
  }

  useMemo(() => {
    onGallery()
  }, [])

  useMemo(() => {
    onLaunchpad()
  }, [launchpad])

  useMemo(() => {
    onTrending()
    onTrendingArts()
  }, [trending])

  useMemo(() => {
    onSpotLight()
  }, [spotLight])

  const users = useMemo(() => {
    return collectionlimitedData?.map((dataItem: collectionTableType, index: number) => ({
      serialNumber: (
        <div className="flex">
          <Typography className="py-4 font-Poppins text-base font-bold leading-[145%] text-neutral-100 ">
            {index + 1}
          </Typography>
        </div>
      ),
      collection: (
        <div className="flex h-full w-full justify-between overflow-hidden rounded">
          <div className="mr-4 flex !h-[72px] !w-[72px]">
            <Card
              alt=""
              className="flex !h-full !w-[72px] rounded-sm object-cover text-start"
              src={dataItem?.bannerImage}
              variant="all"
            />
          </div>
          <div className="flex w-full items-center py-4 pr-2 text-left">
            <Typography className="custom-truncate-width truncate pr-3 font-Poppins text-base font-semibold text-neutral-100">
              {dataItem?.name}
            </Typography>
            <IconCheck />
          </div>
        </div>
      ),
      Floor: (
        <div className="mt-4 w-full overflow-hidden text-start uppercase ">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold uppercase text-neutral-100">
            {dataItem?.floorPrice} ETH
          </Typography>
          <Typography className="object-cover font-Poppins text-md font-normal leading-[145%] text-[#32c74a]">
            + {dataItem.floorPercentage}%
          </Typography>
        </div>
      ),
      Volume: (
        <div className="mt-4 w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold uppercase text-neutral-100">
            {dataItem?.volumes} MATIC
          </Typography>
          <Typography className="object-cover font-Poppins text-md font-normal leading-[145%] text-[#32c74a]">
            + {dataItem.volumePercentage}%
          </Typography>
        </div>
      ),
      Sales: (
        <div className="mt-4 w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold  uppercase  text-neutral-100">
            {dataItem?.sales}
          </Typography>
          <Typography className="object-cover font-Poppins text-md font-normal leading-[145%] text-[#32c74a]">
            + {dataItem.salePercentage}%
          </Typography>
        </div>
      ),
    }))
  }, [collectionlimitedData])

  const usersNext = useMemo(() => {
    return collectionlimitedNextData?.map((dataItem: collectionTableType, index: number) => ({
      serialNumber: (
        <div className="flex">
          <Typography className="py-4 font-Poppins text-base font-bold leading-[145%] text-neutral-100 ">
            {index + 6}
          </Typography>
        </div>
      ),
      collection: (
        <div className="flex h-full w-full justify-between overflow-hidden rounded">
          <div className="mr-4 flex !h-[72px] !w-[72px]">
            <Card
              alt=""
              className="flex !h-full !w-[72px] rounded-sm object-cover text-start"
              src={dataItem?.bannerImage}
              variant="all"
            />
          </div>
          <div className="flex w-full items-center py-4 pr-2 text-left">
            <Typography className="custom-truncate-width truncate pr-3 font-Poppins text-base font-semibold text-neutral-100">
              {dataItem?.name}
            </Typography>
            <IconCheck />
          </div>
        </div>
      ),
      Floor: (
        <div className="mt-4 w-full overflow-hidden text-start uppercase ">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold uppercase text-neutral-100">
            {dataItem?.floorPrice} ETH
          </Typography>
          <Typography className="object-cover font-Poppins text-md font-normal leading-[145%] text-[#32c74a]">
            + {dataItem.floorPercentage}%
          </Typography>
        </div>
      ),
      Volume: (
        <div className="mt-4 w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold uppercase text-neutral-100">
            {dataItem?.volumes} MATIC
          </Typography>
          <Typography className="object-cover font-Poppins text-md font-normal leading-[145%] text-[#32c74a]">
            + {dataItem.volumePercentage}%
          </Typography>
        </div>
      ),
      Sales: (
        <div className="mt-4 w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold  uppercase  text-neutral-100">
            {dataItem?.sales}
          </Typography>
          <Typography className="object-cover font-Poppins text-md font-normal leading-[145%] text-[#32c74a]">
            + {dataItem.salePercentage}%
          </Typography>
        </div>
      ),
    }))
  }, [collectionlimitedNextData])

  const renderCell = (user: any, column: TableColumn) => user[column.accessor]

  return (
    <div className="container">
      <div className="comm_carousel_arrow nft_carousel comm-bottom-gap relative mt-8 pr-0">
        {isLoadingCollectionTop ? (
          <div className={homSkeletonCss}>
            <SkeletonTopCollection />
          </div>
        ) : (
          <CardCarousel cols={cols.NFTCols} elements={homeTopCardElements} mobileCols={1} tabletCols={3} />
        )}
      </div>
      <div className="flex h-full w-full flex-row">
        <div className="h-full w-full justify-center">
          <div className="relative mb-[28px] flex w-full flex-col items-start justify-between md:items-center slg:flex-row">
            <div className="blockchain-tab mb-4 slg:mb-0">
              <Tab
                active={active}
                className="h-[48px]"
                defaultTab={blockchainTab ? blockchainTab?.[0].value : tabs[0].value}
                setActive={setActive}
                tabItemClass="tabs-item"
                tabItemWrp={47}
                tabWrpWidth={141}
                tabs={blockchainTab ? blockchainTab : tabs}
              />
            </div>
            <div className="block flex-row gap-3 md:flex md:flex-row-reverse">
              <div className="absolute left-[157px] top-0 mb-4 smd:static md:mb-0">
                <Tab
                  active={activeTrending}
                  className="h-[48px]"
                  defaultTab={trendingTab?.[0].value}
                  setActive={setActiveTrending}
                  tabItemClass="tabs-trending-item"
                  tabWrpWidth={152}
                  tabs={trendingTab}
                />
              </div>
              <Tab
                active={activetime}
                className="h-[48px]"
                defaultTab={timeTab?.[0].value}
                setActive={setActivetime}
                tabItemClass="tabs-time-item"
                tabWrpWidth={251}
                tabs={timeTab}
              />
            </div>
          </div>
          {isLoadingCollection ? (
            <div className="mt-5">
              <SkeletonCollectionTable />
            </div>
          ) : (
            <div className="home-page-table mt-8 flex flex-col justify-between gap-8 overflow-hidden md:mt-[22px] md:gap-6 slg:flex-row xlg:gap-[30px] xl:gap-20">
              <div className="topCollection_table slg:w-1/2">
                <Table
                  className="w-[650px] md:w-full slg:w-[650px]"
                  columns={[
                    { colSpan: 1, header: '#', accessor: 'serialNumber' },
                    { colSpan: 2, header: 'Collection', accessor: 'collection' },
                    { colSpan: 1, header: 'Floor', accessor: 'Floor' },
                    { colSpan: 1, header: 'Volume', accessor: 'Volume' },
                    { colSpan: 1, header: 'Sales', accessor: 'Sales' },
                  ]}
                  data={users}
                  headerCSS="child"
                  renderCell={renderCell}
                />
              </div>
              <div className="topCollection_table slg:w-1/2">
                <Table
                  className="w-[650px] md:w-full slg:w-[650px]"
                  columns={[
                    { colSpan: 1, header: '#', accessor: 'serialNumber' },
                    { colSpan: 2, header: 'Collection', accessor: 'collection' },
                    { colSpan: 1, header: 'Floor', accessor: 'Floor' },
                    { colSpan: 1, header: 'Volume', accessor: 'Volume' },
                    { colSpan: 1, header: 'Sales', accessor: 'Sales' },
                  ]}
                  data={usersNext}
                  headerCSS="child"
                  renderCell={renderCell}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-ful mt-8 flex h-full justify-center smd:mt-6">
        <div className="h-full w-full max-w-[1440] ">
          <div className="text-start font-Poppins">
            <Typography className={commHead}>Launchpad Drops</Typography>
          </div>
          <div className="comm_carousel_arrow collection_spotlight_wrp comm-bottom-gap mt-6 min-h-[323.56px] w-full">
            {isLoadingLaunchpad ? (
              <div className={homSkeletonCss}>
                <LaunchpadCardSkeltonList />
              </div>
            ) : (
              <CardCarousel cols={cols.launchpadCols} elements={launchpadData} tabletCols={3} />
            )}
          </div>
        </div>
      </div>
      <div className="w-ful flex h-full justify-center">
        <div className="h-full w-full max-w-[1440] ">
          <div className="text-start font-Poppins">
            <Typography className={commHead}>Trending in {trending && trending[0].category}</Typography>
          </div>
          <div className="comm_carousel_arrow comm-bottom-gap mt-6 w-full">
            {isLoadingTrending ? (
              <div className={homSkeletonCss}>
                <LaunchpadCardSkeltonList />
              </div>
            ) : (
              <CardCarousel cols={cols.trendingCols} elements={trendingData} tabletCols={3} />
            )}
          </div>
        </div>
      </div>
      <div className="flex h-full w-full justify-center">
        <div className="knowledge-gallery-bg-gradient h-full w-full justify-center rounded-sm">
          <div className="flex h-full w-full flex-col justify-end gap-4 overflow-hidden px-4 pb-8 pt-5 md:gap-12 md:px-8 xl:flex-row xl:py-4 xl:pl-4 xl:pr-4">
            <div className="backdrop-blur-sm xl:mt-[98px] xl:w-[24%] xl:text-left">
              <Typography className="text-left font-Poppins text-subtitle font-bold text-neutral-800">
                Knowledge Gallery
              </Typography>
              <Typography className="w-full text-left font-Poppins text-sm font-medium leading-[145%] text-neutral-800 smd:text-md xl:mt-[44px] xl:w-[224px]">
                Lorem ipsum dolor sit amet consectetur. Euismod cras purus tempor proin. Tempus velit potenti ipsum eget
                elementum purus.
              </Typography>
            </div>
            <div className="comm_carousel_arrow_gallery xl:w-[76%]">
              <CardCarousel cols={cols.galleryCols} elements={galleryData} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex h-full w-full justify-center">
        <div className="w-full">
          <div className="text-start font-Poppins">
            <Typography className={commHead}>Trending in {trending && trending[1].category} </Typography>
          </div>
          <div className="comm_carousel_arrow comm-bottom-gap relative mt-6">
            {isLoadingTrending ? (
              <div className={homSkeletonCss}>
                <LaunchpadCardSkeltonList />
              </div>
            ) : (
              <CardCarousel cols={cols.trendingCols} elements={trendingArtsData} slidesToSlide={4} tabletCols={3} />
            )}
          </div>
        </div>
      </div>
      <div className="flex h-full w-full justify-center">
        <div className="w-full">
          <div className="text-start font-Poppins">
            <Typography className={commHead}>Collection Spotlight</Typography>
          </div>
          <div className="comm_carousel_arrow spotligth comm-bottom-gap relative mt-6 pb-2 lg:pb-8">
            {isLoadingSpotLight ? (
              <div className="lunchpad_drop explore_card mb-5 grid !gap-4 md:grid-cols-2 slg:grid-cols-3 xlg:grid-cols-4">
                <ExploreCardSkeltonList />
              </div>
            ) : (
              <CardCarousel cols={cols.trendingCols} elements={spotLightData} tabletCols={3} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePageTemplate
