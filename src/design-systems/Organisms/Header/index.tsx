import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

import { DashboardHeaderProps } from './interface'

import { CartIcon, FooterLogoIcon, SearchIcon, ResponsiveMenu, ResponsiveLogo } from 'design-systems/Atoms/Icons'
import SearchInput from 'design-systems/Atoms/SearchInput'
import Cart from 'design-systems/Molecules/Cart'
import ConnectWalletButton from 'design-systems/Molecules/ConnectWalletButton'
import Link from 'design-systems/Atoms/Link'
const Header: React.FC<DashboardHeaderProps> = () => {
  const pathname = usePathname()

  const [cartModalIsOpen, setcartModalIsOpen] = useState<boolean>(false)
  const [responsiveMenuIsOpen, setResponsiveMenuIsOpen] = useState<boolean>(false)
  const [responsiveSearchIsOpen, setResponsiveSearchIsOpen] = useState<boolean>(false)

  const resConnectWallet = true

  const spanTextClassName = ['font-semibold font-Poppins text-md text-lightGray hoverAnimation'].join(' ')
  const commLiItem = [
    'flex cursor-pointer text-lightGray items-center px-2.5 py-2 font-Poppins font-semibold  hover:rounded-sm hover:text-black hoverAnimation text-base leading-[20px]',
  ].join(' ')

  const handleOpen = () => {
    setcartModalIsOpen(!cartModalIsOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-[6999] bg-[#fff] py-3">
        <div className="container">
          <div className="relative flex h-[48px]">
            <div className="flex w-8/12">
              <div className="flex items-center">
                <div className="mr-3 flex cursor-pointer lg:hidden">
                  <div onClick={() => setResponsiveMenuIsOpen(!responsiveMenuIsOpen)}>
                    <ResponsiveMenu />
                  </div>
                  {responsiveMenuIsOpen && (
                    <div className="absolute left-0 top-full mt-3 flex h-[298px] w-full animate-fade-in-up flex-col justify-between rounded-sm border border-lightGray bg-white px-2 py-2 pb-4 pt-3 shadow-lg hover:border-black group-hover:block group-hover:animate-fade-in-up smd:w-[406px]">
                      <ul className="">
                        {/*responsive Dropdown Items */}
                        <Link href="/explore">
                          <li className={` ${commLiItem} ${pathname === '/explore' ? `!text-black` : ''}`}>Explore</li>
                        </Link>
                        <Link href="/launchpad">
                          <li className={`${commLiItem} ${pathname === '/launchpad' ? `!text-black` : ''}`}>
                            Launchpad
                          </li>
                        </Link>
                        <Link href="">
                          <li className={commLiItem}>Profile</li>
                        </Link>
                      </ul>
                      <ConnectWalletButton resConnectWallet={resConnectWallet} />
                    </div>
                  )}
                </div>
                <div className="items-left mr-[31px] flex gap-4 xl:mr-8">
                  <Link className="hidden smd:flex" href="/">
                    <FooterLogoIcon height="28" width="196" />
                  </Link>
                  <Link className="flex smd:hidden" href="/">
                    <ResponsiveLogo />
                  </Link>
                </div>
              </div>
              <div
                className={`relative m-0 hidden w-[35%] lg:flex xlg:w-[404px] xl:w-[404px] ${
                  responsiveSearchIsOpen && '!absolute !flex !h-[60px] w-full animate-fade-in-up bg-white'
                }`}
              >
                <div className="w-[404px]">
                  <SearchInput
                    responsiveSearchIsOpen={responsiveSearchIsOpen}
                    setResponsiveSearchIsOpen={setResponsiveSearchIsOpen}
                  />
                </div>
              </div>
              <div className="hidden items-center gap-4 pl-8 lg:flex xlg:gap-8 ">
                <Link className="cursor-pointer font-Poppins text-red" href="/explore" scroll={false}>
                  <span
                    className={pathname === '/explore' ? `text-md font-semibold text-black` : `${spanTextClassName}`}
                  >
                    Explore
                  </span>
                </Link>
                <Link href="/launchpad" scroll={false}>
                  <span
                    className={pathname === '/launchpad' ? `text-md font-semibold text-black` : `${spanTextClassName}`}
                  >
                    Launchpad
                  </span>
                </Link>
              </div>
            </div>
            <div className="width-auto flex w-4/12 items-center justify-end gap-3 p-0 pl-2 xlg:pl-10">
              <div className="hidden lg:flex">
                <ConnectWalletButton />
              </div>
              <div
                className="mobile-search-icon flex cursor-pointer rounded-sm border border-lightGray px-3 py-[11px] hover:border-black min-[900px]:block lg:hidden"
                onClick={() => setResponsiveSearchIsOpen(!responsiveSearchIsOpen)}
              >
                <SearchIcon />
              </div>
              <div
                className="cursor-pointer rounded-sm border border-lightGray px-3 py-[11px] hover:border-black min-[900px]:block"
                onClick={handleOpen}
              >
                <CartIcon />
              </div>
            </div>
            {cartModalIsOpen && (
              <div
                className={`fixed left-0 right-0 top-[60px] mx-auto flex w-[92.66%] flex-col rounded-[10px] border border-lightGray bg-white hover:border-black md:absolute md:left-auto md:w-[368px] xlg:shadow-lg xl:absolute xl:right-0 ${
                  cartModalIsOpen ? 'animate-fade-in-left rounded-sm' : 'animate-fade-in-right'
                }`}
              >
                <Cart />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
