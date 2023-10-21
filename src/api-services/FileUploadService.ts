import CoreAPIService from './CoreAPIService'
import CoreAPIServiceWithoutAuthentication from './CoreAPIServiceWithoutAuthentication'

import { API_ENDPOINTS, getQueries } from 'utils'
class FileUploadService {
  preSignedUrl = (fileName: string, contentType:string) => {
    const URL = `https://gh2r44xjqj.execute-api.us-west-2.amazonaws.com/dev`
    return CoreAPIService.get<FileUploadResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_PRE_SIGNED_URL}?${getQueries({ fileName, contentType })}`
    )
  }
  filUpload = (file: File, url: string) => {
    return CoreAPIServiceWithoutAuthentication.put<any>(url, file)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new FileUploadService()
