import { Metadata } from 'next'
import { Suspense } from 'react'

import SpinnerPageLoading from 'design-systems/Molecules/SpinnerPageLoading'

export const metadata: Metadata = {
  title: 'Profile Final',
  description: 'Profile Final Page',
}

export interface ProfileFinalLayoutProps {
  children: React.ReactNode
}

const ProfileFinalLayout: React.FC<ProfileFinalLayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<SpinnerPageLoading className="h-10 w-10 stroke-neutral-100 dark:stroke-neutral-800" />}>
      {children}
    </Suspense>
  )
}

export default ProfileFinalLayout
