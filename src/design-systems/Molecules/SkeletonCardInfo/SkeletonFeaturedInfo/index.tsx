import { SkeletonFeaturedInfoProps } from './interface'

import { getBorderRadius } from 'design-systems/Molecules/Cards/Card/utils'
import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonFeaturedInfo: React.FC<SkeletonFeaturedInfoProps> = ({ className, variant = 'all' }) => {
  const borderRadius = getBorderRadius(variant)
  return (
    <div className={`flex w-full flex-col overflow-hidden p-4 ${borderRadius} ${className}`}>
      <div className={`flex flex-col justify-between gap-4 ${borderRadius}`}>
        <div className="flex h-4 w-[70%] rounded-xs">
          <Skeleton className="rounded-xs" />
        </div>
        <div className="flex h-4 w-[50%] rounded-xs">
          <Skeleton className="rounded-xs" />
        </div>
      </div>
      <div className=" relative mt-[10px] flex h-6 w-[50%] items-center justify-center rounded-xs">
        <Skeleton className="rounded-xs" />
      </div>
      <div className=" relative mt-[10px] flex h-6 w-[50%] items-center justify-center rounded-xs">
        <Skeleton className="rounded-xs" />
      </div>
    </div>
  )
}
export default SkeletonFeaturedInfo
