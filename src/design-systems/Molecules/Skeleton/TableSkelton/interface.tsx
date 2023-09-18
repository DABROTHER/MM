export interface TableSkeltonProps {
  className?: string
  DataItem: DataItem[]
  isBorderBottom?: boolean
}
export interface DataItem {
  isImageSkeleton?: boolean
  isDataSkeleton?: boolean
  imageSkeletonCss?: string
  dataSkeletonCss?: string
  isBelowDataSkeleton?: boolean
  isBelowDataSkeletonCSS?: string
}
