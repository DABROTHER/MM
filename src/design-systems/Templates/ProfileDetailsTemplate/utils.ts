import { TrendingCardInfo } from './interface'

import profileCard from 'assets/images/profileCard.png'

export const profileCategory = [
  { name: 'Profile', id: 'Profile' },
  { name: 'Featured items', id: 'Featured items' },
  { name: 'Notifications', id: 'Notifications' },
  { name: 'Offers', id: 'Offers' },
  { name: 'Support', id: 'Support' },
]

const profileCardTemplate = {
  name: 'Bored Ape Kennel Club',
  img: profileCard,
  id: '#4594',
}

export const profileCardData = Array.from({ length: 10 }, (_, index) => ({
  ...profileCardTemplate,
  idx: `#${index + 1}`,
}))

export const LaunchpadCss =
  'grid gap-2 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 slg:grid-cols-4 xlg:grid-cols-4  xl:grid-cols-5'

export const CardInfo: TrendingCardInfo[] = [{ HighestBid: '4.56 ETH' }]

export const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']

export const categoryLabel = (category: string) => {
  const categoryMap: { [key: string]: string } = {
    'Profile': 'Profile details',
    'Featured items': 'Profile details',
    'Notifications': 'Notification settings',
    'Offers': 'Offers',
    'Support': 'Account support',
  }

  return categoryMap[category] || 'Profile details'
}

export const typoGraphyHeading = 'text-left text-md smd:text-base font-semibold text-black font-Poppins'
export const typoGraphyPara = 'text-left text-md font-medium text-black font-Poppins'
