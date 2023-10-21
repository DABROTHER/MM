import Link from 'next/link'

import { BannerCardProps } from './interface'

import { getBorderRadius, getBorderRadiusSize, getTransform } from '../Card/utils'

import { getExtentionOfImage } from 'utils'
import File from 'design-systems/Molecules/File'
const BannerCard: React.FC<BannerCardProps> = ({
  alt,
  children,
  className,
  fileClassName = 'h-[256px]',
  src,
  variant = 'all',
  direction,
  onClick,
  href = '',
  borderSize = 'sm',
}) => {
  const borderRadius = getBorderRadius(variant)
  const borderRadiusSize = getBorderRadiusSize(borderSize)
  const cardDirection = getTransform(direction)
  const type = getExtentionOfImage(src as string) as string
  return (
    <div
      className={`${
        direction != 'z-direction' && cardDirection
      } relative rounded-sm  ${className}  flex flex-col ${borderRadius} ${borderRadiusSize} opacity-100`}
    >
      <Link className="flex h-full w-full flex-col" href={href} scroll={false}>
        <div className={`flex h-full w-full  ${borderRadius} ${borderRadiusSize}`}>
          <File
            alt={alt}
            className={`${borderRadius} ${borderRadiusSize} overflow-hidden`}
            src={src}
            styles={`${fileClassName} h-full w-full ${borderRadius} ${borderRadiusSize} ${
              direction === 'z-direction' && cardDirection
            } object-cover`}
            type={type}
            onCLick={onClick}
            height={0}
            width={0}
          />
        </div>
        {children}
      </Link>
    </div>
  )
}
export default BannerCard
