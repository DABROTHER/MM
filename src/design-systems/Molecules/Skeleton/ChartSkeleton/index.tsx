import CardSkeleton from '../CardSkeleton'

import { ChartSkeletonProps } from './interface'

const ChartSkeleton: React.FC<ChartSkeletonProps> = ({
  className,
  noOfBar = 12,
  isBordered = false,
  barCSS,
  barParentCSS,
  isBorderedChild = false,
}) => {
  return (
    <div
      className={`ml-[22px] mt-3 flex w-full   items-end justify-between rounded-sm  ${
        isBordered && 'border border-skeLightGray'
      } px-[44px] pt-4 ${className}`}
    >
      <div
        className={` flex w-full flex-row justify-between ${barParentCSS}  ${
          isBorderedChild && 'border-l border-skeLightGray'
        }`}
      >
        {Array(noOfBar)
          .fill('')
          .map((_, i) => (
            <div className={` bottom-0 h-[161px] w-4 ${barCSS}`} key={i}>
              <CardSkeleton className="flex h-full w-full" />
            </div>
          ))}
      </div>
    </div>
  )
}
export default ChartSkeleton
