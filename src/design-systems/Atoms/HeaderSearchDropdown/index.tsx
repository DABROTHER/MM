import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { SearchIcon, IconCheckV2 } from '../Icons'
import Button from '../Button'

import { CollectionCard, CommSearchCard, CommTab, CommWrp, Imagestyle, SeeAllButton } from './utils'
import { ButtonType, CollectionType, HeaderSearchDropdownProps } from './interface'

import { getSearchPopular } from 'api-services/HeaderService'
import CardSkeleton from 'design-systems/Molecules/Skeleton/CardSkeleton'

const HeaderSearchDropdown: React.FC<HeaderSearchDropdownProps> = ({
  collectionData,
  searchValue,
  nftsData,
  userData,
  isLoading,
  setIsLoading,
}) => {
  const [stateSearch, setStateSearch] = useState<number>(1)
  const [searchData, setSearchData] = useState<ButtonType[]>([])
  const skeletonPopular = new Array(10).fill(null) // Creating an array of 10 elements

  const handleSearch = async () => {
    let tab = ''
    switch (stateSearch) {
      case 1:
        tab = 'collection'
        break
      case 2:
        tab = 'nft'
        break
      case 3:
        tab = 'user'
        break
      default:
    }
  }

  const handleWishlist = async () => {
    try {
      setIsLoading(true)
      const result = await getSearchPopular()
      if (result) setSearchData(result?.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      return error
    }
  }

  useEffect(() => {
    handleWishlist()
  }, [!searchValue])

  return (
    <div className="relative w-full rounded-sm border border-transparent bg-white px-[14px] pb-4 pt-3">
      {searchValue && (
        <div className="">
          <div className="mb-4 flex h-[29px] gap-[15px] border-b-2 border-grayBorder md:gap-4">
            <span
              className={`hoverAnimation ${CommTab} ${stateSearch == 1 && 'active'}`}
              onClick={() => setStateSearch(1)}
            >
              Collections
            </span>
            <span
              className={`hoverAnimation ${CommTab} ${stateSearch == 2 && 'active'}`}
              onClick={() => setStateSearch(2)}
            >
              NFTs
            </span>
            <span
              className={`hoverAnimation ${CommTab} ${stateSearch == 3 && 'active'}`}
              onClick={() => setStateSearch(3)}
            >
              Users
            </span>
          </div>
          {/* collection wrp */}
          <div className={CommWrp}>
            {stateSearch == 1 && (
              <div className="max-h-[310px] overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center">
                    <CardSkeleton className="flex h-12 !w-12" variant="none" />
                    <div className="pl-4">
                      <CardSkeleton className="!h-5 !w-[200px]" variant="none" />
                      <CardSkeleton className="mt-2 !h-3 !w-[150px]" variant="none" />
                    </div>
                  </div>
                ) : (
                  collectionData &&
                  collectionData?.map((item: CollectionType, index: number) => (
                    <div className={CommSearchCard} key={index}>
                      <Image
                        alt=""
                        className={Imagestyle}
                        height={100}
                        src={item?.img || '/images/Avt-50.png'}
                        width={100}
                      />
                      <div>
                        <span className={CollectionCard}>
                          {item?.name || ''}
                          <div className="ml-3 mt-[2px]">
                            <IconCheckV2 />
                          </div>
                        </span>
                        <div className="flex align-middle">
                          <span className={CollectionCard}>
                            Floor {item?.floor || 0} {item.symbol}
                          </span>
                          <span className={CollectionCard}>
                            {item?.price || 0} {item.symbol}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {stateSearch == 1 && !isLoading && (
              <Link className={SeeAllButton} href="" onClick={() => handleSearch()}>
                <SearchIcon fill="#fff" height={19} width={19} />
                <span className="ml-4">See all collections</span>
              </Link>
            )}
          </div>
          {/* NFTs wrp */}
          <div className={CommWrp}>
            <>
              {stateSearch == 2 && (
                <div className="max-h-[310px] overflow-y-auto">
                  {isLoading ? (
                    <div className="flex items-center">
                      <CardSkeleton className="flex h-12 !w-12" variant="none" />
                      <div className="pl-4">
                        <CardSkeleton className="!h-5 !w-[200px]" variant="none" />
                        <CardSkeleton className="mt-2 !h-3 !w-[150px]" variant="none" />
                      </div>
                    </div>
                  ) : (
                    nftsData &&
                    nftsData?.map((item: CollectionType, index: number) => (
                      <div className={CommSearchCard} key={index}>
                        <Image
                          alt=""
                          className={Imagestyle}
                          height={100}
                          src={item?.fileUrl || '/images/Avt-50.png'}
                          width={100}
                        />
                        <div>
                          <span className={CollectionCard}>
                            {item?.name || ''}
                            <div className="ml-3 mt-[2px]">
                              <IconCheckV2 />
                            </div>
                          </span>
                          <div className="flex align-middle">
                            <span className={CollectionCard}>
                              Floor {item?.floor || 0} {item.symbol}
                            </span>
                            <span className={CollectionCard}>
                              {item?.price || 0} {item.symbol}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </>
            {stateSearch == 2 && !isLoading && (
              <Link className={SeeAllButton} href="" onClick={() => handleSearch()}>
                <SearchIcon fill="#fff" height={19} width={19} />
                <span className="ml-4">See all NFTs</span>
              </Link>
            )}
          </div>
          {/* Users wrp */}
          <div className={CommWrp}>
            {stateSearch == 3 && (
              <div className="max-h-[310px] overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center">
                    <CardSkeleton className="flex h-12 !w-12" variant="none" />
                    <div className="pl-4">
                      <CardSkeleton className="!h-5 !w-[200px]" variant="none" />
                      <CardSkeleton className="mt-2 !h-3 !w-[150px]" variant="none" />
                    </div>
                  </div>
                ) : (
                  userData &&
                  userData?.map((item: CollectionType, index: number) => (
                    <div className={CommSearchCard} key={index}>
                      <Image
                        alt=""
                        className={Imagestyle}
                        height={100}
                        src={item?.bannerImage || '/images/Avt-50.png'}
                        width={100}
                      />
                      <div>
                        <span className={CollectionCard}>
                          {item?.name || ''}
                          <div className="ml-3 mt-[2px]">
                            <IconCheckV2 />
                          </div>
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {stateSearch == 3 && !isLoading && (
              <Link className={SeeAllButton} href="" onClick={() => handleSearch()}>
                <SearchIcon fill="#fff" height={19} width={19} />
                <span className="ml-4">See all Users</span>
              </Link>
            )}
          </div>
        </div>
      )}
      {!searchValue && (
        <div className="text-start">
          <span className="font-Poppins text-md font-semibold leading-[21px]">Popular</span>
          <div className="wrapper_button mt-[10px] flex flex-wrap gap-4 xl:gap-3">
            {searchData && !isLoading
              ? searchData?.map((items: ButtonType) => (
                  <Button className="!px-3" key={items.id}>
                    <Link href="/">{items.name}</Link>
                  </Button>
                ))
              : skeletonPopular.map((item, index) => (
                  <CardSkeleton className="relative !h-12 !w-[102px]" key={index}>
                    <div className="absolute left-[16px] top-[15px] h-[19px] w-[70px] bg-grayBorder"></div>
                  </CardSkeleton>
                ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderSearchDropdown
