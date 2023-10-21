export interface DateModalProps {
  open: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  label?: string | undefined
  currentDate?: Date
  setCurrentDate?: (date:Date)=>void
}
