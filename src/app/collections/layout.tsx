import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Collections page',
  description: 'Collections',
}

export interface CollectionsLayoutProps {
  children: React.ReactNode
}

const CollectionsLayout: React.FC<CollectionsLayoutProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default CollectionsLayout
