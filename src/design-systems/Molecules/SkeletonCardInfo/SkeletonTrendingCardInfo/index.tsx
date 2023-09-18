import { SkeletonTrendingInfoProps } from './interface'

import { getBorderRadius } from 'design-systems/Molecules/Cards/Card/utils'
import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonTrendingInfo: React.FC<SkeletonTrendingInfoProps> = ({ className, variant = 'all' }) => {
  const borderRadius = getBorderRadius(variant)
  return (
    <div className={`flex w-full flex-col overflow-hidden p-4 ${borderRadius} ${className}`}>
      <div className="flex h-4 w-[70%] rounded-xs">
        <Skeleton className="rounded-xs" />
      </div>
      <div className="mt-[11px] flex flex-row gap-8">
        {Array(3)
          .fill('')
          .map((_, i) => (
            <div className="flex w-[75px] flex-col gap-2" key={i}>
              <div className="flex h-[10px] w-[54px] items-center justify-center rounded-xs">
                <Skeleton className="rounded-xs" />
              </div>
              <div className="flex h-3 items-center justify-center rounded-xs sm:w-[75px]">
                <Skeleton className="rounded-xs" />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default SkeletonTrendingInfo
