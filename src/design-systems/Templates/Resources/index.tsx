'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ResourcesTemplateProps } from './interface'
import { blockchainData, accordionData } from './utils'

import Typography from 'design-systems/Atoms/Typography'
import InputSearch from 'design-systems/Atoms/InputSearch'
import ResourcesCard from 'design-systems/Molecules/Cards/ResourcesCard'
import { ResourcesCardProps } from 'design-systems/Molecules/Cards/ResourcesCard/interface'
import ArticleAccordion from 'design-systems/Molecules/ArticleAccordion'
import { ArticleAccordionProps } from 'design-systems/Molecules/ArticleAccordion/interface'

const ResourcesTemplate: React.FC<ResourcesTemplateProps> = () => {
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
        <div className="mt-[32px] flex flex-wrap justify-between gap-3 smd:mt-[40px] slg:gap-[13px] xlg:gap-4 xl:gap-[14px]">
          {blockchainData.map((resources: ResourcesCardProps, i: number) => (
            <ResourcesCard
              height={isMobile ? resources.heightMobile : resources.height}
              image={resources.image}
              imageWhite={resources.imageWhite}
              key={i}
              name={resources.name}
              width={isMobile ? resources.widthMobile : resources.width}
            />
          ))}
        </div>

        <Typography className="mb-[26px] mt-[22px] text-left font-Poppins text-subtitle font-semibold text-black smd:mt-5 smd:text-xl">
          Popular articles
        </Typography>
        {accordionData.map((data: ArticleAccordionProps, i) => (
          <Link key={i} href="/resources/article">
            <ArticleAccordion icon={data.icon} article={data.article} height={data.height} width={data.width} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ResourcesTemplate
