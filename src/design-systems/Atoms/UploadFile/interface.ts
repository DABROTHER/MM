import { Modify } from 'interfaces'
import { ChangeEventHandler } from 'react'

export type FileType = 'image' | 'video' | 'audio'

export type UploadFileProps = Modify<
  React.HTMLProps<HTMLTextAreaElement>,
  {
    handleChangeFile?: ChangeEventHandler<HTMLInputElement>
    type?: FileType
    isBanner?: true
    className?: string
  }
>
