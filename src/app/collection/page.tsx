'use client'
import type { NextPage } from 'next'
import { useMemo, useState } from 'react'

import CollectionPageTemplate from 'design-systems/Templates/Collection'
import { useBlockchain } from 'hooks/apis/useBlockchain'
import { ResultingFilter, useCollection } from 'hooks'
const initialFilter = {
  slug: 'taho-wallet',
  tab: 'item',
  _id: '64c0b5986dcb741ae202cc77',
  filter: true,
  sortBy: '',
  minPrice: '',
  maxPrice: '',
  traits: {},
  search: '',
}

const CollectionPage: NextPage = () => {
  const [filters, setFilters] = useState<ResultingFilter>(initialFilter)
  const [check, setCheck] = useState<{ [key: string]: string[] }>({})
  const {
    isLoadingCollection,
    collectionData,
    hasMoreCollection,
    isFetchingNextCollection,
    fetchMoreCollection,
    isRefetching,
    collectionDetail,
    isLoadingCollectionDetail,
    isLoadingOwnersTop50,
    getOwnersTop50Async,
    isLoadingPriceVolume,
    getPriceVolumeAsync,
    isLoadingOwnerDistribution,
    getOwnerDistributionAsync,
    isLoadingPriceDistribution,
    getPriceDistributionAsync,
    totalCOunt,
  } = useCollection(filters)

  const { isLoadingExploreBlockChain, exploreBlockChain } = useBlockchain()

  useMemo(() => {
    setFilters(pre => ({ ...pre, traits: check }))
  }, [check])
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
      onChangePrice={price => setFilters(pre => ({ ...pre, minPrice: String(price[0]), maxPrice: String(price[1]) }))}
      onCheckClick={onCheckClick}
      onSetTab={tab => setFilters(pre => ({ ...pre, tab: tab }))}
      onSortByPrice={sort => setFilters(pre => ({ ...pre, sortBy: sort.id }))}
      onSearch={search => setFilters(pre => ({ ...pre, search: search }))}
    />
  )
}

export default CollectionPage
