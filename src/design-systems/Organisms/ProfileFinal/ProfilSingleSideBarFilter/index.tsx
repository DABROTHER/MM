/* eslint-disable react/no-children-prop */

import React, { useMemo, useState } from 'react'

import { ProfilSingleSideBarFilterProps } from './interface'

import DropDown from 'design-systems/Molecules/DropDown'
import {
  COLLECTION_EVENT_TYPE,
  switchValueOfKey,
} from 'design-systems/Organisms/Collection/CollectionSideBarFilter/utils'
import { COLLECTION_QUANTITY } from 'design-systems/Templates/Collection/utils'
import DropCard from 'design-systems/Molecules/DropmCard'
import PriceCard from 'design-systems/Molecules/Cards/PriceCard'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'
import { CollectionCollectedItem } from 'api-services/interfaces/profileCollected'
import DropDownCheckBox from 'design-systems/Molecules/DropDownCheckBox'
import { ResultingFilterProfileFinal } from 'hooks/apis/useProfileFinal'

const ProfilSingleSideBarFilter: React.FC<ProfilSingleSideBarFilterProps> = ({
  isShow,
  category,
  isLoadingExploreBlockChain,
  exploreBlockChain,
  onChangePrice,
  CollectedTabData,
  onChangeFilter,
  setFilters,
  onClickEvent,
}) => {
  const [collectedSideTab, setCollectedSideTab] = useState<CollectionCollectedItem>(CollectedTabData)

  useMemo(() => {
    setCollectedSideTab(CollectedTabData)
  }, [CollectedTabData])

  const search = (searchValue: string) => {
    const trimmedSearchValue = searchValue.trim()

    if (trimmedSearchValue) {
      const lowercaseSearchValue = trimmedSearchValue.toLowerCase()

      const filteredData = collectedSideTab.filter(item => item.name.toLowerCase().includes(lowercaseSearchValue))

      setCollectedSideTab(filteredData)
    } else {
      setCollectedSideTab(CollectedTabData)
    }
  }

  const handleChecked = (e: any) => {
    setFilters((prevState: ResultingFilterProfileFinal) => ({
      ...prevState, // Copy the previous state
      quantity: e.value, // Update the specific key
    }))
  }

  const handleChangeChain = (e: ExploreBlock) => {
    setFilters((prevState: ResultingFilterProfileFinal) => ({
      ...prevState, // Copy the previous state
      blockChainId: e.id, // Update the specific key
    }))
  }

  return (
    <div
      className={` ${isShow && category !== 'favorite' ? 'flex' : 'hidden'} flex w-[40%] flex-col gap-4 ${
        category == 'activity' ? 'w-full md:w-[326px]' : 'w-full md:w-[261px]'
      } `}
    >
      {(category === 'activity' || category === 'collected' || category === 'created') && (
        <DropCard
          CollectionData={collectedSideTab}
          category={category}
          className="relative mt-1 !w-[262px]"
          isSearchProfile={true}
          setFilters={setFilters}
          sortBy={true}
          title="Collection"
          onChangeFilter={chain => onChangeFilter({ chainId: chain.id })}
          onSearch={search}
        />
      )}
      {category === 'activity' && (
        <DropDownCheckBox
          className="relative mt-3 !w-[262px]"
          data={COLLECTION_EVENT_TYPE}
          defaultValue={{ name: 'Event type', id: '' }}
          hoverDropdown={false}
          isCheckBox={true}
          onChange={onClickEvent}
        />
      )}
      {category === 'created' && (
        <DropCard children={<PriceCard onChangePrice={onChangePrice} />} className="relative mt-1" title="Price" />
      )}
      {category === 'created' && (
        <DropDown
          className="relative"
          data={COLLECTION_QUANTITY}
          defaultValue={{ name: 'Quantity', id: '' }}
          hoverDropdown={false}
          isRatio={true}
          onChange={handleChecked}
        />
      )}
      {(category === 'activity' || category === 'created') && (
        <DropCard
          children={
            isLoadingExploreBlockChain ? (
              <ExploreCategorySkeleton className="h-[48px] w-full md:w-[121px]" />
            ) : (
              <DropDown
                className="relative mt-3"
                data={switchValueOfKey(exploreBlockChain && exploreBlockChain)}
                defaultValue={switchValueOfKey(exploreBlockChain)?.[0]}
                hoverDropdown={false}
                isRatio={true}
                onChange={handleChangeChain}
              />
            )
          }
          className="relative mt-1"
          isHover={false}
          title="Currency"
        />
      )}
    </div>
  )
}

export default ProfilSingleSideBarFilter
