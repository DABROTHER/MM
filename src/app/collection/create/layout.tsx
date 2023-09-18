import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Collections Details',
  description: 'Collections details',
}

export interface CollectionsDetailsLayoutProps {
  children: React.ReactNode
}

const CollectionsDetailsLayout: React.FC<CollectionsDetailsLayoutProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default CollectionsDetailsLayout
