/* eslint-disable react/no-children-prop */
import { useMemo, useState } from 'react'

import { CollectionSideBarFilterProps, CollectionTraits } from './interface'
import { COLLECTION_EVENT_TYPE, convertIntoStringArrayToObject, switchValueOfKey } from './utils'

import DropDown from 'design-systems/Molecules/DropDown'
import PriceCard from 'design-systems/Molecules/Cards/PriceCard'
import DropCard from 'design-systems/Molecules/DropmCard'
import { COLLECTION_QUANTITY, COLLECTION_STATUS } from 'design-systems/Templates/Collection/utils'
import ExploreCategorySkeleton from 'design-systems/Molecules/Skeleton/ExploreCategorySkeleton'
import DropDownCheckBox from 'design-systems/Molecules/DropDownCheckBox'
import DropDownSearchBarCheckBox from 'design-systems/Molecules/DropDownSearchBarCheckBox'

const CollectionSideBarFilter: React.FC<CollectionSideBarFilterProps> = ({
  isShow,
  category,
  isLoadingExploreBlockChain,
  exploreBlockChain,
  traits,
  onChangePrice,
  onCheckClick,
  onClickEvent,
  className,
}) => {
  const [properties, setProperties] = useState<CollectionTraits>({})
  useMemo(() => {
    setProperties(traits)
  }, [traits])

  const onSearchCategory = (search: string) => {
    const matchingKeys = Object.keys(traits).filter(key => key.includes(search))

    if (matchingKeys.length > 0) {
      const filteredData: CollectionTraits = {}
      for (const key of matchingKeys) {
        filteredData[key] = traits[key]
      }
      setProperties(filteredData)
    } else {
      setProperties(traits) // No matching keys found
    }
  }
  return (
    <div className={` ${isShow ? 'flex' : 'hidden'} flex-col gap-[13px] slg:w-[19%] ${className}`}>
      {category.id === 'activity' ? (
        <DropDownCheckBox
          className="relative mt-3"
          data={COLLECTION_EVENT_TYPE}
          defaultValue={{ name: 'Event type', id: '' }}
          hoverDropdown={false}
          isCheckBox={true}
          onChange={onClickEvent}
        />
      ) : (
        <>
          <DropDown
            className="relative"
            data={COLLECTION_STATUS}
            defaultValue={{ name: 'Status', id: '' }}
            hoverDropdown={false}
            isRatio={true}
            onChange={() => {}}
          />
          <DropCard children={<PriceCard onChangePrice={onChangePrice} />} className="relative mt-1" title="Price" />
          <DropDown
            className="relative"
            data={COLLECTION_QUANTITY}
            defaultValue={{ name: 'Quantity', id: '' }}
            hoverDropdown={false}
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
                  defaultValue={switchValueOfKey(exploreBlockChain)?.[3]}
                  hoverDropdown={false}
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
      <DropCard
        children={Object.keys({ ...properties }).map((property, i) => {
          const propertyData = convertIntoStringArrayToObject({ ...properties }[property])
          return (
            <DropDownSearchBarCheckBox
              className="relative mt-2"
              data={propertyData}
              defaultValue={{ name: property, id: '' }}
              hoverDropdown={false}
              isCheckBox={true}
              key={i}
              onChange={onCheckClick}
            />
          )
        })}
        className="relative mt-1"
        isSearch={true}
        title="Properties"
        onSearchCategory={onSearchCategory}
      />
    </div>
  )
}
export default CollectionSideBarFilter
