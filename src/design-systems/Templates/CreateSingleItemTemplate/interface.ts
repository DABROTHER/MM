import { StaticImageData } from 'next/image'

import { SingleItemModalPayload } from 'design-systems/Molecules/ModalSingleItem/interface'
import { MM_BLOCKCHAIN_NETWORK, SupportedNetworkIds, TypeNFT } from 'utils'

export interface CreateSingleItemTemplateProps {
  slug: TypeNFT

  exploreBlockChain?: DropdownOption[]
  onChangeFilter?: (filter: FilterValues) => void
}

type FilterValues = {
  [key: string]: string | boolean
}

export interface DropdownOption {
  label: string
  value: number | string
}

export interface SingleFormValues {
  name: string
  description: string
  externalLink: string
  price: number | string
  royalties: number | string
  file_upload: File | StaticImageData | string
  networkId: MM_BLOCKCHAIN_NETWORK
  chainId: SupportedNetworkIds
  properties: SingleItemModalPayload
  levels: SingleItemModalPayload
  stats: SingleItemModalPayload
  minimumBid?: string
  startTime: number
  endTime: number
}
