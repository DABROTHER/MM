import { Metadata } from 'next'
import { Suspense } from 'react'

import SpinnerPageLoading from 'design-systems/Molecules/SpinnerPageLoading'

export const metadata: Metadata = {
  title: 'Create stepOne page',
  description: 'Create',
}

export interface CreateStepOneProps {
  children: React.ReactNode
}

const CreateStepOneLayout: React.FC<CreateStepOneProps> = ({ children }) => {
  return (
    <Suspense fallback={<SpinnerPageLoading className="h-10 w-10 stroke-neutral-100 dark:stroke-neutral-800" />}>
      {children}
    </Suspense>
  )
}

export default CreateStepOneLayout
