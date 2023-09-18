import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SingleItemModalProps, Item } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Button from 'design-systems/Atoms/Button'
import { IconCloseBlack } from 'design-systems/Atoms/Icons'
import Modal from 'design-systems/Atoms/Modal'

const ModalSingleItem: React.FC<SingleItemModalProps> = ({ open, label, setIsModalOpen, className }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(open)

  const [fakeArr, setFakeArr] = useState([
    {
      id: uuidv4(),

      inputLeft: 1,
      inputRight: 4,

      index: 0,
    },
  ])

  const labelClass = 'text-base font-semibold font-Poppins text-black'

  useEffect(() => {
    setModalOpen(open)

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const AddMore = () => {
    setFakeArr((prev: Item[]) => [...prev, { id: uuidv4(), inputLeft: 1, inputRight: 4, index: prev.length }])
  }

  const Clear = (item: Item) => {
    const filteredOption = fakeArr.filter(items => items.id !== item?.id)
    setFakeArr(filteredOption)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setFakeArr([
      {
        id: uuidv4(),
        inputLeft: 1,
        inputRight: 4,
        index: 0,
      },
    ])
  }

  // Function to update values in the fake array
  const updateValue = (index: number, inputType: string, newValue: number) => {
    setFakeArr(prevArr => {
      const updatedArr = [...prevArr]
      updatedArr[index] = {
        ...updatedArr[index],
        [inputType]: newValue,
      }

      return updatedArr
    })
  }

  function preventKeyboardInput(event: React.KeyboardEvent) {
    const numericPattern = /^[0-9]$/

    const inputChar = String.fromCharCode(event.keyCode)

    if (event.keyCode == 8 || event.keyCode == 46 || numericPattern.test(inputChar)) {
      event.preventDefault()
    }
  }

  return (
    <>
      <Modal open={isModalOpen} label={label} handleClose={handleClose}>
        <div className={`${className} w-full`}>
          <Typography className="mt-1 font-Poppins text-md font-medium leading-[145%] text-black">
            show up underneath your item, are clickable, and can be filtered in your collection&apos;s sidebar.
          </Typography>
        </div>
        <div className="single-item-modal mt-[18px] h-full max-h-[300px] overflow-auto py-0">
          <div className="mb-[12.5px] mt-[8px] flex w-[81%] justify-between">
            <Typography className={labelClass}>{label === 'Properties' ? 'Type' : 'Name'}</Typography>
            <Typography className={labelClass}>{label === 'Properties' ? 'Name' : 'Value'}</Typography>
          </div>

          {fakeArr.map((item: Item, index: number) => {
            return (
              <>
                <div className="mb-4 mt-[7px] flex gap-[15px]" key={index}>
                  <div className="flex w-[55%] sm:w-[70%]">
                    {index !== 0 ? (
                      <div className="custom-focus flex rounded-sm border-[0.5px] border-solid border-lightGray focus-within:border-black hover:border-black focus:outline-none">
                        <div className="flex w-[22%] flex-col justify-end gap-[10px] sm:w-[14%]">
                          <div className="flex items-center gap-[5px] ">
                            <div
                              className="flex h-12 w-full cursor-pointer items-center justify-center px-[10px] py-3 text-sm text-gray outline-none placeholder:font-normal focus-within:border-black hover:border-black focus:outline-none"
                              onClick={() => Clear(item)}
                            >
                              <IconCloseBlack />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-[50%] flex-col justify-end gap-[10px]">
                          <div className="flex items-center gap-[5px]">
                            <input
                              className="fornt-normal h-12 w-full border-l-[0.5px] border-solid border-lightGray bg-transparent px-4 font-Poppins text-base outline-none focus-within:border-black hover:border-black focus:outline-none"
                              placeholder={label === 'Properties' ? 'Character' : 'Speed'}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-[50%] flex-col justify-end gap-[10px]">
                          <div className="flex items-center gap-[5px]">
                            <input
                              className="custom-focus font-base h-12 w-full rounded-sm border-[0.5px] border-solid border-lightGray px-4 py-3 font-Poppins font-normal outline-none focus-within:border-black hover:border-black focus:outline-none"
                              placeholder={label === 'Properties' ? 'Character' : 'Speed'}
                              type="text"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mr-[5px] flex w-[45%] sm:w-[30%]">
                    {label === 'Properties' ? (
                      <div className="w-full">
                        <input
                          className="custom-focus h-12 w-full rounded-sm border-[0.5px] border-solid border-lightGray px-4 py-0 font-Poppins text-base font-normal text-black outline-none placeholder:font-normal focus-within:border-black hover:border-black focus:outline-none"
                          placeholder="Name"
                          type="text"
                        />
                      </div>
                    ) : (
                      // in
                      <div className="flex w-full rounded-sm border-[0.5px] border-solid border-lightGray focus-within:border-black hover:border-black focus:outline-none">
                        <div className="w-[33%]">
                          <input
                            className="h-12 w-full border-r-[0.5px] border-solid border-lightGray bg-transparent py-0 pl-[15px] pr-[10px] font-Poppins text-base font-normal text-black outline-none placeholder:font-normal focus-within:border-black hover:border-black focus:outline-none"
                            placeholder="1"
                            type="number"
                            value={item.inputLeft}
                            min={0}
                            max={item.inputRight}
                            onKeyDown={(e: React.KeyboardEvent) => preventKeyboardInput(e)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              updateValue(index, 'inputLeft', parseFloat(e.target.value))
                            }}
                          />
                        </div>
                        <div className="w-[33%]">
                          <div className="flex h-12 w-full items-center justify-center px-[10px] py-0 font-Poppins text-base font-normal text-black outline-none placeholder:font-normal">
                            of
                          </div>
                        </div>
                        <div className="w-[30%]">
                          <input
                            className="h-12 w-full border-l-[0.5px] border-solid border-lightGray bg-transparent pl-[10px] font-Poppins text-base font-normal text-black outline-none focus-within:border-black hover:border-black focus:outline-none"
                            placeholder="0"
                            type="number"
                            value={item.inputRight}
                            min={0}
                            onKeyDown={(e: React.KeyboardEvent) => preventKeyboardInput(e)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              updateValue(index, 'inputRight', parseFloat(e.target.value))
                            }}
                          />
                        </div>{' '}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )
          })}
        </div>

        <div className="mt-[4px] font-Poppins text-base font-semibold text-black">
          <Button className="py-[11.3px]" onClick={() => AddMore()}>
            Add More
          </Button>
        </div>

        <div className="mb-1 mt-[15px] w-full">
          <Button
            className="px-4 py-[8.9px] font-Poppins text-base font-semibold text-black"
            fullWidth={true}
            size="large"
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default ModalSingleItem
