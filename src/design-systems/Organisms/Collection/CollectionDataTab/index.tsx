import { ReactNode, useMemo } from 'react'

import { CollectionDataOwnersSkelton, secondDataNew, secondDataOld } from './utils'
import { CollectionDataTabProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Charts from 'design-systems/Molecules/Charts'
import Card from 'design-systems/Molecules/Cards/Card'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import Table from 'design-systems/Molecules/Table'
import TableSkelton from 'design-systems/Molecules/Skeleton/TableSkelton'
import ChartSkeleton from 'design-systems/Molecules/Skeleton/ChartSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'

const CollectionDataTab: React.FC<CollectionDataTabProps> = ({
  isLoadingOwnersTop50 = true,
  top50Owners,
  volumePrice,
  isLoadingPriceVolume = true,
  ownerDistribution,
  isLoadingOwnerDistribution = true,
  priceDistributionData,
  isLoadingPriceDistribution = true,
}) => {
  type Active = {
    rank: ReactNode
    name: ReactNode
    owned: ReactNode
    perOwned: ReactNode
  }

  const Owners: Active[] = useMemo(
    () =>
      top50Owners?.map(({ itemCount, percentage, name, image }, i) => {
        return {
          rank: <Typography className="flex text-start font-Poppins text-md font-medium">{i + 1}</Typography>,
          name: (
            <div className="flex w-full flex-row gap-3">
              <Card alt="" borderSize="xs" className="flex h-12 w-12 text-start" src={image} variant="all" />
              <Typography className="flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
                {name}
              </Typography>
            </div>
          ),
          owned: <Typography className="flex text-start font-Poppins text-md font-medium">{itemCount}</Typography>,
          perOwned: <Typography className="flex text-start font-Poppins text-md font-medium">{percentage}</Typography>,
        }
      }),
    [top50Owners]
  )

  const activeRenderCell = (user: any, column: TableColumn) => user[column.accessor]

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col">
        <Typography className="ml-[22px] mt-3 flex w-full font-Poppins text-body font-semibold leading-[23.2px]">
          Volume & Price
        </Typography>
        {isLoadingPriceVolume ? (
          <ChartSkeleton className="h-[208px]" isBordered={true} />
        ) : volumePrice?.data?.length > 1 ? (
          <div className="flex w-full flex-row ">
            <Charts
              chartPotions={{
                top: 20, // Adjust the top padding as needed
                left: 90, // Adjust the left padding as needed
                right: 0, // Adjust the right padding as needed
                bottom: 50, // Adjust the bottom padding as n
              }}
              chartType="ComboChart"
              className="left-0 h-[208px]"
              data={volumePrice?.data}
              height="278px"
              ticks={volumePrice?.Range}
              vAxisTitle="Volume (ETH)"
            />
          </div>
        ) : (
          <DataNotFound className="h-[208px] items-center !text-[37px]" size="h3" text="No Data Found" />
        )}
      </div>
      <div className=" mt-7 flex w-full flex-col">
        <div className="flex w-full flex-row items-center justify-between">
          <Typography className="ml-[22px] flex font-Poppins text-body font-semibold leading-[23.2px]">
            Sentiment
          </Typography>
          <div className="flex w-full flex-row justify-end gap-3">
            <div className="relative flex items-center before:absolute before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-[#da417d] before:content-['']">
              <Typography className="ml-5 inline-block ">Positive</Typography>{' '}
            </div>
            <div className="relative flex items-center before:absolute before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-[#EEA0BE] before:content-['']">
              <Typography className="ml-5 inline-block ">Negative</Typography>{' '}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row ">
          <Charts
            chartPotions={{
              top: 20, // Adjust the top padding as needed
              left: 90, // Adjust the left padding as needed
              right: 0, // Adjust the right padding as needed
              bottom: 50, // Adjust the bottom padding as n
            }}
            chartType="ColumnChart"
            className="left-0 h-[208px]"
            data={secondDataOld}
            height="278px"
            newData={secondDataNew}
            ticks={[0, 25, 50, 75, 100]}
            vAxisTitle="Score"
          />
        </div>
      </div>
      <div className=" mt-7 flex w-full flex-col">
        <div className="flex w-full flex-row items-center justify-between">
          <Typography className="ml-[22px] flex w-full font-Poppins text-body font-semibold leading-[23.2px]">
            Price Distribution
          </Typography>
          <div className="flex w-full flex-row justify-end gap-3">
            <div className="relative flex items-center before:absolute before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-[#da417d] before:content-['']">
              <Typography className="ml-5 inline-block ">Offers</Typography>{' '}
            </div>
            <div className="relative flex items-center before:absolute before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-[#EEA0BE] before:content-['']">
              <Typography className="ml-5 inline-block ">Listings</Typography>{' '}
            </div>
          </div>
        </div>
        {isLoadingPriceDistribution ? (
          <ChartSkeleton className="h-[208px]" isBordered={true} />
        ) : priceDistributionData?.offerData?.length > 1 ? (
          <div className="flex w-full flex-row ">
            <Charts
              chartPotions={{
                top: 20, // Adjust the top padding as needed
                left: 90, // Adjust the left padding as needed
                right: 0, // Adjust the right padding as needed
                bottom: 50, // Adjust the bottom padding as n
              }}
              chartType="ColumnChart"
              className="left-0 h-[208px]"
              data={priceDistributionData?.offerData}
              height="278px"
              newData={priceDistributionData?.listingData}
              ticks={priceDistributionData?.range}
              vAxisTitle="Price (ETH)"
            />
          </div>
        ) : (
          <DataNotFound className="h-[208px] items-center !text-[37px]" size="h3" text="No Data Found" />
        )}
      </div>
      <div className="mt-[18px] flex w-full flex-col gap-4 slg:flex-row">
        <div className="flex w-full flex-col rounded-sm border border-lightGray slg:w-1/2">
          <div className="mt-1 flex w-full flex-row items-center gap-4 px-4">
            <Typography className="font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
              Owners
            </Typography>
            <Typography className="font-Poppins text-md font-medium leading-[20.3px] text-lightGray">Top 50</Typography>
          </div>
          <div className="mt-8 flex flex-row px-4">
            {isLoadingOwnersTop50 ? (
              <TableSkelton DataItem={CollectionDataOwnersSkelton} className="w-[553px]" isBorderBottom={true} />
            ) : Owners?.length > 1 ? (
              <Table
                className="w-full "
                columns={[
                  { colSpan: 1, header: 'Rank', accessor: 'rank' },
                  { colSpan: 1, header: 'Name', accessor: 'name' },
                  { colSpan: 1, header: 'Owned', accessor: 'owned' },
                  { colSpan: 1, header: '% Owned', accessor: 'perOwned' },
                ]}
                data={Owners}
                headerCSS="collection-data-table-child"
                renderCell={activeRenderCell}
              />
            ) : (
              <DataNotFound className="h-[508px] items-center !text-[37px]" size="h3" text="No Data Found" />
            )}
          </div>
        </div>
        <div className="flex w-full flex-col rounded-sm border border-lightGray p-4 slg:w-1/2">
          <Typography className="flex font-Poppins font-semibold">
            Owner Distribution <Typography className="ml-4 inline-block text-gray">5,600</Typography>
          </Typography>
          {isLoadingOwnerDistribution ? (
            <ChartSkeleton
              barCSS="!h-4 !w-[90%]"
              barParentCSS="flex-col gap-[27px]"
              className="!ml-0 !flex-col"
              isBorderedChild={true}
              noOfBar={8}
            />
          ) : ownerDistribution?.length > 1 ? (
            <div className="flex w-full flex-row ">
              <Charts
                border={0}
                chartPotions={{
                  top: 20, // Adjust the top padding as needed
                  left: 90, // Adjust the left padding as needed
                  right: 0, // Adjust the right padding as needed
                  bottom: 50, // Adjust the bottom padding as n
                }}
                chartType="BarChart"
                className="left-0 h-[470px]"
                data={ownerDistribution && ownerDistribution}
                hAxisPosition="none"
                height="470px"
              />
            </div>
          ) : (
            <DataNotFound className="h-[508px] items-center !text-[37px]" size="h3" text="No Data Found" />
          )}
        </div>
      </div>
    </div>
  )
}
export default CollectionDataTab
