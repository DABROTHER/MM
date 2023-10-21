import { useRef } from 'react'

import { CollectionFilterProps } from './interface'
import { COLLECTION_DATA_TIME } from './utils'

import { IconFilter, IconMoff, SearchIcon } from 'design-systems/Atoms/Icons'
import Tab from 'design-systems/Atoms/Tabs'
import Typography from 'design-systems/Atoms/Typography'
import DropDown from 'design-systems/Molecules/DropDown'
import { LinkCommStyle } from 'design-systems/Organisms/Footer/utils'
import { COLLECTION_PRICE_CATEGORY, COLLECTION_TAB } from 'design-systems/Templates/Collection/utils'
import { CURRENT_TIME, debounce, getLastHourTime } from 'utils'

const CollectionFilter: React.FC<CollectionFilterProps> = ({
  onClick,
  onDesign,
  onMoffClick,
  moff = false,
  category,
  onSortByPrice,
  totalCOunt,
  onSearch,
  onSelectDateTime,
}) => {
  const debounceTimeout = useRef<ReturnType<typeof debounce> | null>(null)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceTimeout.current) {
      debounceTimeout.current.cancel()
    }
    debounceTimeout.current = debounce(onSearch, 3000)
    debounceTimeout.current(e.target.value)
  }
  const selectOnDrop = (hours: string) => {
    const endDate = getLastHourTime(new Date(CURRENT_TIME), Number(hours))
    onSelectDateTime(CURRENT_TIME.toISOString(), endDate)
  }
  return (
    <div className=" mt-[38px] flex flex-col ">
      <div
        className={`flex flex-row items-center justify-between gap-4 ${category?.id === 'data' && 'justify-between'}`}
      >
        <div className={`${LinkCommStyle} cursor-pointer`} onClick={onClick}>
          <IconFilter />
        </div>
        {category?.id !== 'data' && (
          <>
            <Typography className=" hidden w-[90px] items-center font-Poppins text-md font-medium leading-[20.3px] text-neutral-100 smd:block">
              {totalCOunt} results
            </Typography>
            <div
              className={` relative hidden h-12  lmd:block ${
                category?.id === 'data' ? 'w-[82%]' : 'w-[59%] '
              }  flex-col rounded-sm border border-lightGray bg-transparent px-2.5 focus-within:border-black hover:border-black`}
            >
              <div className=" absolute top-0 flex h-12 w-[96%] flex-row items-center gap-3 rounded-lg border-none bg-none text-base outline-none transition duration-200 ease-in">
                <SearchIcon />
                <input
                  className=" font-Poppins text-[#454545] outline-none  placeholder:text-md placeholder:font-normal placeholder:text-lightGray sm:w-full"
                  placeholder="Search by name or trait"
                  type="text"
                  onChange={handleSearch}
                />
              </div>
            </div>
          </>
        )}

        {category?.id === 'data' ? (
          <div className="!h-[48px] w-[166px]">
            <DropDown
              className="z-20 !w-[166px]"
              data={COLLECTION_DATA_TIME}
              defaultValue={COLLECTION_DATA_TIME[0]}
              hoverDropdown={false}
              onChange={data => selectOnDrop(data.id)}
            />
          </div>
        ) : (
          <div className="flex flex-row gap-4 ">
            <div className={`${LinkCommStyle} ${moff && 'bg-neutral-100'} cursor-pointer`} onClick={onMoffClick}>
              <IconMoff stroke={`${moff ? 'white' : 'black'}`} />
            </div>

            <div className="!h-[48px] w-[202px]">
              <DropDown
                className="z-20 w-[202px]"
                data={COLLECTION_PRICE_CATEGORY}
                defaultValue={COLLECTION_PRICE_CATEGORY[0]}
                onChange={onSortByPrice}
                hoverDropdown={false}
              />
            </div>

            <div className="hidden slg:block">
              <Tab
                className="w-[144px]"
                defaultTab={COLLECTION_TAB?.[0].value}
                setActive={onDesign}
                tabItemClass="tabs-item"
                tabItemWrp={47}
                tabWrpWidth={141}
                tabs={COLLECTION_TAB}
              />
            </div>
          </div>
        )}
      </div>

      {category?.id !== 'data' && (
        <>
          <div
            className={` relative mt-[15px] h-12  w-full flex-col rounded-sm border border-lightGray bg-transparent px-2.5 focus-within:border-black hover:border-black lmd:hidden`}
          >
            <div className=" absolute top-0 flex h-12 w-[96%] flex-row items-center gap-3 rounded-lg border-none bg-none text-base outline-none transition duration-200 ease-in">
              <SearchIcon />
              <input
                className=" font-Poppins text-[#454545] outline-none  placeholder:text-md placeholder:font-normal placeholder:text-lightGray sm:w-full"
                placeholder="Search by name or trait"
                type="text"
              />
            </div>
          </div>
          <Typography className=" mt-4 flex items-center font-Poppins text-md font-medium leading-[20.3px] text-neutral-100 smd:hidden">
            {totalCOunt} results
          </Typography>
        </>
      )}
    </div>
  )
}
export default CollectionFilter
