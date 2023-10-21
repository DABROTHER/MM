import React from 'react'
import Image from 'next/image'

import Typography from '../Typography'

import { CardPreviewProps } from './interface'

import AuthorImage from 'assets/images/author.png'

const CardPreview: React.FC<CardPreviewProps> = ({ isBanner, imgUrl, id, name }) => {
  return (
    <div className="flex h-full max-h-[505px] w-full justify-center rounded-sm border border-solid border-lightGray sm:h-[505px] lg:max-w-[380px]">
      <div className="h-full w-full pl-[14px] pr-4 pt-3 sm:pt-[6px]">
        <div className="w-full pl-[1px] pr-[1px] xlg:pt-[9px]">
          <Image
            alt="big-image"
            className="flex h-full max-h-[373px] w-full items-center rounded-sm object-cover sm:justify-center sm:pt-[9px] smd:min-w-[348px] lg:h-[373px] lg:w-[348px] xlg:pt-0"
            height={0}
            src={imgUrl || AuthorImage}
            width={0}
          />
        </div>
        {!isBanner && (
          <div className="mb-[6px] pl-[4px] pt-[10px] lg:pt-0">
            <Typography className="pt-3 font-Poppins text-base font-bold leading-[145%] text-black">
              Moonbirds by PROOF_XYZ
            </Typography>

            <Typography className="mr-3 block pb-0 pt-[8px] font-Poppins text-md font-normal leading-[145%] text-black lg:pb-0 lg:pt-[2px]">
              Lorem ipsum dolor sit amet consectetur. Aliquet mi sodales nec varius sit a tortor quam tortor, euismod
              nisl ultricies.
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardPreview
