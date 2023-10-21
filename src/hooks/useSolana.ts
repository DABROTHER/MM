/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { PublicKey } from '@solana/web3.js'
import { WalletNotConnectedError, WalletSignMessageError } from '@solana/wallet-adapter-base'

import { useSolanaState } from './store/useSolanaState'

import { DEFAULT_SOLANA_CHAIN_ID } from 'utils/web3'

const initialState = {
  connector: undefined,
  account: '',
  network: undefined,
}

export const useSolana = () => {
  const { setState, ...state } = useSolanaState()
  type PhantomEvent = 'disconnect' | 'connect' | 'accountChanged'
  // Connect Phantom wallet
  interface ConnectOpts {
    onlyIfTrusted: boolean
    network: string
  }
  interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>
    disconnect: () => Promise<void>
    on: (event: PhantomEvent, callback: (args: any) => void) => void
    isPhantom: boolean
    signMessage?: any
    request: any
  }

  type WindowWithSolana = Window & {
    solana?: PhantomProvider
  }
  const checkPhantom = () => {
    if ('solana' in window) {
      try {
        const solWindow = window as WindowWithSolana
        if (solWindow?.solana?.isPhantom) {
          return solWindow.solana
        }
      } catch (error) {
        throw new Error('solana - Unsupported network')
      }
    }
  }
  const handleConnect = useCallback(async () => {
    setState(initialState)
    if (typeof window === 'undefined') throw new Error('Window not found')
    if (!DEFAULT_SOLANA_CHAIN_ID) throw new Error('Chain not found')

    const connector = checkPhantom()
    const currentURL = window.location.href

    const solanaLink = `https://phantom.app/ul/browse/${currentURL}?ref=<ref>`
    if (!connector) {
      window.location.href = solanaLink
    }
    const wallet = await connector?.connect({ network: DEFAULT_SOLANA_CHAIN_ID })
    const account = wallet?.publicKey.toString()
    const network = DEFAULT_SOLANA_CHAIN_ID
    setState({ connector, network, account })
    return { connector, network, account }
  }, [])

  // Sign with solana wallet
  const handleSign = useCallback(async ({ message }: { message: string }) => {
    const wallet = checkPhantom()
    if (!wallet) throw new WalletNotConnectedError()
    try {
      const data = new TextEncoder().encode(message)
      const { signature, publicKey } = await wallet.signMessage(data, 'utf8')
      return { signature, publicKey }
    } catch (error: any) {
      throw new WalletSignMessageError(error?.message, error)
    }
  }, [])

  const handleDisconnect = useCallback(async () => {
    const connector = checkPhantom()
    await connector?.disconnect()
    setState(initialState)
  }, [])

  return {
    state,
    onConnect: handleConnect,
    onSign: handleSign,
    onDisconnect: handleDisconnect,
  }
}
