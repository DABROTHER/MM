import { StaticImageData } from 'next/image'

export interface CollectionModalProps {
  open: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  label?: string | undefined
}

export type CustomFile = File & { preview: string }

export interface CollectionFormValues {
  name: string
  description: string
  symbol: string
  url: string

  file_upload: string | StaticImageData | null
}
