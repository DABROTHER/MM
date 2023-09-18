import React from 'react'

import { ArticleAccordionProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Image from 'next/image'

const ArticleAccordion: React.FC<ArticleAccordionProps> = ({ icon, article, height, width }) => {
  return (
    <div
      className={`custom-focus mt-[15px] cursor-pointer rounded border border-solid border-lightGray bg-white px-[6px] pb-[12.5px] pt-[14.5px] focus-within:border-black hover:border-black focus:outline-none smd:mt-4 smd:px-[14px] smd:pb-[11px] smd:pt-[13px]`}
    >
      <div className="flex flex-col gap-0 smd:gap-1">
        <div className="flex cursor-pointer justify-between">
          <Typography className="hidden pt-0 font-Poppins text-md font-semibold leading-[145%] text-black lmd:block slg:text-base">
            {article}
          </Typography>
          <Typography className="block pt-0 font-Poppins text-sm font-semibold leading-[145%] text-black sm:text-md lmd:hidden slg:text-base">
            Lorem ipsum dolor sit amet, consectetur...
          </Typography>
          <Image alt="BlockchainIcon" height={height} src={icon} width={width} />
        </div>
      </div>
    </div>
  )
}

export default ArticleAccordion
