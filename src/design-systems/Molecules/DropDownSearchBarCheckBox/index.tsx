import { useState } from 'react'

import CommonInput from '../CommonInput'

import { DropDownSearchBarCheckBoxProps } from './interface'

import { DropDownIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const DropDownSearchBarCheckBox: React.FC<DropDownSearchBarCheckBoxProps> = ({
  children,
  className,
  data = [],
  defaultValue,
  onChange,
  isCheckBox = false,
  hoverDropdown = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string[]>([])
  const [defaultData, setDefaultData] = useState<ExploreBlock[]>(data)

  const handleToggle = (e: any) => {
    e.stopPropagation()
    if (!hoverDropdown) {
      setIsOpen(!isOpen)
    }
  }

  const onSelect = (e: any, selectedValue: string, label: string) => {
    e.stopPropagation()
    onChange(selectedValue, label)
    if (value.includes(selectedValue)) {
      // Item is already selected, so uncheck it
      setValue(prevValue => prevValue.filter(item => item !== selectedValue))
    } else {
      // Item is not selected, so check it
      setValue(prevValue => [...prevValue, selectedValue])
    }
  }

  const search = (searchValue: string) => {
    if (searchValue) {
      setDefaultData(defaultData.filter(item => item.name.includes(searchValue)))
    } else {
      setDefaultData(data)
    }
  }

  return (
    <div className="relative w-full">
      <div
        className={`group absolute z-10 block h-fit w-full items-start rounded-sm  bg-white px-4 py-3 hover:bg-neutral-800 ${className}`}
        onClick={handleToggle}
        onMouseEnter={hoverDropdown ? () => setIsOpen(true) : undefined}
        onMouseLeave={hoverDropdown ? () => setIsOpen(false) : undefined}
      >
        <div className="flex items-center justify-between gap-2">
          <Typography className="text-md font-medium text-neutral-100">{defaultValue.name}</Typography>
          <DropDownIcon
            className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
            height={8}
            stroke="black"
            width={16}
          />
        </div>
        <div
          className={`h-0 w-full opacity-0 ${
            hoverDropdown ? 'group-hover:h-fit group-hover:opacity-100' : isOpen ? 'h-fit opacity-100' : 'h-0 opacity-0'
          }`}
        >
          <div className="h-full w-full overflow-hidden rounded-sm">
            <ul className="m-0 h-full w-full list-none p-0 ">
              <CommonInput className="mt-[8px]" placeholder="Search" onChange={search} />
              {defaultData.map((drop, i) => (
                <li
                  className={`flex w-full cursor-pointer flex-row justify-between px-0 pt-0 text-start transition-all duration-200 ease-in first:mt-[12px] last:pb-[8px] ${
                    hoverDropdown ? 'group-hover:pt-3 group-hover:ease-out' : 'pt-3'
                  }`}
                  key={i}
                  onClick={e => onSelect(e, drop.id, defaultValue.name)}
                >
                  <div className="flex flex-row items-center">
                    {isCheckBox && <input checked={value.includes(drop.id)} className="h-4 w-4" type="checkbox" />}
                    <a className={`hoverAnimation ml-[13px] text-start text-md   font-normal text-neutral-100`}>
                      {drop.name}
                    </a>
                  </div>
                  <Typography className="text-right font-Poppins text-md font-normal leading-[20.3px]">10</Typography>
                </li>
              ))}
            </ul>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDownSearchBarCheckBox
