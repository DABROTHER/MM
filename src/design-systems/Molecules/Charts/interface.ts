export type ChartType = 'ComboChart' | 'ColumnChart' | 'BarChart' | 'Bar'
export interface ChartsProps {
  className?: string
  data?: any[] | {}
  newData?: any[]
  ticks?: number[]
  gridLinesColor?: string
  chartPotions?: {
    top: number
    left: number
    right: number
    bottom: number
  }
  chartType: ChartType
  vAxisTitle?: string
  height?: string
  width?: string
  border?: number
  hAxisPosition?: string
}
