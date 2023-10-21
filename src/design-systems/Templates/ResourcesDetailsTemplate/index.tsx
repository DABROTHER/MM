'use client'
/* eslint-disable react/no-children-prop */

import React, { useMemo } from 'react'
import { ResourcesTemplateProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import Skeleton from 'design-systems/Atoms/Skeleton'
import { capitalizeFirstLetter, resourcesDesc } from './utils'

interface SkeletonProps {
  noOfSkeleton?: number
}
export const ArticleListSkeleton: React.FC<SkeletonProps> = ({ noOfSkeleton }) => {
  return (
    <>
      {Array(noOfSkeleton ?? 2)
        .fill('')
        .map((_: string, i: number) => (
          <div key={i} className="mb-3 h-[30px] w-[300px]">
            <Skeleton></Skeleton>
          </div>
        ))}
    </>
  )
}

const ResourcesDetailsTemplate: React.FC<ResourcesTemplateProps> = ({
  slug,
  isLoadingResourceType,
  resourceTypeItem,
}) => {
  const filteredDesc = useMemo(() => {
    return resourcesDesc.filter(
      resource => resource.type === (slug || resourceTypeItem[0].type)?.replace(/%20/g, ' ').toLowerCase()
    )
  }, [slug])

  return (
    <div className="container mb-[72px]">
      <div className="mt-9 flex h-[360px] w-full flex-col items-start pl-16">
        <Typography className="mb-3 font-Poppins text-xl font-bold">
          {slug ? slug?.replace(/%20/g, ' ').toLocaleUpperCase() : resourceTypeItem[0].type}
        </Typography>

        <Typography className="text-base font-normal italic text-[#353840]">{filteredDesc[0]?.description}</Typography>

        <div className="">
          {isLoadingResourceType ? (
            <ArticleListSkeleton />
          ) : resourceTypeItem.length ? (
            <>
              {resourceTypeItem.map((item, i) => (
                <div key={i} className="w-full border-b border-b-[#ddd]">
                  <Typography className="mb-3 mt-12 w-full text-left font-Poppins text-base font-medium smd:text-[18px]">
                    {capitalizeFirstLetter(item.description)}
                  </Typography>
                </div>
              ))}
            </>
          ) : (
            <div className="flex items-center justify-center">
              <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResourcesDetailsTemplate
