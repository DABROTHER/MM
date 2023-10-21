import { ReactNode } from 'react'

import { ColumnsItemDetails } from './utils'

import Typography from 'design-systems/Atoms/Typography'
import Table from 'design-systems/Molecules/Table'
import { TableColumn } from 'design-systems/Molecules/Table/interface'

const OffersDetails: React.FC = () => {
  type User = {
    price: ReactNode
    usdPrice: ReactNode
    floorDifference: ReactNode
    expiration: ReactNode
    from: ReactNode
  }
  const Items: User[] = [
    {
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          0.005 ETH
        </Typography>
      ),
      usdPrice: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          $400
        </Typography>
      ),
      floorDifference: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          4% below
        </Typography>
      ),
      expiration: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          2 hours
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          0.005 ETH
        </Typography>
      ),
      usdPrice: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          $400
        </Typography>
      ),
      floorDifference: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          4% below
        </Typography>
      ),
      expiration: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          2 hours
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          0.005 ETH
        </Typography>
      ),
      usdPrice: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          $400
        </Typography>
      ),
      floorDifference: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          4% below
        </Typography>
      ),
      expiration: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
          2 hours
        </Typography>
      ),
      from: (
        <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-[#DB417D]">
          0x74...e61031
        </Typography>
      ),
    },
  ]
  const renderCell = (user: any, column: TableColumn) => user[column.accessor]
  return (
    <Table
      className="w-[1188px] xl:w-full "
      columns={ColumnsItemDetails as TableColumn[]}
      data={Items}
      headerCSS={'item-detail-offers-table-child'}
      isBorderBottom={true}
      renderCell={renderCell}
    />
  )
}
export default OffersDetails
