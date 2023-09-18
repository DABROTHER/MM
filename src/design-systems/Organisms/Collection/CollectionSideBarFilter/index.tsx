/* eslint-disable react/no-children-prop */
import { useState } from 'react'

import { CollectionSideBarFilterProps } from './interface'
import { COLLECTION_EVENT_TYPE, convertIntoStringArrayToObject, switchValueOfKey } from './utils'

import DropDown from 'design-systems/Molecules/DropDown'
import PriceCard from 'design-systems/Molecules/Cards/PriceCard'
import DropCard from 'design-systems/Molecules/DropmCard'
import { COLLECTION_QUANTITY, COLLECTION_STATUS } from 'design-systems/Templates/Collection/utils'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'
import DropDownCheckBox from 'design-systems/Molecules/DropDownCheckBox'

const CollectionSideBarFilter: React.FC<CollectionSideBarFilterProps> = ({
  isShow,
  category,
  isLoadingExploreBlockChain,
  exploreBlockChain,
  traits,
  onChangePrice,
  onCheckClick,
}) => {
  return (
    <div className={` ${isShow ? 'flex' : 'hidden'} flex w-[40%] flex-col gap-4 smd:w-[35%] md:w-[20%]`}>
      {category.id === 'activity' ? (
        <DropDown
          className="relative"
          data={COLLECTION_EVENT_TYPE}
          defaultValue={{ name: 'Event type', id: '' }}
          isRatio={true}
          onChange={() => {}}
        />
      ) : (
        <>
          <DropDown
            className="relative"
            data={COLLECTION_STATUS}
            defaultValue={{ name: 'Status', id: '' }}
            isRatio={true}
            onChange={() => {}}
          />
          <DropCard children={<PriceCard onChangePrice={onChangePrice} />} className="relative mt-1" title="Price" />
          <DropDown
            className="relative"
            data={COLLECTION_QUANTITY}
            defaultValue={{ name: 'Quantity', id: '' }}
            isRatio={true}
            onChange={() => {}}
          />
          <DropCard
            children={
              isLoadingExploreBlockChain ? (
                <ExploreCategorySkeleton className="h-[48px] w-full md:w-[121px]" />
              ) : (
                <DropDown
                  className="relative mt-3"
                  data={switchValueOfKey(exploreBlockChain && exploreBlockChain)}
                  defaultValue={switchValueOfKey(exploreBlockChain)?.[0]}
                  isRatio={true}
                  onChange={() => {}}
                />
              )
            }
            className="relative mt-1"
            title="Currency"
          />
        </>
      )}

      {/* <DropDown
        children={
          <div className=" relative mt-[9px] flex h-12 w-full flex-col rounded-sm border border-lightGray bg-transparent px-2.5 focus-within:border-black hover:border-black">
            <div className=" top-0 flex h-12 w-full flex-row items-center gap-2 rounded-lg border-none bg-none text-base outline-none transition duration-200 ease-in">
              <SearchIcon />
              <input
                className="w-full font-Poppins text-[#454545]  outline-none placeholder:w-auto placeholder:text-md placeholder:font-normal placeholder:text-lightGray"
                placeholder="Search by property"
                type="text"
              />
            </div>
          </div>
        }
        className="relative"
        data={COLLECTION_PROPERTIES}
        defaultValue={{ name: 'Properties', id: '' }}
        isRatio={true}
        onChange={() => {}}
      /> */}

      <DropCard
        children={Object.keys({ ...traits }).map((property, i) => {
          const propertyData = convertIntoStringArrayToObject({ ...traits }[property])
          return (
            <DropDownCheckBox
              className="relative mt-3"
              data={propertyData}
              defaultValue={{ name: property, id: '' }}
              isCheckBox={true}
              key={i}
              onChange={onCheckClick}
            />
          )
        })}
        className="relative mt-1"
        title="Properties"
      />
    </div>
  )
}
export default CollectionSideBarFilter
