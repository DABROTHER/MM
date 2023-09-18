import { LinkCommStyle } from '../../Footer/utils'

import { CollectionBanner } from './interface'

import IconButton from 'design-systems/Atoms/IconButton'
import { IconEther } from 'design-systems/Atoms/Icons'
import { launchpadNotification } from 'design-systems/Molecules/Cards/Card/utils'
import CollectionBannerInfo from 'design-systems/Molecules/CardsInfo/CollectionBannerInfo'
import { CollectionIcon, ExploreChildrenData } from 'design-systems/Templates/Collection/utils'
import Card from 'design-systems/Molecules/Cards/Card'

const CollectionBanner: React.FC<CollectionBanner> = ({ bannerImage, logoImage, name }) => {
  return (
    <div className="relative mt-8 flex h-[280px] flex-col lmd:h-[384px]">
      <div className="relative h-[224px] w-full lmd:h-[304px]">
        <Card
          alt={name}
          // eslint-disable-next-line react/no-children-prop
          children={
            <CollectionBannerInfo
              ExploreChildrenData={ExploreChildrenData}
              className="!w-auto"
              iconClassName={`${LinkCommStyle} bg-neutral-700 border-0`}
              stroke="#9a9a9a"
            />
          }
          className="group !h-full !w-full"
          fileClassName="!h-full !w-full opacity-100"
          notification={
            <div className="flex flex-col">
              <IconButton
                // eslint-disable-next-line react/no-children-prop
                children={<IconEther className="flex" fill="#9a9a9a" />}
                className={`${launchpadNotification} !h-12 !w-12 bg-neutral-700`}
              />
            </div>
          }
          src={bannerImage}
          variant="all"
          // eslint-disable-next-line react/no-children-prop
        />
      </div>
      <div className="mx-4 flex flex-row justify-between">
        <div className="absolute bottom-0 h-[88px] w-[88px] rounded-xs smd:h-[112px] smd:w-[112px] lmd:h-[160px] lmd:w-[160px]">
          <Card
            alt={name}
            borderSize="xs"
            className="group !h-full !w-full !rounded-xs border border-grayBorder"
            fileClassName="!h-full !w-full opacity-100 !rounded-xs"
            src={logoImage}
            variant="all"
          />
        </div>
        <CollectionBannerInfo
          ExploreChildrenData={CollectionIcon}
          className="hidden !w-auto lmd:flex"
          iconClassName={`${LinkCommStyle}`}
          stroke="black"
        />
      </div>
    </div>
  )
}
export default CollectionBanner
