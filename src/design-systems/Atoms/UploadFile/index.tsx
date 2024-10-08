import { IconPlusBlack } from '../Icons'

import { UploadFileProps } from './interface'

const UploadFile: React.FC<UploadFileProps> = ({ handleChangeFile }) => {
  return (
    <>
      <div className="pb-4">
        <h3 className="block pb-2 font-Poppins text-md font-semibold leading-[24px] text-black smd:text-base">
          Upload file *
        </h3>
        <div className="custom-focus h-full min-h-[158px] w-full rounded-[8px] border-[0.5px] border-solid border-lightGray p-[2px] focus-within:border-black hover:border-black focus:outline-none md:min-h-[285px]">
          <div className="flex h-full min-h-[158px] w-full items-center justify-center rounded-[8px] bg-white md:min-h-[285px]">
            <label className="flex cursor-pointer flex-col items-center gap-[14px]">
              <input accept="image/*" className="hidden" id="file-upload" type="file" onChange={handleChangeFile} />
              <div className="hidden md:block">
                <IconPlusBlack height="62px" width="62px" />
              </div>
              <div className="block md:hidden">
                <IconPlusBlack height="54px" width="54px" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadFile
