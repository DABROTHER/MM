import { Signer, Contract } from 'ethers'

import CoreChainService from './CoreChainService'

import { NULL_TOKEN_ADDRESS, SupportedChainIds } from 'utils'
import { WalletTypes } from 'interfaces'

class ContractChainService extends CoreChainService {
  contract: Contract
  operator?: any
  constructor(
    chainId: SupportedChainIds,
    activatingConnector: WalletTypes | any,
    address: string,
    abi: any,
    signer: Signer,
    operator?: string
  ) {
    super(chainId, activatingConnector, signer)
    if (address) {
      this.contract = this.newContract(address, abi, signer)
    } else {
      this.contract = this.newContract(NULL_TOKEN_ADDRESS, abi, signer)
    }

    this.operator = operator
  }

  /**
   * Return all methods of contract
   * @returns methods
   */

  protected getMethods = () => this.contract
  /**
   * Return contract instance
   * @param address
   * @param abi
   * @param signer
   * @returns contract
   */
  protected newContract = (address: string, abi: any, signer: Signer): Contract => {
    if (signer) {
      return new Contract(address, abi, signer)
    } else {
      return new Contract(address, abi)
    }
  }
}

export default ContractChainService
