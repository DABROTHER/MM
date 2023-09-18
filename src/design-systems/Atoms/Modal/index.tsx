import React from 'react'

import Typography from '../Typography'
import { IconCloseBlack } from '../Icons'

import { ModalCreateProps } from './interface'

const Modal: React.FC<ModalCreateProps> = ({ children, open, handleClose, label }) => {
  return (
    <>
      {open && (
        <>
          <div
            onClick={handleClose}
            className="fixed left-0 top-0 z-[7000] h-screen w-screen !overflow-hidden bg-[#000000] bg-opacity-[0.6] opacity-[1] transition-opacity delay-0 duration-200 ease-in-out"
          ></div>
          <div className="fixed left-1/2 top-1/2 z-[7001] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-solid border-lightGray bg-white py-[11px] pl-[15px] pr-[10px] sm:w-[401px] smd:w-[450px] lmd:w-[550px]">
            <div className="flex h-full w-full flex-col">
              <div className="mb-3 flex w-full items-center justify-between pr-[2px]">
                <Typography className={`text-base font-semibold leading-[145%] text-black`}>
                  {label ? label : 'Statistics'}
                </Typography>
                <div onClick={handleClose} className="cursor-pointer">
                  <IconCloseBlack />
                </div>
              </div>

              {children}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Modal
