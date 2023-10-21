'use client'
/* eslint-disable react/no-children-prop */

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ResourcesTemplateProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import InputSearch from 'design-systems/Atoms/InputSearch'
import ResourcesCard from 'design-systems/Molecules/Cards/ResourcesCard'
import ArticleAccordion from 'design-systems/Molecules/ArticleAccordion'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import { PAGE_SIZE } from 'utils'
import ResourceCardSkeleton from 'design-systems/Molecules/Skeleton/ResourceCardSkeleton'
import ArticleSkeleton from 'design-systems/Molecules/Skeleton/ArticleSkeleton'
import { ArticlesData } from 'api-services/interfaces/resources'

interface SkeletonProps {
  noOfSkeleton?: number
}
export const ResourceCardSkeletonList: React.FC<SkeletonProps> = ({ noOfSkeleton }) => {
  return (
    <>
      {Array(noOfSkeleton ?? PAGE_SIZE)
        .fill('')
        .map((_: string, i: number) => (
          <ResourceCardSkeleton className="card-shadow w-full" key={i} />
        ))}
    </>
  )
}

export const ArticleSkeletonList: React.FC<SkeletonProps> = ({ noOfSkeleton }) => {
  return (
    <>
      {Array(noOfSkeleton ?? 5)
        .fill('')
        .map((_: string, i: number) => (
          <ArticleSkeleton className="card-shadow w-full" key={i} />
        ))}
    </>
  )
}

const ResourcesTemplate: React.FC<ResourcesTemplateProps> = ({
  resources,
  isLoadingResources,
  isLoadingArticle,
  articles,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="container mb-[72px]">
      <div>
        <div className="mt-6">
          <Typography className="text-left font-Poppins text-subtitle font-semibold leading-[145%] text-black smd:text-xl">
            Resources
          </Typography>
        </div>

        <div className="mt-[20px] smd:mt-[18px]">
          <InputSearch placeholder="Search for collections, NFTs or users" />
        </div>
        {/* resources card */}

        <div className="mt-[32px] smd:mt-[40px] slg:gap-[13px] xlg:gap-4 xl:gap-[14px]">
          {isLoadingResources ? (
            <div className="grid !gap-4 md:grid-cols-2 slg:grid-cols-2 xlg:grid-cols-3">
              <ResourceCardSkeletonList />
            </div>
          ) : resources?.length ? (
            <div className="grid grid-cols-3 !gap-4">
              {resources?.map((resource, i: number) => (
                <Link key={i} href={`/resources/${resource.type}`}>
                  <ResourcesCard height={27} image={resource?.fileUrl} key={i} name={resource.type} width={30} />
                </Link>
              ))}
            </div>
          ) : (
            <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
          )}
        </div>

        <Typography className="mb-[26px] mt-[22px] text-left font-Poppins text-subtitle font-semibold text-black smd:mt-5 smd:text-xl">
          Popular articles
        </Typography>
        {isLoadingArticle ? (
          <div>
            <ArticleSkeletonList />
          </div>
        ) : articles?.length ? (
          <>
            {articles?.map((data: ArticlesData, i) => (
              <Link key={i} href={`/resources/articles/${data.id}`}>
                <ArticleAccordion article={data.title} />
              </Link>
            ))}
          </>
        ) : (
          <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
        )}
      </div>
    </div>
  )
}

export default ResourcesTemplate
