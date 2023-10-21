'use client'
import { SetStateAction, useMemo, useState } from 'react'
import Image from 'next/image'

import { CollectionDesign } from '../Collection/utils'
import { ColsProps } from '../HomePageTemplate/interface'

import { ActivityTableSkeltonActivityData, PROFILE_VALUE } from './utils'
import { NftCollection, ProfileFinalTemplateProps } from './interface'

import CollectionBanner from 'design-systems/Organisms/Collection/CollectionBanner'
import CollectionInfo from 'design-systems/Organisms/Collection/CollectionInfo'
import Typography from 'design-systems/Atoms/Typography'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import ProfileFinalFilter from 'design-systems/Organisms/ProfileFinal/ProfileFinalFilter'
import ProfilSingleSideBarFilter from 'design-systems/Organisms/ProfileFinal/ProfilSingleSideBarFilter'
import CollectionCardList from 'design-systems/Organisms/Collection/CollectionCardList'
import SpotLightCard from 'design-systems/Molecules/Cards/SpotLightCard'
import { CloseIcon, FilledArrow, IconCheck } from 'design-systems/Atoms/Icons'
import Table from 'design-systems/Molecules/Table'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import Card from 'design-systems/Molecules/Cards/Card'
import saleIcon from 'assets/images/sale.svg'
import CollectionBannerSkeleton from 'design-systems/Molecules/Skeleton/CollectionSkeleton/CollectionBannerSkeleton'
import CollectionInfoSkeleton from 'design-systems/Molecules/Skeleton/CollectionSkeleton/CollectionInfoSkeleton'
import CardCarousel from 'design-systems/Molecules/Carousel'
import useWindowDimensions from 'hooks/useWindowDimensions'
import { convertTimeToAgo } from 'utils'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import TableSkelton from 'design-systems/Molecules/Skeleton/TableSkelton'

