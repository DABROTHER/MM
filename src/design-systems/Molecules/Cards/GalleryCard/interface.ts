import { StaticImageData } from 'next/image'

export interface GalleryCardProps {
  src: string | StaticImageData
  className?: string
}
