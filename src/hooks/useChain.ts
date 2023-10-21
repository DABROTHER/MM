import { useGlobalState } from './store/useGlobalState'

import { useConnector } from 'context/connector'
import MarketplaceMintService from 'services/MarketPlaceMIntService'
import MarketplaceService from 'services/MarketplaceChainService'

const useChain = (_address: string, _abis: any) => {
  const { address, chainId, signer } = useConnector()
  const { connector } = useGlobalState()

  const marketPlaceMintService = new MarketplaceMintService(chainId, connector, _address, _abis, signer, address)

  const marketPlaceService = new MarketplaceService(chainId, connector, _address, _abis, signer, address)

  return {
    marketPlaceMintService,
    marketPlaceService,
  }
}

export default useChain
