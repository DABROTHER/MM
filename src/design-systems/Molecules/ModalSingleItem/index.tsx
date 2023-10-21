import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useFormik } from 'formik'

import { SingleItemModalProps, Item, ModalFormValues } from './interface'
import { getMappedLabel, validationSchema } from './utils'

import Typography from 'design-systems/Atoms/Typography'
import Button from 'design-systems/Atoms/Button'
import { IconCloseBlack } from 'design-systems/Atoms/Icons'
import Modal from 'design-systems/Atoms/Modal'
import { generateFromToData, generateKeyValueData } from 'utils'

const ModalSingleItem: React.FC<SingleItemModalProps> = ({
  open,
  label,
  setIsModalOpen,
  className,
  onSubmitHandler,
}) => {
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
    setFieldValue('names', [...values.names, ''])
    setFieldValue('nameValue', [...values.nameValue, 1])
    setFieldValue('property_name', [...values.property_name, ''])
  }

  const Clear = (item: Item, index: number) => {
    const filteredOption = fakeArr.filter(items => items.id !== item?.id)
    setFakeArr(filteredOption)

    const updatedNames = [...values.names]
    updatedNames.splice(index, 1)
    setFieldValue('names', updatedNames)

    const updatedPropertyNames = [...values.property_name]
    updatedPropertyNames.splice(index, 1)
    setFieldValue('property_name', updatedPropertyNames)

    const updatedNameValue = [...values.nameValue]
    updatedNameValue.splice(index, 1)
    setFieldValue('nameValue', updatedNameValue)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    resetForm()
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
  // const updateValue = (index: number, inputType: string, newValue: number) => {
  //   setFakeArr(prevArr => {
  //     const updatedArr = [...prevArr]
  //     updatedArr[index] = {
  //       ...updatedArr[index],
  //       [inputType]: newValue,
  //     }

  //     const updatedNames = [...values.nameValue]
  //     setFieldValue('nameValue', updatedNames)
  //     return updatedArr
  //   })
  // }

  function preventKeyboardInput(event: React.KeyboardEvent) {
    const numericPattern = /^[0-9]$/

    const inputChar = String.fromCharCode(event.keyCode)

    if (event.keyCode == 8 || event.keyCode == 46 || numericPattern.test(inputChar)) {
      event.preventDefault()
    }
  }

  const initialValues: ModalFormValues = {
    names: [''],
    nameValue: ['1'],
    nameFromValue: ['4'],
    property_name: [''],
  }

  const { handleSubmit, resetForm, handleBlur, values, errors, touched, setFieldValue } = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: values => {
      const { names, nameValue, property_name, nameFromValue } = values
      const flag = String(label).toLowerCase()
      const resultData =
        flag === 'properties'
          ? generateKeyValueData(flag, names, property_name)
          : generateFromToData(flag, names, nameValue, nameFromValue)

      onSubmitHandler?.(resultData)
      handleClose()
    },
  })

  return (
    <>
      <Modal handleClose={handleClose} label={getMappedLabel(label)} open={isModalOpen}>
        <div>
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
                        <div className="flex flex-col" key={index}>
                          <div className="custom-focus flex rounded-sm border-[0.5px] border-solid border-lightGray focus-within:border-black hover:border-black focus:outline-none">
                            <div className="flex w-[22%] flex-col justify-end gap-[10px] sm:w-[14%]">
                              <div className="flex items-center gap-[5px] ">
                                <div
                                  className="flex h-12 w-full cursor-pointer items-center justify-center px-[10px] py-3 text-sm text-gray outline-none placeholder:font-normal focus-within:border-black hover:border-black focus:outline-none"
                                  onClick={() => Clear(item, index)}
                                >
                                  <IconCloseBlack />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-[50%] flex-col justify-end gap-[10px]">
                              <div className="flex h-full items-center gap-[5px]">
                                <input
                                  className="fornt-normal h-12 w-full border-l-[0.5px] border-solid border-lightGray bg-transparent px-4 font-Poppins text-base outline-none focus-within:border-black hover:border-black focus:outline-none"
                                  id={`name_${index}`}
                                  name={`name_${index}`}
                                  placeholder={label === 'Properties' ? 'Character' : 'Speed'}
                                  type="text"
                                  value={values.names[index]}
                                  onBlur={handleBlur}
                                  onChange={e => {
                                    const updatedNames = [...values.names]
                                    updatedNames[index] = e.target.value
                                    setFieldValue('names', updatedNames)
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          {touched.names && errors.names && errors.names[index] && (
                            <span className="mt-[2px] text-md font-medium text-[#E94949]">
                              {label === 'Properties' && errors.names[index] ? 'Type is required' : errors.names[index]}
                            </span>
                          )}
                        </div>
                      ) : (
                        <>
                          <div className="flex flex-[50%] flex-col" key={index}>
                            <div className="flex items-center gap-[5px]">
                              <input
                                className="custom-focus font-base h-12 w-full rounded-sm border-[0.5px] border-solid border-lightGray px-4 py-3 font-Poppins font-normal outline-none focus-within:border-black hover:border-black focus:outline-none"
                                id={`name_${index}`}
                                name={`name_${index}`}
                                placeholder={label === 'Add properties' ? 'Character' : 'Speed'}
                                type="text"
                                value={values.names[index]}
                                onBlur={handleBlur}
                                onChange={e => {
                                  const updatedNames = [...values.names]
                                  updatedNames[index] = e.target.value
                                  setFieldValue('names', updatedNames)
                                }}
                              />
                            </div>

                            {touched.names && errors.names && errors.names[index] && (
                              <span className="mt-[2px] text-md font-medium text-[#E94949]">
                                {label === 'Properties' && errors.names[index]
                                  ? 'Type is required'
                                  : errors.names[index]}
                              </span>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mr-[5px] flex w-[45%] sm:w-[30%]" key={index}>
                      {label === 'Properties' ? (
                        <div className="w-full">
                          <input
                            className="custom-focus h-12 w-full rounded-sm border-[0.5px] border-solid border-lightGray px-4 py-0 font-Poppins text-base font-normal text-black outline-none placeholder:font-normal focus-within:border-black hover:border-black focus:outline-none"
                            id={`property_name${index}`}
                            name={`property_name${index}`}
                            placeholder="Name"
                            type="text"
                            value={values.property_name[index]}
                            onBlur={handleBlur}
                            onChange={e => {
                              const updatedPropertyNames = [...values.property_name]
                              updatedPropertyNames[index] = e.target.value
                              setFieldValue('property_name', updatedPropertyNames)
                            }}
                          />
                          {touched.property_name && errors.property_name && errors.property_name[index] && (
                            <span className="text-md font-medium text-[#E94949]">{errors.property_name[index]}</span>
                          )}
                        </div>
                      ) : (
                        // in
                        <div>
                          <div className="flex w-full rounded-sm border-[0.5px] border-solid border-lightGray focus-within:border-black hover:border-black focus:outline-none">
                            <div className="w-[33%]">
                              <input
                                className="h-12 w-full border-r-[0.5px] border-solid border-lightGray bg-transparent py-0 pl-[15px] pr-[10px] font-Poppins text-base font-normal text-black outline-none placeholder:font-normal focus-within:border-black hover:border-black focus:outline-none"
                                max={values.nameFromValue[index] ?? item.inputRight}
                                min={0}
                                placeholder="1"
                                type="number"
                                value={values.nameValue[index] ?? item.inputLeft}
                                onChange={e => {
                                  const updatedPropertyNames = [...values.nameValue]
                                  updatedPropertyNames[index] = e.target.value
                                  setFieldValue('nameValue', updatedPropertyNames)
                                }}
                                onKeyDown={(e: React.KeyboardEvent) => preventKeyboardInput(e)}
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
                                min={0}
                                placeholder="0"
                                type="number"
                                value={values.nameFromValue[index] ?? item.inputRight}
                                onChange={e => {
                                  const updatedPropertyNames = [...values.nameFromValue]
                                  updatedPropertyNames[index] = e.target.value
                                  setFieldValue('nameFromValue', updatedPropertyNames)
                                }}
                                onKeyDown={(e: React.KeyboardEvent) => preventKeyboardInput(e)}
                              />
                            </div>{' '}
                          </div>
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
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalSingleItem
