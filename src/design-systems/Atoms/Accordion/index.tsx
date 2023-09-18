import React from 'react'

import { IconArrowUpBlack, IconArrowDownBlack } from '../Icons'
import Typography from '../Typography'

import { AccordionProps } from './interface'

const Accordion: React.FC<AccordionProps> = ({ className, label, isOpen, setIsOpen, children }) => {
  return (
    <div
      className={`${className} custom-focus mt-3 border border-solid border-lightGray bg-white px-[16px] pb-[10px] pt-3 focus-within:border-black hover:border-black focus:outline-none smd:mt-4`}
    >
      <div className="flex flex-col gap-1">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          <Typography className="pt-0 font-Poppins text-base font-semibold leading-[145%] text-black">
            {label}
          </Typography>

          {isOpen ? (
            <div
              className="pt-[2px]"
              onClick={() => {
                setIsOpen(true)
              }}
            >
              <IconArrowUpBlack width={18} height={20} />
            </div>
          ) : (
            <div
              className="pt-[2px]"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <IconArrowDownBlack width={18} height={20} />
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Accordion
