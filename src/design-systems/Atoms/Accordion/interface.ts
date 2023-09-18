import { PropsWithChildren } from 'react'
export interface AccordionProps extends PropsWithChildren {
  className?: string
  label?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
