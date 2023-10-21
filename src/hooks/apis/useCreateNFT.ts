import { useCallback } from 'react'

import { useFileUpload } from './useFileUpload'
import { usePutOnMArketplace } from './usePutOnMarketplace'

import { SingleFormValues } from 'design-systems/Templates/CreateSingleItemTemplate/interface'
import { CreateNFTService } from 'api-services'
import { AuctionType, TypeNFT } from 'utils'
import { AddressString } from 'interfaces'
import { useToast } from 'hooks/useToast'

export const useCreateNFT = (type: TypeNFT) => {
  const { warningToast, successToast } = useToast()
  const { preSignedUrlAsync, fileUploadAsync } = useFileUpload()
  const { putOnMArketplace } = usePutOnMArketplace(type)
  const createNFT = useCallback(
    async (
      address: AddressString,
      activeBtn: AuctionType,
      { file_upload, ...rest }: SingleFormValues,
      active: string
    ) => {
      try {
        const { chainId, price, startTime, endTime, minimumBid, ...restObject } = rest
        const { name, type } = file_upload as File

        const {
          data: { url, objectUrl },
        } = await preSignedUrlAsync({ fileName: name, contentType: type })
        if (url && objectUrl) {
          await fileUploadAsync({ file: file_upload as File, url })
          const data = JSON.stringify({
            ...restObject,
            fileUrl: 'https://mordernmuseum.s3.amazonaws.com/mordernmuseumData/museum.png',
            chainId: String(chainId),
            ethPrice: price,
            collectionId: '64c0aff6285f2e698d3f0764',
          })
          const res = await CreateNFTService.createNFT(data)
          if (active === 'Yes' && res) {
            const data = {
              royalties: 10,
              price: price,
              address: address,
              chainId: chainId,
              uri: res.data.ipfsHash,
              listingTime: startTime as number,
              expirationTime: endTime as number,
              _id: res.data.id,
              minimumBid: String(minimumBid),
              auctionType: activeBtn,
            }
            const test = await putOnMArketplace(data)
            if (test) successToast('NFT successFully Created with put on marketplace')
          } else {
            successToast('NFT successFully Created')
          }
        }
      } catch (error: any) {
        warningToast(error?.message)
        console.error('error', error)
      }
    },
    []
  )
  return { createNFT }
}
