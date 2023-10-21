import { useMemo, useState } from 'react'

import ModalDate from '../ModalDate'

import { DateDropDownProps } from './interface'

import { DropDownIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { DropdownOption } from 'design-systems/Templates/CreateSingleItemTemplate/interface'
import { CURRENT_TIME, convertDate2UTCTimeStamp } from 'utils'

const DateDropDown: React.FC<DateDropDownProps> = ({
  children,
  className,
  data = [],
  onChange,
  hoverDropdown = true,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentDate, setCurrentDate] = useState<Date>(CURRENT_TIME)
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleToggle = () => {
    if (!hoverDropdown) {
      setIsOpen(!isOpen)
    }
  }

  const handleChange = (selectedValue: DropdownOption) => {
    setSelectedOption(selectedValue)
    setIsOpen(false)
    if (typeof selectedValue.value === 'number') {
      const daysToAdd = selectedValue.value
      if (currentDate !== null) {
        const newDate = new Date(currentDate)
        newDate.setDate(newDate.getDate() + daysToAdd)
        setCurrentDate(newDate)
        onChange?.(convertDate2UTCTimeStamp(newDate))
      }
    } else if (selectedValue.value === 'custom') {
      setModalOpen(true)
    }
  }
  const handleCustomDateChange = (date: Date) => {
    setCurrentDate(date)
    onChange?.(convertDate2UTCTimeStamp(date))
  }

  return (
    <div className="relative w-full">
      <div
        className={`trending-dropdown group relative z-10 block h-fit w-auto items-start rounded-sm border-[0.5px] border-lightGray bg-white px-4 py-[11px] hover:bg-neutral-800 ${className}`}
        onClick={handleToggle}
        onMouseEnter={hoverDropdown ? () => setIsOpen(true) : undefined}
        onMouseLeave={hoverDropdown ? () => setIsOpen(false) : undefined}
      >
        <div className="flex items-center justify-between gap-2">
          <Typography className="text-base font-semibold text-gray">
            {currentDate.toLocaleDateString() + ' ' + defaultValue}
          </Typography>
          <DropDownIcon
            className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
            height={8}
            width={16}
          />
        </div>
        {isOpen && (
          <div className={`absolute left-0 top-full mt-4 w-full rounded-sm border border-lightGray bg-white shadow-md`}>
            <ul className="m-0 p-0">
              {data.map((drop, i) => (
                <li
                  className={`flex w-full cursor-pointer flex-row justify-between px-4 py-3 text-start transition-all duration-200 ease-in`}
                  key={i}
                  onClick={() => handleChange(drop)}
                >
                  <a
                    className={`hoverAnimation text-start text-base font-semibold hover:text-neutral-100  ${
                      selectedOption && 'text-lightGray'
                    }`}
                  >
                    {drop.label}
                  </a>
                </li>
              ))}
            </ul>
            {children}
          </div>
        )}
      </div>
      <ModalDate
        currentDate={currentDate}
        open={modalOpen}
        setCurrentDate={handleCustomDateChange}
        setIsModalOpen={setModalOpen}
      />
    </div>
  )
}

export default DateDropDown
