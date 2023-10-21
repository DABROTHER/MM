import { useCallback, useEffect, useState } from 'react'

import CommonInput from '../CommonInput'
import DropDown from '../DropDown'

import { DropCardProps } from './interface'

import { DropDownIcon, IconCheckV2 } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { SORT_EXPLORE } from 'design-systems/Templates/CollectionsDetails/utils'
import { CollectionType } from 'design-systems/Atoms/HeaderSearchDropdown/interface'
import { CollectionCard, collection } from 'design-systems/Atoms/HeaderSearchDropdown/utils'
import { CollectionCollectedItem } from 'api-services/interfaces/profileCollected'

const DropCard: React.FC<DropCardProps> = ({
  title,
  className,
  children,
  isSearchProfile = false,
  isSearch = false,
  sortBy,
  category,
  onSearchCategory,
  isHover = false,
  CollectionData,
  onSearch,
  onChangeFilter,
  setFilters,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    if (!isHover) setIsOpen(pre => !pre)
  }, [])

  const handleSortby = (e: any) => {
    onChangeFilter && onChangeFilter({ chainId: e.id })
    setFilters &&
      setFilters((prevState: any) => ({
        ...prevState, // Copy the previous state
        trending: e.id, // Update the specific key
      }))
  }

  return (
    <div className="relative w-full">
      <div
        className={`absolute z-10 block h-fit w-full cursor-pointer items-start rounded-sm border-[0.5px] border-lightGray bg-white px-4 py-3 hover:bg-neutral-800 ${className}`}
        onClick={handleClick}
        onMouseEnter={isHover ? () => setIsOpen(true) : undefined}
        onMouseLeave={isHover ? () => setIsOpen(false) : undefined}
      >
        <div className="flex items-center justify-between gap-2">
          <Typography className="font-Poppins text-base font-semibold text-neutral-100">{title}</Typography>
          <DropDownIcon
            className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
            height={8}
            width={16}
          />
        </div>
        <div className={`${isOpen && 'h-fit opacity-100'} h-0 w-full opacity-0`}>
          <div className="h-full w-full overflow-hidden rounded-sm">
            {isSearchProfile && (
              <CommonInput
                className="mb-1 mt-4"
                placeholder={`${category === 'collected' ? 'Search' : 'Search by property'}  `}
                onChange={onSearch ? onSearch : () => {}}
              />
            )}
            {sortBy && category === 'collected' && (
              <>
                <DropDown
                  className="!static right-auto z-20 mt-[16px] lmd:left-auto lmd:right-0 lmd:top-auto"
                  data={SORT_EXPLORE}
                  defaultValue={{ name: 'Sort by', id: '' }}
                  onChange={handleSortby}
                />
                <Typography className="mt-8 border-b-2 border-grayBorder pb-3 text-start text-md font-semibold">
                  Collection
                </Typography>
                {CollectionData &&
                  CollectionData?.map((item: CollectionCollectedItem, index: number) => (
                    <div className="mt-3 border-b-2 border-grayBorder pb-3 last:border-0" key={index}>
                      <span className={`${CollectionCard} text-md`}>
                        {item?.name || ''}
                        <div className="ml-3 mt-[2px]">
                          <IconCheckV2 />
                        </div>
                      </span>
                      <div className="flex align-middle">
                        <span className={`${CollectionCard} !mr-1 text-black`}>5 ETH</span>
                        <span className={`${CollectionCard} text-lightGray`}>Floor {item?.floorPrice || 0} ETH</span>
                      </div>
                      <span className={`${CollectionCard} text-lightGray`}>Listed 1/2</span>
                    </div>
                  ))}
              </>
            )}
            {children}
          </div>
        </div>
        {isSearch && isOpen && (
          <div className="mt-[12px] border-t-2 border-grayBorder pt-[20px]">
            <CommonInput className="" placeholder="Search" onChange={e => onSearchCategory?.(e)} />
          </div>
        )}
      </div>
    </div>
  )
}
export default DropCard
