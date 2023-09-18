import { ResourcesCardProps } from 'design-systems/Molecules/Cards/ResourcesCard/interface'
import ArrowIcon from 'assets/images/arrowIcon.png'
import Buying from 'assets/images/Buying.png'
import Creating from 'assets/images/Creating.png'
import Developers from 'assets/images/Developers.png'
import FAQ from 'assets/images/FAQ.png'
import GettingStarted from 'assets/images/GetStarted.png'
import Selling from 'assets/images/Selling.png'
import { ArticleAccordionProps } from 'design-systems/Molecules/ArticleAccordion/interface'

export const blockchainData: ResourcesCardProps[] = [
  {
    id: 1,
    name: 'Buying',
    image: Buying,
    height: 27,
    width: 30,
    widthMobile: 29,
    heightMobile: 27,
  },
  {
    id: 2,
    name: 'Creating',
    image: Creating,
    height: 31,
    width: 32,
    widthMobile: 31,
    heightMobile: 31,
  },
  {
    id: 3,
    name: 'Developers',
    image: Developers,
    height: 28,
    width: 29,
    widthMobile: 28,
    heightMobile: 28,
  },
  {
    id: 4,
    name: 'FAQ',
    image: FAQ,
    height: 31,
    width: 27,
    widthMobile: 26,
    heightMobile: 27,
  },
  {
    id: 5,
    name: 'Getting started',
    image: GettingStarted,
    height: 26,
    width: 32,
    widthMobile: 31,
    heightMobile: 26,
  },
  {
    id: 6,
    name: 'Selling',
    image: Selling,
    height: 26,
    width: 28,
    widthMobile: 28,
    heightMobile: 26,
  },
]

const generateAccordionData = (count: number) => {
  const accordionData = []
  const commonData = {
    icon: ArrowIcon,
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sit tristique diam id tincidunt mattis.',
    height: 18,
    width: 10,
  }

  for (let i = 1; i <= count; i++) {
    accordionData.push({
      id: i,
      ...commonData,
    })
  }

  return accordionData
}

export const accordionData = generateAccordionData(4)
