import { useMutation } from 'wagmi'

import { AuthService } from 'api-services'
import { VerifySignatureRequest } from 'api-services/interfaces/auth'

export const useAuthentication = () => {
  const { mutate: getWalletNonce, mutateAsync: getWalletNonceAsync } = useMutation(
    ({ networkId, walletAddress }: { networkId: string; walletAddress: string }) =>
      AuthService.getNonce({
        networkId,
        walletAddress,
      })
  )

  const { mutate: verifySignature, mutateAsync: verifySignatureAsync } = useMutation(
    ({ networkId, signature, nonce, walletType }: VerifySignatureRequest) =>
      AuthService.verifySignature({
        networkId,
        signature,
        nonce,
        walletType,
      })
  )
  return {
    getWalletNonce,
    getWalletNonceAsync,
    verifySignature,
    verifySignatureAsync,
  }
}
