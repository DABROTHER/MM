'use client'

import Skeleton from 'design-systems/Atoms/Skeleton'
/* eslint-disable react/no-children-prop */
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton'
import { PAGE_SIZE } from 'utils'

export const SkeletonTopCollectionInner = () => {
  return (
    <div className="absolute bottom-4 left-4">
      <Skeleton className="mb-4 !h-[20px] !w-28 rounded-sm !bg-grayBorder" />
      <Skeleton className="!h-[20px] !w-20 rounded-sm !bg-grayBorder" />
    </div>
  )
}
interface SkeletonTopCollectionProps {
  noOfSkeleton?: number
}
export const SkeletonTopCollection: React.FC<SkeletonTopCollectionProps> = ({ noOfSkeleton }) => {
  return (
    <>
      {Array(noOfSkeleton ?? PAGE_SIZE)
        .fill('')
        .map((_: string, i: number) => (
          <div className="card-shadow !shadow-none" key={i}>
            <CardSkeleton
              cardClassName="!h-[332px]"
              className="!sm:grid-cols-1 relative h-[332px] w-full"
              variant="all"
            >
              <SkeletonTopCollectionInner />
            </CardSkeleton>
            <div className="mt-4 flex gap-4">
              <SkeletonCollectionBottom noOfSkeleton={4} />
            </div>
          </div>
        ))}
    </>
  )
}
interface SkeletonCollectionBottomProps {
  noOfSkeleton?: number
}
export const SkeletonCollectionBottom: React.FC<SkeletonCollectionBottomProps> = ({ noOfSkeleton }) => {
  return (
    <>
      {Array(noOfSkeleton ?? PAGE_SIZE)
        .fill('')
        .map((_: string, i: number) => (
          <Skeleton className="!h-[70px] !w-[25%] rounded-sm" key={i} />
        ))}
    </>
  )
}
