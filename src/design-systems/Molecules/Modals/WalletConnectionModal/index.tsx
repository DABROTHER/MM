import { useMemo, useState } from 'react'

import { WalletConnectionModalProps } from './interface'
import { NETWORK_CATEGORY, WALLET_LIST } from './utils'

import Button from 'design-systems/Atoms/Button'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import { CloseIcon, CoinBaseIcon, WalletConnectIcon } from 'design-systems/Atoms/Icons'
import { useConnector } from 'context/connector'
import { WalletTypes } from 'interfaces'
import Image from 'design-systems/Atoms/Image'
import MetamaskImage from 'assets/metamask.svg'
import PhantomImage from 'assets/phantom.png'
import Typography from 'design-systems/Atoms/Typography'
import { disableAccessToken } from 'utils'
const WalletConnectionModal: React.FC<WalletConnectionModalProps> = ({ isOpen, onClose }) => {
  const { isSigned, connect, disconnect, changeChain, address, chainId, unsupportedChain = false } = useConnector()

  const [chain, setChain] = useState<ExploreBlock>(NETWORK_CATEGORY[0] as ExploreBlock)
  useMemo(async () => {
    if (unsupportedChain) {
      await changeChain?.(Number(chain?.id))
    }
  }, [unsupportedChain])

  const onConnect = (WalletType: WalletTypes) => {
    onClose()
    connect(chain.id, WalletType)
  }
  const onDisconnect = () => {
    disconnect?.()
    disableAccessToken()
    setChain(NETWORK_CATEGORY[0] as ExploreBlock)
  }
  const walletShow = useMemo(() => {
    return {
      startIndex: chain.id === NETWORK_CATEGORY[2].id ? 3 : 0,
      endIndex: chain.id === NETWORK_CATEGORY[2].id ? 4 : 3,
      WALLET_LIST,
    }
  }, [chain])

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-[86px] z-[9999] flex h-[277px] w-full flex-col  overflow-y-auto overflow-x-hidden rounded-md bg-neutral-800 px-1 md:ml-[25%] md:w-1/2 md:px-0 ${
          !isOpen && 'hidden'
        }`}
      >
        <div className="flex w-full cursor-pointer justify-end pr-2 pt-1 text-right">
          <p onClick={() => onClose()}>
            <CloseIcon />
          </p>
        </div>
        {!isSigned ? (
          <>
            <div className="m-5 flex w-full border-b-2 border-grayBorder">
              <CategoryList categories={NETWORK_CATEGORY as ExploreBlock[]} onClick={e => setChain(e)} />
            </div>
            <div className=" mx-10 flex w-full flex-col items-center justify-center gap-4">
              {walletShow?.WALLET_LIST?.slice(walletShow.startIndex, walletShow.endIndex).map(({ name, id }, i) => {
                return (
                  <div
                    className={`${
                      id === 'METAMASK' && 'hidden lg:flex'
                    } flex w-full cursor-pointer flex-row items-center gap-1`}
                    key={i}
                    onClick={() => onConnect(id)}
                  >
                    {WalletIcons[id]}
                    <div className=" font-Poppins text-body font-semibold leading-[24px]"> {name}</div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="m-5 flex w-1/2 flex-col justify-center">
            <Typography className="flex flex-row font-Poppins">
              address:{address}, chainId:{chainId}
            </Typography>
            <Button className="m-10 flex w-1/2 justify-center" onClick={onDisconnect}>
              Disconnect
            </Button>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="bg-gray-900 fixed left-0 top-0 z-50 h-full w-full bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}
    </>
  )
}
export default WalletConnectionModal
export const WalletIcons = {
  'METAMASK': <Image alt="METAMASK" className="!h-10 !w-10" src={MetamaskImage} />,
  'COINBASE': <CoinBaseIcon />,
  'WALLET-CONNECTION': <WalletConnectIcon />,
  'PHANTOM': <Image alt="METAMASK" className="!h-5 !w-5" src={PhantomImage} />,
}
