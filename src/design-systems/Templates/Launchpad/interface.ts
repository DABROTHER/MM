import { AnyFunction } from 'interfaces'

export interface LaunchpadProps {
  assets: LaunchpadList[]
  isLoadingLaunchpadBanner: boolean
  launchpadBanner: LaunchpadData[]
  defaultBannerSrc: CollectionId
  hasMoreAssets: boolean
  isLoadingLaunchpad: boolean
  isFetchingMoreAssets: boolean
  isRefetchingAssets: boolean
  trendingCardInfo: TrendingCardInfo[]
  refetchCollectionAssets?: AnyFunction
  onFetchMoreAssets: () => void
  onSetCategory: (type: string) => void
  onChangeBanner: (banner: CollectionId) => void
}
interface TrendingCardInfo {
  [key: string]: string
}
