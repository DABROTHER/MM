import { IconMulti, IconGrid } from 'design-systems/Atoms/Icons'

export const PROFILE_VALUE = [
  { name: 'Collected', id: 'collected' },
  { name: 'Created', id: 'created' },
  { name: 'Favorited', id: 'favorite' },
  { name: 'Activity', id: 'activity' },
]
export const ALLTIME_CATEGORY = [
  { name: 'All Time', id: 'AllTime' },
  { name: '24h', id: '1' },
  { name: '7d', id: '7d' },
  { name: '30d', id: '30d' },
]
export const PROFILEFINAL_TAB = [
  { value: 'multi', Label: IconMulti, type: 'component' },
  { value: 'grid', Label: IconGrid, type: 'component' },
]
export const PROFILEFINAL_EVENT = [
  { name: 'All items', id: 'All items' },
  { name: 'Single items', id: 'Single items' },
  { name: 'Bundles', id: 'Bundles' },
]
export const ActivityTableSkeltonActivityData = [
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[70px]',
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
    dataSkeletonCss: 'h-5 w-[60px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[40px]',
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[100px]',
  },
  {
    isImageSkeleton: false,
    dataSkeletonCss: 'h-5 w-[80px]',
    isDataSkeleton: true,
  },
  {
    isImageSkeleton: false,
    isDataSkeleton: true,
    dataSkeletonCss: 'h-5 w-[80px]',
  },
]
