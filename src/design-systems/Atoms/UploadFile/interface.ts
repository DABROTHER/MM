import { PropsWithChildren, ChangeEventHandler } from 'react'

export type FileType = 'image' | 'video' | 'audio'

export interface UploadFileProps extends PropsWithChildren {
  handleChangeFile?: ChangeEventHandler<HTMLInputElement>
  type?: FileType
  isBanner?: true
  className?: string
}
