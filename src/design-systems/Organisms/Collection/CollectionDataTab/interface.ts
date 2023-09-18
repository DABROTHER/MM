import { CollectionPriceVolume } from 'interfaces'

export interface CollectionDataTabProps {
  className?: string
  top50Owners: DataOwnerTop50[]
  volumePrice: VolumePriceData
  isLoadingOwnersTop50: boolean
  isLoadingPriceVolume: boolean
  ownerDistribution: FormattedDistributionItem[]
  isLoadingOwnerDistribution: boolean
  priceDistributionData: CollectionPriceDistribution
  isLoadingPriceDistribution: boolean
}
