export interface CollectionModalProps {
  open: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  label?: string | undefined
}

export type CustomFile = File & { preview: string }
