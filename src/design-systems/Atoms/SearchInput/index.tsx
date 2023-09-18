import React, { useRef, useState } from 'react'

import { SearchIcon } from '../Icons'
import HeaderSearchDropdown from '../HeaderSearchDropdown'
import { CollectionType } from '../HeaderSearchDropdown/interface'

import { SearchInputProps } from './interface'

import useWindowDimensions from 'hooks/useWindowDimensions'
import { getSearchItem } from 'api-services/HeaderService'
import { debounce } from 'utils'

export const SearchInput: React.FC<SearchInputProps> = ({
  id = 'form-input',
  name = '',
  type = 'text',
  placeholder = 'Search for collections, NFTs or users',
  inputMode,
  autoFocus = false,
  onBlur,
  required = false,
  responsiveSearchIsOpen,
  setResponsiveSearchIsOpen,
  ...props
}) => {
  const [searchquery, setSearchQuery] = useState<string>('')
  const [collectionData, setCollectionData] = useState<CollectionType[]>([])
  const [nftsData, setNftsData] = useState<CollectionType[]>([])
  const [userData, setUserData] = useState<CollectionType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { width } = useWindowDimensions()

  const debounceTimeout = useRef<ReturnType<typeof debounce> | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    setSearchQuery(e.target.value)
    if (debounceTimeout.current) {
      debounceTimeout.current.cancel()
    }
    debounceTimeout.current = debounce(performSearch, 3000)
    debounceTimeout.current(e.target.value)
  }

  const performSearch = async (searchValue: string) => {
    if (searchValue) {
      try {
        const result = await getSearchItem(searchValue)
        setCollectionData(result?.data?.collectionData || [])
        setNftsData(result?.data?.nftData || [])
        setUserData(result?.data?.userData || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="group absolute h-fit w-10/12 lg:w-full">
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
              value={searchquery}
              onBlur={onBlur}
              onChange={handleSearch}
              {...props}
              autoComplete="off"
            />
          </div>
        </div>
        {/* header drodown */}
        <div className="z-[40] mt-2.5 hidden w-full animate-fade-in-down rounded-sm border border-lightGray group-hover:block group-hover:animate-fade-in-up  lg:w-[404px]">
          <HeaderSearchDropdown
            collectionData={collectionData}
            isLoading={isLoading}
            nftsData={nftsData}
            searchValue={searchquery}
            setIsLoading={setIsLoading}
            userData={userData}
          />
        </div>
      </div>
      <div className="absolute right-0 top-[6px]">
        {responsiveSearchIsOpen ? (
          <span
            className="fade-in-down flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-black hover:bg-offwhite"
            onClick={() => setResponsiveSearchIsOpen && setResponsiveSearchIsOpen(!responsiveSearchIsOpen)}
          >
            X
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default SearchInput
