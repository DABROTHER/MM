interface CreateNFTResponse {
  code: number
  data: CreateNFTData
  message: string
  status: boolean
}
interface CreateNFTData {
  id: string
  ipfs_external_url: string
  ipfsHash: string
}
