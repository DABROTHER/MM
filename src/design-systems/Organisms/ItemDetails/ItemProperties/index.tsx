import { ColumnsProperties } from './utils'
import { ItemPropertiesProps, User } from './interface'

import Table from 'design-systems/Molecules/Table'
import { TableColumn } from 'design-systems/Molecules/Table/interface'

const ItemProperties: React.FC<ItemPropertiesProps> = ({ Properties }) => {
  const renderCell = (user: any, column: TableColumn) => user[column.accessor]
  return (
    <Table
      className="-mt-[34px] w-full"
      columns={ColumnsProperties as TableColumn[]}
      data={Properties}
      headerCSS={''}
      isBorderBottom={true}
      renderCell={renderCell}
    />
  )
}
export default ItemProperties
