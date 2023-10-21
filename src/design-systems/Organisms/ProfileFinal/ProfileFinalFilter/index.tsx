import { ProfileFinalFilterProps } from './interface'

import { IconFilter } from 'design-systems/Atoms/Icons'
import DropDown from 'design-systems/Molecules/DropDown'
import Tab from 'design-systems/Atoms/Tabs'
import { LinkCommStyle } from 'design-systems/Organisms/Footer/utils'
import { COLLECTION_PROPERTIES } from 'design-systems/Templates/Collection/utils'
import CommonInput from 'design-systems/Molecules/CommonInput'
import { ALLTIME_CATEGORY, PROFILEFINAL_TAB } from 'design-systems/Templates/ProfileFinalTemplate/utils'

const ProfileFinalFilter: React.FC<ProfileFinalFilterProps> = ({
  onClick,
  onDesign,
  category,
  onSortByPrice,
  onSearch,
  type,
}) => {
  return (
    <div className="mt-[38px] flex flex-col">
      <div
        className={`flex flex-row items-center gap-4 ${type && 'relative justify-end pb-[64px] lmd:pb-0'}  ${
          category?.id === 'data' && 'justify-between'
        }`}
      >
        <div
          className={`${LinkCommStyle} cursor-pointer ${type === 'favorite' && 'pointer-events-none opacity-50'}`}
          onClick={onClick}
        >
          <IconFilter />
        </div>
        <CommonInput
          className={`${type === 'collected' ? 'w-[90%] lmd:w-[72%]' : 'w-[90%] lmd:w-[80%]'}`}
          placeholder="Search by name or trait"
          onChange={onSearch}
        />
        {category?.id === 'data' ? (
          <div className="!h-[48px] w-[132px]">
            <DropDown
              className="z-20"
              data={COLLECTION_PROPERTIES}
              defaultValue={COLLECTION_PROPERTIES[0]}
              onChange={() => {}}
            />
          </div>
        ) : (
          <>
            <div className={`${type && 'absolute bottom-0 right-0 lmd:static'} !h-[48px] w-[202px]`}>
              <DropDown
                className="z-20 !w-[202px]"
                data={ALLTIME_CATEGORY}
                defaultValue={ALLTIME_CATEGORY[0]}
                type={type}
                onChange={onSortByPrice}
              />
            </div>
            {type === 'collected' && (
              <div className="hidden !w-[96px] lmd:block">
                <Tab
                  className="h-[48px] !w-[96px]"
                  defaultTab={PROFILEFINAL_TAB?.[0].value}
                  setActive={onDesign}
                  tabItemClass="profile-final-tabs-item"
                  tabItemWrp={47}
                  tabWrpWidth={141}
                  tabs={PROFILEFINAL_TAB}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ProfileFinalFilter
