import { MintBannerInfoProps } from './interface'

import Button from 'design-systems/Atoms/Button'
import { IconCheck } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { ExploreChildrenData } from 'design-systems/Templates/Collection/utils'
import Link from 'next/link'

const MintBannerInfo: React.FC<MintBannerInfoProps> = ({ className, categoryType, type, iconClassName, stroke }) => {
  return (
    <div className={`absolute bottom-0 flex h-full w-auto smd:w-1/2 lmd:h-1/2 lmd:w-full ${className} overflow-hidden`}>
      <div className="flex h-full w-full flex-col justify-between p-4 lmd:flex-row lmd:items-end">
        <div
          className={`${
            categoryType === 'Mint' ? 'rounded-sm' : 'rounded-xs'
          } mt-3  flex h-8 w-[156px] items-center justify-center  border border-solid border-xlightGray bg-xlightGray text-center backdrop-blur-[20px] lmd:w-[300px]`}
        >
          <Typography className="flex items-center justify-center pt-1 text-center font-Poppins text-base font-semibold leading-[145%] text-lightGray">
            {type}
          </Typography>
        </div>

        <div className={`flex w-full flex-row gap-3 lmd:w-1/2 lmd:justify-end ${className}`}>
          {ExploreChildrenData.map(({ url, Icon, target }, i) => {
            return (
              <Link className={`${iconClassName}`} href={url} key={i} target={target}>
                <Icon stroke={stroke} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default MintBannerInfo
