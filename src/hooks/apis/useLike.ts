import { useMutation } from 'wagmi'

import { LikeService } from 'api-services'

export const useLaunchPadLike = () => {
  const { isLoading: isLoadingLike, mutateAsync: likeAsync } = useMutation(
    ({ launchPadId, walletAddress }: { launchPadId: string; walletAddress: string }) =>
      LikeService.postLike({ launchPadId, walletAddress })
  )
  return {
    isLoadingLike,
    likeAsync,
  }
}
