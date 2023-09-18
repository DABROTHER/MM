import React, { useMemo } from 'react'
import Image from 'next/image'

import { data } from '../TrendingTemplate/utils'

import { ActivityPageTemplateProps } from './interface'

import DropDown from 'design-systems/Molecules/DropDown'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'
import Typography from 'design-systems/Atoms/Typography'
import CommonInput from 'design-systems/Molecules/CommonInput'
import Table from 'design-systems/Molecules/Table'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import Card from 'design-systems/Molecules/Cards/Card'
import { IconCheck } from 'design-systems/Atoms/Icons'
import saleIcon from 'assets/images/sale.svg'

const ActivityTemplate: React.FC<ActivityPageTemplateProps> = ({
  exploreBlockChain,
  isLoadingExploreBlockChain,
  onChangeFilter,
}) => {
  const renderCell = (user: any, column: TableColumn) => user[column.accessor]
  const users = useMemo(() => {
    return data?.map((dataItem: any, index: number) => ({
      Event: (
        <div className="flex gap-3">
          <Image alt="Profile Picture" src={saleIcon} />
          <Typography className="font-semibold text-black" size="md">
            Sale
          </Typography>
        </div>
      ),
      Item: (
        <div className="flex h-full w-full justify-between overflow-hidden rounded">
          <div className="mr-1 flex !h-[72px] !w-[72px] items-center">
            <Card
              alt=""
              className="flex !h-[48px] !w-[48px] rounded-sm object-cover text-start"
              src={dataItem?.bannerImage}
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
            {dataItem?.floorPrice} ETH
          </Typography>
        </div>
      ),
      Quantity: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins text-base font-semibold uppercase  text-neutral-100">
            1
          </Typography>
        </div>
      ),
      Time: (
        <div className="w-full overflow-hidden text-start">
          <Typography className="h-full w-full object-cover font-Poppins  text-base  font-semibold   text-neutral-100">
            {dataItem?.time}
          </Typography>
        </div>
      ),
      From: (
        <div className="w-full overflow-hidden text-start">
          <Typography className="h-full w-full object-cover font-Poppins text-base font-semibold text-[#DB417D]">
            {dataItem?.address.slice(0, 4)}...{dataItem?.address.slice(-4)}
          </Typography>
        </div>
      ),
      To: (
        <div className="w-full overflow-hidden text-start uppercase">
          <Typography className="h-full w-full object-cover font-Poppins text-base font-semibold text-[#DB417D]">
            {dataItem?.address.slice(0, 4)}...{dataItem?.address.slice(-4)}
          </Typography>
        </div>
      ),
    }))
  }, [data])
  return (
    <div className="container">
      <div className="mb-[50px] mt-8 text-left">
        <Typography className="text-xxl font-semibold leading-[32px] text-black">Activity</Typography>
        <div className="relative mt-8 flex items-center">
          <div>
            {isLoadingExploreBlockChain ? (
              <ExploreCategorySkeleton className="h-[48px] w-full md:w-[121px]" />
            ) : (
              <DropDown
                className="left-0 !w-[148px]"
                data={exploreBlockChain}
                defaultValue={{ name: 'Event Type', id: '' }}
                onChange={chain => onChangeFilter({ chainId: chain.id })}
              />
            )}
          </div>
          <div>
            {isLoadingExploreBlockChain ? (
              <ExploreCategorySkeleton className="h-[48px] w-full md:w-[121px]" />
            ) : (
              <DropDown
                className="left-[164px] !w-[128px]"
                data={exploreBlockChain}
                defaultValue={{ name: 'Chains', id: '' }}
                onChange={chain => onChangeFilter({ chainId: chain.id })}
              />
            )}
          </div>
          <div className="commonInput absolute left-0 top-[64px] w-full lmd:left-auto lmd:right-0 lmd:top-0 lmd:w-[50%] lg:w-[67.5%] xl:w-[77.5%]">
            <CommonInput className="w-full" placeholder="Search by name or trait" />
          </div>
        </div>
        <Table
          className="activity-table mt-[134px] w-[1136px] lmd:mt-[70px] xlg:w-full"
          columns={[
            { colSpan: 1, header: 'Event', accessor: 'Event' },
            { colSpan: 2, header: 'Item', accessor: 'Item' },
            { colSpan: 3, header: 'Price', accessor: 'Price' },
            { colSpan: 4, header: 'Quantity', accessor: 'Quantity' },
            { colSpan: 5, header: 'Time', accessor: 'Time' },
            { colSpan: 6, header: 'From', accessor: 'From' },
            { colSpan: 7, header: 'To', accessor: 'To' },
          ]}
          data={users}
          renderCell={renderCell}
        />
      </div>
    </div>
  )
}

export default ActivityTemplate
