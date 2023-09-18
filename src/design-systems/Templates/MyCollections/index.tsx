'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { myCollectionsTemplateProps } from './interface'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'

const MyCollectionsTemplate: React.FC<myCollectionsTemplateProps> = ({ className }) => {
  const router = useRouter()
  return (
    <div className="container mb-[293px]">
      <div className="flex flex-col">
        <Typography className="mt-5 text-left font-Poppins text-subtitle font-semibold leading-[145%] text-black smd:text-[30px]">
          My owned collections
        </Typography>

        <div className="mt-[158px] flex h-full flex-col items-center justify-center smd:mt-[206px]">
          <Button
            className="font-Poppins text-base font-semibold text-black"
            onClick={() => router.push(`/collection/create`)}
          >
            Create collections
          </Button>
          <Typography className="mt-3 w-[80%] font-Poppins text-md font-medium text-black">
            Lorem ipsum dolor sit amet consectetur. Aliquet mi sodales nec varius sit a tortor quam tortor, euismod nisl
            ultricies.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default MyCollectionsTemplate
