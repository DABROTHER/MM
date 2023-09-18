'use client'
import React, { useState } from 'react'

import { SORT_EXPLORE, labelClassName } from './utils'
import { collectionsDetailsProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import Input from 'design-systems/Atoms/Input'
import TextAreaInput from 'design-systems/Atoms/TextAreaInput'
import Tab from 'design-systems/Atoms/Tabs'
import { yesNoToggle } from 'design-systems/Atoms/Tabs/utils'
import DropDown from 'design-systems/Molecules/DropDown'
import Button from 'design-systems/Atoms/Button'

const CollectionsDetails: React.FC<collectionsDetailsProps> = ({ exploreBlockChain, onChangeFilter }) => {
  const [active, setActive] = useState<string>('No')

  return (
    <div className="container mb-[72px]">
      <div className="flex justify-center text-left">
        <div className="mb-0 mt-[25px] w-full">
          <Typography className="text-left font-Poppins text-subtitle font-semibold leading-[145%] text-black md:text-[30px]">
            Collection Details
          </Typography>

          <div className="mt-4 flex w-full items-start gap-8 smd:w-[71.13%] md:mt-[14px]">
            {/*left */}
            <div className="w-full flex-1">
              <Input className="mb-[10px] smd:mb-6" label="Choose Name" placeholder="Item name..." />

              <TextAreaInput
                className="h-[160px] w-[99.9%] md:h-[290px]"
                rows={5}
                label="Collection Description *"
                placeholder="Enter description..."
              />

              <Input
                className="mb-[10px] mt-[10px] smd:mb-6 smd:mt-7"
                label="URL *"
                variant="secondary"
                placeholder="https://modernmuseum.io/collection/%20FEDASg"
              />

              <div className="mt-[10px] smd:mt-[28px]">
                <Typography className={labelClassName}>Category *</Typography>
                <DropDown
                  className="relative top-0 z-20 w-[99.8%] py-[11px]"
                  hoverDropdown={false}
                  data={[]}
                  defaultValue={{ name: 'Select a category', id: '' }}
                  onChange={trending => onChangeFilter({ trending: trending.id })}
                />
              </div>

              <div className="mt-[10px] smd:mt-[28px]">
                <Typography className={labelClassName}>Blockchain *</Typography>
                <DropDown
                  className="relative z-20 h-full w-[99.8%] py-[11px]"
                  hoverDropdown={false}
                  data={exploreBlockChain}
                  defaultValue={{ name: 'Chains', id: '' }}
                  onChange={chain => onChangeFilter({ chainId: chain.id })}
                />
              </div>

              <div className="mt-[10px] smd:mt-[28px]">
                <Typography className={labelClassName}>Payment tokens *</Typography>
                <DropDown
                  className="relative z-20 w-[99.8%] py-[11px]"
                  hoverDropdown={false}
                  data={[]}
                  defaultValue={{ name: 'Add tokens', id: '' }}
                  onChange={chain => onChangeFilter({ chainId: chain.id })}
                />
              </div>

              <div className="mt-3 smd:mt-[27px]">
                <Typography className="mb-[2px] text-base font-semibold smd:mb-[10px]">
                  Hide expilcit content *
                </Typography>

                <Tab
                  active={active}
                  defaultTab={yesNoToggle?.[1].value}
                  setActive={setActive}
                  tabItemClass="tabs-marketplace-item"
                  tabItemWrp={48}
                  tabWrpWidth={96}
                  tabs={yesNoToggle}
                />
              </div>
              <Button className="mt-7 font-Poppins text-base font-semibold text-black">Create</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsDetails
