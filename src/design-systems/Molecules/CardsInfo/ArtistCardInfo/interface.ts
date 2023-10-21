import { StaticImageData } from 'next/image'
import { IconProps } from 'design-systems/Atoms/Icons/interface'

export interface ArtistCardInfoProps {
  className?: string
  name?: string
  artistImage?: string | StaticImageData
  mintSocialData?: socialMediaData[]
}

interface socialMediaData {
  url: string
  target: string
  Icon: React.FC<IconProps>
}
