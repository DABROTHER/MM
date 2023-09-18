/* eslint-disable react/no-children-prop */

import CardSkeleton from '../CardSkeleton'

import { HomeTopCardSkeletonProps } from './interface'

import SkeletonHomeTopCardInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonHomeTopCardInfo'
import Skeleton from 'design-systems/Atoms/Skeleton'

const HomeTopCardSkeleton: React.FC<HomeTopCardSkeletonProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <CardSkeleton children={<SkeletonHomeTopCardInfo className="w-[90%]" />} className="flex h-full" />
      <div className="mt-4 flex w-full gap-4 text-left xl:w-[332.03px]">
        {Array(4)
          .fill('')
          .map((_, i) => (
            <div
              className="h-[56px] w-1/4 sm:h-[83.5px] md:h-[100px] lmd:h-[70.85px] slg:h-[72px] lg:h-[69.10px] lg:max-w-[69.25px] xlg:max-h-[63.90px] xlg:max-w-[64.5px] xl:h-[70.85px] xl:max-h-[70.85px] xl:w-[71px] xl:max-w-[71px]"
              key={i}
            >
              <Skeleton className="flex rounded-sm"></Skeleton>
            </div>
          ))}
      </div>
    </div>
  )
}
export default HomeTopCardSkeleton
