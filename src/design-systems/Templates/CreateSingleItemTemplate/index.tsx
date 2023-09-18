'use client'
import React, { useState } from 'react'

import { CustomFile, belowFieldClass, currentDate, inputLabelClass, btnTypographyClass, btnClassName } from './utils'

import ChooseWalletBlock from 'design-systems/Atoms/ChooseWallet'
import Typography from 'design-systems/Atoms/Typography'
import Input from 'design-systems/Atoms/Input'
import TextAreaInput from 'design-systems/Atoms/TextAreaInput'
import SelectCreate from 'design-systems/Atoms/SelectCreate'
import UploadFile from 'design-systems/Atoms/UploadFile'
import AccordionSingleItem from 'design-systems/Molecules/AccordionSingleItem'
import Tab from 'design-systems/Atoms/Tabs'
import { yesNoToggle } from 'design-systems/Atoms/Tabs/utils'
import Button from 'design-systems/Atoms/Button'
import { IconTime, IconBids, IconFixedPrice } from 'design-systems/Atoms/Icons'
import CardPreview from 'design-systems/Atoms/CardPreview'
import ModalCollection from 'design-systems/Molecules/ModalCollection'

const CreateSingleItem: React.FC<CreateSingleItemTemplateProps> = ({ slug }) => {
  const [active, setActive] = useState<string>('No')
  const [file, setFile] = useState<CustomFile | undefined>()
  const [startDate, setStartDate] = useState<string>(currentDate)
  const [endDate, setEndDate] = useState<string>(currentDate)
  const [activeBtn, setActiveBtn] = useState<string>('fixed')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files && files.length > 0) {
      const selectedFile = files[0]

      if (selectedFile) {
        const fileWithPreview = Object.assign(selectedFile, { preview: URL.createObjectURL(selectedFile) })

        setFile(fileWithPreview)
      }
    }
  }

  const handleButtonFocus = () => {
    setIsFocused(true)
  }

  const handleButtonBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="container mb-[72px]">
      <div className="flex justify-center text-left">
        <div className="mb-0 mt-[25px] w-full">
          <Typography className="text-left font-Poppins text-subtitle font-semibold leading-[145%] text-black md:text-[30px]">
            {slug === 'multiple' ? 'Create Multiple Item' : 'Create Single Item'}
          </Typography>

          <div className="mt-3 flex items-start gap-[29.5px] md:mt-3">
            {/*left */}
            <div className="w-[91%] flex-1">
              <ChooseWalletBlock />

              <Input className="mb-[10px] smd:mb-6" label="Choose Name" placeholder="Item name..." />

              <TextAreaInput
                className="h-[160px] md:h-[290px]"
                rows={5}
                label="Description *"
                placeholder="Enter description..."
              />

              <SelectCreate
                openSelect={openDropdown}
                setIsOpenSelect={setOpenDropdown}
                className="mb-[10px] mt-[10px] smd:mb-6 smd:mt-6"
              >
                {openDropdown && (
                  <>
                    <div className="inline-block cursor-pointer pb-3 font-Poppins text-md font-medium text-lightGray">
                      <span
                        className="pt-3 text-base font-semibold text-lightGray hover:text-black"
                        onClick={() => setModalOpen(true)}
                      >
                        Create New Collection
                      </span>
                      <Typography className="pt-3 text-base font-semibold text-lightGray hover:text-black">
                        Test Collection
                      </Typography>
                    </div>
                    <ModalCollection label="Collection ABC-123" open={modalOpen} setIsModalOpen={setModalOpen} />
                  </>
                )}
              </SelectCreate>

              <Input className="mb-3 smd:mb-6" label="External link" placeholder="Website url..." />

              <Input className="mb-3 smd:mb-6" label="Price *" placeholder="Enter price" />

              <div className="mb-2 mt-2 flex justify-between font-Poppins text-md font-semibold text-black smd:mb-5 smd:mt-6 smd:text-base">
                <Typography>
                  Service Fee: <span className="text-md text-lightGray smd:text-base">1%</span>
                </Typography>
                <Typography>
                  You Will Receive: <span className="smd:taxt-base text-md text-lightGray">$1,500 USD</span>
                </Typography>
              </div>

              <Input className="mb-3 smd:mb-6" label="Royalities *" placeholder="10" />

              <UploadFile handleChangeFile={handleChangeFile} />

              <div className="mt-5 lg:hidden">
                <CardPreview imgUrl={file?.preview} />
              </div>
              <div className="my-[10px]">
                <Typography className="pb-0 text-left font-Poppins text-md font-semibold leading-[23.2px] text-black smd:pb-2 smd:text-base">
                  Put on marketplace
                </Typography>
                <Typography className="text-left font-Poppins text-md font-medium leading-[20.3px] text-black">
                  Lorem ipsum dolor sit amet consectetur. Aliquet mi sodales nec varius sit a tortor quam tortor,
                  euismod nisl ultricies.
                </Typography>
              </div>

              <Tab
                active={active}
                defaultTab={yesNoToggle?.[1].value}
                setActive={setActive}
                tabItemClass="tabs-marketplace-item"
                tabItemWrp={48}
                tabWrpWidth={96}
                tabs={yesNoToggle}
              />
            </div>
            {/* right */}
            <div className="sticky top-[70px] hidden h-full max-w-[380px] lg:flex lg:w-[9%] lg:flex-1 lg:flex-col lg:justify-end">
              <Typography className="mb-2 text-left font-Poppins text-base font-semibold leading-[23.2px] text-black">
                Preview
              </Typography>

              <div className="flex gap-[20px]">
                <CardPreview imgUrl={file?.preview} />
              </div>
            </div>
          </div>
          {/* col */}

          {active === 'Yes' && (
            <>
              <div className="mt-[14px] smd:mt-8">
                <AccordionSingleItem label="Levels" />
                <AccordionSingleItem label="Statistics" />

                <AccordionSingleItem label="Properties" />
              </div>

              <div className="mt-5 flex flex-col gap-[15px] smd:mt-8 md:flex-row">
                <Button
                  className={`flex justify-between px-4 ${
                    activeBtn === 'fixed' && 'border border-solid !border-black'
                  }`}
                  fullWidth={true}
                  size="large"
                  onClick={() => setActiveBtn('fixed')}
                >
                  <Typography className={btnTypographyClass}>Fixed price</Typography> <IconFixedPrice />
                </Button>

                <Button
                  fullWidth={true}
                  size="large"
                  className={`flex justify-between px-4 ${activeBtn === 'bids' && 'border border-solid !border-black'}`}
                  onClick={() => setActiveBtn('bids')}
                >
                  <Typography className={btnTypographyClass}>Open for bids</Typography> <IconBids />
                </Button>

                {slug === 'multiple' ? (
                  <button
                    className={`${btnClassName} ${slug === 'multiple' ? 'bg-[#16161a14]' : ''}`}
                    onMouseMove={handleButtonFocus}
                    onMouseLeave={handleButtonBlur}
                  >
                    <Typography className={btnTypographyClass}>Timed auction</Typography> <IconTime />
                  </button>
                ) : (
                  <Button
                    className={`flex justify-between px-4 ${
                      activeBtn === 'auction' && 'border border-solid !border-black'
                    }`}
                    onClick={() => setActiveBtn('auction')}
                    fullWidth={true}
                    size="large"
                  >
                    <Typography className={btnTypographyClass}>Timed auction</Typography> <IconTime />
                  </Button>
                )}

                {isFocused && (
                  <div className="opacity-1 absolute left-1/2 z-[2] flex -translate-x-1/2 translate-y-[54%] items-center justify-center rounded-sm border border-solid border-lightGray bg-white py-2 pl-2 pr-0 sm:translate-y-[109%] smd:pl-4 md:left-[78%] md:-translate-x-[43%] md:-translate-y-[109%]">
                    <div className="w-full font-Poppins text-md font-medium text-black">
                      Multiple NFTs (ERC-1155) doesn&lsquo;t support auctions
                    </div>
                  </div>
                )}
              </div>

              {activeBtn === 'auction' && (
                <>
                  <Typography className={`${inputLabelClass} mb-[5px] mt-3 text-base smd:mt-[25px]`}>
                    Minimum bid
                  </Typography>
                  <Input className="mb-[10px]" placeholder="Enter minimum bid" />

                  <Typography className={`mb-5 ${belowFieldClass}`}>
                    Bids below this amount will not be allowed, so if you don’t want to have a minimum bid set value to
                    0.
                  </Typography>

                  <Typography className={`${inputLabelClass} mb-[5px] text-md`}>Starting date</Typography>
                  <Input
                    className="mb-6"
                    value={startDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
                    type="datetime-local"
                  />
                  <Typography className={`${inputLabelClass} mb-[5px] text-md`}>End date</Typography>

                  <Input
                    className="mb-[10px]"
                    value={endDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
                    type="datetime-local"
                  />

                  <Typography className={belowFieldClass}>
                    Bids placed during the final 10 minutes extends the auction by 10 minutes.
                  </Typography>
                </>
              )}
            </>
          )}

          <Button className="mt-6 leading-[134%] smd:mt-8">
            <Typography className={btnTypographyClass}>Create</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateSingleItem
