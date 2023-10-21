'use client'
import React, { useMemo, useState } from 'react'
import { useFormik } from 'formik'

import {
  CustomFile,
  belowFieldClass,
  currentDate,
  inputLabelClass,
  btnTypographyClass,
  btnClassName,
  startdateDropdownData,
  endDateDropdownData,
} from './utils'
import { CreateSingleItemTemplateProps, SingleFormValues } from './interface'
import { validationSchema } from './utils'

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
import DateDropDown from 'design-systems/Molecules/DateDropdown'
import { useConnector } from 'context/connector'
import {
  AUCTION_TYPE,
  AuctionType,
  BLOCKCHAIN_ID,
  CURRENT_TIME,
  MULTI_BLOCKCHAIN,
  SINGLE_BLOCKCHAIN,
  convertDate2UTCTimeStamp,
  formatCustomTimeDate,
  getLastHourTime,
} from 'utils'
import { useCreateNFT } from 'hooks/apis/useCreateNFT'
import { DEFAULT_END_TIME, NFT_PROPERTIES } from 'app/create/[blockchainSlug]/utils'
import { SingleItemModalPayload } from 'design-systems/Molecules/ModalSingleItem/interface'
import { AddressString } from 'interfaces'
import { useToast } from 'hooks'

const CreateSingleItem: React.FC<CreateSingleItemTemplateProps> = ({ slug }) => {
  const [active, setActive] = useState<string>('No')
  const [file, setFile] = useState<CustomFile | undefined>()
  const [startDate, setStartDate] = useState<string>(currentDate)
  const [endDate, setEndDate] = useState<string>(currentDate)
  const [activeBtn, setActiveBtn] = useState<AuctionType>(AUCTION_TYPE[0])
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [level, setLevel] = useState<boolean>(false)
  const { isSigned, chainId, address } = useConnector()
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files && files.length > 0) {
      const selectedFile = files[0]
      if (selectedFile) {
        const fileWithPreview = Object.assign(selectedFile, { preview: URL.createObjectURL(selectedFile) })
        setFieldValue('file_upload', selectedFile)
        setFile(fileWithPreview)
      }
    } else {
      setFieldValue('file_upload', null)
    }
  }
  const { createNFT } = useCreateNFT(slug)
  const handleButtonFocus = () => {
    setIsFocused(true)
  }
  const networkId = useMemo(() => BLOCKCHAIN_ID[chainId], [chainId])
  const handleButtonBlur = () => {
    setIsFocused(false)
  }
  const { warningToast } = useToast()
  const initialValues: SingleFormValues = {
    name: '',
    description: '',
    externalLink: '',
    price: '',
    royalties: '',
    file_upload: '',
    networkId: networkId,
    chainId: chainId,
    properties: {},
    levels: {},
    stats: {},
    minimumBid: '',
    startTime: convertDate2UTCTimeStamp(CURRENT_TIME),
    endTime: convertDate2UTCTimeStamp(DEFAULT_END_TIME),
  }
  const { handleSubmit, handleChange, setFieldValue, handleBlur, values, errors, touched } = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: values => {
      const { price, ...rest } = values
      const auctionHandlers = {
        // Fixed Auction
        [AUCTION_TYPE[0]]: () => ({
          ...rest,
          endTime: 0,
          price,
          minimumBid: String(price),
        }),
        // Time Auction
        [AUCTION_TYPE[1]]: () => values,
        // Bids Auction
        [AUCTION_TYPE[2]]: () => {
          warningToast('Sorry! We are working on this')
          return null // or some default value
        },
      }
      const auctionValues = auctionHandlers[activeBtn]?.()
      auctionValues && createNFT?.(address as AddressString, activeBtn, auctionValues, active)
    },
  })
  const onSubmitHandler = (data: SingleItemModalPayload) => {
    const key = Object.keys(data)[0]
    setFieldValue(key === 'statistics' ? 'stats' : key, data[key])
  }
  const focusCSS =
    'opacity-1 absolute left-1/2 z-[2] flex -translate-x-1/2 translate-y-[54%] items-center justify-center rounded-sm border border-solid border-lightGray bg-white py-2 pl-2 pr-0 sm:translate-y-[109%] smd:pl-4 md:left-[78%] md:-translate-x-[43%] md:-translate-y-[109%]'
  return (
    <>
      <form className="container mb-[72px]" onSubmit={handleSubmit}>
        <div className="flex justify-center text-left">
          <div className="mb-0 mt-[25px] w-full">
            <Typography className="text-left font-Poppins text-subtitle font-semibold leading-[145%] text-black md:text-[30px]">
              {MULTI_BLOCKCHAIN.includes(slug) ? 'Create Multiple Item' : 'Create Single Item'}
            </Typography>

            <div className="mt-5 slg:hidden">
              <CardPreview id="file_upload" imgUrl={file?.preview} />
            </div>

            <div className="mt-3 flex items-start gap-[29.5px] md:mt-3">
              {/*left */}
              <div className="w-[91%] flex-1">
                <ChooseWalletBlock chainId={chainId} isSigned={isSigned} />
                <div className="mb-[10px] smd:mb-6 ">
                  <Input
                    className=""
                    error={errors.name}
                    id="name"
                    label="Choose Name"
                    name="name"
                    placeholder="Item name..."
                    touched={touched.name}
                    type="text"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>

                <TextAreaInput
                  className="h-[160px] md:h-[290px]"
                  error={errors.description}
                  id="description"
                  label="Description *"
                  name="description"
                  placeholder="Enter description..."
                  touched={touched.description}
                  type="text"
                  value={values.description}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                {SINGLE_BLOCKCHAIN.includes(slug) && (
                  <SelectCreate
                    className="mb-[10px] mt-[10px] smd:mb-6 smd:mt-6"
                    openSelect={openDropdown}
                    setIsOpenSelect={setOpenDropdown}
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
                )}

                {MULTI_BLOCKCHAIN.includes(slug) && (
                  <div className="mb-3 mt-[10px] smd:mb-6 smd:mt-6">
                    <Input
                      className=""
                      // error={errors.supply}
                      id="supply"
                      label="Supply *"
                      name="supply"
                      placeholder="Supply"
                      // touched={touched.supply}
                      type="number"
                      // value={values.supply}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="mb-3 smd:mb-6">
                  <Input
                    className=""
                    id="externalLink"
                    label="External link"
                    name="externalLink"
                    placeholder="Website url..."
                    type="text"
                    value={values.externalLink}
                    onChange={handleChange}
                  />
                </div>

                {SINGLE_BLOCKCHAIN.includes(slug) && (
                  <>
                    <div className="mb-3 smd:mb-6">
                      <Input
                        className=""
                        error={errors.price}
                        id="price"
                        label="Price *"
                        name="price"
                        placeholder="Enter price"
                        touched={touched.price}
                        type="number"
                        value={values.price}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2 mt-2 flex justify-between font-Poppins text-md font-semibold text-black smd:mb-5 smd:mt-6 smd:text-base">
                      <Typography>
                        Service Fee: <span className="text-md text-lightGray smd:text-base">1%</span>
                      </Typography>
                      <Typography>
                        You Will Receive: <span className="smd:taxt-base text-md text-lightGray">$1,500 USD</span>
                      </Typography>
                    </div>
                  </>
                )}

                <div className="mb-3 smd:mb-6">
                  <Input
                    className=""
                    error={errors.royalties}
                    id="royalties"
                    label="Royalities *"
                    name="royalties"
                    placeholder="enter royalty"
                    touched={touched.royalties}
                    type="number"
                    value={values.royalties}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <UploadFile handleChangeFile={handleChangeFile} id="file_upload" name="file_upload" />

                  {errors.file_upload && (
                    <span className="mt-[6px] text-md font-medium text-[#E94949]">{errors.file_upload}</span>
                  )}
                </div>
                <div className="my-[10px] smd:mb-[10px] smd:mt-6">
                  <Typography className="pb-0 text-left font-Poppins text-md font-semibold leading-[23.2px] text-black smd:pb-1 smd:text-base">
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
              <div className="sticky top-[70px] hidden h-full max-w-[380px] slg:flex slg:w-[9%] slg:flex-1 slg:flex-col slg:justify-end">
                <Typography className="mb-2 text-left font-Poppins text-base font-semibold leading-[23.2px] text-black">
                  Preview
                </Typography>

                <div className="flex gap-[20px]">
                  <CardPreview imgUrl={file?.preview} />
                </div>
              </div>
            </div>
            {/* col */}
            <div className="mt-[14px] smd:mt-8">
              {NFT_PROPERTIES.map((data, i) => (
                <AccordionSingleItem key={i} label={data} onSubmitHandler={onSubmitHandler} />
              ))}
            </div>
            {active === 'Yes' && (
              <>
                <div className="mt-5 flex flex-col gap-[15px] smd:mt-8 md:flex-row">
                  <Button
                    className={`flex justify-between px-4 ${
                      activeBtn === AUCTION_TYPE[0] && 'border border-solid !border-black'
                    }`}
                    fullWidth={true}
                    size="large"
                    onClick={() => setActiveBtn(AUCTION_TYPE[0])}
                  >
                    <Typography className={btnTypographyClass}>Fixed price</Typography> <IconFixedPrice />
                  </Button>

                  <Button
                    className={`flex justify-between px-4 ${
                      activeBtn === AUCTION_TYPE[2] && 'border border-solid !border-black'
                    }`}
                    fullWidth={true}
                    size="large"
                    onClick={() => setActiveBtn(AUCTION_TYPE[2])}
                  >
                    <Typography className={btnTypographyClass}>Open for bids</Typography> <IconBids />
                  </Button>

                  {MULTI_BLOCKCHAIN.includes(slug) ? (
                    <button
                      className={`${btnClassName} ${MULTI_BLOCKCHAIN.includes(slug) && 'bg-[#16161a14]'}`}
                      onMouseLeave={handleButtonBlur}
                      onMouseMove={handleButtonFocus}
                    >
                      <Typography className={btnTypographyClass}>Timed auction</Typography> <IconTime />
                    </button>
                  ) : (
                    <Button
                      className={`flex justify-between px-4 ${
                        activeBtn === AUCTION_TYPE[1] && 'border border-solid !border-black'
                      }`}
                      fullWidth={true}
                      size="large"
                      onClick={() => setActiveBtn(AUCTION_TYPE[1])}
                    >
                      <Typography className={btnTypographyClass}>Timed auction</Typography> <IconTime />
                    </Button>
                  )}

                  {isFocused && (
                    <div className={focusCSS}>
                      <div className="w-full font-Poppins text-md font-medium text-black">
                        Multiple NFTs (ERC-1155) doesn&lsquo;t support auctions
                      </div>
                    </div>
                  )}
                </div>

                {activeBtn === AUCTION_TYPE[1] && (
                  <>
                    <Typography className={`${inputLabelClass} mb-[5px] mt-3 text-base smd:mt-[25px]`}>
                      Minimum bid
                    </Typography>

                    <div className="mb-[10px]">
                      <Input
                        className=""
                        // error={errors.minimumBid}
                        id="minimumBid"
                        name="minimumBid"
                        placeholder="Enter minimum bid"
                        // touched={touched.minimumBid}
                        type="number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>

                    <Typography className={`mb-5 ${belowFieldClass}`}>
                      Bids below this amount will not be allowed, so if you don’t want to have a minimum bid set value
                      to 0.
                    </Typography>

                    <div className="mt-[10px] smd:mt-5">
                      <Typography className={`${inputLabelClass} mb-[5px] text-md`}>Starting date</Typography>

                      <DateDropDown
                        className="absolute z-20 w-full"
                        data={startdateDropdownData}
                        defaultValue={formatCustomTimeDate(CURRENT_TIME)}
                        hoverDropdown={false}
                        onChange={date => setFieldValue('startTime', date)}
                      />
                    </div>

                    <div className="mt-[10px] smd:mt-6">
                      <Typography className={`${inputLabelClass} mb-[5px] text-md`}>End date</Typography>

                      <DateDropDown
                        className="z-21 absolute w-full"
                        data={endDateDropdownData}
                        defaultValue={formatCustomTimeDate(DEFAULT_END_TIME)}
                        hoverDropdown={false}
                        onChange={date => setFieldValue('endTime', date)}
                      />
                    </div>

                    <Typography className={belowFieldClass}>
                      Bids placed during the final 10 minutes extends the auction by 10 minutes.
                    </Typography>
                  </>
                )}
              </>
            )}

            <Button className="mt-6 leading-[134%] smd:mt-8" type="submit">
              <Typography className={btnTypographyClass}>Create</Typography>
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CreateSingleItem
