import React from 'react'

import { CommonInputProps } from './interface'

import { SearchIcon } from 'design-systems/Atoms/Icons'

const CommonInput: React.FC<CommonInputProps> = ({ onChange, placeholder, className }) => {
  return (
    <div className={`flex items-center gap-3 rounded-sm border px-3 text-lightGray ${className}`}>
      <SearchIcon className="" />
      <input
        className={`w-full rounded-sm py-[11px] focus:outline-none`}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
      />
    </div>
  )
}

export default CommonInput
