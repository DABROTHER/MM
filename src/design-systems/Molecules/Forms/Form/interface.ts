import { Control, FieldValues } from 'react-hook-form'
import { LegacyRef } from 'react'
import type { PropsWithChildren } from 'react'

import { Modify } from 'interfaces'

/**
 * `primary` is squared & only bottom bordered input
 * `secondary` is rounded & bordered input
 * `fill` is rounded & bordered & backgrounded input
 */

export type FormRulesType = {
  minLength: { value: number; message: string }
}

export type FormInputProps = Modify<
  InputProps,
  {
    innerClassName?: string

    inputRef?: LegacyRef<HTMLInputElement> | undefined
    control?: Control
    error?: string
    rules?: Object
  }
>

export type FormTextAreaProps = Modify<
  TextAreaProps,
  {
    innerClassName?: string

    inputRef?: LegacyRef<HTMLTextAreaElement> | undefined
    control?: Control
  }
>

export interface FormProps extends PropsWithChildren {
  className?: string
  defaultValues?: any
  onSubmit: (data: FieldValues) => void
}
export type InputVariant = 'primary' | 'secondary' | 'fill'

export type InputProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    label?: string
    className?: string

    error?: string

    icon?: React.ReactElement
    iconClassName?: string

    action?: React.ReactElement

    variant?: InputVariant

    required?: boolean

    onAction?: () => void

    labelClassName?: string

    inputClassName?: string
  }
  >
export type TextAreaProps = Modify<
  React.HTMLProps<HTMLTextAreaElement>,
  {
    label?: string
    className?: string
    required?: boolean
  }
>