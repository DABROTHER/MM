import { useMutation } from 'wagmi'

import { FileUploadService } from 'api-services'

export const useFileUpload = () => {
  const { isLoading: isLoadingPreSignedUrl, mutateAsync: preSignedUrlAsync } = useMutation(
    ({ fileName, contentType }: { fileName: string, contentType:string }) => FileUploadService.preSignedUrl(fileName, contentType)
  )
  const { isLoading: isLoadingFileLoading, mutateAsync: fileUploadAsync } = useMutation(
    ({ file, url }: { file: File; url: string }) => FileUploadService.filUpload(file, url)
  )
  return {
    isLoadingPreSignedUrl,
    preSignedUrlAsync,
    fileUploadAsync,
    isLoadingFileLoading,
  }
}
