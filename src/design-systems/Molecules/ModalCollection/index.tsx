import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useFormik } from 'formik'

import { validationSchema } from './utils'
import { CollectionFormValues, CollectionModalProps, CustomFile } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Input from 'design-systems/Atoms/Input'
import Button from 'design-systems/Atoms/Button'
import Modal from 'design-systems/Atoms/Modal'
import PreviewImage from 'assets/images/RectanglePreview.png'
import TextAreaInput from 'design-systems/Atoms/TextAreaInput'

const ModalCollection: React.FC<CollectionModalProps> = ({ open, label, setIsModalOpen, className }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(open)
  const [file, setFile] = useState<CustomFile | undefined>()

  const labelClass = 'text-base font-semibold font-Poppins text-black'

  useEffect(() => {
    setModalOpen(open)

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleClose = () => {
    resetForm()
    setFile(undefined)
    setIsModalOpen(false)
  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files && files.length > 0) {
      const selectedFile = files[0]

      if (selectedFile) {
        const fileWithPreview = Object.assign(selectedFile, { preview: URL.createObjectURL(selectedFile) })
        setFieldValue('file_upload', fileWithPreview?.preview)
        setFile(fileWithPreview)
      }
    } else {
      setFieldValue('file_upload', null)
    }
  }

  const initialValues: CollectionFormValues = {
    name: '',
    description: '',
    url: '',
    symbol: '',
    file_upload: '',
  }

  const { handleSubmit, handleChange, setFieldValue, handleBlur, values, errors, touched, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {},
  })

  const typographyClass = 'text-black font-Poppins text-md leading-[145%]'

  return (
    <>
      <Modal className="!max-h-[550px] overflow-y-scroll" handleClose={handleClose} label={label} open={isModalOpen}>
        <div className={`${className} w-full`}>
          <div className="flex gap-2 lmd:gap-1">
            <div className="w-[40%] smd:w-[45%]">
              <div className="max-w-[213px] rounded border border-solid border-lightGray sm:h-[128px] smd:h-[180px] smd:w-full lmd:h-[213px]">
                <Image
                  alt="big-image"
                  className="flex h-full max-h-[213px] w-full rounded object-cover"
                  height={0}
                  src={file?.preview || PreviewImage}
                  width={0}
                />
              </div>
            </div>

            <div className="flex w-[60%] flex-col justify-between smd:w-[55%]">
              <Typography className={`${typographyClass} font-normal`}>
                At least 300x300 pixels, max size 5MB, GIF, JPEG or PNG.
              </Typography>
              <div>
                <label className="flex cursor-pointer">
                  <input
                    accept="image/*"
                    className="hidden"
                    id="file_upload"
                    name="file_upload"
                    type="file"
                    onBlur={handleBlur}
                    onChange={handleChangeFile}
                  />
                  <div className="custom-focus flex w-full items-center justify-center gap-4 rounded-sm border border-lightGray font-Poppins text-base font-semibold text-black hover:border-black focus:outline-none">
                    <Typography className={`${labelClass} py-[10px] smd:py-3`}>Choose File</Typography>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {errors.file_upload && <span className="mt-1 text-sm font-medium text-[#E94949]">{errors.file_upload}</span>}
          <div>
            <Typography className={`${typographyClass}  mb-[6px] mt-[10px] font-semibold`}>
              Display name *<span className="text-lightGray">(cannot be changed in future)</span>
            </Typography>
            <Input
              error={errors.name}
              id="name"
              name="name"
              placeholder="Enter collection name"
              touched={touched.name}
              value={values.name}
              variant="secondary"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div>
            <Typography className={`${typographyClass} mb-[6px] mt-2  font-semibold`}>Symbol *</Typography>
            <Input
              error={errors.symbol}
              id="symbol"
              name="symbol"
              placeholder="Enter token symbol"
              touched={touched.symbol}
              value={values.symbol}
              variant="secondary"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <Typography className={`${typographyClass} mb-[6px] mt-2 font-semibold`}>Description *</Typography>
          <TextAreaInput
            className="h-[104px]"
            error={errors.description}
            id="description"
            name="description"
            placeholder="Enter token symbol"
            touched={touched.description}
            value={values.description}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <div>
            <Typography className={`${typographyClass} mb-[6px] mt-[10px] font-semibold`}>
              Short URL * <span className="text-lightGray">(will be used as public URL)</span>
            </Typography>
            <Input
              error={errors.url}
              id="url"
              name="url"
              placeholder="modernmuseum.io/"
              touched={touched.url}
              value={values.url}
              variant="secondary"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>

          <Button className="mb-[10px] mt-4" fullWidth={true} onClick={() => handleSubmit()}>
            Create collection
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default ModalCollection
