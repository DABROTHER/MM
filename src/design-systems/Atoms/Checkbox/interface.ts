import { Modify } from 'interfaces'

export interface CheckboxItem {
  id: string
  label: string
}

export type CheckboxProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    // items: CheckboxItem[];
    className?: string
    label?: string
    id?: string
  }
>
