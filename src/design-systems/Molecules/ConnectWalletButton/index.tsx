import Image from 'next/image'

import ProfileDropdown from '../ProfileDropdown'

import { propType } from './interface'

import { AccountIcon, WalletIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import dummyProfile from 'assets/images/dummyProfile.svg'

const ConnectWalletButton: React.FC<propType> = ({ resConnectWallet, onClick }) => {
  const commText = ['pl-4 font-Poppins text-base font-semibold text-black'].join()
  const commSpan = ['my-auto h-12 border-r border-lightGray'].join()

  return (
    <>
      <div
        className={`connect-wallet-btn inline-flex w-[354px] justify-end ${resConnectWallet && 'w-full px-2'}`}
        onClick={onClick}
      >
        <button
          className={`${
            resConnectWallet &&
            'w-full justify-center !rounded-br-sm !rounded-tr-sm !border !border-r-lightGray hover:!border-r-black'
          } flex items-center rounded-bl-sm rounded-tl-sm border border-r-0 border-lightGray px-[15.25px] py-[10px] leading-[21px] hover:border-black`}
        >
          <WalletIcon />
          <span className={`${commText} ${resConnectWallet && 'pl-10'}`}>Connect wallet</span>
        </button>
        <button
          className={`profile-dropdown-icon group relative rounded-br-sm rounded-tr-sm border border-lightGray px-4 py-[10px] hover:border-black group-hover:border-l-black ${
            resConnectWallet ? 'hidden' : 'flex'
          }`}
        >
          <AccountIcon />
          <div className="absolute right-0 top-full">
            <ProfileDropdown />
          </div>
        </button>
      </div>
      {/* <div className="connect-wallet-btn inline-flex justify-center md:justify-start items-center">
        <button className="rounded-tr-smrounded-bl-sm flex rounded-bl-sm rounded-tl-sm border border-r-0 border-lightGray px-[14.5px] hover:border-black leading-[21px]">
          <span className="py-3">
            <WalletIcon />
          </span>
          <span className={`border-lightGray border-r border-r-lightGray py-3 pr-4 ${commText}`}>0 ETH</span>
          <Typography className={`py-3 ${commText}`}>0 WETH</Typography>
        </button>
        <button className="profile-dropdown-icon group relative rounded-br-sm rounded-tr-sm border border-lightGray px-4 py-[11px] hover:border-black group-hover:border-l-black">
          <Image alt="Profile" className="h-6 w-6 rounded-full" src={dummyProfile} />
          <div className="hidden group-hover:flex">
            <div className="absolute right-0 top-full">
              <ProfileDropdown />
            </div>
          </div>
        </button>
      </div> */}
    </>
  )
}

export default ConnectWalletButton
