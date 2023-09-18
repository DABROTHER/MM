import React, { useState } from 'react'

import Typography from '../Typography'
import { IconEther } from '../Icons'

import { ChooseWalletProps } from './interface'

const ChooseWalletBlock: React.FC<ChooseWalletProps> = () => {
  const [userAddress, setUserAddress] = useState<string>('')

  const typographyClass = [`font-Poppins text-md smd:text-base font-semibold leading-[24px]`].join(' ')

  return (
    <div className="mb-3 smd:mb-6">
      <Typography className={`${typographyClass} pb-1 text-black smd:pb-[9px]`}>Connect wallet *</Typography>
      <div className="rounded-sm border border-solid border-lightGray font-Poppins font-normal text-gray">
        <div className="flex h-12 w-full items-center justify-between rounded-sm bg-white px-4 py-[21px] font-Poppins">
          <div className="flex items-center">
            <>
              <IconEther fill="black" stroke="black" />
            </>
            <div className="ml-[24px] flex flex-col justify-center font-Poppins">
              <Typography className={`${typographyClass} text-black`}>Ethereum</Typography>
            </div>
          </div>
          <div>
            <Typography className={`${typographyClass} text-lightGray`}>
              {userAddress ? 'Connected' : 'Not connected'}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseWalletBlock
