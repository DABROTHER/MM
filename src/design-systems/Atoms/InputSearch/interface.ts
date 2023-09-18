import { Modify } from 'interfaces'

export type InputVariant = 'primary'

export type InputSearchProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    label?: string
    className?: string

    error?: string

    icon?: React.ReactElement

    action?: React.ReactElement

    variant?: InputVariant

    required?: boolean

    onAction?: () => void

    labelClassName?: string
  }
>
