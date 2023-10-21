import { ExplorePageTemplateProps } from './interface'
import { SORT_EXPLORE, exploreCss } from './utils'

import CategoryList from 'design-systems/Organisms/List/CategoryList'
import SpotLightCard from 'design-systems/Molecules/Cards/SpotLightCard'
import DropDown from 'design-systems/Molecules/DropDown'
import SpotlightSkeleton from 'design-systems/Molecules/Skeleton/SpotlightSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import { PAGE_SIZE, formatLike } from 'utils'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'
import Typography from 'design-systems/Atoms/Typography'
import { IconHeart } from 'design-systems/Atoms/Icons'
import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'

interface SkeletonExploreCardProps {
  noOfSkeleton?: number
}
export const ExploreCardSkeltonList: React.FC<SkeletonExploreCardProps> = ({ noOfSkeleton }) => {
  return (
    <>
      {Array(noOfSkeleton ?? PAGE_SIZE)
        .fill('')
        .map((_: string, i: number) => (
          <SpotlightSkeleton className="card-shadow w-full md:h-[353px] xl:w-[332px]" key={i} />
        ))}
    </>
  )
}

const ExplorePageTemplate: React.FC<ExplorePageTemplateProps> = ({
  isLoadingExploreBlockChain,
  exploreBlockChain,
  category,
  isLoadingExplore,
  isLoadingExploreCategory,
  exploreData,
  hasMoreExplore,
  isFetchingNextExplore,
  fetchMoreExplore,
  onChangeFilter,
}) => {
  return (
    <div className="container mb-[72px]">
      <div className={exploreCss}>
        <div className="!h-[48px] w-[121px] md:w-full xlg:!w-[121px] xl:mr-[189px]">
          {isLoadingExploreBlockChain ? (
            <ExploreCategorySkeleton className="h-[48px] w-full md:w-[121px]" />
          ) : (
            <DropDown
              className="z-20"
              data={exploreBlockChain}
              defaultValue={exploreBlockChain[3]}
              hoverDropdown={false}
              onChange={chain => onChangeFilter({ blockChainId: chain.id })}
            />
          )}
        </div>
        <div className="hidden flex-col xlg:block">
          {isLoadingExploreCategory ? (
            <ExploreCategorySkeleton className="h-[48px] w-full md:w-[737px]" />
          ) : (
            <CategoryList
              categories={category}
              fill={true}
              onClick={category => onChangeFilter({ categoryId: category.id })}
            />
          )}
        </div>
        <div className="!h-[48px] w-[118px] justify-end md:w-full xlg:w-[118px] xl:ml-[185px]">
          {isLoadingExploreBlockChain ? (
            <ExploreCategorySkeleton className="h-[48px] w-full md:w-[118px]" />
          ) : (
            <DropDown
              className="z-20"
              data={SORT_EXPLORE}
              defaultValue={{ name: 'Sort by', id: '' }}
              hoverDropdown={false}
              onChange={trending => onChangeFilter({ trending: trending.id })}
            />
          )}
        </div>
        <div className="block !h-[48px] w-[190px] md:w-full xlg:hidden xlg:w-[118px] ">
          <DropDown
            className="z-[11]"
            data={category}
            defaultValue={{ name: 'Category', id: '' }}
            onChange={category => onChangeFilter({ category: category.id })}
          />
        </div>
      </div>
      <div className="mt-[27px]">
        {isLoadingExplore || isLoadingExploreCategory ? (
          <div className="grid !gap-4 md:grid-cols-2 slg:grid-cols-3 xlg:grid-cols-4">
            <ExploreCardSkeltonList />
          </div>
        ) : exploreData ? (
          <div className="grid !gap-4 md:grid-cols-2 slg:grid-cols-3 xlg:grid-cols-4">
            {exploreData.map(({ name, nfts, likeCount }, i) => {
              return (
                <SpotLightCard
                  className="w-full"
                  collectionName={
                    <Typography className="leading-4 custom-truncate-width truncate font-Poppins text-body font-bold text-neutral-100">
                      {name}
                    </Typography>
                  }
                  key={i}
                  likes={
                    <Typography className="text-right font-Poppins text-md font-semibold leading-[145%] text-neutral-100">
                      <IconHeart className="mr-3 inline-block" fill="red" height={14} width={16} />
                      {formatLike(likeCount)}
                    </Typography>
                  }
                  nfts={nfts}
                  trendingInfo={
                    <TrendingInfo
                      className="items-end justify-end !px-0 !py-0"
                      data={[
                        {
                          Floor: `${25} ETH`,
                          Volume: `${2500 ?? 0} ETH`,
                          Sales: '2,500' || '0',
                        },
                      ]}
                      isInfoName={false}
                      name={name}
                    />
                  }
                />
              )
            })}
            {isFetchingNextExplore && <ExploreCardSkeltonList />}
          </div>
        ) : (
          <DataNotFound className="h-[321px] items-center !text-[37px]" size="h3" text="No Data Found" />
        )}
      </div>
      <ScrollTrigger
        isLoading={isFetchingNextExplore}
        onTrigger={() => !isLoadingExplore && !isFetchingNextExplore && hasMoreExplore && fetchMoreExplore?.()}
      />
    </div>
  )
}
export default ExplorePageTemplate
