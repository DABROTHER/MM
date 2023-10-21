import { WalletTypes } from 'interfaces'

interface NonceRequest {
  networkId: string
  walletAddress: string
}
interface NonceResponse {
  code: number
  data: string
  message: string
  status: boolean
}
interface VerifySignatureRequest {
  networkId: string
  nonce: string
  signature: string
  walletType: WalletTypes
}
interface verifyDataObject {
  token: string
  user: UserObject
}

interface VerifySignatureResponse {
  code: number
  data: verifyDataObject
  message: string
  status: boolean
}
