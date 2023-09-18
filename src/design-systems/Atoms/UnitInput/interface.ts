import { Modify } from 'interfaces'

export type InputVariant = 'primary' | 'secondary' | 'fill'

export type UnitInputProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    type?: string
    label?: string
    placeholder?: string
    inputClassName?: string
    value?: string | number
    className?: string
    variant?: InputVariant
    suffix?: boolean
  }
>
