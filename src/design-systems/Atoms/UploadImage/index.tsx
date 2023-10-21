import React, { useState } from 'react'
import Image from 'next/image'

import { ClickToOpen, CloseIcon } from '../Icons'

import { UploadImageProps } from './interface'

const UploadImage: React.FC<UploadImageProps> = ({ classNameImage, id }) => {
  const [selectedFile, setSelectedFile] = useState<string>()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    // Display the image on the UI
    if (file) {
      const url = URL.createObjectURL(file)
      setSelectedFile(url)
    }
  }
  return (
    <div className={`${'relative h-full w-full'} ${classNameImage}`}>
      {selectedFile ? (
        <>
          <Image alt="profile-image" className={classNameImage} height={0} src={selectedFile} width={0} />
          <div
            className="absolute right-[-14px] top-[-11px] rounded-full bg-white p-1 shadow-lg"
            onClick={() => setSelectedFile('')}
          >
            <CloseIcon className="h-5 w-5" />
          </div>
        </>
      ) : (
        <label className="bg-gray-200 flex h-full cursor-pointer items-center justify-center" htmlFor={id}>
          <ClickToOpen />
        </label>
      )}
      <input accept="image/*" className="hidden" id={id} type="file" onChange={handleFileChange} />
    </div>
  )
}

export default UploadImage
