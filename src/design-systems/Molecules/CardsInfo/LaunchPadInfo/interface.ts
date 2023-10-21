export interface LaunchPadInfoProps {
  type: string
  className?: string
  name: string
  isLiked: boolean
  likeCount: string
  onLike?: () => void
  isLoadingLike?: boolean
}
