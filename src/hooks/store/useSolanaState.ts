import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { LOCAL_SOLANA_STATE } from 'utils'
import { AnyObject } from 'interfaces'

interface SolanaState {
  connector?: AnyObject
  account?: string
  network?: any
}

interface SolanaStateProps extends SolanaState {
  setState: (state: SolanaState) => void
}

export const useSolanaState = () => useSolanaStore()

export const getSolanaStore = () => useSolanaStore.getState()

const useSolanaStore = create(
  persist<SolanaStateProps>(
    set => ({
      connector: undefined,
      account: undefined,
      network: undefined,
      setState: state => {
        set(state)
      },
    }),
    {
      name: LOCAL_SOLANA_STATE,
    }
  )
)
