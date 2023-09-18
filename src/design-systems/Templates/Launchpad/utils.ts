export const CATEGORY_LAUNCHPAD = [
  { name: 'Active', id: 'active' },
  { name: 'Upcoming', id: 'upcoming' },
  { name: 'Past', id: 'past' },
]
export const LaunchpadCss = 'grid gap-4 sm:grid-cols-2 slg:grid-cols-3 xlg:grid-cols-4'

export const buttonCSS =
  'absolute left-4 top-4 inline-flex !h-12 w-[105px]  items-center justify-center  rounded-sm border-none  bg-[#e2e2e299] px-8  py-4 text-center font-Poppins text-base font-bold text-neutral-800 backdrop-blur-[20px]  group-hover:bg-neutral-800 group-hover:text-neutral-100 smd:h-12 smd:rounded-sm lmd:mt-0 lmd:hidden lmd:h-12 lmd:w-[105px]'

export const CardInfo = (type: string) => {
  return type === 'past'
    ? [{ Started: '25 ETH', Status: 'Ended' }]
    : ([{ Minting: 'Jul 20', Price: '0.05 ETH' }] as [{ [key: string]: string }])
}
