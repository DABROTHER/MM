import Image from 'next/image'
import React from 'react'

import { ProfileItem } from './utils'
import { ProfileItemType, ProfilePropsType } from './interface'

import { IconRightArrowBlack } from 'design-systems/Atoms/Icons'

export default function ProfileDropdown({ responsiveProfileIsOpne }: ProfilePropsType) {
  return (
    <div
      className={`${
        !responsiveProfileIsOpne ? 'hidden animate-fade-in-down' : 'absolute top-[47px] w-full smd:w-[406px] '
      } w-[300px] pt-3 group-hover:block group-hover:animate-fade-in-up`}
    >
      <ul className="rounded-sm border border-lightGray bg-white px-2 py-2 shadow-lg hover:border-black">
        {/* Dropdown Items */}
        {ProfileItem.map((item: ProfileItemType) => (
          <li
            className={`flex cursor-pointer items-center px-2.5 py-3 font-Poppins font-semibold  hover:rounded-sm hover:bg-offwhite ${
              item.id === 8 && 'flex justify-between'
            }`}
            key={item.id}
          >
            <span className="flex">
              <figure className="w-[25px]">
                <Image alt="Profile Picture" height={item.height} src={item.img} width={item.width} />
              </figure>
              <span className="ml-[13px]">{item.value}</span>
            </span>
            {item.id === 8 && (
              <span className="flex items-center font-medium">
                Eng
                <figure className="ml-4">
                  <IconRightArrowBlack />
                </figure>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
