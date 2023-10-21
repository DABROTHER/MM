import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { walletConnectProvider } from '@web3modal/wagmi'
import { PropsWithChildren } from 'react'

import { SUPPORTED_CHAIN_IDS } from 'utils/web3'
import { PROJECT_ID_WALLET_CONNECT } from 'utils'
const projectId = PROJECT_ID_WALLET_CONNECT

const metadata = {
  name: 'React App',
  description: 'React App for WalletConnect',
  url: 'https://walletconnect.com/',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  verifyUrl: 'https://verify.walletconnect.com',
}

const { chains, publicClient } = configureChains(SUPPORTED_CHAIN_IDS as any, [
  walletConnectProvider({ projectId }),
  publicProvider(),
])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } }),
    new WalletConnectConnector({ chains, options: { projectId, metadata } }),
  ],
  publicClient,
})
createWeb3Modal({ wagmiConfig, projectId, chains })

const WagmiProvider = ({ children }: PropsWithChildren) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}

export default WagmiProvider
