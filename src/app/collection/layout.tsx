import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Collection page',
  description: 'Collection Data',
}

export interface CollectionProps {
  children: React.ReactNode
}

const CollectionLayout: React.FC<CollectionProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default CollectionLayout
