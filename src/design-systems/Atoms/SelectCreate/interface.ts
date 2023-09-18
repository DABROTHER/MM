import { PropsWithChildren } from 'react'

export interface SelectCreateProps extends PropsWithChildren {
  label?: string

  className?: string
  openSelect: boolean
  setIsOpenSelect: React.Dispatch<React.SetStateAction<boolean>>
}
