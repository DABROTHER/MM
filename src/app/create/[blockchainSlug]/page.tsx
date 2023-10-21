'use client'
import React, { useState } from 'react'

import { StepThreeProps } from './interface'

import CreateSingleItemTemplate from 'design-systems/Templates/CreateSingleItemTemplate'
import { ExploreFilters } from 'interfaces'

const initialFilter = { categoryId: '', blockchainId: '', trending: '' }

const StepThree: React.FC<StepThreeProps> = ({ params }) => {
  const [filters, setFilters] = useState<ExploreFilters>(initialFilter)

  return (
    <CreateSingleItemTemplate
      slug={params.blockchainSlug}
      onChangeFilter={filter => setFilters(pre => ({ ...pre, ...filter }))}
    />
  )
}

export default StepThree
