import React from 'react'

import Typography from '../Typography'

import { getPlaceholderStyles } from '../Input/utils'

import { UnitInputProps } from './interface'

const UnitInput: React.FC<UnitInputProps> = ({
  inputClassName,
  className,
  onChange,
  label,
  type,
  value = 0.05,
  placeholder,
  variant = 'primary',
}) => {
  const typographyClass = [
    `text-left font-Poppins text-md smd:text-base font-semibold leading-[145%] text-black pb-[6px] smd:pb-2`,
  ].join(' ')

  const inputClassNames = [
    'w-full border-none bg-transparent pl-[16px] pr-0 py-[12.5px] smd:py-[11px] font-Poppins text-md md:text-body font-medium text-black outline-none placeholder:font-medium placeholder:leading-[145%] placeholder:text-lightGray',
    getPlaceholderStyles(variant),
  ].join(' ')

  return (
    <div className={`${className} w-full`}>
      {label && <Typography className={typographyClass}>{label}</Typography>}
      <div className="custom-focus w-full rounded-sm border border-solid border-lightGray p-0 focus-within:border-black hover:border-black focus:outline-none">
        <div className={`${inputClassName} flex cursor-pointer items-center justify-center rounded-sm bg-white`}>
          <input className={inputClassNames} placeholder={placeholder} type={type} value={value} onChange={onChange} />
          <div className="text-md font-semibold text-black smd:text-base">ETH</div>
        </div>
      </div>
    </div>
  )
}

export default UnitInput
