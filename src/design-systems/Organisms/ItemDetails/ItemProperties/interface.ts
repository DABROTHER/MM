import { ReactNode } from 'react'

export interface ItemPropertiesProps {
  Properties: User[]
}

export type User = {
  price: ReactNode
  usdPrice: ReactNode
}
