import { ExplorePageTemplateProps } from './interface'
import { SORT_EXPLORE, exploreCss } from './utils'

import CategoryList from 'design-systems/Organisms/List/CategoryList'
import SpotLightCard from 'design-systems/Molecules/Cards/SpotLightCard'
import DropDown from 'design-systems/Molecules/DropDown'
import SpotlightSkeleton from 'design-systems/Molecules/Skeleton/SpotlightSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import { PAGE_SIZE } from 'utils'
import { ScrollTrigger } from 'design-systems/Molecules/ScrollTrigger'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'

export const ExploreCardSkeltonList = () => {
  return (
    <>
      {Array(PAGE_SIZE)
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
              defaultValue={{ name: 'Chains', id: '' }}
              onChange={chain => onChangeFilter({ chainId: chain.id })}
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
              onClick={category => onChangeFilter({ category: category.id })}
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
            {exploreData.map(({ name, nfts }, i) => {
              return (
                <SpotLightCard
                  className="w-full"
                  floor={'25'}
                  key={i}
                  likeNumber={1}
                  name={name}
                  nfts={nfts}
                  sales={'2,500'}
                  volume={'2500'}
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
