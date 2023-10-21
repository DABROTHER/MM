'use client'
import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'

import ProfileFinalTemplate from 'design-systems/Templates/ProfileFinalTemplate'
import { useBlockchain } from 'hooks/apis/useBlockchain'
import { ResultingFilterProfileFinal, useProfileFinal } from 'hooks/apis/useProfileFinal'
import { useCollectionDetail } from 'hooks/apis/useCollectionDetail'
import { CollectionDetails } from 'interfaces'

const initialFilterFinal = {
  tab: 'collected',
  walletAddress: '0x3f2671157ca7a6eafcd36fbb7adee2b58678b4gc10',
  filter: true,
  sortBy: '',
  minPrice: '',
  maxPrice: '',
  traits: {},
  search: '',
  event: [],
  time: 'alltime',
  trending: true,
  quantity: '',
  blockChainId: '',
}

const initialFilter = {
  filter: true,
  sortBy: '',
  minPrice: '',
  maxPrice: '',
  traits: {},
  search: '',
  event: [],
  tab: 'collected',
  slug: '',
}

const ProfileFinal: React.FC = () => {
  const [filters, setFilters] = useState<ResultingFilterProfileFinal>(initialFilterFinal)
  const [filtersDetail, setFiltersDetail] = useState<CollectionDetails>(initialFilter)

  const { isLoadingExploreBlockChain, exploreBlockChain } = useBlockchain()

  const {
    ProfileFinalData,
    isLoadingProfile,
    hasMoreprofileCollection,
    isFetchingNextCollection,
    fetchMoreProfileCollection,
    ProfileCreatData,
    isLoadingCollectedTab,
    CollectedTabData,
  } = useProfileFinal(filters)

  const { collectionDetail, isLoadingCollectionDetail } = useCollectionDetail(filtersDetail)

  const onClickEvent = (item: string) => {
    setFilters(prevState => {
      const updatedEvent = [...prevState.event] // Create a copy of the event array
      const itemIndex = updatedEvent.indexOf(item) // Find the index of the item

      if (itemIndex === -1) {
        // If the item is not in the array, add it
        updatedEvent.push(item)
      } else {
        // If the item is in the array, remove it
        updatedEvent.splice(itemIndex, 1)
      }

      // Create a new filters object with the updated event array
      return { ...prevState, event: updatedEvent }
    })
  }

  const { profileId } = useParams()
  useMemo(() => {
    setFilters(pre => ({ ...pre, slug: profileId }))
    setFiltersDetail(pre => ({ ...pre, slug: profileId }))
  }, [profileId])

  return (
    <div>
      <ProfileFinalTemplate
        CollectedTabData={CollectedTabData}
        ProfileCreatData={ProfileCreatData}
        ProfileFinalData={ProfileFinalData}
        collectionDetail={collectionDetail as CollectionDetailsData}
        exploreBlockChain={exploreBlockChain as ExploreBlock[]}
        fetchMoreCollection={fetchMoreProfileCollection}
        filters={filters}
        hasMoreCollection={hasMoreprofileCollection as boolean}
        isFetchingNextCollection={isFetchingNextCollection}
        isLoadingCollectedTab={isLoadingCollectedTab}
        isLoadingCollection={isLoadingProfile}
        isLoadingCollectionDetail={isLoadingCollectionDetail}
        isLoadingExploreBlockChain={isLoadingExploreBlockChain}
        isRefetching={isFetchingNextCollection}
        setFilters={setFilters}
        onChangeFilter={filter => setFilters(pre => ({ ...pre, ...filter }))}
        onChangePrice={price => setFilters(pre => ({ ...pre, minPrice: String(price[0]), maxPrice: String(price[1]) }))}
        onClickEvent={onClickEvent}
        onSearch={search => setFilters(pre => ({ ...pre, search }))}
        onSetTab={tab => setFilters(pre => ({ ...pre, tab: tab }))}
        onSortByPrice={sort => setFilters(pre => ({ ...pre, sortBy: sort.id }))}
      />
    </div>
  )
}

export default ProfileFinal
