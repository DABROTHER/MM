import { PropsWithChildren } from 'react'

import { SupportedNetworkIds } from 'utils'

export interface ChooseWalletProps extends PropsWithChildren {
  className?: ''
  isSigned: boolean
  chainId:SupportedNetworkIds
}
