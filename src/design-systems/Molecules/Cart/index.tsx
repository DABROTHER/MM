'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CartProps } from './interface'

import Button from 'design-systems/Atoms/Button'
import { collection } from 'design-systems/Atoms/HeaderSearchDropdown/utils'
import blackCrossIcon from 'assets/images/blackCrossIcon.svg'
import { CollectionType } from 'design-systems/Atoms/HeaderSearchDropdown/interface'

const Cart: React.FC<CartProps> = ({ cartData = false }) => {
  const commSpan = ['mr-3 flex items-center font-Poppins text-sm font-semibold md:text-md'].join()

  return (
    <div className="h-screen max-h-[calc(100vh-20vh)] rounded-sm bg-white px-4 pb-4 pt-3 lg:max-h-[calc(100vh-14vh)]">
      <div className={`flex h-full w-full cursor-pointer flex-col items-center`}>
        <div className="flex h-full w-full flex-col justify-between">
          <div>
            <div className="w-full">
              <div className="flex h-full w-full items-center justify-between border-b-2 border-solid border-grayBorder pb-2">
                <div className={`flex gap-[10px]`}>
                  <span className="font-Poppins text-[15px] font-semibold">Cart</span>
                  <span className="font-Poppins text-[15px] font-semibold">0</span>
                </div>
                <div>
                  {collection.length > 0 && cartData && (
                    <span className="border-solid border-lightGray text-right text-base font-medium leading-[21px] text-lightGray hover:border-b">
                      Clear all
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 w-full">
              {collection.length > 0 && cartData ? (
                collection.map((item: CollectionType) => (
                  <div className={`relative flex w-full flex-row py-3`} key={item._id}>
                    <div className="flex basis-11/12">
                      <div className="min-h-[48px] min-w-[48px] overflow-hidden rounded-[8px]">
                        <Image alt="card" className="h-12 w-12 object-cover" height={100} src={item.img} width={100} />
                      </div>
                      <div className="flex flex-col pl-4">
                        <span className={commSpan}>{item.name}</span>
                        <span className={commSpan}>
                          {item.price} MATIC
                          <span></span>
                        </span>
                      </div>
                    </div>
                    <div className="flex basis-1/12 items-end justify-end">
                      <Image
                        alt="cross"
                        className="h-[15px] w-[15px] cursor-pointer"
                        height={15}
                        src={blackCrossIcon}
                        width={15}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="mt-4 text-left">
                  <span className="font-Poppins text-md font-semibold">No nft in cart!</span>
                </div>
              )}
            </div>
          </div>
          <div>
            {collection.length > 0 && cartData ? (
              <div className="mt-4 w-full items-center justify-center">
                <div className="mb-2.5 flex justify-between font-Poppins text-[15px] font-semibold">
                  <p>Total</p>
                  <p>0.15 ETH</p>
                </div>
                <Button className="w-full !py-[11px]">Checkout</Button>
              </div>
            ) : (
              <div className="mt-4 flex w-full items-center justify-center">
                <Link
                  className="flex h-12 w-full items-center justify-center rounded-[8px] border-none text-base font-semibold"
                  href="/explore"
                >
                  <Button className="w-full !py-[11px]">Explore NFTs</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
