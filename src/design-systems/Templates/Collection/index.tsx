import { ReactNode, useCallback, useMemo, useState } from 'react'
import ReactSlider from 'react-slider'

import { CollectionPageTemplateProps } from './interface'
import {
  COLLECTION_CATEGORY,
  CollectionDesign,
  CollectionTableSkeltonActivityData,
  CollectionTableSkeltonItemData,
  ColumnsActivity,
  ColumnsItem,
} from './utils'

import CategoryList from 'design-systems/Organisms/List/CategoryList'
import CollectionInfo from 'design-systems/Organisms/Collection/CollectionInfo'
import CollectionBanner from 'design-systems/Organisms/Collection/CollectionBanner'
import CollectionFilter from 'design-systems/Organisms/Collection/CollectionFilter'
import CollectionSideBarFilter from 'design-systems/Organisms/Collection/CollectionSideBarFilter'
import CollectionCardList from 'design-systems/Organisms/Collection/CollectionCardList'
import Typography from 'design-systems/Atoms/Typography'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import Card from 'design-systems/Molecules/Cards/Card'
import Table from 'design-systems/Molecules/Table'
import { CloseIcon, IconAttachment, IconCheck, IconSale } from 'design-systems/Atoms/Icons'
import CollectionDataTab from 'design-systems/Organisms/Collection/CollectionDataTab'
import { CURRENT_TIME, convertTimeToAgo, getLastHourTime } from 'utils'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import TableSkelton from 'design-systems/Molecules/Skeleton/TableSkelton'
import CollectionBannerSkeleton from 'design-systems/Molecules/Skeleton/CollectionSkeleton/CollectionBannerSkeleton'
import CollectionInfoSkeleton from 'design-systems/Molecules/Skeleton/CollectionSkeleton/CollectionInfoSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import { handleCollectionUI } from 'design-systems/Organisms/Collection/CollectionCardList/utils'
import Button from 'design-systems/Atoms/Button'
import { AnyFunction } from 'interfaces'

