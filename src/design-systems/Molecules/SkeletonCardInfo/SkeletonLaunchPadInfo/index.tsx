import { SkeletonLaunchPadInfoProps } from './interface'

import { getBorderRadius } from 'design-systems/Molecules/Cards/Card/utils'
import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonLaunchPadInfo: React.FC<SkeletonLaunchPadInfoProps> = ({ className, variant = 'all' }) => {
  const borderRadius = getBorderRadius(variant)
  return (
    <div className={`flex w-full flex-col overflow-hidden p-4 ${borderRadius} ${className}`}>
      <div className={`flex flex-row justify-between gap-9 ${borderRadius}`}>
        <div className="flex h-4 w-[70%] rounded-xs">
          <Skeleton className="rounded-xs" />
        </div>
        <div className="flex h-4 w-[30%] rounded-xs">
          <Skeleton className="rounded-xs" />
        </div>
      </div>
      <div className=" relative mt-[18px] flex h-8 items-center justify-center rounded-xs">
        <Skeleton className="rounded-xs" />
      </div>
    </div>
  )
}
export default SkeletonLaunchPadInfo
