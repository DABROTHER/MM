import { Signer } from 'ethers'
import { JsonRpcSigner } from '@ethersproject/providers'

import ContractChainService from './ContractChainService'

import { SupportedChainIds } from 'utils'
import { AddressString, WalletTypes } from 'interfaces'

class MarketplaceMintService extends ContractChainService {
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
  async safeMInt(mintTuple: MintTuple) {
    const { to, uri, creator, value, supply } = mintTuple
    if (supply) {
      return this.getMethods().safeMint(to, uri, supply, creator, value)
    } else {
      return this.getMethods().safeMint(to, uri, creator, value)
    }
  }
}

export default MarketplaceMintService
