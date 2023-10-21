import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS } from 'utils'
class LikeService {
  postLike = (payload: { launchPadId: string; walletAddress: string }) => {
    const URL = `https://paikovknjl.execute-api.us-west-2.amazonaws.com/dev`

    return CoreAPIService.post<ExploreBlockChainResponse>(URL + API_ENDPOINTS.PRIVATE.POST_LAUNCHPAD_LIKE, payload)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new LikeService()
