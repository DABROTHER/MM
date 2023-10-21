import { Metadata } from 'next'
import { Suspense } from 'react'

import SpinnerPageLoading from 'design-systems/Molecules/SpinnerPageLoading'

export const metadata: Metadata = {
  title: 'Item Details',
  description: 'Item Data',
}

export interface itemProps {
  children: React.ReactNode
}

const itemLayout: React.FC<itemProps> = ({ children }) => {
  return (
    <Suspense fallback={<SpinnerPageLoading className="h-10 w-10 stroke-neutral-100 dark:stroke-neutral-800" />}>
      {children}
    </Suspense>
  )
}

export default itemLayout
