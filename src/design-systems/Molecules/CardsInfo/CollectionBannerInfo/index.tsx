import Link from 'next/link'

import { CollectionBannerInfoProps } from './interface'
const CollectionBannerInfo: React.FC<CollectionBannerInfoProps> = ({
  className,
  ExploreChildrenData,
  iconClassName,
  stroke,
}) => {
  return (
    <div className={`absolute bottom-4 right-4 flex w-full flex-row justify-end gap-3 ${className}`}>
      {ExploreChildrenData.map(({ url, Icon, target }, i) => {
        return (
          <Link className={`${iconClassName}`} href={url} key={i} target={target}>
            <Icon stroke={stroke} />
          </Link>
        )
      })}
    </div>
  )
}
export default CollectionBannerInfo
