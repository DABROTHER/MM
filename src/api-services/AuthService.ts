import CoreAPIService from './CoreAPIService'

import { NonceRequest, NonceResponse, VerifySignatureRequest, VerifySignatureResponse } from './interfaces/auth'

import { API_ENDPOINTS } from 'utils'

class AuthService {
  getNonce = async (payload: NonceRequest) => {
    const URL = 'https://smdfppffj5.execute-api.us-west-2.amazonaws.com/dev'
    return CoreAPIService.post<NonceResponse>(URL + API_ENDPOINTS.AUTH.NONCE, payload)
  }

  verifySignature = async (payload: VerifySignatureRequest) => {
    const URL = 'https://smdfppffj5.execute-api.us-west-2.amazonaws.com/dev'
    return CoreAPIService.post<VerifySignatureResponse>(URL + API_ENDPOINTS.AUTH.VERIFY_SIGNATURE, payload)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService()