const ProfileFinalTemplate: React.FC<ProfileFinalTemplateProps> = ({
  onSearch,
  onSortByPrice,
  exploreBlockChain,
  isLoadingExploreBlockChain,
  onChangePrice,
  ProfileFinalData,
  fetchMoreCollection,
  hasMoreCollection,
  isFetchingNextCollection,
  isLoadingCollection,
  isRefetching,
  collectionDetail,
  isLoadingCollectionDetail,
  setFilters,
  ProfileCreatData,
  CollectedTabData,
  onChangeFilter,
  onClickEvent,
}) => {
  const { width }: any = useWindowDimensions()

  const [category, setCategory] = useState<ExploreBlock>(PROFILE_VALUE[0])
  const [moff, setMoff] = useState<boolean>(false)
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [design, setDesign] = useState<CollectionDesign>('multi')
  const [type, setType] = useState<string>('collected')
  const [isArrowUp, setIsArrowUp] = useState<boolean>(false)
  const [isArrowUpNext, setIsArrowUpNext] = useState<boolean>(false)
  const [spotLightData, setSpotLightData] = useState<React.ReactElement[]>([])

  const [cols, setCols] = useState<ColsProps>({
    trendingCols: 4,
    launchpadCols: 4,
    galleryCols: 3,
    NFTCols: 4,
  })
  const toggleArrowDirection = () => {
    setIsArrowUp(prevState => !prevState)
  }
  const toggleArrowDirectionNext = () => {
    setIsArrowUpNext(prevState => !prevState)
  }

  const renderCell = (user: any, column: TableColumn) => user[column.accessor]

  const handleTabChange = (e: any) => {
    setType(e.id as string)
    setFilters((prevState: any) => ({
      ...prevState, // Copy the previous state
      tab: e.id, // Update the specific key
    }))
  }

  const users = useMemo(() => {
    return ProfileFinalData?.map((dataItem: any, index: number) => ({
      Event: (
        <div className="flex gap-3">
          <Image alt="Profile Picture" src={saleIcon} />
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.type}
          </Typography>
        </div>
      ),
      Item: (
        <div className="flex h-full w-full justify-between overflow-hidden rounded">
          <div className="mr-1 flex !h-[72px] !w-[72px] items-center">
            <Card
              alt=""
              className="flex !h-[48px] !w-[48px] rounded-sm object-cover text-start"
              src={dataItem?.fileUrl}
              variant="all"
            />
          </div>
          <div className="flex w-full items-center py-4 pr-2 text-left">
            <Typography
              className="lg:custom-truncate-width trending-truncate-width truncate pr-3 font-semibold text-black"
              size="md"
            >
              {dataItem?.name}
            </Typography>
            <IconCheck />
          </div>
        </div>
      ),
      Price: (
        <div className="w-full overflow-hidden text-start uppercase ">
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.amount} ETH
          </Typography>
        </div>
      ),
      Quantity: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins text-base font-semibold uppercase  text-neutral-100">
            {dataItem?.quantity}
          </Typography>
        </div>
      ),
      Time: (
        <div className="w-full overflow-hidden text-start">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold   text-neutral-100">
            {convertTimeToAgo(new Date(dataItem?.time).getTime())}
          </Typography>
        </div>
      ),
      From: (
        <div className="w-full overflow-hidden text-start">
          <Typography className="h-full w-full object-cover font-Poppins text-base font-semibold text-[#DB417D]">
            {dataItem?.from?.slice(0, 4)}...{dataItem?.from?.slice(-4)}
          </Typography>
        </div>
      ),
      To: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins text-base font-semibold text-[#DB417D]">
            {dataItem?.to?.slice(0, 4)}...{dataItem?.to?.slice(-4)}
          </Typography>
        </div>
      ),
    }))
  }, [ProfileFinalData])

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

  const onSpotLight = async () => {
    const ProfileFinalCreated = Array.isArray(ProfileCreatData) ? ProfileCreatData : []
    setSpotLightData(
      ProfileFinalCreated?.map((spotLight: NftCollection, i: number) => {
        return (
          <div className="flex w-full flex-col" key={i}>
            <SpotLightCard
              className="h-[304px] w-full"
              collectionName={
                <Typography className="leading-4 custom-truncate-width truncate font-Poppins text-body font-bold text-neutral-100">
                  {spotLight?.name}
                  <IconCheck className="ml-3 inline-block" height={15} width={15} />
                </Typography>
              }
              name="Collection One"
              nfts={spotLight?.nfts}
            />
          </div>
        )
      })
    )
  }
  useMemo(() => {
    onSpotLight()
  }, [ProfileCreatData])

  return (
    <div className="profilefinal-page container mb-0 mt-8 lmd:mb-[39px]">
      <div>
        {isLoadingCollectionDetail ? (
          <CollectionBannerSkeleton />
        ) : (
          <CollectionBanner
            bannerImage={collectionDetail?.bannerImage}
            logoImage={collectionDetail?.logoImage}
            name={collectionDetail?.name}
            showBannerInfo={false}
          />
        )}
      </div>
      {isLoadingCollectionDetail ? (
        <CollectionInfoSkeleton />
      ) : (
        <CollectionInfo
          creator={collectionDetail?.creator}
          data={[
            {
              'Floor Price': `${collectionDetail?.floorPrice} ETH`,
              'Total Volume': `${collectionDetail?.totalVolume} ETH`,
              'Best Offer': `${collectionDetail?.bestOffer} ETH`,
              'Listed': `${collectionDetail?.listed}%`,
              'Owners': `${collectionDetail?.noOfOwner}%`,
              'Unique Owners': `${collectionDetail?.uniqueOwner}%`,
            },
          ]}
          description={collectionDetail?.description}
          name={collectionDetail?.name}
        />
      )}
      <div className="mt-[22px] flex w-full border-b-2 border-grayBorder pb-[1px] ">
        <CategoryList categories={PROFILE_VALUE} onClick={handleTabChange} />
      </div>
      <ProfileFinalFilter
        category={category}
        moff={moff}
        totalCOunt={24}
        type={type}
        onClick={() => setShowFilter(pre => (category.id === 'data' ? false : !pre))}
        onDesign={type => setDesign(type as CollectionDesign)}
        onMoffClick={() => setMoff(pre => !pre)}
        onSearch={onSearch}
        onSortByPrice={onSortByPrice}
      />
      {type === 'created' && (
        <div className="comm_carousel_arrow spotligth comm-bottom-gap relative mt-10 border-b-2 border-grayBorder">
          <CardCarousel cols={cols.trendingCols} elements={spotLightData} tabletCols={3} />
        </div>
      )}
      <div className="mt-10 flex flex-row gap-4 pb-8">
        <ProfilSingleSideBarFilter
          CollectedTabData={CollectedTabData}
          category={type}
          exploreBlockChain={exploreBlockChain as ExploreBlock[]}
          isLoadingExploreBlockChain={isLoadingExploreBlockChain}
          isShow={showFilter}
          setFilters={setFilters}
          traits={collectionDetail?.filter.traits}
          onChangeFilter={onChangeFilter}
          onChangePrice={onChangePrice}
          onClickEvent={onClickEvent}
          onSearch={onSearch}
        />
        {type === 'collected' && (
          <CollectionCardList
            collectionData={ProfileFinalData}
            design={design}
            fetchMoreCollection={fetchMoreCollection}
            hasMoreCollection={hasMoreCollection as boolean}
            isFetchingNextCollection={isFetchingNextCollection}
            isLoadingCollection={isLoadingCollection}
            isRefetching={isRefetching}
            isShow={showFilter}
            type={type}
          />
        )}
        {type === 'created' && (
          <CollectionCardList
            collectionData={ProfileFinalData}
            design={design}
            fetchMoreCollection={fetchMoreCollection}
            hasMoreCollection={hasMoreCollection as boolean}
            isFetchingNextCollection={isFetchingNextCollection}
            isLoadingCollection={isLoadingCollection}
            isProfileFinal={true}
            isRefetching={isRefetching}
            isShow={showFilter}
            type={type}
          />
        )}
        {type === 'favorite' && (
          <CollectionCardList
            collectionData={ProfileFinalData}
            design={design}
            fetchMoreCollection={fetchMoreCollection}
            hasMoreCollection={hasMoreCollection as boolean}
            isFetchingNextCollection={isFetchingNextCollection}
            isLoadingCollection={isLoadingCollection}
            isRefetching={isRefetching}
            isShow={showFilter}
            type={type}
          />
        )}
        {type === 'activity' && (
          <>
            {isLoadingCollection ? (
              <TableSkelton
                DataItem={ActivityTableSkeltonActivityData}
                className="w-[1136px] xlg:w-full"
                isBorderBottom={true}
              />
            ) : users?.length ? (
              <Table
                className="activity-table w-[1136px]  xlg:w-full"
                columns={[
                  { colSpan: 1, header: 'Event', accessor: 'Event' },
                  { colSpan: 2, header: 'Item', accessor: 'Item' },
                  {
                    colSpan: 3,
                    header: (
                      <div className="flex items-center gap-3">
                        <Typography>Price</Typography>
                        <span className="cursor-pointer" onClick={toggleArrowDirection}>
                          <FilledArrow
                            className={`transform cursor-pointer transition-transform duration-300 ${
                              isArrowUp ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </div>
                    ),
                    accessor: 'Price',
                  },
                  {
                    colSpan: 4,
                    header: (
                      <div className="flex items-center gap-3">
                        <Typography>Quantity</Typography>
                        <span className="cursor-pointer" onClick={toggleArrowDirectionNext}>
                          <FilledArrow
                            className={`transform cursor-pointer transition-transform duration-300 ${
                              isArrowUpNext ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </div>
                    ),
                    accessor: 'Quantity',
                  },
                  { colSpan: 5, header: 'Time', accessor: 'Time' },
                  { colSpan: 6, header: 'From', accessor: 'From' },
                  { colSpan: 7, header: 'To', accessor: 'To' },
                ]}
                data={users}
                renderCell={renderCell}
              />
            ) : (
              <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
            )}
          </>
        )}
      </div>

      {showFilter && (
        <div
          className="fixed left-0 top-0 z-[9999]  flex h-[100vh] w-auto animate-fade-in-up  flex-col overflow-y-auto overflow-x-hidden bg-white
          p-8 xs:w-[321px]
          sm:w-[390px] smd:w-[480px]
          md:w-[650px] lmd:w-[768px]
          slg:hidden slg:w-full"
        >
          <div className="flex w-full cursor-pointer justify-end text-right">
            <p onClick={() => setShowFilter(false)}>
              <CloseIcon />
            </p>
          </div>
          <div className="mt-8">
            <ProfilSingleSideBarFilter
              CollectedTabData={CollectedTabData}
              category={type}
              exploreBlockChain={exploreBlockChain as ExploreBlock[]}
              isLoadingExploreBlockChain={isLoadingExploreBlockChain}
              isShow={showFilter}
              setFilters={setFilters}
              traits={collectionDetail?.filter.traits}
              onChangeFilter={onChangeFilter}
              onChangePrice={onChangePrice}
              onClickEvent={onClickEvent}
              onSearch={onSearch}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileFinalTemplate
