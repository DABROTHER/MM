export interface DropDownSearchBarCheckBoxProps {
  data: ExploreBlock[]
  defaultValue: ExploreBlock
  onChange: (label: string, selectedValue: string) => void
  className?: string
  hoverDropdown?: boolean
  isRatio?: boolean
  isCheckBox?: boolean
  children?: React.ReactNode
}
