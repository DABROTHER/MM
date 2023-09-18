import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Activity page',
  description: 'Activity',
}

export interface ActivityLayoutProps {
  children: React.ReactNode
}

const ActivityLayout: React.FC<ActivityLayoutProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default ActivityLayout
