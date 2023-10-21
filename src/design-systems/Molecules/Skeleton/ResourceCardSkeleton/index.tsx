import { ResourceCardSkeletonProps } from './interface'

import Skeleton from 'design-systems/Atoms/Skeleton'

const ResourceCardSkeleton: React.FC<ResourceCardSkeletonProps> = ({ className }) => {
  return (
    <div
      className={`flex h-[170px] w-full transform flex-col items-center justify-center opacity-100 ${className} rounded-sm border border-solid border-lightGray
       bg-neutral-800 p-4 text-center`}
    >
      <div
        // className="h-[170px] w-[30%] rounded-sm border border-solid border-lightGray text-center hover:border-black focus:border sm:w-[30.8%] smd:h-[170px] smd:w-[31.5%] lmd:w-[31.5%] slg:w-[32%] xlg:w-[32.3%] xl:w-[32.6%]"
        // className='grid-cols-3 grid'
        className="flex flex-col items-center justify-center"
      >
        <div className="flex h-[49.96px] w-[32px] smd:h-[40px]">
          <Skeleton className="flex h-[30px] w-[30px] rounded-sm"></Skeleton>
        </div>
        <div className="mt-4 flex h-[24px] w-[76px]">
          <Skeleton className="flex rounded-sm"></Skeleton>
        </div>
      </div>
    </div>
  )
}
export default ResourceCardSkeleton
