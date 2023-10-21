import { PropsWithChildren } from 'react'
export interface ModalCreateProps extends PropsWithChildren {
  open: boolean
  label?: string
  handleClose: VoidFunction
  className?: string
}
