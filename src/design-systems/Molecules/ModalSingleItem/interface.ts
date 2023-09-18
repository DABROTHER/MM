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
}
