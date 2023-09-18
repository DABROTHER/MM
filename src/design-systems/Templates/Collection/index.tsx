import { ReactNode, useMemo, useState } from 'react'
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
import { IconAttachment, IconCheck, IconSale } from 'design-systems/Atoms/Icons'
import CollectionDataTab from 'design-systems/Organisms/Collection/CollectionDataTab'
import { convertTimeToAgo } from 'utils'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import TableSkelton from 'design-systems/Molecules/Skeleton/TableSkelton'
import CollectionBannerSkeleton from 'design-systems/Molecules/Skeleton/CollectionSkeleton/CollectionBannerSkeleton'
import CollectionInfoSkeleton from 'design-systems/Molecules/Skeleton/CollectionSkeleton/CollectionInfoSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'

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
  //
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
                className={`flex h-12 w-12 text-start ${moff && range >= i + 1 && 'border-2 border-[#DB417D]'}`}
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
        headerCSS: 'collection-table-child',
        isBorderBottom: true,
        renderCell: renderCell,
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

  const onSelectCategory = async (data: ExploreBlock) => {
    setCategory(data)
    if (data.id !== 'data') {
      return onSetTab(data.id)
    }
    try {
      const { data } = await getOwnersTop50Async({ walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc' })
      setTop50Owners(data)
      const value = await getPriceVolumeAsync({
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc3',
        startDateTime: '2023-07-01T12:09:48.005Z',
        endDateTime: '2023-09-20T12:14:56.927Z',
      })
      setVolumePrice(value.data)
      const ownerDistribution = await getOwnerDistributionAsync({
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc',
      })
      setOwnerDistribution(ownerDistribution?.data?.formattedDistribution)
      const priceData = await getPriceDistributionAsync({
        walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc',
        startTime: '2023-08-07T09:45:48.005Z',
        endTime: '2023-08-11T09:45:56.927Z',
      })
      setPriceDistributionData(priceData?.data as CollectionPriceDistribution)
    } catch (error) {}
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
        onSortByPrice={onSortByPrice}
      />
      <div className={`mt-[39px] flex flex-row gap-4`}>
        <CollectionSideBarFilter
          category={category}
          exploreBlockChain={exploreBlockChain as ExploreBlock[]}
          isLoadingExploreBlockChain={isLoadingExploreBlockChain}
          isShow={showFilter}
          traits={collectionDetail?.filter.traits}
          onChangePrice={onChangePrice}
          onCheckClick={onCheckClick}
        />
        {design === 'table' ? (
          <div className="flex w-full flex-col">
            {(isLoadingCollection || isRefetching) && !isFetchingNextCollection ? (
              <TableSkelton
                DataItem={category.id === 'item' ? CollectionTableSkeltonItemData : CollectionTableSkeltonActivityData}
                isBorderBottom={true}
              />
            ) : tableData?.data.length ? (
              <Table
                className="w-[1188px] xl:w-full "
                columns={tableData?.columns as TableColumn[]}
                data={tableData?.data as any[]}
                headerCSS={tableData?.headerCSS}
                isBorderBottom={true}
                renderCell={tableData?.renderCell as (item: any, column: TableColumn) => ReactNode}
                onChangeRange={e => setRange(e)}
              />
            ) : (
              <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
            )}
            {isFetchingNextCollection && (
              <TableSkelton
                DataItem={category.id === 'item' ? CollectionTableSkeltonItemData : CollectionTableSkeltonActivityData}
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
      {moff && (
        <div className=" fixed bottom-0 z-[6999] flex h-20 w-full flex-row items-center gap-[885px] bg-neutral-800">
          <div className="flex flex-row items-center gap-3">
            <Typography className=" flex h-12 w-12  items-center justify-center rounded-sm border border-lightGray">
              {range}
            </Typography>
            <ReactSlider
              className="flex h-[2px] w-[230px] items-center justify-center bg-lightGray"
              max={30}
              thumbClassName="bg-neutral-100 border-[2px] border-neutral-100 h-3 w-1 rounded-full cursor-pointer"
              onChange={value => setRange(value)}
            />
          </div>
          <div className="flex h-12 w-[200px] flex-row items-center justify-between rounded-sm border border-lightGray">
            <Typography className="flex h-12 flex-row items-center border-r border-r-lightGray px-4 font-Poppins text-body font-medium">
              Total: {totalSweep}
            </Typography>
            <Typography className="flex flex-row items-center px-4 font-Poppins text-body font-semibold">
              Sweep
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}
export default CollectionPageTemplate
