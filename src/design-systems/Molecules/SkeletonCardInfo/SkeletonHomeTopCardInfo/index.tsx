import { SkeletonHomeTopCardInfoProps } from './interface'

import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonHomeTopCardInfo: React.FC<SkeletonHomeTopCardInfoProps> = ({ className }) => {
  return (
    <div className={`absolute bottom-3 left-4 z-10 flex flex-col gap-4 overflow-hidden ${className}`}>
      <div className="flex h-[21px] w-[60%] items-center">
        <Skeleton className="rounded-xs bg-skeDarkGray"></Skeleton>
      </div>
      <div className="flex h-[18px] w-[40%] items-center">
        <Skeleton className="rounded-xs bg-skeDarkGray"></Skeleton>
      </div>
    </div>
  )
}
export default SkeletonHomeTopCardInfo
