import { useMemo, useState } from 'react'
import Image from 'next/image'

import { SORT_EXPLORE } from '../CollectionsDetails/utils'

import { CATEGORY_TRENDING, TrendingTableSkeltonActivityData } from './utils'
import { TrendingPageTemplateProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'
import DropDown from 'design-systems/Molecules/DropDown'
import Table from 'design-systems/Molecules/Table'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import { IconCheck } from 'design-systems/Atoms/Icons'
import Card from 'design-systems/Molecules/Cards/Card'
import seenIcon from 'assets/images/seenIcon.svg'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import TableSkelton from 'design-systems/Molecules/Skeleton/TableSkelton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'

const TrendingTemplate: React.FC<TrendingPageTemplateProps> = ({
  exploreBlockChain,
  isLoadingExploreBlockChain,
  onChangeFilter,
  category,
  hasMoreTrending,
  isFetchingNextTrending,
  trendingData,
  trendingIsLoading,
  fetchMoreTrending,
}) => {
  const [type, setType] = useState<string>('trending')
  const renderCell = (user: any, column: TableColumn) => user[column.accessor]
  const users = useMemo(() => {
    return trendingData?.map((dataItem: any, index: number) => ({
      serialNumber: (
        <div className="flex">
          <Typography className="py-4 font-Poppins !text-[14px] font-bold leading-[145%] text-neutral-100 ">
            {index + 1}
          </Typography>
        </div>
      ),
      collection: (
        <div className="flex h-full w-full justify-between overflow-hidden rounded">
          <div className="mr-4 flex !h-[72px] !w-[72px] items-center">
            <Card
              alt=""
              className="flex !h-[48px] !w-[48px] rounded-sm object-cover text-start"
              src={dataItem?.bannerImage}
              variant="all"
            />
          </div>
          <div className="flex w-full items-center py-4 pr-2 text-left">
            <Typography className="lg:custom-truncate-width trending-truncate-width truncate pr-3 font-Poppins text-base font-semibold text-neutral-100">
              {dataItem?.name}
            </Typography>
            <IconCheck />
          </div>
        </div>
      ),
      Volume: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.volumes} ETH
          </Typography>
        </div>
      ),
      FloorPrice: (
        <div className="w-full overflow-hidden text-start uppercase ">
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.floorPrice} ETH
          </Typography>
        </div>
      ),
      Change: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="font-semibold text-[#32c74a]" size="md">
            + {dataItem.salePercentage}%
          </Typography>
        </div>
      ),
      Sales: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.sales}
          </Typography>
        </div>
      ),
      UniqueOwners: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.uniqueOwner}
          </Typography>
        </div>
      ),
      itemsListed: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="font-semibold text-black" size="md">
            {dataItem?.itemListed}
          </Typography>
        </div>
      ),
      seen: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Image alt="Profile Picture" src={seenIcon} />
        </div>
      ),
    }))
  }, [trendingData])

  const handleTabChange = (e: any) => {
    setType(e.id as string)
    onChangeFilter({
      trending: e.id === 'trending' ? true : false,
    })
  }

  return (
    <div className="container">
      <div className="mb-[50px] mt-8 text-left">
        <Typography className="text-xxl font-semibold leading-[32px] text-black">Collection data</Typography>
        <div className="mt-[18px] flex w-full flex-col border-b-2 border-grayBorder">
          <CategoryList categories={CATEGORY_TRENDING} onClick={handleTabChange} />
        </div>
        <div className="trending-template relative mt-8 flex w-full justify-start lmd:justify-between">
          <div className="flex gap-4">
            {isLoadingExploreBlockChain ? (
              <ExploreCategorySkeleton className="absolute left-0 h-[48px] w-[150px]" />
            ) : (
              <DropDown
                className="z-30 !w-[169px]"
                data={category}
                defaultValue={{ name: 'Categories', id: '' }}
                onChange={category => onChangeFilter({ category: category.id })}
              />
            )}
            {isLoadingExploreBlockChain ? (
              <ExploreCategorySkeleton className="absolute left-[170px] h-[48px] w-[126px]" />
            ) : (
              <DropDown
                className="left-[169px] !w-[126px]"
                data={exploreBlockChain}
                defaultValue={{ name: 'Chains', id: '' }}
                onChange={chain => onChangeFilter({ chainId: chain.id })}
              />
            )}
          </div>
          <div>
            {isLoadingExploreBlockChain ? (
              <ExploreCategorySkeleton className="absolute right-auto top-[64px] z-20 h-[48px] !w-[134px] lmd:left-auto lmd:right-0 lmd:top-auto" />
            ) : (
              <DropDown
                className="left-[-14px] right-auto top-[64px] z-20 !w-[134px] lmd:left-auto lmd:right-0 lmd:top-auto"
                data={SORT_EXPLORE}
                defaultValue={{ name: 'Sort by', id: '' }}
                onChange={trending => onChangeFilter({ trending: trending.id })}
              />
            )}
          </div>
        </div>
        <div>
          {trendingIsLoading ? (
            <TableSkelton
              DataItem={TrendingTableSkeltonActivityData}
              className="mt-[134px] w-[1136px] lmd:mt-[76px] xlg:w-full"
              isBorderBottom={true}
            />
          ) : users?.length ? (
            <Table
              className="trending-table mt-[134px] w-[1136px] lmd:mt-[76px] xlg:w-full"
              columns={[
                { colSpan: 1, header: '#', accessor: 'serialNumber' },
                { colSpan: 2, header: 'Collection', accessor: 'collection' },
                { colSpan: 3, header: 'Volume', accessor: 'Volume' },
                { colSpan: 4, header: 'Floor Price', accessor: 'FloorPrice' },
                { colSpan: 6, header: '% Change', accessor: 'Change' },
                { colSpan: 5, header: 'Sales', accessor: 'Sales' },
                { colSpan: 7, header: '% Unique owners', accessor: 'UniqueOwners' },
                { colSpan: 8, header: '% Items listed', accessor: 'itemsListed' },
                { colSpan: 9, header: '', accessor: 'seen' },
              ]}
              data={users}
              renderCell={renderCell}
            />
          ) : (
            <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
          )}
          {isFetchingNextTrending && (
            <TableSkelton DataItem={TrendingTableSkeltonActivityData} className="" isBorderBottom={true} />
          )}
        </div>
        <ScrollTrigger
          isLoading={isFetchingNextTrending}
          onTrigger={() => !trendingIsLoading && !isFetchingNextTrending && hasMoreTrending && fetchMoreTrending?.()}
        />
      </div>
    </div>
  )
}

export default TrendingTemplate
