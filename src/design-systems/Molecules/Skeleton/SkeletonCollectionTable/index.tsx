import { SkeletonCollectionTableProps } from './interface'

import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonCollectionTable: React.FC<SkeletonCollectionTableProps> = () => {
  const commSkeleton = [`!h-[30px] !w-24 rounded-sm`].join(' ')
  const skeletonPopular = new Array(4).fill(null) // Creating an array of 10 elements

  return (
    <div className="flex gap-16">
      <div className="w-full overflow-x-auto slg:w-2/4">
        {skeletonPopular.map((item, index) => (
          <div className="mb-4 flex justify-between" key={index}>
            <div className="flex items-center justify-center gap-6">
              <Skeleton className="!h-[70px] !w-[70px] rounded-sm"></Skeleton>
              <Skeleton className="mr-14 !h-[30px] !w-36 rounded-sm xlg:mr-4"></Skeleton>
            </div>
            <div className="flex items-center justify-center gap-6">
              <Skeleton className={commSkeleton}></Skeleton>
              <Skeleton className={commSkeleton}></Skeleton>
              <Skeleton className={commSkeleton}></Skeleton>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden w-full overflow-x-auto lmd:block slg:w-2/4">
        {skeletonPopular.map((item, index) => (
          <div className="mb-4 flex justify-between" key={index}>
            <div className="flex items-center justify-center gap-5">
              <Skeleton className="!h-[70px] !w-[70px] rounded-sm"></Skeleton>
              <Skeleton className="mr-14 !h-[30px] !w-36 rounded-sm xlg:mr-4"></Skeleton>
            </div>
            <div className="flex items-center justify-center gap-5">
              <Skeleton className={commSkeleton}></Skeleton>
              <Skeleton className={commSkeleton}></Skeleton>
              <Skeleton className={commSkeleton}></Skeleton>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonCollectionTable
