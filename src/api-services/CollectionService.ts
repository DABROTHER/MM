import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS, getQueries } from 'utils'
import {
  CollectionDetails,
  CollectionFilters,
  CollectionPriceDistributionPayload,
  CollectionPriceVolume,
} from 'interfaces'
class CollectionService {
  getCollection = async (payload: FormData) => {
    const URL = `https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.post<CollectionResponse>(`${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_PAGE}`, payload)
  }

  getCollectionDetail = (filters: CollectionDetails) => {
    const URL = `https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<CollectionDetailsResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_DETAILS}?${getQueries(filters)}`
    )
  }

  getVolumePrice = (filters: CollectionPriceVolume) => {
    const URL = `https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<CollectionVolumePriceResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_VolumePrice}?${getQueries(filters)}`
    )
  }
  getOwnerDistribution = (filters: CollectionPriceDistributionPayload) => {
    const URL = `https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<CollectionDataOwnerResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_OWNER_DISTRIBUTION}?${getQueries(filters)}`
    )
  }
  getPriceDistribution = (filters: CollectionPriceDistributionPayload) => {
    const URL = `https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<CollectionPriceDistributionResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_PRICE_DISTRIBUTION}?${getQueries(filters)}`
    )
  }
  getDataOwnerTop50 = (filters: CollectionPriceDistributionPayload) => {
    const URL = `https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<CollectionDataOwnerTop50Response>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLLECTION_OWNER_TOP_50}?${getQueries(filters)}`
    )
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CollectionService()
