import { ReactElement, ReactNode } from 'react'

export type TableColumn = {
  header: string | ReactNode
  accessor: string
  colSpan: number
}

export type TableProps<T> = {
  data: T[]
  columns: TableColumn[]
  renderCell: (item: T, column: TableColumn) => ReactNode
  className?: string
  headerCSS?: string
  isBorderBottom?: boolean
  onChangeRange?: (range: number) => void
  colCSS?: string
}
