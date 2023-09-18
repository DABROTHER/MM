import React from 'react'
import Image from 'next/image'

import { ResourcesCardProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const ResourcesCard: React.FC<ResourcesCardProps> = ({ image, name, height, width, onClick }) => {
  return (
    <button
      className="h-[170px] w-[30%] rounded-sm border border-solid border-lightGray text-center focus:border sm:w-[30.8%] smd:h-[170px] smd:w-[31.5%] lmd:w-[31.5%] slg:w-[32%] xlg:w-[32.3%] xl:w-[32.6%]"
      tabIndex={0}
      type="button"
      onClick={onClick}
    >
      <div className="flex h-[49.96px] flex-col items-center justify-center smd:h-[40px]">
        <Image alt="BlockchainIcon" className="group-focus:hidden" height={height} src={image} width={width} />
      </div>
      <Typography className="font-Poppins text-md font-semibold text-black smd:mt-1 smd:text-base">{name}</Typography>
    </button>
  )
}

export default ResourcesCard
