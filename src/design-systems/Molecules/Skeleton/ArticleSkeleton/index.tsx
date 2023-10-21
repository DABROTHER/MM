import { ArticleSkeletonProps } from './interface'

import Skeleton from 'design-systems/Atoms/Skeleton'

const ArticleSkeleton: React.FC<ArticleSkeletonProps> = ({ className }) => {
  return (
    <div
      className={`${className}mt-[15px] rounded border border-solid border-lightGray bg-white px-[6px] pb-[12.5px] pt-[14.5px] smd:mt-4 smd:px-[14px] smd:pb-[11px] smd:pt-[13px]`}
    >
      <div className="flex flex-col gap-0 smd:gap-1">
        <div className="flex cursor-pointer items-center justify-between">
          <div className="h-[17px] w-[500px] pt-0 leading-[145%]">
            <Skeleton></Skeleton>
          </div>

          <div>
            <Skeleton className="h-[8px] w-[16px]"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArticleSkeleton
