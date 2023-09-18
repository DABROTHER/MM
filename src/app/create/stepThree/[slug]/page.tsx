'use client'
import React from 'react'

import { StepThreeProps } from './interface'

import CreateSingleItemTemplate from 'design-systems/Templates/CreateSingleItemTemplate'

const StepThree: React.FC<StepThreeProps> = ({ params }) => {
  return <CreateSingleItemTemplate slug={params.slug} />
}

export default StepThree
