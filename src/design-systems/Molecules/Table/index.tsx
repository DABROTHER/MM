import React from 'react'
import { useRouter } from 'next/navigation'

import { TableProps } from './interface'
const Table = <T,>({
  data,
  columns,
  renderCell,
  className,
  headerCSS,
  isBorderBottom = false,
  colCSS,
  onChangeRange,
}: TableProps<T>) => {
  const router = useRouter()
  const onChangeRouteNRange = (rowIndex: number, slug: string) => {
    if (onChangeRange) return onChangeRange?.(rowIndex)
    router?.push(slug)
  }
  return (
    <div className="xs:w-full xs:overflow-x-auto slg:overflow-x-auto lg:w-full">
      <table className={`caption-bottom border-collapse ${className}`}>
        <thead className="h-8">
          <tr className="">
            {columns.map((column, index) => (
              <th
                className={`child font-Poppins text-md font-medium text-lightGray first:pl-3 last:pr-3 ${headerCSS}  text-start`}
                key={index}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, rowIndex) => {
            return (
              <tr
                className={`cursor-pointer gap-10 text-left text-gray hover:bg-offwhite ${
                  isBorderBottom && 'border-b-2 border-grayBorder last:border-none'
                }`}
                key={rowIndex}
                onClick={() => onChangeRouteNRange?.(rowIndex + 1, item?.slug)}
              >
                {columns.map((column, colIndex) => (
                  <td
                    className={` ${colCSS} items-end py-4 first:rounded-l-sm first:pl-3 last:rounded-r-sm last:pr-3 ${
                      colIndex === 1 ? 'table_first_col min-w-[100px] text-end ' : 'text-end'
                    }`}
                    key={colIndex}
                  >
                    {renderCell(item, column)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
