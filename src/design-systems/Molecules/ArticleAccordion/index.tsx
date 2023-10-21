import React from 'react'

import { ArticleAccordionProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import { DropDownIcon } from 'design-systems/Atoms/Icons'

const ArticleAccordion: React.FC<ArticleAccordionProps> = ({ article }) => {
  return (
    <div
      className={`custom-focus mt-[15px] cursor-pointer rounded border border-solid border-lightGray bg-white px-[6px] pb-[12.5px] pt-[14.5px] focus-within:border-black hover:border-black focus:outline-none smd:mt-4 smd:px-[14px] smd:pb-[11px] smd:pt-[13px]`}
    >
      <div className="flex flex-col gap-0 smd:gap-1">
        <div className="flex cursor-pointer items-center justify-between">
          <Typography className="pt-0 font-Poppins text-md font-semibold leading-[145%] text-black lmd:block slg:text-base">
            {article}
          </Typography>
          <DropDownIcon
            className={`-rotate-90 
                transform
               stroke-black transition-transform duration-300 ease-in`}
            height={8}
            width={16}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleAccordion
