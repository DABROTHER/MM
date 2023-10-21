import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS} from 'utils'
class CreateNFTService {
  createNFT = (payload:any) => {
    const URL = `https://zrkmun91p4.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.post<CreateNFTResponse>(`${URL}${API_ENDPOINTS.PRIVATE.POST_CREATE_NFT}`, payload)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CreateNFTService()
