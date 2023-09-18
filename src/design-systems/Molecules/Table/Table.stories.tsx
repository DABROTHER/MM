import React, { ReactNode } from 'react'
import { Story, Meta } from '@storybook/react'

import { TableColumn, TableProps } from './interface'

import Table from '.'

import File from 'design-systems/Molecules/File'
import image from 'assets/images/author.png'
import { IconCheck } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
type User = {
  collection: ReactNode
  Floor: ReactNode
  Volume: ReactNode
  Sales: ReactNode
}

const users: User[] = [
  {
    collection: (
      <div className="w-55 flex h-12 justify-between overflow-hidden rounded text-body font-bold">
        <div className="">
          <Typography className="px-2 py-4 text-[#454545] ">1</Typography>
        </div>
        <div className="ml-2 mr-4 h-12 w-[66px]">
          <File alt="" className="h-12 w-12 rounded-[8px] object-cover" height={48} src={image} type="" width={48} />
        </div>
        <div className="flex w-full items-center py-4 pr-2 text-left">
          <div className="pr-2 font-Poppins">Collection</div>
          {/* <div className=""> */}
          <IconCheck />
          {/* </div> */}
        </div>
      </div>
    ),

    Floor: (
      <div className="w-[90px] items-center overflow-hidden text-right text-md font-bold uppercase">
        <Typography className="h-full w-full object-cover px-2 font-Poppins text-[#454545] ">29 MATIC</Typography>
      </div>
    ),
    Volume: (
      <div className="relative w-24 flex-row items-end justify-end overflow-hidden  pt-4 text-right text-md font-bold uppercase">
        <Typography className="h-full w-full object-cover px-2 font-Poppins text-[#454545] ">2,9 MATIC</Typography>
        <Typography className="object-cover font-Poppins text-sm font-normal text-[#32c74a] ">0%</Typography>
      </div>
    ),
    Sales: (
      <div className="relative w-24 flex-row items-end justify-end overflow-hidden  pt-4 text-center text-md font-bold uppercase">
        <Typography className="h-full w-full object-cover px-2 font-Poppins text-[#454545] ">10</Typography>
        <Typography className="object-cover font-Poppins text-sm font-normal text-[#32c74a] ">0%</Typography>
      </div>
    ),
  },
  {
    collection: (
      <div className="w-55 flex h-12 justify-between overflow-hidden rounded text-body font-bold">
        <div className="">
          <Typography className="px-2 py-4 text-[#454545] ">2</Typography>
        </div>
        <div className="ml-2 mr-4 h-12 w-[66px]">
          <File alt="" className="h-12 w-12 rounded-[8px] object-cover" height={48} src={image} type="" width={48} />
        </div>
        <div className="flex w-full items-center py-4 pr-2">
          <div className="pr-2 font-Poppins">Collection</div>
          {/* <div className=""> */}
          <IconCheck />
          {/* </div> */}
        </div>
      </div>
    ),

    Floor: (
      <div className="w-[90px] items-center overflow-hidden text-right text-md font-bold uppercase">
        <Typography className="h-full w-full object-cover px-2 font-Poppins text-[#454545] ">29 MATIC</Typography>
      </div>
    ),
    Volume: (
      <div className="relative w-24 flex-row items-end justify-end overflow-hidden  pt-4 text-right text-md font-bold uppercase">
        <Typography className="h-full w-full object-cover px-2 font-Poppins text-[#454545] ">2,9 MATIC</Typography>
        <Typography className="object-cover font-Poppins text-sm font-normal text-[#32c74a] ">0%</Typography>
      </div>
    ),
    Sales: (
      <div className="relative w-24 flex-row items-end justify-end overflow-hidden  pt-4 text-center text-md font-bold uppercase">
        <Typography className="h-full w-full object-cover px-2 font-Poppins text-[#454545] ">10</Typography>
        <Typography className="object-cover font-Poppins text-sm font-normal text-[#32c74a] ">0%</Typography>
      </div>
    ),
  },
]

const renderCell = (user: any, column: TableColumn) => user[column.accessor]

export default {
  title: 'Molecules/Table',
  component: Table,
} as Meta

const Template: Story<TableProps<User>> = args => <Table {...args} />

export const DefaultTable = Template.bind({})
DefaultTable.args = {
  data: users,
  columns: [
    { colSpan: 3, header: 'Collection', accessor: 'collection' },
    { colSpan: 1, header: 'Floor', accessor: 'Floor' },
    { colSpan: 1, header: 'Volume', accessor: 'Volume' },
    { colSpan: 1, header: 'Sales', accessor: 'Sales' },
  ],
  renderCell,
}
