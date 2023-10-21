/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from 'react'
import { BigNumber } from 'ethers'

import useChain from './useChain'

import { TypeNFT, MARKETPLACE_CONTRACT_ABIS_LIST, MARKETPLACE_CONTRACT_ADDRESS_LIST } from 'utils'

/**
 * Hook to interact with the MM marketplace smart contract.
 * @param networkId The ID of the MM network to connect to.
 * @returns An object containing functions for interacting with the marketplace contract.
 */
export const useMarketPlaceContract = (type: TypeNFT) => {
  // Get the address of the marketplace contract on the selected chain.
  const marketplaceContractAddress = useMemo(() => MARKETPLACE_CONTRACT_ADDRESS_LIST[type], [type])

  // Get the address of the marketplace mint abis on the selected chain.
  const marketplaceContractABIs = useMemo(() => MARKETPLACE_CONTRACT_ABIS_LIST[type], [type])

  // Connect to the marketplace contract using the useChain hook.
  const { marketPlaceService } = useChain(marketplaceContractAddress, marketplaceContractABIs)
 
  /**
   * Get the current nonce for the given address.
   * @param address The address to retrieve the nonce for.
   * @returns The current nonce value.
   */
  const getNonce = useCallback(
    async (address: string) => {
      try {
        const result = await marketPlaceService.getCurrentOrderNonce(address)
        return result
      } catch (err) {
        console.error(err)
      }
      return BigNumber.from(0)
    },
    [marketPlaceService]
  )

  return {
    getNonce,
  }
}
