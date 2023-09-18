import CardSkeleton from '../../CardSkeleton'

import { CollectionIconSkeletonProps } from './interface'

const CollectionIconSkeleton: React.FC<CollectionIconSkeletonProps> = ({ className, noOfIcon = 4 }) => {
  return (
    <div className={` flex w-full flex-row justify-end gap-3 ${className}`}>
      {Array(noOfIcon)
        .fill('')
        .map((_, i) => (
          <div className="mt-0 h-12  w-12" key={i}>
            <CardSkeleton className="flex h-full w-full" />
          </div>
        ))}
    </div>
  )
}
export default CollectionIconSkeleton
