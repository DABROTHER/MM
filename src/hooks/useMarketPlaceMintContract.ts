/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from 'react'

import useChain from './useChain'

import { MARKETPLACE_MINT_CONTRACT_ADDRESS, TypeNFT, MARKETPLACE_MINT_CONTRACT_ABIS } from 'utils'

/**
 * Hook to interact with the MM marketplace smart contract.
 * @param networkId The ID of the MM network to connect to.
 * @returns An object containing functions for interacting with the marketplace contract.
 */
export const useMarketPlaceMintContract = (type: TypeNFT) => {
  // Get the address of the marketplace contract on the selected chain.
  const marketplaceMintContractAddress = useMemo(() => MARKETPLACE_MINT_CONTRACT_ADDRESS(type), [type])

  // Get the address of the marketplace mint abis on the selected chain.
  const marketplaceMintContractABIs = useMemo(() => MARKETPLACE_MINT_CONTRACT_ABIS(type), [type])

  // Connect to the marketplace mint contract using the useChain hook.
  const { marketPlaceMintService } = useChain(marketplaceMintContractAddress, marketplaceMintContractABIs)
  /**
   * Get the current nonce for the given address.
   * @param address The address to retrieve the nonce for.
   * @returns The current nonce value.
   */
  const safeMint = useCallback(
    async (payload: MintTuple) => {
      try {
        const result = await marketPlaceMintService.safeMInt(payload)
        return result
      } catch (err) {
        console.error('err----', err)
      }
    },
    [marketPlaceMintService]
  )

  return {
    safeMint,
  }
}
