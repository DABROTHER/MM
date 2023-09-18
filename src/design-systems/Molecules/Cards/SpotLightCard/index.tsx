import Card from '../Card'

import { SpotLightCardProps } from './interface'

import { IconHeart } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { formatLike, parseData } from 'utils'
import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'

const SpotLightCard: React.FC<SpotLightCardProps> = ({ className, name, likeNumber, sales, volume, floor, nfts }) => {
  return (
    <div
      className={`card-shadow flex w-full transform flex-col opacity-100 ${className} mt-1 rounded-sm bg-neutral-800`}
    >
      <div className="breakWords flex min-h-[353px] flex-col rounded-sm border border-grayBorder p-4 pb-2.5 pt-[9px]">
        <div className="flex w-full flex-row justify-between">
          <Typography className="leading-4 custom-truncate-width truncate font-Poppins text-body font-bold text-neutral-100">
            {name}
          </Typography>
          <Typography className="text-right font-Poppins text-md font-semibold leading-[145%] text-neutral-100">
            <IconHeart className="mr-3 inline-block" height={14} width={16} />
            {formatLike(likeNumber)}
          </Typography>
        </div>
        <div className="mt-2 grid h-full grid-cols-2 gap-4 xl:min-h-[244px]">
          {nfts?.map((nft, i) => {
            const { fileUrl, name } = nft
            return (
              <Card
                alt={name}
                className="h-[114px] w-full lg:h-[106px] xlg:h-[95px] xlg:max-h-[95px] xl:h-[114px] xl:max-h-[114px] xl:w-[142px]"
                fileClassName="xl:max-h-[114px] w-full"
                key={i}
                src={fileUrl}
              />
            )
          })}
        </div>
        <TrendingInfo
          className="justify-end !px-0 !py-0"
          data={[{ Floor: `${floor} ETH`, Volume: `${volume ?? 0} ETH`, Sales: sales }]}
          isInfoName={false}
        />
      </div>
    </div>
  )
}
export default SpotLightCard
