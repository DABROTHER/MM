import React from 'react'

import { IconDownBlack } from '../Icons'
import Typography from '../Typography'

import { SelectCreateProps } from './interface'

const SelectCreate: React.FC<SelectCreateProps> = ({ label, className, children, openSelect, setIsOpenSelect }) => {
  const handleOpen = () => {
    setIsOpenSelect(!openSelect)
  }

  const typographyClass = [`font-Poppins text-black text-base font-semibold leading-[24px] pb-1 smd:pb-2`].join(' ')

  return (
    <>
      <div className={className}>
        <div></div>
        <div className={`${typographyClass} text-black`}>{label ? label : 'Collection'}</div>
        <div
          className="custom-focus rounded-sm border-[0.5px] border-solid border-lightGray pl-4 pr-6 hover:border-black focus:outline-none"
          tabIndex={0}
        >
          <div className="flex cursor-pointer items-center justify-between py-3" onClick={handleOpen}>
            <Typography className="font-Poppins text-body font-semibold leading-[145%] text-black">
              Select Collection
            </Typography>{' '}
            {openSelect ? (
              <IconDownBlack height={7} style={{ transform: 'rotate(180deg)' }} width={14} />
            ) : (
              <IconDownBlack height={11} width={22} />
            )}
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default SelectCreate
