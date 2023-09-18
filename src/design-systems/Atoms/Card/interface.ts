import { PropsWithChildren } from 'react'

export type CardVariant = 'small' | 'medium' | 'large' | 'x-large' | '2x-large'

export interface CardProps extends PropsWithChildren {
  variant?: CardVariant
  rounded?: boolean
  bordered?: boolean
  shadow?: boolean
  overflow?: boolean
  className?: string
  onClick?: () => void
}
