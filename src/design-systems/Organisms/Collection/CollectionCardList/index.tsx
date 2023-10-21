import { useMemo } from 'react'

import { CollectionCardListProps } from './interface'
import { handleCollectionUI } from './utils'

import Typography from 'design-systems/Atoms/Typography'
import Card from 'design-systems/Molecules/Cards/Card'
import CollectionCardInfo from 'design-systems/Molecules/CardsInfo/CollectionCardInfo'
import { IconCheck, IconLock } from 'design-systems/Atoms/Icons'
import { LaunchpadCardSkeltonList } from 'design-systems/Templates/Launchpad'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import DataNotFound from 'design-systems/Molecules/DataNotFound'

const CollectionCardList: React.FC<CollectionCardListProps> = ({
  isShow,
  design,
  isLoadingCollection,
  collectionData,
  hasMoreCollection,
  isFetchingNextCollection,
  fetchMoreCollection,
  isRefetching,
  selected,
  onChangeRange,
  isProfileFinal = false,
  type,
}) => {
  const UIdesign = handleCollectionUI(design, isShow)
  const notificationCSS = useMemo(() => (design === 'grid' ? 'top-[40%]' : 'top-[48%] xl:top-[52.5%]'), [design])
  return (
    <>
      {(isLoadingCollection || isRefetching) && !isFetchingNextCollection ? (
        <div className={`grid gap-4 ${UIdesign?.className}`}>
          <LaunchpadCardSkeltonList />
        </div>
      ) : collectionData.length ? (
        <div className={`grid gap-4 ${UIdesign?.className}`}>
          {collectionData.map(({ name, fileUrl, usdAmount = 0, highestBid = 0 }, i) => (
            <Card
              alt={name}
              // eslint-disable-next-line react/no-children-prop
              children={
                <div>
                  {isProfileFinal ? (
                    <Typography className="mb-[16px] mt-[13px] px-4 text-start font-Poppins text-body font-bold leading-[23.2px] text-black">
                      {name}
                      <IconCheck className="ml-3 inline-block" height={15} width={15} />
                    </Typography>
                  ) : (
                    <CollectionCardInfo
                      cardInfoMT={UIdesign?.cardInfoMT}
                      className="!pt-[9px]"
                      data={[{ 'Price': `${usdAmount} ETH`, 'Highest Bid': `${highestBid} ETH` }]}
                      name={name}
                    />
                  )}
                </div>
              }
              className={`${UIdesign?.cardClassName} group ${
                selected && selected >= i + 1 && 'border border-lightGray'
              }`}
              direction="y-direction"
              fileClassName={UIdesign?.fileClassName}
              key={i}
              notification={
                <div
                  className={`absolute ${notificationCSS} hidden w-full justify-center gap-3 group-hover:flex group-hover:flex-row`}
                >
                  <div className="flex h-12 w-[92px] justify-center rounded-sm border border-lightGray bg-neutral-800">
                    <Typography className="flex items-center p-2 text-center font-Poppins text-body font-bold text-neutral-100">
                      {type ? 'ETH' : 'Buy now'}
                    </Typography>
                  </div>
                  <div className="flex flex-col">
                    <div
                      // eslint-disable-next-line react/no-children-prop
                      children={<IconLock />}
                      className={`flex !h-12 !w-12 items-center justify-center rounded-sm border border-lightGray bg-neutral-700`}
                    />
                  </div>
                </div>
              }
              src={fileUrl}
              variant="top"
              onSelect={() => onChangeRange && onChangeRange(i + 1)}
            />
          ))}
          {isFetchingNextCollection && <LaunchpadCardSkeltonList />}
          <ScrollTrigger
            isLoading={isFetchingNextCollection}
            onTrigger={() =>
              !isLoadingCollection && !isFetchingNextCollection && hasMoreCollection && fetchMoreCollection?.()
            }
          />
        </div>
      ) : (
        <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
      )}
    </>
  )
}
export default CollectionCardList
