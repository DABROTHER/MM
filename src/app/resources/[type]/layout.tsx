import { Metadata } from 'next'
import { Suspense } from 'react'

import SpinnerPageLoading from 'design-systems/Molecules/SpinnerPageLoading'

export const metadata: Metadata = {
  title: 'Resources Details page',
  description: 'Resources details',
}

export interface ResourcesTypeLayoutProps {
  children: React.ReactNode
}

const ResourcesTypeLayout: React.FC<ResourcesTypeLayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<SpinnerPageLoading className="h-10 w-10 stroke-neutral-100 dark:stroke-neutral-800" />}>
      {children}
    </Suspense>
  )
}

export default ResourcesTypeLayout
