import { CollectionDesign } from 'design-systems/Templates/Collection/utils'

export const handleCollectionUI = (design: CollectionDesign, isShow: boolean) => {
  if (isShow) {
    if (design === 'multi') {
      return {
        cardClassName: 'w-full xlg:h-[330px] xl:h-[378.39px]',
        className:
          'w-[60%] smd:w-[65%] md:w-[80%] grid-cols-1 md:grid-cols-2 lmd:grid-cols-3 slg:grid-cols-4 xlg:grid-cols-4',
        fileClassName: '!h-[182px] xlg:!h-[212px]  xl:!h-[262.4px]',
        cardInfoMT: 'mt-[3px]',
      }
    } else if (design === 'grid') {
      return {
        className:
          'w-[60%] smd:w-[65%] md:w-[80%] slg:pl-[121px] grid-cols-1 md:grid-cols-2 lmd:grid-cols-3  xlg:grid-cols-4 xl:grid-cols-5',
        fileClassName: '!h-[182px] slg:!h-[173px]',
        cardClassName: 'w-full md:h-[294.85px]',
        cardInfoMT: 'mt-2',
      }
    }
  } else {
    if (design === 'multi') {
      return {
        cardClassName: 'w-full xl:h-[378.39px]',
        className: 'w-full grid-cols-2 md:grid-cols-3 lmd:grid-cols-4 slg:grid-cols-5 xlg:grid-cols-5',
        fileClassName: '!h-[182px] lg:!h-[179.2px]  xlg:!h-[214.39px] xl:!h-[262.4px]',
        cardInfoMT: 'mt-[3px]',
      }
    } else if (design === 'grid') {
      return {
        className: 'w-full grid-cols-2 md:grid-cols-3 lmd:grid-cols-4 slg:grid-cols-5 xlg:grid-cols-6 xl:grid-cols-7',
        fileClassName: '!h-[161px] xl:!h-[173px]',
        cardClassName: 'w-full xlg:h-[294.85px]',
        cardInfoMT: 'mt-2',
      }
    }
  }
}
