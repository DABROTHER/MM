import { Metadata } from 'next'
import { Suspense } from 'react'

import SpinnerPageLoading from 'design-systems/Molecules/SpinnerPageLoading'

export const metadata: Metadata = {
  title: 'Explore page',
  description: 'Explore Data',
}

export interface ExploreProps {
  children: React.ReactNode
}

const ExploreLayout: React.FC<ExploreProps> = ({ children }) => {
  return (
    <Suspense fallback={<SpinnerPageLoading className="h-10 w-10 stroke-neutral-100 dark:stroke-neutral-800" />}>
      {children}
    </Suspense>
  )
}

export default ExploreLayout
