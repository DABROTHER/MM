'use client'
import React, { useState } from 'react'

import ProfileDetailsTemplate from 'design-systems/Templates/ProfileDetailsTemplate'
import { CardInfo } from 'design-systems/Templates/ProfileDetailsTemplate/utils'

const Profile: React.FC = () => {
  const [type, setType] = useState<string>('Profile')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [active, setActive] = useState<string>('Yes')

  return (
    <ProfileDetailsTemplate
      active={active}
      categoryType={type}
      loading={isLoading}
      setActive={setActive}
      trendingCardInfo={CardInfo}
      onSetCategory={setType}
    />
  )
}

export default Profile
