interface FileUploadResponse {
  code: number
  data: FileUploadData
  message: string
  status: boolean
}
interface FileUploadData {
  url: string
  objectUrl: string
}
