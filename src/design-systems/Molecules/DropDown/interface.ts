export interface DropDownProps {
  data: ExploreBlock[]
  defaultValue: ExploreBlock
  onChange: (value: ExploreBlock) => void
  className?: string
  hoverDropdown?: boolean
  isRatio?: boolean
  isCheckBox?: boolean
  children?: React.ReactNode
}
