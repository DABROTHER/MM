'use client'
import 'assets/css/main.css'
import 'react-toastify/dist/ReactToastify.css'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

import NoFirstRender from 'design-systems/Atoms/NoFirstRender'
import Footer from 'design-systems/Organisms/Footer'
import Header from 'design-systems/Organisms/Header'
import WagmiProvider from 'context/wagmi'
import { ConnectorProvider } from 'context/connector'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <WagmiProvider>
        <ConnectorProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            {children}
          </QueryClientProvider>
        </ConnectorProvider>
      </WagmiProvider>
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="website" name="og:type" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ThemeProvider attribute="class">
          <Providers>
            <NoFirstRender>
              <div className="m-0 min-h-screen bg-[#fff] p-0 text-center">
                <Header />
                <div className="">{children}</div>
                <div className={`w-full text-left`}>
                  <Footer />
                </div>
              </div>
              <ToastContainer />
            </NoFirstRender>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
