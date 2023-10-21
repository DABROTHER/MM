import React, { useRef } from 'react'

import { CommonInputProps } from './interface'

import { SearchIcon } from 'design-systems/Atoms/Icons'
import { debounce } from 'utils'

const CommonInput: React.FC<CommonInputProps> = ({ onChange, placeholder, className }) => {
  const debounceTimeout = useRef<ReturnType<typeof debounce> | null>(null)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceTimeout.current) {
      debounceTimeout.current.cancel()
    }
    debounceTimeout.current = debounce(onChange, 1000)
    debounceTimeout.current(e.target.value)
  }
  return (
    <div className={`flex items-center gap-3 rounded-sm border px-3 text-lightGray ${className}`}>
      <SearchIcon className="" />
      <input
        className={`w-full rounded-sm bg-white py-[11px] focus:outline-none`}
        placeholder={placeholder}
        type="text"
        onChange={handleSearch}
        onClick={e => {
          e.stopPropagation()
        }}
      />
    </div>
  )
}

export default CommonInput
