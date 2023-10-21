import { signTypedData } from '@wagmi/core'

import { useMarketPlaceContract } from 'hooks'
import {
  AuctionType,
  MARKETPLACE_MINT_CONTRACT_ADDRESS_LIST,
  PAYMENT_TOKEN,
  PUT_ON_MARKETPLACE_TYPE,
  SETTINGS,
  SupportedNetworkIds,
  TypeNFT,
} from 'utils'
import { AddressString } from 'interfaces'
import { PutOnMarketplaceService } from 'api-services'

interface PutOnMArketplaceProps {
  royalties: number
  price: string | number
  address: AddressString
  chainId: SupportedNetworkIds
  listingTime: number
  expirationTime: number
  uri: string
  _id: string
  minimumBid: string
  auctionType: AuctionType
}
export const usePutOnMArketplace = (type: TypeNFT) => {
  const { getNonce } = useMarketPlaceContract(type)

  const putOnMArketplace = async ({
    expirationTime,
    listingTime,
    royalties,
    price,
    address,
    chainId,
    uri,
    _id,
    minimumBid,
    auctionType,
  }: PutOnMArketplaceProps) => {
    // const nonce = await getNonce(address)
    const nonce = BigInt(6)

    const contractAddress: AddressString = MARKETPLACE_MINT_CONTRACT_ADDRESS_LIST[type]
    try {
      const signature = await signTypedData({
        domain: {
          name: SETTINGS.name,
          version: SETTINGS.version,
          chainId: Number(chainId),
          verifyingContract: contractAddress,
        },
        primaryType: 'Order',
        types: {
          Order: PUT_ON_MARKETPLACE_TYPE,
        },
        message: {
          seller: address,
          contractAddress: MARKETPLACE_MINT_CONTRACT_ADDRESS_LIST[type],
          royaltyFee: BigInt(royalties * 100),
          royaltyReceiver: address,
          paymentToken: PAYMENT_TOKEN,
          basePrice: BigInt(price),
          listingTime: BigInt(listingTime),
          expirationTime: BigInt(expirationTime),
          nonce: nonce as bigint,
          tokenId: BigInt(0),
          orderType: 0,
          uri: uri,
          objId: '0',
        },
      })
      if (signature) {
        const putOnMArketplaceData = {
          _id,
          auctionType: auctionType,
          amount: minimumBid,
          erc20Address: '0x0000000000000000000000000000000000000000',
          nonce: String(nonce),
          signature: signature,
          startingTime: listingTime,
          closingTime: expirationTime,
          isTokenGated: false,
          tokenGateAddress: '0x0000000000000000000000000000000000000000',
        }
        const res = await PutOnMarketplaceService.putOnMarketplace((putOnMArketplaceData))
        return res
      }
    } catch (error) {
      console.error('err', error)
    }
  }
  return { putOnMArketplace }
}
