import { useState } from 'react'

import { DropDownProps } from './interface'

import { DropDownIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const DropDown: React.FC<DropDownProps> = ({
  children,
  className,
  data = [],
  defaultValue,
  isRatio = false,
  onChange,
  isCheckBox = false,
  hoverDropdown = true,
  type,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<ExploreBlock>(defaultValue)

  const handleToggle = (e: any) => {
    e.stopPropagation()
    if (!hoverDropdown) {
      setIsOpen(!isOpen)
    }
  }

  const handleChange = (e: any, selectedValue: ExploreBlock) => {
    e.stopPropagation()
    setValue(selectedValue)
    onChange?.(selectedValue)
    setIsOpen(false)
  }
  return (
    <div className="relative w-full">
      <div
        className={`trending-dropdown group absolute ${
          type && 'relative right-0'
        } z-10 block h-fit w-auto items-start rounded-sm border-[0.5px] border-lightGray bg-white px-4 py-[11px] hover:bg-neutral-800 ${className}`}
        onClick={handleToggle}
        onMouseEnter={hoverDropdown ? () => setIsOpen(true) : undefined}
        onMouseLeave={hoverDropdown ? () => setIsOpen(false) : undefined}
      >
        <div className="flex items-center justify-between gap-2">
          <Typography className="text-base font-semibold text-neutral-100">{value?.name}</Typography>
          <DropDownIcon
            className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
            height={8}
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
              {data.map((drop, i) => (
                <li
                  className={`ml-[2px] flex w-full cursor-pointer flex-row justify-between px-0 pt-0 text-start transition-all duration-200 ease-in ${
                    hoverDropdown ? 'group-hover:pt-[10px] group-hover:ease-out' : 'pt-[10px]'
                  }`}
                  key={i}
                  onClick={e => handleChange(e, drop)}
                >
                  <a
                    className={`hoverAnimation text-start text-md font-medium hover:text-neutral-100  ${
                      drop.name != value.name && 'text-lightGray'
                    }`}
                  >
                    {drop.name}
                  </a>
                  {isRatio && <input className="mr-[2px] h-4 w-4" name={value.name} type="radio" />}
                  {isCheckBox && (
                    <input checked={drop.name == value.name} className="h-4 w-4" name={value.name} type="checkbox" />
                  )}
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

export default DropDown
