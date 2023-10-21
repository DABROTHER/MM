import { Signer, providers } from 'ethers'

import { WalletTypes } from 'interfaces'
import { RPC_ENDPOINTS, SupportedChainIds } from 'utils'

class CoreChainService {
  provider: providers.Provider | providers.JsonRpcProvider
  chainId: SupportedChainIds
  activatingConnector: WalletTypes
  signer: Signer | null

  constructor(chainId: SupportedChainIds, activatingConnector: WalletTypes, signer: Signer | null) {
    this.chainId = chainId
    this.activatingConnector = activatingConnector
    this.signer = signer
    this.provider = signer?.provider ?? this.getPublicProvider()
  }

  getProvider() {
    return this.getPublicProvider()
  }

  getPublicProvider() {
    return new providers.JsonRpcProvider(RPC_ENDPOINTS[this.chainId], this.chainId)
  }

  getEthProvider() {
    if (!window?.ethereum) return this.getPublicProvider()
    return new providers.Web3Provider((window as any).ethereum)
  }
}

export default CoreChainService
