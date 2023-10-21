import { string } from 'yup'

export interface Item {
  id: string
  inputLeft: number
  inputRight: number

  index: number
}

export interface SingleItemModalProps {
  open: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  label: string | undefined
  onSubmitHandler: (payload: SingleItemModalPayload) => void
}

export interface SingleItemModalPayload {
  [key: string]: Array<{ [key: string]: string }>
}
export interface ModalFormValues {
  names: string[]
  nameValue: string[]
  property_name: string[]
  nameFromValue:string[]
}
