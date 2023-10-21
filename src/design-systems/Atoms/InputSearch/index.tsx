import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from '../Icons'

import { InputSearchProps } from './interface'
import { debounce } from 'utils'
import { useSearchResource } from 'hooks'

export const InputSearch: React.FC<InputSearchProps> = ({
  id = 'form-input',
  name = '',
  type = 'text',
  placeholder = 'Search for collections, NFTs or users',
  inputMode,
  autoFocus = false,
  onBlur,
  required = false,

  ...props
}) => {
  const [searchquery, setSearchQuery] = useState<string>('')
  const router = useRouter()

  const debounceTimeout = useRef<ReturnType<typeof debounce> | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    if (debounceTimeout.current) {
      debounceTimeout.current.cancel()
    }

    debounceTimeout.current = debounce(value => {
      setSearchQuery(value)

      const url = `/resources/search?query=${value}`

      router.push(url)
    }, 3000)

    debounceTimeout.current(searchValue)
  }

  return (
    <div>
      <div className="w-full lg:w-full">
        <div
          className={`search-input-before-element relative z-[2] flex h-[48px] flex-col rounded-sm border border-lightGray bg-transparent px-2.5 py-3 focus-within:border-black hover:border-black smd:w-[100%]`}
        >
          <div className="text-blue-900 absolute top-0 flex h-[48px] w-[96%] cursor-text flex-row items-center gap-3 rounded-lg border-none bg-none text-base outline-none transition duration-200 ease-in">
            <SearchIcon />
            <input
              autoFocus={autoFocus}
              className="line-clamp-1 w-[378px] bg-transparent pr-3 font-Poppins text-[#454545] outline-none placeholder:relative placeholder:text-md placeholder:font-normal placeholder:text-[#9A9A9A] sm:w-full"
              id={id}
              inputMode={inputMode}
              name={name}
              placeholder={placeholder}
              required={required}
              type={type}
              onBlur={onBlur}
              onChange={handleSearch}
              {...props}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputSearch
