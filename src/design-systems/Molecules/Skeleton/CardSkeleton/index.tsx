/* eslint-disable react/no-children-prop */
import { CardSkeletonProps } from './interface'

import { getBorderRadius } from 'design-systems/Molecules/Cards/Card/utils'
import Skeleton from 'design-systems/Atoms/Skeleton'

const CardSkeleton: React.FC<CardSkeletonProps> = ({
  className,
  children,
  variant = 'all',
  cardClassName,
  notification,
}) => {
  const borderRadius = getBorderRadius(variant)
  return (
    <div className={`${className} ${borderRadius} flex w-full flex-col `}>
      <div className={`relative flex h-full w-full flex-col ${cardClassName}  ${borderRadius}`}>
        <div className={`h-full w-full ${borderRadius}`}>
          <Skeleton className={`${borderRadius}`}></Skeleton>
        </div>
      </div>
      {notification}
      {children}
    </div>
  )
}
export default CardSkeleton
