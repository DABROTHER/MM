import Link from 'next/link'

import Card from '../Card'

import { SpotLightCardProps } from './interface'

// import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'

const SpotLightCard: React.FC<SpotLightCardProps> = ({
  className,
  nfts,
  trendingInfo,
  collectionName,
  likes,
  href = '',
}) => {
  return (
    <div
      className={`card-shadow flex w-full transform flex-col opacity-100 ${className} mt-1 rounded-sm  border border-grayBorder bg-neutral-800`}
    >
      <Link className="flex h-full w-full flex-col" draggable={false} href={href}>
        <div
          className={`breakWords flex ${trendingInfo ? 'min-h-[353px] pb-2.5' : 'pb-4'} flex-col p-4 pb-2.5 pt-[9px]`}
        >
          <div className="flex w-full flex-row justify-between">
            {collectionName}
            {likes}
          </div>
          <div className="mt-2 grid h-full grid-cols-2 gap-4 xl:min-h-[244px]">
            {nfts?.map((nft, i) => {
              const { fileUrl, name } = nft
              return (
                <Card
                  alt={name}
                  className="h-[114px] w-full lg:h-[106px] xlg:h-[95px] xlg:max-h-[95px] xl:h-[114px] xl:max-h-[114px] xl:w-[142px]"
                  fileClassName="xl:max-h-[114px] w-full"
                  href={href}
                  key={i}
                  src={fileUrl}
                />
              )
            })}
          </div>
          {trendingInfo}
        </div>
      </Link>
    </div>
  )
}
export default SpotLightCard
