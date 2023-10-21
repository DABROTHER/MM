import { Modify } from 'interfaces'

export type CardPreviewProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    isBanner?: boolean
    imgUrl?: string
    id?: string
    name?: string
  }
>
