import React from 'react'

import Typography from '../Typography'

import { getPlaceholderStyles } from './utils'
import { InputProps } from './interface'

const Input: React.FC<InputProps> = ({
  className,
  id,
  name,
  error,
  touched,
  onChange,
  onBlur,
  label,
  type,
  value,
  placeholder,
  variant = 'primary',
}) => {
  const typographyClass = [
    `text-left font-Poppins text-md smd:text-base font-semibold leading-[145%] text-black pb-[6px] smd:pb-2`,
  ].join(' ')

  const inputClassNames = [
    'w-full border-none bg-transparent px-[11px] py-[13.5px] smd:py-[12.5px] font-Poppins text-md md:text-body font-medium text-black outline-none placeholder:font-medium placeholder:leading-[145%] placeholder:text-lightGray',
    getPlaceholderStyles(variant),
  ].join(' ')

  return (
    <div className={`${className} w-full`}>
      {label && <Typography className={typographyClass}>{label}</Typography>}
      <div className="custom-focus w-full rounded-sm border border-solid border-lightGray p-0 focus-within:border-black hover:border-black focus:outline-none">
        <div className={`relative w-full cursor-pointer rounded-sm bg-white`}>
          <input
            id={id}
            name={name}
            onBlur={onBlur}
            className={inputClassNames}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
      {touched && error && <span className="text-sm font-medium text-[#E94949]">{error}</span>}
    </div>
  )
}

export default Input
