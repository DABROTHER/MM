import { TableSkeltonProps } from './interface'

import { PAGE_SIZE } from 'utils'
import Skeleton from 'design-systems/Atoms/Skeleton'

const TableSkelton: React.FC<TableSkeltonProps> = ({ className, DataItem, isBorderBottom }) => {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      {Array(PAGE_SIZE)
        .fill('')
        .map((_, i) => {
          return (
            <div
              className={`mt-8 flex w-full flex-row justify-between ${
                isBorderBottom && 'border-b-2 border-grayBorder last:border-none'
              }`}
              key={i}
            >
              {DataItem.map(
                (
                  {
                    isImageSkeleton,
                    isDataSkeleton,
                    imageSkeletonCss,
                    dataSkeletonCss,
                    isBelowDataSkeleton = false,
                    isBelowDataSkeletonCSS,
                  },
                  j
                ) => (
                  <div className="flex items-center gap-3 pb-4" key={j}>
                    {isImageSkeleton && (
                      <div className={`flex ${imageSkeletonCss}`}>
                        <Skeleton className="flex rounded-xs "></Skeleton>
                      </div>
                    )}
                    {isDataSkeleton && (
                      <div className="flex flex-col gap-2">
                        <div className={`flex ${dataSkeletonCss}`}>
                          <Skeleton className="flex rounded-xs "></Skeleton>
                        </div>
                        {isBelowDataSkeleton && (
                          <div className={`flex ${isBelowDataSkeletonCSS}`}>
                            <Skeleton className={`flex rounded-xs  `}></Skeleton>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          )
        })}
    </div>
  )
}
export default TableSkelton
