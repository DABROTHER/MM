import React, { useState } from 'react'

import ModalSingleItem from '../ModalSingleItem'
import { SingleItemAccordionProps } from './interface'

import { IconPlusBlack } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import Accordion from 'design-systems/Atoms/Accordion'

const AccordionSingleItem: React.FC<SingleItemAccordionProps> = ({ label, onSubmitHandler }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
 
  return (
    <>
      <Accordion className="rounded-sm" isOpen={isOpen} label={label} setIsOpen={setIsOpen}>
        <Typography className="py-[3px] font-Poppins text-md font-medium leading-[145%] text-black">
          Lorem ipsum dolor sit amet consectetur. Aliquet mi sodales nec varius sit a tortor quam tortor, euismod nisl
          ultricies.{' '}
        </Typography>

        {isOpen && (
          <div className="pt-[2.6px] leading-[145%]">
            <div
              className="inline-block cursor-pointer"
              onClick={() => {
                setModalOpen(true)
              }}
            >
              <div className="hidden smd:block">
                <IconPlusBlack height="42" width="42" />
              </div>
              <div className="block smd:hidden">
                <IconPlusBlack height="54" width="54" />
              </div>
            </div>
          </div>
        )}
      </Accordion>
      <ModalSingleItem label={label} open={modalOpen} setIsModalOpen={setModalOpen} onSubmitHandler={onSubmitHandler} />
    </>
  )
}

export default AccordionSingleItem
