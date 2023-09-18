import { CollectionDesign } from 'design-systems/Templates/Collection/utils'
import { AnyFunction } from 'interfaces'

export interface CollectionCardListProps {
  isShow: boolean
  design: CollectionDesign
  collectionData: DataCollection[]
  isLoadingCollection: boolean
  hasMoreCollection: boolean
  isFetchingNextCollection: boolean
  fetchMoreCollection: AnyFunction
  isRefetching: boolean
  selected: number
  onChangeRange: (range: number) => void
}
