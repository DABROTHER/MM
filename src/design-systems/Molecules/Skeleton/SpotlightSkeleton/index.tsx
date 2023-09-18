import { SpotlightSkeletonProps } from './interface'

import Skeleton from 'design-systems/Atoms/Skeleton'

const SpotlightSkeleton: React.FC<SpotlightSkeletonProps> = ({ className }) => {
  return (
    <div
      className={`flex w-full transform flex-col opacity-100 ${className} mb-2 mt-2 rounded-sm border border-grayBorder bg-neutral-800 p-4`}
    >
      <div className="flex flex-row justify-between ">
        <div className="flex h-[13px] w-[81px]">
          <Skeleton className="flex rounded-sm"></Skeleton>
        </div>
        <div className="flex h-[13px] w-[37px]">
          <Skeleton className="flex rounded-sm"></Skeleton>
        </div>
      </div>
      <div className="grid min-h-[198px] grid-cols-2 gap-3 py-4 xl:min-h-[240px]">
        {Array(4)
          .fill('')
          .map((_, i) => (
            <Skeleton className="flex h-[94px] rounded-sm sm:h-[141px] md:h-[114px] xl:w-[142px]" key={i}></Skeleton>
          ))}
      </div>
      <div className="mt-[11px] flex w-full flex-row justify-between xl:gap-8">
        {Array(3)
          .fill('')
          .map((_, i) => (
            <div className="flex w-[75px] flex-col gap-2" key={i}>
              <div className="flex h-[10px] items-center justify-center rounded-xs">
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
export default SpotlightSkeleton
