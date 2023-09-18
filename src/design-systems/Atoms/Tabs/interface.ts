import { SetStateAction } from 'react'

export type Tab = {
  Label: any
  value: string
  type?: string
  hoverLabel?: string
}

export interface DefaultTabProps {
  className?: string
  tabs: Tab[]
  defaultTab: string
  active?: any
  setActive?: React.Dispatch<SetStateAction<any>>
  tabWrpWidth: number
  tabItemWrp?: number
  tabItemClass?: string
}
