import { PropsWithChildren } from 'react'
export interface userDetails {
  walletAddress?: string | undefined
  profileName?: string | undefined
  profileDetails?: string | undefined
  verification?: string | undefined
  followingCount?: number
  followersCount?: number
}
export interface CartProps extends PropsWithChildren {
  cartData?: boolean
}
