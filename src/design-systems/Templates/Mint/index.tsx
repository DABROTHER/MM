'use client'
/* eslint-disable react/no-children-prop */

import React, { useState } from 'react'
import Image from 'next/image'

import { ExploreChildrenData } from '../Collection/utils'
import { questions } from '../ProfileDetailsTemplate/utils'

import { MintTemplateProps } from './interface'
import { artistData, mintCategory, mintSocialData } from './utils'

import Typography from 'design-systems/Atoms/Typography'
// import Image from 'design-systems/Atoms/Image'
import MintSmallCardImg from 'assets/images/mintSmallCardImg.png'
import MintBanner from 'assets/images/mintBanner.png'
import MintCardImg from 'assets/images/mintCardImg.png'
import { DropDownIcon, IconArrowDownBlack, IconCheck } from 'design-systems/Atoms/Icons'
import BannerCard from 'design-systems/Molecules/Cards/BannerCard'
import { LinkCommStyle } from 'design-systems/Organisms/Footer/utils'
import MintBannerInfo from 'design-systems/Molecules/CardsInfo/MintBannerInfo'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import MintCard from 'design-systems/Organisms/MintCard'
import Button from 'design-systems/Atoms/Button'
import Card from 'design-systems/Molecules/Cards/Card'
import MintCardInfo from 'design-systems/Molecules/CardsInfo/MintCardInfo'
import AccordionProfileDetails from 'design-systems/Molecules/AccordionProfileDetails'
import ArtistCardInfo from 'design-systems/Molecules/CardsInfo/ArtistCardInfo'
import LaunchPadBannerInfo from 'design-systems/Molecules/CardsInfo/LaunchPadBannerInfo'
import LaunchpadBannerSkeleton from 'design-systems/Molecules/Skeleton/LaunchpadBannerSkeleton'
import DataNotFound from 'design-systems/Molecules/DataNotFound'

