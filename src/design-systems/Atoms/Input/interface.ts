import { Modify } from 'interfaces'

export type InputVariant = 'primary' | 'secondary' | 'fill'

export type InputProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    type?: string
    label?: string
    placeholder?: string

    value?: string | number
    className?: string
    variant?: InputVariant
    suffix?: boolean
    error?: string
    touched?: boolean
  }
>