const CollectionPageTemplate: React.FC<CollectionPageTemplateProps> = ({
  isLoadingExploreBlockChain,
  exploreBlockChain,
  isLoadingCollection,
  collectionData,
  hasMoreCollection,
  isFetchingNextCollection,
  fetchMoreCollection,
  isRefetching,
  onSetTab,
  collectionDetail,
  isLoadingCollectionDetail,
  isLoadingOwnersTop50,
  getOwnersTop50Async,
  onSortByPrice,
  onChangePrice,
  onCheckClick,
  getPriceVolumeAsync,
  isLoadingPriceVolume,
  getOwnerDistributionAsync,
  isLoadingOwnerDistribution,
  isLoadingPriceDistribution,
  getPriceDistributionAsync,
  totalCOunt,
  onSearch,
  onClickEvent,
  onChangeCategory,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [category, setCategory] = useState<ExploreBlock>(COLLECTION_CATEGORY[0])
  const [design, setDesign] = useState<CollectionDesign>('multi')
  const [moff, setMoff] = useState<boolean>(false)
  const [range, setRange] = useState<number>(0)
  const [top50Owners, setTop50Owners] = useState<DataOwnerTop50[]>()
  const [volumePrice, setVolumePrice] = useState<VolumePriceData>()
  const [priceDistributionData, setPriceDistributionData] = useState<CollectionPriceDistribution>()
  const [ownerDistribution, setOwnerDistribution] = useState<FormattedDistributionItem[]>()
  type User = {
    item: ReactNode
    currentPrice: ReactNode
    bestOffer: ReactNode
    lastSale: ReactNode
    rarity: ReactNode
    owner: ReactNode
    timeListed: ReactNode
  }
  type Active = {
    event: ReactNode
    item: ReactNode
    price: ReactNode
    data: ReactNode
    form: ReactNode
    to: ReactNode
  }

  const Items: User[] = useMemo(
    () =>
      collectionData.map(({ bestOffer, fileUrl, lastSale, name, timeListed, usdAmount, tokenId }, i) => {
        return {
          item: (
            <div className="flex flex-row items-center">
              {moff && <input checked={range >= i + 1 && true} className="mr-3" type="checkbox" />}
              <Card
                alt=""
                borderSize="xs"
                className={`flex h-12 w-12 text-start ${moff && range >= i + 1 && 'border border-lightGray'}`}
                src={fileUrl}
                variant="all"
              />
            </div>
          ),
          currentPrice: (
            <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {usdAmount} ETH
            </Typography>
          ),
          bestOffer: (
            <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {bestOffer} ETH
            </Typography>
          ),
          lastSale: (
            <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {lastSale} ETH
            </Typography>
          ),
          rarity: (
            <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              #{tokenId}
            </Typography>
          ),
          owner: (
            <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
              {name}
            </Typography>
          ),
          timeListed: (
            <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {convertTimeToAgo(new Date(timeListed).getTime())}
            </Typography>
          ),
        }
      }),
    [collectionData, range, moff]
  )
  const renderCell = (user: any, column: TableColumn) => user[column.accessor]
  const Activity: Active[] = useMemo(
    () =>
      collectionData.map(({ fileUrl, from, to, nftStatus, name, timeListed, usdAmount }, i) => {
        return {
          event: (
            <Typography className="flex flex-row items-center text-center font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {moff && <input checked={range >= i + 1 && true} className="mr-3" type="checkbox" />}
              <IconSale className="mr-3 inline-block" /> {nftStatus}
            </Typography>
          ),
          item: (
            <div className="flex w-full flex-row gap-3">
              <Card alt="" borderSize="xs" className="flex h-12 w-12 text-start" src={fileUrl} variant="all" />
              <Typography className="flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
                {name}
              </Typography>
              <IconCheck className="mt-[16px]" />
            </div>
          ),
          price: (
            <div className="flex w-full flex-col text-start">
              <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
                {usdAmount} ETH
              </Typography>
              <Typography className="font-Poppins text-md font-normal leading-[20.3px] text-neutral-100">
                $10,000 USD
              </Typography>
            </div>
          ),
          data: (
            <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {convertTimeToAgo(new Date(timeListed).getTime())}
            </Typography>
          ),
          form: (
            <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
              {from}
            </Typography>
          ),
          to: (
            <div className="flex w-full flex-row items-center gap-10 text-start">
              <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
                {to}
              </Typography>
              <IconAttachment />
            </div>
          ),
        }
      }),
    [collectionData, range, moff]
  )

  const activeRenderCell = (user: any, column: TableColumn) => user[column.accessor]

  const tableData = useMemo(() => {
    if (category.id === 'item') {
      return {
        columns: ColumnsItem,
        data: Items,
        headerCSS: 'collection-table-child last:!pr-0',
        isBorderBottom: true,
        renderCell: renderCell,
        colCSS: 'last:!pr-0',
      }
    } else if (category.id === 'activity') {
      return {
        columns: ColumnsActivity,
        data: Activity,
        headerCSS: 'collection-active-table-child',
        isBorderBottom: true,
        renderCell: activeRenderCell,
      }
    }
  }, [Activity, Items, category.id])

  async function fetchData(apiFunction: AnyFunction, params: any) {
    try {
      const response = await apiFunction(params)
      return response.data // Assuming the response contains the data you need
    } catch (error) {
      console.error(`API call failed: ${error}`)
      return null // Or handle the error as needed
    }
  }

  const onSelectTime = useCallback(async (startDateTime?: string, endDateTime?: string) => {
    Promise.all([
      fetchData(getOwnersTop50Async, {
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc',
        endTime: startDateTime ?? CURRENT_TIME.toISOString(),
        startTime: endDateTime ?? endDateTime ?? getLastHourTime(new Date(CURRENT_TIME), Number(8760)),
      }),
      fetchData(getPriceVolumeAsync, {
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc3',
        endDateTime: startDateTime ?? CURRENT_TIME.toISOString(),
        startDateTime: endDateTime ?? getLastHourTime(new Date(CURRENT_TIME), Number(8760)),
      }),
      fetchData(getOwnerDistributionAsync, {
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc',
        endTime: startDateTime ?? CURRENT_TIME.toISOString(),
        startTime: endDateTime ?? endDateTime ?? getLastHourTime(new Date(CURRENT_TIME), Number(8760)),
      }),
      fetchData(getPriceDistributionAsync, {
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc',
        endTime: startDateTime ?? CURRENT_TIME.toISOString(),
        startTime: endDateTime ?? endDateTime ?? getLastHourTime(new Date(CURRENT_TIME), Number(8760)),
      }),
    ])
      .then(([top50Owners, volumePrice, ownerDistribution, priceDistributionData]) => {
        // Handle the results of each API call here
        if (top50Owners) {
          setTop50Owners(top50Owners)
        }
        if (volumePrice) {
          setVolumePrice(volumePrice)
        }
        if (ownerDistribution) {
          setOwnerDistribution(ownerDistribution)
        }
        if (priceDistributionData) {
          setPriceDistributionData(priceDistributionData as CollectionPriceDistribution)
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the API calls
        console.error(`One or more API calls failed: ${error}`)
      })
  }, [])

  const onSelectCategory = async (data: ExploreBlock) => {
    setCategory(data)
    onChangeCategory()
    if (data.id !== 'data') {
      return onSetTab(data.id)
    }
    onSelectTime()
  }

  const totalSweep = useMemo(
    () => collectionData.slice(0, range).reduce((accumulator, currentValue) => accumulator + currentValue.usdAmount, 0),
    [range, collectionData]
  )
  return (
    <div className="container mb-[72px]">
      {isLoadingCollectionDetail ? (
        <CollectionBannerSkeleton />
      ) : (
        <CollectionBanner
          bannerImage={collectionDetail?.bannerImage}
          logoImage={collectionDetail?.logoImage}
          name={collectionDetail?.name}
        />
      )}
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
        <CategoryList categories={COLLECTION_CATEGORY} onClick={data => onSelectCategory(data)} />
      </div>
      <CollectionFilter
        category={category}
        moff={moff}
        totalCOunt={totalCOunt}
        onClick={() => setShowFilter(pre => (category.id === 'data' ? false : !pre))}
        onDesign={type => setDesign(type as CollectionDesign)}
        onMoffClick={() => setMoff(pre => !pre)}
        onSearch={onSearch}
        onSelectDateTime={onSelectTime}
        onSortByPrice={onSortByPrice}
      />
      <div className={`mt-[39px] flex flex-row gap-4`}>
        {category.id !== 'data' && (
          <CollectionSideBarFilter
            category={category}
            exploreBlockChain={exploreBlockChain as ExploreBlock[]}
            isLoadingExploreBlockChain={isLoadingExploreBlockChain}
            isShow={showFilter}
            traits={collectionDetail?.filter.traits}
            onChangePrice={onChangePrice}
            onCheckClick={onCheckClick}
            onClickEvent={onClickEvent}
          />
        )}
        {design === 'table' ? (
          <div className={`flex w-full flex-col ${handleCollectionUI(design, showFilter).className}`}>
            {(isLoadingCollection || isRefetching) && !isFetchingNextCollection ? (
              <TableSkelton
                DataItem={category.id === 'item' ? CollectionTableSkeltonItemData : CollectionTableSkeltonActivityData}
                // className="!w-full"
                isBorderBottom={true}
              />
            ) : tableData?.data.length ? (
              <Table
                className={`w-[1188px] xl:w-full `}
                colCSS={tableData?.colCSS}
                columns={tableData?.columns as TableColumn[]}
                data={tableData?.data as any[]}
                headerCSS={tableData?.headerCSS}
                isBorderBottom={true}
                renderCell={tableData?.renderCell as (item: any, column: TableColumn) => ReactNode}
                onChangeRange={e => setRange(e)}
              />
            ) : (
              <DataNotFound
                className={`h-[321px] items-center !text-[37px] ${showFilter && 'w-[81%]'}`}
                size="h3"
                text="No Data Found"
              />
            )}
            {isFetchingNextCollection && (
              <TableSkelton
                DataItem={category.id === 'item' ? CollectionTableSkeltonItemData : CollectionTableSkeltonActivityData}
                className="!w-[650px]"
                isBorderBottom={true}
              />
            )}
            <ScrollTrigger
              isLoading={isFetchingNextCollection}
              onTrigger={() =>
                !isLoadingCollection && !isFetchingNextCollection && hasMoreCollection && fetchMoreCollection?.()
              }
            />
          </div>
        ) : category.id === 'data' ? (
          <CollectionDataTab
            isLoadingOwnerDistribution={isLoadingOwnerDistribution}
            isLoadingOwnersTop50={isLoadingOwnersTop50}
            isLoadingPriceDistribution={isLoadingPriceDistribution}
            isLoadingPriceVolume={isLoadingPriceVolume}
            ownerDistribution={ownerDistribution as FormattedDistributionItem[]}
            priceDistributionData={priceDistributionData as CollectionPriceDistribution}
            top50Owners={top50Owners as DataOwnerTop50[]}
            volumePrice={volumePrice as VolumePriceData}
          />
        ) : (
          <CollectionCardList
            collectionData={collectionData}
            design={design}
            fetchMoreCollection={fetchMoreCollection}
            hasMoreCollection={hasMoreCollection as boolean}
            isFetchingNextCollection={isFetchingNextCollection}
            isLoadingCollection={isLoadingCollection}
            isRefetching={isRefetching}
            isShow={showFilter}
            selected={moff ? range : 0}
            onChangeRange={e => setRange(e)}
          />
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
          <CollectionSideBarFilter
            category={category}
            className="mt-8 !flex"
            exploreBlockChain={exploreBlockChain as ExploreBlock[]}
            isLoadingExploreBlockChain={isLoadingExploreBlockChain}
            isShow={showFilter}
            traits={collectionDetail?.filter.traits}
            onChangePrice={onChangePrice}
            onCheckClick={onCheckClick}
            onClickEvent={onClickEvent}
          />
          <div className="mt-8 flex w-full flex-row gap-4">
            <Button className="w-full border-0 bg-lightGray" onClick={onChangeCategory}>
              Clear all
            </Button>
            <Button className="w-full border-0 bg-neutral-100 text-neutral-800" onClick={() => setShowFilter(false)}>
              Done
            </Button>
          </div>
        </div>
      )}

      {moff && (
        <div className="container fixed bottom-0 left-0 right-0 z-[6999] w-full">
          <div className=" z-[6999] flex w-full flex-col items-center justify-between gap-4 bg-neutral-800 p-4 md:h-20 md:flex-row md:gap-0 md:p-0">
            <div className="flex w-full flex-row items-center gap-3 md:w-auto">
              <Typography className=" flex h-12 w-12  items-center justify-center rounded-sm border border-lightGray">
                {range}
              </Typography>
              <ReactSlider
                className="flex h-[2px] w-full items-center justify-center bg-lightGray md:w-[230px]"
                max={30}
                thumbClassName="bg-neutral-100 border-[2px] border-neutral-100 h-3 w-1 rounded-full cursor-pointer"
                onChange={value => setRange(value)}
              />
            </div>
            <div className="flex h-12 w-full flex-row items-center justify-center rounded-sm border border-lightGray md:w-[200px] md:justify-between">
              <Typography className="flex h-12 flex-row items-center border-r border-r-lightGray px-4 font-Poppins text-body font-medium">
                Total: {totalSweep}
              </Typography>
              <Typography className="flex flex-row items-center px-4 font-Poppins text-body font-semibold">
                Sweep
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default CollectionPageTemplate
