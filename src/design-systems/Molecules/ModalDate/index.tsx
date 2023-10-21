import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { DateModalProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Button from 'design-systems/Atoms/Button'
const ModalDate: React.FC<DateModalProps> = ({ open, setCurrentDate, setIsModalOpen, className }) => {
  const calRef = useRef(null)

  const originalDate = new Date()

  const [isModalOpen, setModalOpen] = useState<boolean>(open)
  const [startDate, setStartDate] = React.useState<Date>(originalDate)

  const [selectedHour, setSelectedHour] = useState<number>(originalDate.getHours())
  const [selectedMinute, setSelectedMinute] = useState<number>(originalDate.getMinutes())
  const [isAM, setIsAM] = useState<boolean>(originalDate.getHours() < 12)
  const [hourInputCleared, setHourInputCleared] = useState<boolean>(false)
  const [minuteInputCleared, setMinuteInputCleared] = useState<boolean>(false)

  useEffect(() => {
    setModalOpen(open)

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleClose = () => {
    setStartDate(originalDate)

    setIsModalOpen(false)
  }

  const toggleAMPM = (isAM: boolean) => {
    setIsAM(isAM)
    updateStartDate(selectedHour, selectedMinute, isAM)
  }

  const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    if (inputValue === '') {
      setHourInputCleared(true)
      const newHour = 0
      setSelectedHour(newHour)
      updateStartDate(newHour, selectedMinute, isAM)
    } else {
      setHourInputCleared(false)
      const newHour = parseInt(inputValue)
      setSelectedHour(newHour)
      updateStartDate(newHour, selectedMinute, isAM)
    }
  }

  const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    if (inputValue === '') {
      setMinuteInputCleared(true)
      const newMinute = 0
      setSelectedMinute(newMinute)
      updateStartDate(selectedHour, newMinute, isAM)
    } else {
      setMinuteInputCleared(false)
      const newMinute = parseInt(inputValue)
      setSelectedMinute(newMinute)
      updateStartDate(selectedHour, newMinute, isAM)
    }
  }

  const updateStartDate = (hour: number, minute: number, am: boolean) => {
    const updatedDate = new Date(startDate)

    if (!am && hour < 12) {
      updatedDate.setHours(hour + 12)
    } else if (am && hour === 12) {
      updatedDate.setHours(0)
    } else {
      updatedDate.setHours(hour)
    }

    if (hourInputCleared || minuteInputCleared) {
      updatedDate.setMinutes(0)
    } else {
      updatedDate.setMinutes(minute)
    }

    setStartDate(updatedDate)
  }

  const handleApply = () => {
    if (setCurrentDate) {
      setCurrentDate(startDate)
    }
    setIsModalOpen(false)
  }

  return (
    <>
      {open && (
        <>
          <div className="fixed left-0 top-0 z-[7000] h-screen w-screen !overflow-hidden bg-[#000000] bg-opacity-[0.6] opacity-[1] transition-opacity delay-0 duration-200 ease-in-out"></div>
          <div className="fixed left-1/2 top-1/2 z-[7001] w-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm border border-solid border-lightGray bg-white pb-0 pl-[15px] pr-[10px] sm:w-[398px] smd:w-[450px] lmd:w-[550px]">
            <div className="flex h-full w-full flex-col">
              <div className="flex w-full items-center justify-between pr-[2px]"></div>

              <div
                className={`${className} datepicker-wrp flex max-h-[555px] w-full flex-col items-center smd:overflow-y-scroll`}
              >
                <DatePicker
                  ref={calRef}
                  selected={startDate}
                  onChange={date => setStartDate(date ?? new Date())}
                  open={open}
                  popperClassName="datepicker-popper"
                  showYearDropdown={false}
                />
                <div className="mt-3 flex w-auto items-center gap-2 smd:w-[408px] smd:justify-between">
                  <div className="flex items-center gap-2">
                    <Typography className="font-Poppins text-base font-semibold text-black">
                      <span className="block smd:hidden">Hr</span>
                      <span className="hidden smd:block">Hour</span>
                    </Typography>
                    <input
                      type="number"
                      value={selectedHour}
                      onChange={handleHourChange}
                      min={0}
                      max={12}
                      className="flex h-12 w-12 items-center justify-center rounded-xs border border-solid border-lightGray text-center font-Poppins text-base font-semibold text-black"
                    />
                    <Typography className="font-Poppins text-base font-semibold text-black">
                      <span className="block smd:hidden">Min.</span>
                      <span className="hidden smd:block">Minute</span>
                    </Typography>
                    <input
                      type="number"
                      value={selectedMinute}
                      onChange={handleMinuteChange}
                      min={0}
                      max={59}
                      className="flex h-12 w-12 items-center justify-center rounded-xs border border-solid border-lightGray text-center font-Poppins text-base font-semibold text-black"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleAMPM(true)}
                      className={`h-12 w-12 rounded-xs border border-solid border-lightGray ${
                        isAM ? 'bg-black text-white' : 'bg-gray-200 text-black'
                      }`}
                    >
                      AM
                    </button>
                    <button
                      onClick={() => toggleAMPM(false)}
                      className={`h-12 w-12 rounded-xs border border-solid border-lightGray ${
                        !isAM ? 'bg-black text-white' : 'bg-gray-200 text-black'
                      }`}
                    >
                      PM
                    </button>
                  </div>
                </div>
                <div className="mb-3 mt-8 flex w-full justify-between">
                  <Button
                    onClick={handleApply}
                    className="mr-2 h-12 w-[177px] rounded-sm border border-solid border-black bg-black font-Poppins text-base font-semibold text-white smd:w-[251px]"
                  >
                    Apply
                  </Button>
                  <Button
                    onClick={handleClose}
                    className="mr-2 h-12 w-[177px] rounded-sm border border-solid border-black font-Poppins text-base font-semibold text-black smd:w-[251px]"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ModalDate
