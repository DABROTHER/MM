import React from 'react'
import Image from 'next/image'

import { BlockchainCardProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const BlockchainCard: React.FC<BlockchainCardProps> = ({
  image,
  imageWhite,
  name,
  height,
  width,
  onClick,
  selectedBlockchain,
}) => {
  return (
    <button
      className={`${
        name === selectedBlockchain ? 'border border-lightGray bg-white outline-none' : ''
      }blockchain-wrp h-[176px] w-1/3 rounded-sm bg-grayBorder p-6 text-center sm:w-[122px] sm:min-w-[122px] smd:h-[269px] smd:w-full xlg:w-full xl:w-[448px]
      `}
      tabIndex={0}
      type="button"
      onClick={onClick}
    >
      <div className="flex  h-[79.96px] flex-col items-center justify-center smd:h-[102.96px]">
        <Image
          alt="BlockchainIconWhite"
          height={height}
          src={name === selectedBlockchain ? imageWhite : image}
          width={width}
        />
      </div>
      <Typography
        className={`${
          name === selectedBlockchain
            ? 'text-black transition-transform duration-500'
            : 'text-lightGray transition-transform duration-500 '
        } font-Poppins text-md font-semibold  sm:text-base md:text-xl
      `}
      >
        {name}
      </Typography>
    </button>
  )
}

export default BlockchainCard
