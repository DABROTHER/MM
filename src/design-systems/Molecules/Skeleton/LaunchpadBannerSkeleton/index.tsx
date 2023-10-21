/* eslint-disable react/no-children-prop */
import CardSkeleton from '../CardSkeleton'

import { LaunchpadBannerSkeletonProps } from './interface'

import SkeletonLaunchpadBannerInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonLaunchpadBannerCardInfo'

const LaunchpadBannerSkeleton: React.FC<LaunchpadBannerSkeletonProps> = ({ className, flexDirection = false }) => {
  return (
    <div className={`relative flex flex-col gap-4 md:flex-row ${className}`}>
      <CardSkeleton
        children={!flexDirection ? <SkeletonLaunchpadBannerInfo className="absolute w-[90%]" /> : ''}
        className=" relative h-[567px] w-full md:h-[400px] lmd:h-[560px]"
      />
      <div className={`${'flex flex-row justify-between gap-4'} ${flexDirection ? ' md:flex-row' : 'md:flex-col'}`}>
        {Array(3)
          .fill('')
          .map((_, i) => (
            <div
              className="mt-0 h-[90px]  w-full smd:h-[100px] md:h-[125px] md:w-[125px]  lmd:h-[176px] lmd:w-[176px]"
              key={i}
            >
              <CardSkeleton className="flex h-full w-full" />
            </div>
          ))}
      </div>
    </div>
  )
}
export default LaunchpadBannerSkeleton
