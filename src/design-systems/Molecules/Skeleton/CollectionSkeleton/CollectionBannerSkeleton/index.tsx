/* eslint-disable react/no-children-prop */

import CardSkeleton from '../../CardSkeleton'
import CollectionIconSkeleton from '../CollectionIconSkeleton'

import { CollectionBannerSkeletonProps } from './interface'

const CollectionBannerSkeleton: React.FC<CollectionBannerSkeletonProps> = ({ className }) => {
  return (
    <div className={`relative mt-8 flex h-[280px] flex-col lmd:h-[384px] ${className}`}>
      <div className={`relative h-[224px] w-full lmd:h-[304px] `}>
        <CardSkeleton
          children={<CollectionIconSkeleton className="absolute bottom-4 right-4 w-[90%]" noOfIcon={4} />}
          className=" relative h-[224px] w-full lmd:h-[304px]"
          notification={
            <div className="absolute right-4 top-4 flex flex-col items-center justify-center rounded-sm">
              <div className="mt-0 h-12  w-12">
                <CardSkeleton className="flex h-full w-full" />
              </div>
            </div>
          }
        />
        <div className="mx-4 flex flex-row justify-between">
          <div className="absolute bottom-[-53px] h-[88px] w-[88px] rounded-xs smd:h-[112px] smd:w-[112px] lmd:bottom-[-80px] lmd:h-[160px] lmd:w-[160px]">
            <CardSkeleton className="group flex !h-full  w-full !rounded-sm border border-grayBorder" />
          </div>
        </div>
        <CollectionIconSkeleton className="collection-skeleton mr-4 mt-3 hidden w-[90%] lmd:flex" noOfIcon={3} />
      </div>
    </div>
  )
}
export default CollectionBannerSkeleton
