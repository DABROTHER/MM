import {
  IconTwitter,
  IconInsta,
  IconDiscord,
  IconYoutube,
  IconAttachment,
  IconEye,
  IconAlert,
  IconMulti,
  IconGrid,
  IconMenu,
} from 'design-systems/Atoms/Icons'

export const ExploreChildrenData = [
  { url: 'https://twitter.com/', Icon: IconTwitter, target: '_blank' },
  { url: 'https://www.instagram.com/', Icon: IconInsta, target: '_blank' },
  { url: 'https://www.youtube.com/', Icon: IconYoutube, target: '_blank' },
  { url: 'https://discord.com/', Icon: IconDiscord, target: '_blank' },
]
export const ProfileChildrenData = [{ url: 'https://twitter.com/', Icon: IconTwitter, target: '_blank' }]
export const CollectionIcon = [
  { url: 'https://twitter.com/', Icon: IconAttachment, target: '_blank' },
  { url: 'https://www.instagram.com/', Icon: IconEye, target: '_blank' },
  { url: 'https://www.youtube.com/', Icon: IconAlert, target: '_blank' },
]
export const COLLECTION_CATEGORY = [
  { name: 'Items', id: 'item' },
  { name: 'Activity', id: 'activity' },
  { name: 'Data', id: 'data' },
]
export const COLLECTION_PRICE_CATEGORY = [
  { name: 'Price low to high', id: 'price_low_to_high' },
  { name: 'Price high to low  ', id: 'price_high_to_low' },
]

export const COLLECTION_TAB = [
  { value: 'multi', Label: IconMulti, type: 'component' },
  { value: 'grid', Label: IconGrid, type: 'component' },
  { value: 'table', Label: IconMenu, type: 'component' },
]

export const COLLECTION_STATUS = [
  { name: 'Buy now', id: 'Buy now' },
  { name: 'On auction', id: 'On auction' },
]
export const COLLECTION_QUANTITY = [
  { name: 'All items', id: 'All items', value: 'all' },
  { name: 'Single items', id: 'Single items', value: 'single' },
  { name: 'Bundles', id: 'Bundles', value: 'bundles' },
]
export const COLLECTION_PROPERTIES = [
  { name: 'All items', id: 'All items' },
  { name: 'Background', id: 'Background' },
  { name: 'Clothes', id: 'Clothes' },
  { name: 'Earrings', id: 'Earrings' },
  { name: 'Eyes', id: 'Eyes' },
  { name: 'Fur', id: 'Fur' },
  { name: 'Hat', id: 'Hat' },
  { name: 'Mouth', id: 'Mouth' },
]

export type CollectionDesign = 'multi' | 'grid' | 'table'

export const CollectionTableSkeltonItemData = [
  {
    isImageSkeleton: true,
    isDataSkeleton: false,
    imageSkeletonCss: 'w-12 h-12',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[79px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[69px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[74px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[52px]',
  },
  {
    isImageSkeleton: false,
    dataSkeletonCss: 'h-5 w-[62px]',
    isDataSkeleton: true,
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[73px]',
    imageSkeletonCss: 'w-12 h-12',
  },
]
export const CollectionTableSkeltonActivityData = [
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[59px]',
  },
  {
    isImageSkeleton: true,
    isDataSkeleton: true,
    isBelowDataSkeleton: true,
    isBelowDataSkeletonCSS: 'h-3 w-10',
    imageSkeletonCss: 'w-12 h-12',
    dataSkeletonCss: 'h-5 w-[163px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    isBelowDataSkeleton: true,
    isBelowDataSkeletonCSS: 'h-3 w-[83px]',
    dataSkeletonCss: 'h-5 w-[58px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[88px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[97px]',
  },
  {
    isImageSkeleton: false,
    dataSkeletonCss: 'h-5 w-[96px]',
    isDataSkeleton: true,
  },
  {
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[30px]',
  },
]
export const ColumnsItem = [
  { colSpan: 1, header: 'Item', accessor: 'item' },
  { colSpan: 1, header: 'Current price', accessor: 'currentPrice' },
  { colSpan: 1, header: 'Best offer', accessor: 'bestOffer' },
  { colSpan: 1, header: 'Last sale', accessor: 'lastSale' },
  { colSpan: 1, header: 'Rarity', accessor: 'rarity' },
  { colSpan: 1, header: 'Owner', accessor: 'owner' },
  { colSpan: 1, header: 'Time listed', accessor: 'timeListed' },
]
export const ColumnsActivity = [
  { colSpan: 1, header: 'Event', accessor: 'event' },
  { colSpan: 1, header: 'Item', accessor: 'item' },
  { colSpan: 1, header: 'Price', accessor: 'price' },
  { colSpan: 1, header: 'Date', accessor: 'data' },
  { colSpan: 1, header: 'From', accessor: 'form' },
  { colSpan: 1, header: 'To', accessor: 'to' },
]
