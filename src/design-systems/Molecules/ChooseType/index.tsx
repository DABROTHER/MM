'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { commBtn, commHead, commSpan } from './utils'

import Typography from 'design-systems/Atoms/Typography'
import Button from 'design-systems/Atoms/Button'
import { IconRightArrowBlack } from 'design-systems/Atoms/Icons'

const ChooseType = () => {
  const [slug, setSlug] = useState<string>('')

  const multipleBlockClass = `${commSpan} ${slug === 'multiple' ? 'border border-black' : 'border border-lightGray'}`

  return (
    <div className="container mb-[108px] pt-[22px]">
      <div className="mb-[26px] text-left smd:mb-[34px]">
        <Typography className="mb-0 text-[24px] font-semibold smd:text-xl" variant="regular">
          Choose Type
        </Typography>
        <Typography className="text-md font-medium smd:text-base" variant="regular">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-4">
        {/* <!-- First grid item --> */}
        <button
          className={`${commBtn} ${slug === 'single' ? 'border border-lightGray bg-white' : ''}`}
          onClick={() => setSlug('single')}
        >
          <span
            className={`${
              slug === 'single' ? 'border border-black' : 'border border-lightGray'
            } mx-auto block h-[76px] w-[76px] rounded-sm smd:h-[106px] smd:w-[106px]`}
          ></span>
          <Typography className={`${commHead} ${slug === 'single' ? 'text-black' : 'text-lightGray'}`}>
            Single
          </Typography>
        </button>
        {/* <!-- Second grid item --> */}
        <button
          className={`${commBtn} ${slug === 'multiple' ? 'border border-lightGray bg-white' : ''}`}
          onClick={() => setSlug('multiple')}
        >
          <div className="block">
            <span className="mb-4 flex justify-center gap-3 last:mb-0 smd:gap-4">
              <span className={multipleBlockClass}></span>
              <span className={multipleBlockClass}></span>
            </span>
            <span className="mb-4 flex justify-center gap-3 last:mb-0 smd:gap-4">
              <span className={multipleBlockClass}></span>
              <span className={multipleBlockClass}></span>
            </span>
          </div>
          <Typography className={`${commHead} ${slug === 'multiple' ? 'text-black' : 'text-lightGray'}`}>
            Multiple
          </Typography>
        </button>
      </div>
      <div className="flex justify-end pt-8">
        {slug ? (
          <Link href={`/create/stepThree/${slug}`}>
            <Button
              className="ml-auto gap-[76.1px] bg-cover bg-center px-[15px] py-[10.9px] smd:!gap-3"
              disabled={!slug ? true : false}
            >
              Continue
              <IconRightArrowBlack height={16} width={8} />
            </Button>
          </Link>
        ) : (
          <Button className="ml-auto gap-[76.1px] bg-cover bg-center px-[15px] py-[10.9px] smd:!gap-3" disabled={true}>
            Continue
            <IconRightArrowBlack height={16} width={8} />
          </Button>
        )}
      </div>
    </div>
  )
}

export default ChooseType
