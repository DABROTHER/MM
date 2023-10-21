import React from 'react'
import Image from 'next/image'

import { ResourcesCardProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
// import Image from 'design-systems/Atoms/Image'

const ResourcesCard: React.FC<ResourcesCardProps> = ({ image, name, height, width }) => {
  return (
    <button
      className="h-[170px] w-full rounded-sm border border-solid border-lightGray text-center hover:border-black focus:border smd:h-[170px]"
      tabIndex={0}
      type="button"
    >
      <div className="flex h-[49.96px] flex-col items-center justify-center smd:h-[40px]">
        <Image
          unoptimized
          alt="BlockchainIcon"
          className="group-focus:hidden"
          height={height}
          src={image}
          width={width}
        />
      </div>
      <Typography className="font-Poppins text-md font-semibold text-black smd:mt-1 smd:text-base">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
    </button>
  )
}

export default ResourcesCard
