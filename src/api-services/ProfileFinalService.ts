import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS, getQueries } from 'utils'
import { CollectionDetails } from 'interfaces'

class ProfileFinalService {
  getCollection = async (payload: FormData) => {
    const URL = `https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.post<CollectionResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_PROFILE_FINAL}?`,
      payload
    )
  }

  getCollectionDetail = (filters: CollectionDetails) => {
    const URL = `https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<CollectionDetailsResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_DETAILS}?${getQueries(filters)}`
    )
  }

  getCollectedTab = (walletAddress: string) => {
    const URL = `https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev`
    const query = {
      walletAddress: walletAddress,
    }
    return CoreAPIService.get<CollectionCollectedTabResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTED_TAB}?${getQueries(query)}`
    )
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfileFinalService()
