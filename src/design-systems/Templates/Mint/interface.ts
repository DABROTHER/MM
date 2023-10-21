export interface MintTemplateProps {
  className?: string
  onSetCategory: (type: string) => void
  categoryType: string
  onChangeBanner: (banner: CollectionId) => void
  defaultBannerSrc: CollectionId
  launchpadBanner: LaunchpadData[]
  isLoadingLaunchpadBanner: boolean
}
