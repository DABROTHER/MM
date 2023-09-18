import { SkeletonGalleryCardInfoProps } from './interface'

import { getBorderRadius } from 'design-systems/Molecules/Cards/Card/utils'
import Skeleton from 'design-systems/Atoms/Skeleton'

const SkeletonGalleryCardInfo: React.FC<SkeletonGalleryCardInfoProps> = ({ className, variant = 'all' }) => {
  const borderRadius = getBorderRadius(variant)
  return (
    <div className={`flex w-full flex-col overflow-hidden p-4 ${borderRadius} ${className}`}>
      <div className="flex h-4 w-[70%] rounded-xs">
        <Skeleton className="rounded-xs" />
      </div>
    </div>
  )
}
export default SkeletonGalleryCardInfo
