import { ReactNode, useState } from 'react'

import { COLLECTION_ITEM_ACTIVITY_FILTER, ColumnsItemActivity } from './utils'

import Typography from 'design-systems/Atoms/Typography'
import Table from 'design-systems/Molecules/Table'
import { TableColumn } from 'design-systems/Molecules/Table/interface'
import { IconAttachment, ListIcon, MintedIcon, OffersIcon, SaleIcon2, TransferIcon } from 'design-systems/Atoms/Icons'
import DropDown from 'design-systems/Molecules/DropDown'
import { COLLECTION_PROPERTIES } from 'design-systems/Templates/Collection/utils'
import Button from 'design-systems/Atoms/Button'

const ItemActivity: React.FC = () => {
  const [filter, setFilter] = useState<ExploreBlock>({ name: 'Filter', id: '' })
  type User = {
    event: ReactNode
    price: ReactNode
    date: ReactNode
    from: ReactNode
    to: ReactNode
  }
  const Items: User[] = [
    {
      event: (
        <Typography className="flex flex-row items-center text-center font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          <ListIcon className="mr-3 inline-block" /> Listing
        </Typography>
      ),
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          20 ETH
        </Typography>
      ),
      date: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          1 month ago
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
      to: (
        <div className="flex w-full flex-row items-center gap-10 text-start">
          <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
            0x74...e61031
          </Typography>
          <IconAttachment />
        </div>
      ),
    },
    {
      event: (
        <Typography className="flex flex-row items-center text-center font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          <OffersIcon className="mr-3 inline-block" /> Offer
        </Typography>
      ),
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          20 ETH
        </Typography>
      ),
      date: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          1 month ago
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
      to: (
        <div className="flex w-full flex-row items-center gap-10 text-start">
          <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
            0x74...e61031
          </Typography>
          <IconAttachment />
        </div>
      ),
    },
    {
      event: (
        <Typography className="flex flex-row items-center text-center font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          <SaleIcon2 className="mr-3 inline-block" /> Sale
        </Typography>
      ),
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          20 ETH
        </Typography>
      ),
      date: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          1 month ago
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
      to: (
        <div className="flex w-full flex-row items-center gap-10 text-start">
          <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
            0x74...e61031
          </Typography>
          <IconAttachment />
        </div>
      ),
    },
    {
      event: (
        <Typography className="flex flex-row items-center text-center font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          <MintedIcon className="mr-3 inline-block" /> Minted
        </Typography>
      ),
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          20 ETH
        </Typography>
      ),
      date: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          1 month ago
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
      to: (
        <div className="flex w-full flex-row items-center gap-10 text-start">
          <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
            0x74...e61031
          </Typography>
          <IconAttachment />
        </div>
      ),
    },
    {
      event: (
        <Typography className="flex flex-row items-center text-center font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          <TransferIcon className="mr-3 inline-block" /> Transfer
        </Typography>
      ),
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          20 ETH
        </Typography>
      ),
      date: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          1 month ago
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
      to: (
        <div className="flex w-full flex-row items-center gap-10 text-start">
          <Typography className=" flex items-center text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
            0x74...e61031
          </Typography>
          <IconAttachment />
        </div>
      ),
    },
  ]
  const renderCell = (user: any, column: TableColumn) => user[column.accessor]
  return (
    <div className="flex w-full flex-col">
      <div className="mt-[14px] flex flex-row items-center gap-3">
        <div className="flex h-12 !w-[205px]">
          <DropDown
            className="z-20 !w-[205px]"
            data={COLLECTION_ITEM_ACTIVITY_FILTER}
            defaultValue={filter}
            isRatio={true}
            onChange={() => {}}
          />
        </div>
        <Button
          className="flex justify-center border-0 font-Poppins text-body font-semibold"
          onClick={() => setFilter({ name: 'Filter', id: '' })}
        >
          Clear all
        </Button>
      </div>
      <Table
        className="mt-1 h-12 w-[1188px] xl:w-full"
        columns={ColumnsItemActivity as TableColumn[]}
        data={Items}
        headerCSS={'item-detail-activity-table-child first:!pl-[35px]'}
        isBorderBottom={true}
        renderCell={renderCell}
      />
    </div>
  )
}
export default ItemActivity
