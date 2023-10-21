import React from 'react'

import Typography from '../Typography'

import { TextAreaInputProps } from './interface'

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  id,
  error,
  name,
  touched,
  rows,
  placeholder,
  value,
  className,
  onBlur,
  onChange,
}) => {
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
        <textarea
          id={id}
          className={textAreaClass}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          value={value}
        ></textarea>
      </div>
      {touched && error && <span className="text-sm font-medium text-[#E94949]">{error}</span>}
    </div>
  )
}

export default TextAreaInput
