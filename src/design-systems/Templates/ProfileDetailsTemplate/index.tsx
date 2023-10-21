'use client'
/* eslint-disable react/no-children-prop */

import React, { useState } from 'react'

import { ProfileDetailsProps } from './interface'
import {
  LaunchpadCss,
  categoryLabel,
  profileCardData,
  profileCategory,
  questions,
  typoGraphyHeading,
  typoGraphyPara,
} from './utils'

import { IconTwitter } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import Input from 'design-systems/Atoms/Input'
import TextAreaInput from 'design-systems/Atoms/TextAreaInput'
import Button from 'design-systems/Atoms/Button'
import DataNotFound from 'design-systems/Molecules/DataNotFound'
import { yesNoToggle } from 'design-systems/Atoms/Tabs/utils'
import Card from 'design-systems/Molecules/Cards/Card'
import FeaturedInfo from 'design-systems/Molecules/CardsInfo/FeaturedInfo'
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton'
import SkeletonFeaturedInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonFeaturedInfo'
import Checkbox from 'design-systems/Atoms/Checkbox'
import { items } from 'design-systems/Atoms/Checkbox/utils'
import UnitInput from 'design-systems/Atoms/UnitInput'
import Tab from 'design-systems/Atoms/Tabs'
import AccordionProfileDetails from 'design-systems/Molecules/AccordionProfileDetails'
import UploadImage from 'design-systems/Atoms/UploadImage'

const LaunchpadCardSkeltonList = () => {
  return (
    <>
      {Array(10)
        .fill('')
        .map((_: string, i: number) => (
          <CardSkeleton
            cardClassName="!h-[256px]"
            children={<SkeletonFeaturedInfo className="bg-neutral-800" variant="bottom" />}
            className="card-shadow h-[378px] w-full"
            key={i}
            variant="all"
          />
        ))}
    </>
  )
}

