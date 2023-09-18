import { FileProps } from './interface'

import Spinner from 'design-systems/Atoms/Spinner'
import Video from 'design-systems/Atoms/Video'
import { isVideoFile } from 'utils'
import Image from 'design-systems/Atoms/Image'
import authorImage from 'assets/images/author.png'

const File: React.FC<FileProps> = ({
  alt,
  src,
  type,
  className = '',
  width,
  height,
  isLoading = false,
  styles,
  onCLick = () => {},
}) => {
  const isVideo = isVideoFile(type)

  if (isLoading) {
    return <Spinner />
  }

  if (isVideo) {
    return <Video center className={className} src={src as string} type={type} />
  }

  return (
    <Image alt={alt} className={className} height={height} src={src} styles={styles} width={width} onClick={onCLick} />
  )
}
export default File
