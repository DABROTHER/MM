import { ExploreCategorySkeletonProps } from './interface'

import Skeleton from 'design-systems/Atoms/Skeleton'
import { getBorderRadius } from 'design-systems/Molecules/Cards/Card/utils'

const ExploreCategorySkeleton: React.FC<ExploreCategorySkeletonProps> = ({ className, variant = 'all' }) => {
  const borderRadius = getBorderRadius(variant)
  return (
    <div className={`flex ${className}`}>
      <Skeleton className={`${borderRadius}`}></Skeleton>
    </div>
  )
}
export default ExploreCategorySkeleton
