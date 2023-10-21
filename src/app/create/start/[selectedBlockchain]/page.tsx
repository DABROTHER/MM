'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

import ChooseType from 'design-systems/Molecules/ChooseType'
import { StepTwoProps } from './interface'

const StepTwo: React.FC<StepTwoProps> = ({ params }) => {
  return <ChooseType blockchainSlug={params.selectedBlockchain} />
}

export default StepTwo
