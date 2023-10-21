import { Signer } from 'ethers'
import { JsonRpcSigner } from '@ethersproject/providers'

import ContractChainService from './ContractChainService'

import { SupportedChainIds } from 'utils'
import { AddressString, WalletTypes } from 'interfaces'

class MarketplaceService extends ContractChainService {
  constructor(
    chainId: SupportedChainIds,
    activatingConnector: WalletTypes | undefined,
    address: string,
    abi: any,
    signer: JsonRpcSigner | undefined,
    operator: AddressString | any
  ) {
    super(chainId, activatingConnector, address, abi, signer as Signer, operator)
  }
  async getCurrentOrderNonce(address: string): Promise<bigint> {
    return await this.getMethods().getCurrentOrderNonce(address)
  }
}

export default MarketplaceService
