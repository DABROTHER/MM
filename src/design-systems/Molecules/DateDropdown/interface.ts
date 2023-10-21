import { DropdownOption } from 'design-systems/Templates/CreateSingleItemTemplate/interface'

export interface DateDropDownProps {
  data?: DropdownOption[]
  defaultValue?: Date | string
  onChange?: (value: number) => void
  className?: string
  hoverDropdown?: boolean
  isRatio?: boolean
  isCheckBox?: boolean
  children?: React.ReactNode
  isSearch?: boolean
}
