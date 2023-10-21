import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSwitchNetwork,
  useWalletClient,
  type WalletClient,
} from 'wagmi'
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import { JsonRpcSigner, JsonRpcProvider } from '@ethersproject/providers'
import { providers } from 'ethers'

import { AnyObject, Modify, WalletTypes } from 'interfaces'
import { useToggle } from 'hooks'
import { useGlobalState } from 'hooks/store/useGlobalState'
import { DEFAULT_ETHEREUM_CHAIN_ID, DEFAULT_SOLANA_CHAIN_ID, SupportedNetworkIds } from 'utils/web3'
import { MM_BLOCKCHAIN_NETWORK, logInfo, saveAccessToken } from 'utils'
import { useSolana } from 'hooks/useSolana'
import { useAuthentication } from 'hooks/apis/useAuthentication'
import { VerifySignatureRequest } from 'api-services/interfaces/auth'

export interface ConnectorContextState {
  connect: (chainId: number | string, WalletType: WalletTypes) => void
  disconnect: () => Promise<void>
  changeChain: (chainId: number) => Promise<void>

  chainId: SupportedNetworkIds
  address: string
  unsupportedChain: boolean

  connector: JsonRpcProvider
  signer: JsonRpcSigner | undefined

  isReady: boolean
  isLocked: boolean
  isSigned: boolean
}

export const ConnectorContext = createContext<ConnectorContextState>({} as ConnectorContextState)

