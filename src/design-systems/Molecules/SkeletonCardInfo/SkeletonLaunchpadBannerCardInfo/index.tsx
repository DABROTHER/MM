import { SkeletonLaunchpadBannerInfoProps } from './interface'
import { SkeletonLaunchpadBannerInfoCSS } from './utils'

import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonLaunchpadBannerInfo: React.FC<SkeletonLaunchpadBannerInfoProps> = ({ className }) => {
  return (
    <div
      className={`absolute bottom-0 z-10 flex w-full flex-col justify-between overflow-hidden p-4 slg:flex-row ${className} items-end`}
    >
      <div className="flex w-full flex-col gap-3">
        <div className="flex h-[19px] w-52 items-center">
          <Skeleton className={SkeletonLaunchpadBannerInfoCSS}></Skeleton>
        </div>
        <div className="flex h-3 w-[104px] items-center">
          <Skeleton className={SkeletonLaunchpadBannerInfoCSS}></Skeleton>
        </div>
        <div className="flex h-8 w-60 items-center">
          <Skeleton className={SkeletonLaunchpadBannerInfoCSS}></Skeleton>
        </div>
        <div className="flex h-9 w-full items-center md:w-[444px]">
          <Skeleton className={SkeletonLaunchpadBannerInfoCSS}></Skeleton>
        </div>
      </div>
      <div className="mt-3 flex h-8 w-full rounded-xs smd:h-12 smd:rounded-sm slg:mt-0 slg:w-[104px]">
        <Skeleton className={SkeletonLaunchpadBannerInfoCSS}></Skeleton>
      </div>
    </div>
  )
}
export default SkeletonLaunchpadBannerInfo
