'use client'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useParams } from 'next/navigation'

import CollectionPageTemplate from 'design-systems/Templates/Collection'
import { useBlockchain } from 'hooks/apis/useBlockchain'
import { ResultingFilter, useCollection } from 'hooks'
import { COLLECTION_CATEGORY } from 'design-systems/Templates/Collection/utils'
import { useCollectionDetail } from 'hooks/apis/useCollectionDetail'
const initialFilter = {
  slug: '',
  tab: COLLECTION_CATEGORY[0].id,
  _id: '',
  filter: true,
  sortBy: '',
  minPrice: '',
  maxPrice: '',
  traits: {},
  search: '',
  event: [],
}

const CollectionPage: NextPage = () => {
  const [filters, setFilters] = useState<ResultingFilter>(initialFilter)
  const { collectionId } = useParams()
  const [check, setCheck] = useState<{ [key: string]: string[] }>({})
  const {
    isLoadingCollection,
    collectionData,
    hasMoreCollection,
    isFetchingNextCollection,
    fetchMoreCollection,
    isRefetching,
    isLoadingOwnersTop50,
    getOwnersTop50Async,
    isLoadingPriceVolume,
    getPriceVolumeAsync,
    isLoadingOwnerDistribution,
    getOwnerDistributionAsync,
    isLoadingPriceDistribution,
    getPriceDistributionAsync,
    totalCOunt,
  } = useCollection({ ...filters, slug: collectionId, traits: check })

  const { isLoadingExploreBlockChain, exploreBlockChain } = useBlockchain()
  const { collectionDetail, isLoadingCollectionDetail } = useCollectionDetail({ filter: true, slug: collectionId })

  const onCheckClick = (label: string, selectedValue: string) => {
    setCheck(prevCheck => {
      const updatedCheck = { ...prevCheck }

      // Toggle the label in the selectedValue array
      if (updatedCheck[selectedValue]) {
        const index = updatedCheck[selectedValue].indexOf(label)
        if (index !== -1) {
          updatedCheck[selectedValue].splice(index, 1) // Uncheck
          if (updatedCheck[selectedValue].length === 0) {
            delete updatedCheck[selectedValue] // Remove key if array is empty
          }
        } else {
          updatedCheck[selectedValue].push(label) // Check
        }
      } else {
        updatedCheck[selectedValue] = [label] // Create array and check
      }

      return updatedCheck
    })
  }
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
  const onChangeCategory = () => {
    setFilters({ ...initialFilter, slug: collectionId })
  }

  return (
    <CollectionPageTemplate
      collectionData={collectionData}
      collectionDetail={collectionDetail as CollectionDetailsData}
      exploreBlockChain={exploreBlockChain as ExploreBlock[]}
      fetchMoreCollection={fetchMoreCollection}
      getOwnerDistributionAsync={getOwnerDistributionAsync}
      getOwnersTop50Async={getOwnersTop50Async}
      getPriceDistributionAsync={getPriceDistributionAsync}
      getPriceVolumeAsync={getPriceVolumeAsync}
      hasMoreCollection={hasMoreCollection as boolean}
      isFetchingNextCollection={isFetchingNextCollection}
      isLoadingCollection={isLoadingCollection}
      isLoadingCollectionDetail={isLoadingCollectionDetail}
      isLoadingExploreBlockChain={isLoadingExploreBlockChain}
      isLoadingOwnerDistribution={isLoadingOwnerDistribution}
      isLoadingOwnersTop50={isLoadingOwnersTop50}
      isLoadingPriceDistribution={isLoadingPriceDistribution}
      isLoadingPriceVolume={isLoadingPriceVolume}
      isRefetching={isRefetching}
      totalCOunt={totalCOunt}
      onChangeCategory={onChangeCategory}
      onChangePrice={price => setFilters(pre => ({ ...pre, minPrice: String(price[0]), maxPrice: String(price[1]) }))}
      onCheckClick={onCheckClick}
      onClickEvent={onClickEvent}
      onSearch={search => setFilters(pre => ({ ...pre, search: search }))}
      onSetTab={tab => setFilters(pre => ({ ...pre, tab: tab }))}
      onSortByPrice={sort => setFilters(pre => ({ ...pre, sortBy: sort.id }))}
    />
  )
}

export default CollectionPage
