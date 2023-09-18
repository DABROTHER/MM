import React from 'react'

import Typography from '../Typography'

import { TextAreaInputProps } from './interface'

const TextAreaInput: React.FC<TextAreaInputProps> = ({ label, rows, placeholder, value, className }) => {
  const textAreaClass = [
    'focus-within:border-black hover:border-black focus:outline-none custom-focus w-full text-black text-md font-poppins font-medium resize-none rounded-sm border border-solid border-lightGray bg-white p-[13px] font-Poppins leading-[145%] outline-none',
    className,
  ].join(' ')

  const typographyClass = [`font-Poppins text-md smd:text-base font-semibold leading-[24px] pb-[6px] smd:pb-2`].join(
    ' '
  )

  return (
    <div>
      {label && <Typography className={`${typographyClass} text-black`}>{label}</Typography>}

      <div className={className}>
        <textarea className={textAreaClass} name="text" placeholder={placeholder} rows={rows} value={value}></textarea>
      </div>
    </div>
  )
}

export default TextAreaInput