const MintTemplate: React.FC<MintTemplateProps> = ({
  categoryType,
  onSetCategory,
  isLoadingLaunchpadBanner,
  launchpadBanner,
  onChangeBanner,
  defaultBannerSrc,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container mb-12 lmd:mb-[72px]">
      <div className="mt-8">
        <BannerCard
          alt="banner"
          children={
            <MintBannerInfo
              ExploreChildrenData={ExploreChildrenData}
              categoryType={categoryType}
              iconClassName={`${LinkCommStyle} bg-neutral-700 border-0`}
              stroke="#9a9a9a"
              type="10h 15m 10s"
            />
          }
          className="h-[245px] w-full max-w-[1376px] opacity-100 lmd:!h-[304px] xl:!w-[1376px]"
          direction="z-direction"
          fileClassName="max-h-[304px] h-full w-full max-w-[1376px] object-contain opacity-100"
          src={MintBanner}
          // eslint-disable-next-line react/no-children-prop
        />

        <div className="mt-4 flex w-full border-b-2 border-grayBorder">
          <CategoryList categories={mintCategory} onClick={e => onSetCategory(e.id as string)} />
        </div>

        {/* mint tab container */}
        {categoryType === 'Mint' && (
          <div>
            <div className="flex flex-col justify-between gap-1 lmd:flex-row lmd:gap-16 xl:items-center">
              {/* left container */}
              <div className="mt-[18px] w-full lmd:w-[49%]">
                <div className="flex items-center">
                  <Typography className="font-Poppins text-subtitle font-semibold text-black smd:text-[30px]">
                    Gutter Cat Gang
                  </Typography>
                  <IconCheck className="ml-3 inline-block" height={15} width={15} />
                </div>

                <Typography className="mb-1 mt-[14px] text-left font-Poppins text-base font-bold text-black smd:mt-6">
                  About Collection
                </Typography>

                <Typography className="text-left font-Poppins text-md font-normal text-black">
                  Lorem ipsum dolor sit amet consectetur. Consectetur pulvinar quis vitae ac. Non praesent velit
                  habitasse arcu elementum scelerisque non purus sollicitudin. At amet tellus porta gravida dolor
                  facilisi gravida varius. Erat pharetra blandit ultrices nunc cursus dignissim. <br /> <br />
                  Eu nulla pharetra eleifend ultrices adipiscing nunc. Habitant volutpat cursus phasellus feugiat
                  gravida tristique lacus porttitor. Vitae mi imperdiet proin arcu sem adipiscing interdum dictumst
                  diam. Et id eu erat leo tempor mauris posuere sit sit. Feugiat sollicitudin leo velit pellentesque
                  posuere orci id.
                </Typography>
                <div className="mt-5 flex items-center gap-3" onClick={handleToggle}>
                  <Typography className="font-Poppins text-md font-normal text-black">See more</Typography>
                  <DropDownIcon
                    className={`transform ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    } transition-transform duration-300 ease-in`}
                    height={8}
                    width={16}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between lmd:mt-[89px]">
                  <Typography className="font-Poppins text-base font-bold text-black">Available items</Typography>
                  <Typography className="hidden font-Poppins text-base font-bold text-lightGray smd:block">
                    1000/1000
                  </Typography>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 smd:grid-cols-2">
                  <MintCard
                    // eslint-disable-next-line react/no-children-prop
                    children={
                      <div className="px-[14px] pb-4 pt-3">
                        <Typography className="text-left font-Poppins text-base font-bold text-black">
                          Allowlist
                        </Typography>
                        <Typography className="mt-[4px] text-left font-Poppins text-md font-bold text-black">
                          1.170 ETH
                        </Typography>
                        <Typography className="mt-[4px] text-left font-Poppins text-md font-normal text-black">
                          March 10 at 1:00 PM EST
                        </Typography>
                        <Button className="mt-6 text-left font-Poppins text-base font-bold text-black lmd:mt-[65px]">
                          Set reminder
                        </Button>
                      </div>
                    }
                    className="h-auto w-full lmd:max-w-[328px] xl:h-[217px] xl:max-h-[217px] xl:w-[328px]"
                  />

                  <MintCard
                    // eslint-disable-next-line react/no-children-prop
                    children={
                      <div className="px-[14px] py-[10px]">
                        <Typography className="mt-[5px] text-left font-Poppins text-base font-bold text-black">
                          Mint Schedule
                        </Typography>
                        <Typography className="mt-[5px] text-left font-Poppins text-md font-bold text-black">
                          Allowlist
                        </Typography>
                        <div className="flex items-center justify-between">
                          <Typography className="mt-[5px] text-left font-Poppins text-md font-normal text-black">
                            March 10 at 1:00 PM EST
                          </Typography>
                          <IconArrowDownBlack height={20} width={18} />
                        </div>
                        <Typography className="mt-[5px] text-left font-Poppins text-md font-bold text-black">
                          Public Mint
                        </Typography>
                        <div>
                          <div className="flex items-center justify-between">
                            <Typography className="mt-[5px] text-left font-Poppins text-md font-normal">
                              March 10 at 1:00 PM EST
                            </Typography>
                            <IconArrowDownBlack height={20} width={18} />
                          </div>
                        </div>
                      </div>
                    }
                    className="h-auto w-full lmd:max-w-[328px] xl:h-[217px] xl:max-h-[217px] xl:w-[328px]"
                  />
                </div>
              </div>

              {/* right container */}
              <div className="mt-[25px] hidden h-[650px] w-full flex-col lmd:flex lmd:w-[47%]">
                {isLoadingLaunchpadBanner ? (
                  <LaunchpadBannerSkeleton
                    className="relative w-full !flex-col md:h-[432px] lmd:h-[624px]"
                    flexDirection={true}
                  />
                ) : launchpadBanner?.length ? (
                  <>
                    <div className="relative !w-full xl:h-[432px] xl:max-w-[640px]">
                      <Card
                        alt={defaultBannerSrc?.name}
                        // eslint-disable-next-line react/no-children-prop
                        className="group !h-full !w-full xl:h-[432px] xl:max-w-[640px]"
                        direction={undefined}
                        fileClassName="!h-full !w-full opacity-100"
                        src={defaultBannerSrc?.img}
                        variant="all"
                      />
                    </div>
                    <div className="mt-3 flex flex-row justify-between gap-4 xl:mt-[16px]">
                      {launchpadBanner?.map((data, i) => {
                        const { collectionId } = data
                        const { name, img } = collectionId
                        return (
                          <Card
                            alt={name}
                            className="h-full w-full lmd:max-h-[203px] lmd:max-w-[203px] xl:h-[203px] xl:w-[203px]"
                            fileClassName="!h-full !w-full"
                            key={i}
                            src={img}
                            variant="all"
                            onClick={() => onChangeBanner(collectionId)}
                          />
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <DataNotFound className="h-[560px] items-center !text-[37px]" size="h3" text="No Data Found" />
                )}
              </div>
            </div>

            <div className="mt-10 hidden !h-[245px] w-full lmd:block xl:h-[304px] xl:w-[1376px]">
              <Image
                alt="banner image"
                className="!h-[245px] max-h-[304px] w-full max-w-[1376px] object-cover lmd:!h-[304px] xl:!w-[1376px]"
                height={0}
                src={MintBanner}
                width={0}
              />
            </div>
            <div className="mt-4 hidden text-left smd:block lmd:mt-20">
              <Typography className="font-Poppins text-base font-bold text-black">Welcome to collection one</Typography>
              <Typography className="font-Poppins text-md font-normal text-black">
                Lorem ipsum dolor sit amet consectetur. Consectetur pulvinar quis vitae ac. Non praesent velit habitasse
                arcu elementum scelerisque non purus sollicitudin. At amet tellus porta gravida dolor facilisi gravida
                varius. Erat pharetra blandit ultrices nunc cursus dignissim.{' '}
              </Typography>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 smd:gap-5 md:mb-32 lmd:grid-cols-2 lmd:gap-4">
              <Card
                alt=""
                // eslint-disable-next-line react/no-children-prop
                children={<MintCardInfo className="mt-[10px] md:mt-[26px]" />}
                className="group !h-full !w-full lmd:!h-[520px]"
                fileClassName="!h-[245px] md:!h-[432px] object-cover !w-[676px] opacity-100"
                src={MintCardImg}
                variant="top"
              />

              <Card
                alt=""
                // eslint-disable-next-line react/no-children-prop
                children={<MintCardInfo className="mt-[10px] md:mt-[26px]" />}
                className="group !h-full !w-full lmd:!h-[520px]"
                fileClassName="!h-[245px] md:!h-[432px] object-cover !w-[676px] opacity-100"
                src={MintCardImg}
                variant="top"
              />
            </div>
          </div>
        )}
        <div>
          {(categoryType === 'Team' || categoryType === 'FAQ') && (
            <div className="mt-6 flex items-center smd:mt-5">
              <Typography className="font-Poppins text-subtitle font-semibold text-black smd:text-[30px]">
                Gutter Cat Gang
              </Typography>
              <IconCheck className="ml-3 inline-block" height={15} width={15} />
            </div>
          )}

          {categoryType === 'Team' && (
            <div className="mt-4 smd:mt-7">
              <div className="mt-6 grid gap-4 sm:grid-cols-1 lmd:grid-cols-2 xlg:grid-cols-2">
                {artistData.map((artist, i) => {
                  return (
                    <div key={i}>
                      <MintCard
                        // eslint-disable-next-line react/no-children-prop
                        children={
                          <ArtistCardInfo
                            artistImage={artist.Image}
                            className=""
                            mintSocialData={mintSocialData}
                            name={artist.name}
                          />
                        }
                        className="h-full w-full xl:h-[257px] xl:w-[680px]"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {categoryType === 'FAQ' && (
            <div>
              <div className="mt-5 smd:mt-8">
                {questions.map((question, index) => {
                  return <AccordionProfileDetails key={index} label={question} />
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MintTemplate