export const useConnector = () => useContext(ConnectorContext)
export const ConnectorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isReady, , , , unReady] = useToggle(false)
  const [isLocked, , , lock, unlock] = useToggle(false)
  const { data: signer_ } = useWalletClient() as Modify<ReturnType<typeof useWalletClient>, { data?: WalletClient }>
  const { connectors, connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()
  const { signMessageAsync } = useSignMessage()
  const { chain: { id: chainId_, unsupported: unsupportedChain = false } = {} } = useNetwork()
  const { address: address_ } = useAccount()
  const { switchNetworkAsync } = useSwitchNetwork()
  const { getWalletNonceAsync, verifySignatureAsync } = useAuthentication()
  const { connector, setConnector, authUser, setAuthUser, setAccessToken, clear } = useGlobalState()
  const { signer } = useConnector()
  const {
    state: solanaState,
    onConnect: connectSolanaWallet,
    onSign: signSolanaWallet,
    onDisconnect: disconnectSolanaWallet,
  } = useSolana()

  const ref = useRef(
    {} as {
      authUser: UserObject
      solana: {
        address: string
        connector: any
        chainId: any
      }
      other: {
        address: string
        connector: any
        chainId: any
        switchNetworkAsync: typeof switchNetworkAsync
      }
      connector: WalletTypes
      signer: JsonRpcSigner
    }
  )
  ref.current.connector = connector as WalletTypes
  ref.current.authUser = authUser as UserObject
  ref.current.signer = signer as JsonRpcSigner

  ref.current.solana = {
    address: solanaState.account! as string,
    chainId: solanaState.network! ?? DEFAULT_SOLANA_CHAIN_ID,
    connector: solanaState.connector!,
  }
  ref.current.other = {
    address: address_!,
    chainId: (chainId_ as any) ?? DEFAULT_ETHEREUM_CHAIN_ID.id,
    connector: undefined,
    switchNetworkAsync,
  }
  const signWithWallet = useCallback((connector: WalletTypes, message: string) => {
    if (connector === 'PHANTOM') {
      return signSolanaWallet({
        message,
      })
    }
    return signMessageAsync({ message })
  }, [])

  const signMessage = useCallback(async (connector: WalletTypes, networkId: string) => {
    const walletAddress = connector === 'PHANTOM' ? ref.current.solana.address : ref.current.other.address
    if (!walletAddress) throw 'Wallet is not provided'
    const { data: nonce } = await getWalletNonceAsync({
      networkId,
      walletAddress,
    })
    if (!nonce) throw `Unable to get nonce for "${walletAddress}"`
    const signature = await signWithWallet(connector, nonce)
    if (!signature) throw `Unable to get signature`
    const payload: VerifySignatureRequest = {
      networkId,
      nonce,
      signature: signature as string,
      walletType: connector,
    }
    const { data: auth } = await verifySignatureAsync(payload)
    if (!auth?.token) throw `Invalid signature`
    setAuthUser(auth.user)
    setAccessToken(auth.token)
    saveAccessToken(auth.token)
  }, [])

  const connect = useCallback(async (chainId: number | string, WalletType: WalletTypes) => {
    try {
      lock()
      const network = getNetworkId(chainId)
      await activateConnector(Number(chainId), WalletType)
      await signMessage(WalletType, network as string)
    } catch (error) {
      console.error('Connecting wallet error: ', error)
    } finally {
      unlock()
    }
  }, [])

  const disconnect = useCallback(async () => {
    try {
      reset()
      switch (ref.current.connector) {
        case 'PHANTOM':
          disconnectSolanaWallet()
          break
        default:
          await disconnectAsync()
          break
      }
    } catch (error) {
      console.error('Disconnecting connector failed', error)
    }
  }, [])

  const activateConnector = useCallback(
    async (chainId: number, WalletType: WalletTypes) => {
      logInfo('App', `Activating connector ${WalletType} on chain ${chainId}`)
      try {
        switch (WalletType) {
          case 'PHANTOM': {
            const resp = await connectSolanaWallet()
            ref.current.solana.chainId = resp?.network
            ref.current.solana.address = resp?.account as string
            ref.current.solana.connector = resp?.connector
            ref.current.connector = WalletType

            break
          }
          default: {
            const _connector =
              WalletType === 'METAMASK' ? connectors[0] : WalletType === 'COINBASE' ? connectors[1] : connectors[2]
            const resp = await connectAsync({
              chainId: chainId,
              connector: _connector,
            })

            ref.current.other.chainId = chainId
            ref.current.other.address = resp.account
            ref.current.other.connector = resp.connector
            ref.current.connector = WalletType

            break
          }
        }
      } catch (error) {
        console.error('Activating connector error: ', error)
        logInfo('Already Connected')
      }

      setConnector(WalletType)
      ref.current.connector = WalletType
    },
    [connectors]
  )
  function walletClientToSigner(walletClient: WalletClient) {
    const { account, chain, transport } = walletClient
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    }
    const provider = new providers.Web3Provider(transport, network)
    const signer = provider.getSigner(account.address)
    return signer
  }
  const changeChain = useCallback(async (chainId: number) => {
    try {
      lock()
      await ref.current.other.switchNetworkAsync?.(chainId)
    } catch (error) {
      console.error('Changing network error:', error)
    } finally {
      unlock()
    }
  }, [])

  const reset = useCallback(() => {
    unReady()
    clear()
  }, [])
  useEffect(() => {
    const ethereum = (window as any)?.ethereum
    if (typeof ethereum === 'undefined') return
    ethereum.on('accountsChanged', reset)
  }, [])
  useEffect(() => {
    const coinbase = (window as any)?.coinbase
    if (typeof coinbase === 'undefined') return
    coinbase.on('accountsChanged', reset)
  }, [])

  const values = useMemo(() => {
    return getConnectorState(ref.current.connector, {
      other: ref.current.other,
      solana: ref.current.solana,
    })
  }, [ref.current.connector, ref.current.other, ref.current.solana])

  return (
    <ConnectorContext.Provider
      value={{
        address: values.address,
        chainId: values.chainId,
        changeChain,
        connect,
        disconnect,
        isLocked,
        isReady,
        isSigned: !!authUser,
        connector: values.connector!,
        signer: signer_ ? (walletClientToSigner(signer_ as WalletClient) as JsonRpcSigner) : undefined,
        unsupportedChain,
      }}
    >
      {children}
    </ConnectorContext.Provider>
  )
}
const getNetworkId = (chain: number | string) => {
  const ETH_VALUES = [1, 5]
  const POLY_VALUES = [137, 80001]
  const SOLANA_ENVIRONMENTS = ['testnet', 'mainnet-beta']

  if (ETH_VALUES.includes(Number(chain))) return MM_BLOCKCHAIN_NETWORK.ETHEREUM
  if (POLY_VALUES.includes(Number(chain))) return MM_BLOCKCHAIN_NETWORK.POLYGON
  if (SOLANA_ENVIRONMENTS.includes(String(chain).toLowerCase())) return MM_BLOCKCHAIN_NETWORK.SOLANA
}
const getConnectorState = (WalletType: WalletTypes, { other, solana }: AnyObject) => {
  switch (WalletType) {
    case 'PHANTOM':
      return solana
    default:
      return other
  }
}