const ProfileDetailsTemplate: React.FC<ProfileDetailsProps> = ({
  loading,
  onSetCategory,
  categoryType = 'Profile',
  trendingCardInfo,
  active,
  setActive,
}) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})

  const handleChange = (itemId: string) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId], // Toggle the checkbox state
    }))
  }

  return (
    <div className="container mb-[72px]">
      <div className="mt-6">
        <Typography className="text-left font-Poppins text-xl font-semibold text-black">
          {categoryLabel(categoryType)}
        </Typography>
        <div className="mt-4">
          <div className="flex w-full border-b-2 border-grayBorder">
            <div>
              <CategoryList categories={profileCategory} onClick={e => onSetCategory(e.id as string)} />
            </div>
          </div>

          {/* profile bio wrapper */}

          {categoryType === 'Profile' && (
            <div>
              <div className="flex flex-col gap-3 smd:items-baseline smd:justify-between lg:flex-row">
                {/* left container */}
                <div className="smd:w-[32%]">
                  <Typography className={`mt-7 ${typoGraphyHeading}`}>Profile picture</Typography>

                  <div className="mt-2 flex h-[112px] w-[112px] cursor-pointer items-center justify-center rounded-sm border border-solid border-lightGray lmd:h-[160px] lmd:w-[160px]">
                    <UploadImage
                      classNameImage="mx-auto w-[112px] h-[112px] lmd:h-[160px] lmd:w-[160px] rounded-sm object-cover"
                      id="profileImg"
                    />
                  </div>
                  <Typography className={`mt-3 smd:mt-7 ${typoGraphyHeading}`}>Profile banner</Typography>

                  <div className="mt-2 flex h-[82px] max-h-[83px] w-full items-center justify-center rounded-sm border border-solid border-lightGray smd:h-[80px] smd:w-[322px]">
                    <UploadImage
                      classNameImage="mx-auto h-[80px] w-[320px] rounded-sm object-cover"
                      id="profileBannImg"
                    />
                  </div>
                </div>
                {/* right container */}
                <div className="w-full smd:w-[68%]">
                  <Input label="Username" placeholder="Enter new username" />
                  <div className="mt-[10px]">
                    <Typography className={`mb-[7px] mt-3 ${typoGraphyHeading}`}>Profile bio</Typography>
                    <TextAreaInput className="h-[118px]" placeholder="Enter bio..." />
                  </div>
                </div>
              </div>

              <Typography className={`mt-7 smd:mt-[35px] ${typoGraphyHeading}`}>Social Media</Typography>
              <div className="mt-0 flex justify-between smd:mt-[25px]">
                <div className="flex items-center justify-center gap-3">
                  <IconTwitter />
                  <Typography className={typoGraphyHeading}>Twitter</Typography>
                </div>

                <Button className="pl-[14.5px] pr-[14.5px]">
                  <Typography className={`leading-[134%] ${typoGraphyHeading}`}>Connect</Typography>
                </Button>
              </div>

              <Input className="mt-4 smd:mt-7" label="Your links" placeholder="www.sample.com" />

              <Input
                className="mt-3"
                label="Your wallet address "
                placeholder="0xdfhgserdfh6e9h9ha9ev2bq24cb586b27cb947pbv68e"
              />

              <Button className="mt-10 pl-[14.2px] pr-[14.2px] smd:mt-[30px] smd:pl-[14.3px] smd:pr-[14.3px]">
                <Typography className="font-Poppins text-base font-semibold leading-[135%] text-black smd:leading-[134%]">
                  Save changes
                </Typography>
              </Button>
            </div>
          )}

          {categoryType === 'Featured items' && (
            <div className="mt-8">
              {loading ? (
                <div className={LaunchpadCss}>
                  <LaunchpadCardSkeltonList />
                </div>
              ) : profileCardData?.length ? (
                <>
                  <div className={LaunchpadCss}>
                    {profileCardData?.map((data, i) => (
                      <Card
                        alt={data.name}
                        // eslint-disable-next-line react/no-children-prop
                        children={
                          <FeaturedInfo
                            className="!pt-3 md:!pt-[14px]"
                            data={trendingCardInfo}
                            id={data.id}
                            name={data.name}
                          />
                        }
                        // className="!mt-0 h-[276px] w-full sm:!h-[276px] sm:!w-[191px] md:!h-[378px] md:!w-[262px] lmd:!h-[378px] xl:!w-[262px]"
                        className="!mt-0 h-[276px] !w-full sm:!h-[276px] sm:!w-[191px] smd:!w-full md:!h-[378px] lmd:!h-[378px] xl:!w-[262px]"
                        direction="y-direction"
                        fileClassName="!h-[182px] md:!h-[262px] object-cover"
                        key={i}
                        src={data.img}
                        variant="top"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <DataNotFound
                  className="h-[321px] items-center font-Poppins !text-[30px] font-semibold text-black"
                  size="h3"
                  text="No Items To Display"
                />
              )}
            </div>
          )}

          {categoryType === 'Notifications' && (
            <div className="mt-[7px]">
              {items.map((data, i) => (
                <div className="flex flex-col" key={i}>
                  <Checkbox
                    checked={checkedItems[data.id] || (data.id !== 'item-sold' && data.id !== 'owned-item-updates')}
                    className="mt-8 smd:mt-[30px]"
                    label={data.label}
                    onChange={() => handleChange(data.id)}
                  />
                </div>
              ))}

              <Typography className={`mt-7 smd:mt-8 ${typoGraphyHeading}`}>Minimum bid threshold</Typography>

              <Typography className={`mt-1 ${typoGraphyPara}`}>
                Lorem ipsum dolor sit amet consectetur. Aliquet mi sodales nec varius sit a tortor quam tortor, euismod
                nisl ultricies.
              </Typography>
              <div className="mt-[10px] w-[150px] smd:mt-3">
                <UnitInput inputClassName="w-[60%]" type="number" />
              </div>
              <Button className={`mt-8 ${typoGraphyHeading}`}>Save changes</Button>
            </div>
          )}

          {categoryType === 'Offers' && (
            <div className="mt-[30px] smd:mt-7">
              <Typography className={typoGraphyHeading}>Offer Protection</Typography>
              <Typography className={`mt-1  ${typoGraphyPara}`}>
                Lorem ipsum dolor sit amet consectetur. Ut rhoncus magna dignissim.
              </Typography>
              <div className="mt-3 smd:mt-4">
                <Tab
                  active={active}
                  defaultTab={yesNoToggle?.[0].value}
                  setActive={setActive}
                  tabItemClass="tabs-marketplace-item"
                  tabItemWrp={48}
                  tabWrpWidth={96}
                  tabs={yesNoToggle}
                />
              </div>

              <div className="mt-4 border-b-2 border-lightGray smd:mt-[30px]"></div>

              <Typography className={`mt-[10px] smd:mt-7 ${typoGraphyHeading}`}>Set minimum offer</Typography>
              <Typography className={`mt-[2px] ${typoGraphyPara}`}>
                Lorem ipsum dolor sit amet consectetur. Ut rhoncus magna dignissim.
              </Typography>
              <div className="mt-3 w-full md:w-[496px]">
                <UnitInput inputClassName="w-[25%] smd:w-[22%] smd:w-[18%]" />
              </div>

              <div className="mt-4 smd:mt-8">
                <div className="custom-focus font-poppins flex h-[218px] w-full resize-none flex-col items-center justify-center rounded-sm border border-solid border-lightGray bg-white p-[13px] font-Poppins text-md font-medium leading-[145%] text-black outline-none focus-within:border-black hover:border-black focus:outline-none">
                  <Typography className="font-Poppins text-base font-semibold text-black">
                    No collection offers to manage
                  </Typography>
                  <Typography className="mt-[5px] font-Poppins text-md font-semibold text-black">
                    Lorem ipsum dolor sit amet consectetur. Ut rhoncus magna dignissim sollicitudin mi faucibus eu
                    convallis.
                  </Typography>
                </div>
              </div>

              <Button className="mt-8 pl-[15px] pr-[15px] smd:mt-4">
                <Typography className="font-Poppins text-base font-semibold leading-[134%] text-black smd:leading-[140%]">
                  View my offers
                </Typography>
              </Button>
            </div>
          )}

          {categoryType === 'Support' && (
            <div className="mt-8 smd:mt-8">
              {questions.map((question, index) => {
                return <AccordionProfileDetails key={index} label={question} />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileDetailsTemplate
