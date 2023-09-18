import React from 'react'

import { BorderRadiusVariant } from 'design-systems/Molecules/Cards/Card/interface'

export interface CardSkeletonProps {
  className?: string
  children?: React.ReactNode
  variant?: BorderRadiusVariant
  cardClassName?: string
  notification?: React.ReactNode
}
