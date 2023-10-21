import CoreAPIService from './CoreAPIService'
import { PutOnMarketplaceResponse, putOnMarketplacePayload } from './interfaces/putOnMarketplace'

import { API_ENDPOINTS } from 'utils'

class PutOnMarketplaceService {
  putOnMarketplace = async (payload: putOnMarketplacePayload) => {
    const URL = 'https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev'
    return CoreAPIService.put<PutOnMarketplaceResponse>(URL + API_ENDPOINTS.PRIVATE.PUT_ON_MARKETPLACE, payload)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PutOnMarketplaceService()
