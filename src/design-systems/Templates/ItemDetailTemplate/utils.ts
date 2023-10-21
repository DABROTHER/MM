import { ArrowIcon, ItemActivityIcon, ListIcon, OffersIcon, WatchIcon } from 'design-systems/Atoms/Icons'
import ItemActivity from 'design-systems/Organisms/ItemDetails/ItemActivity'
import ListingDetails from 'design-systems/Organisms/ItemDetails/ListingDetails'
import OffersDetails from 'design-systems/Organisms/ItemDetails/OffersDetails'
import PriceHistory from 'design-systems/Organisms/ItemDetails/PriceHistory'

export const CATEGORY_ITEM_DETAILS = [
  { name: 'About', id: 'about' },
  { name: 'Properties', id: 'properties' },
  { name: 'Details', id: 'details' },
]
export const ITEM_DETAILS_DATA = [
  {
    FirstIcon: WatchIcon,
    SecondIcon: ArrowIcon,
    text: 'Price history',
    Children: PriceHistory,
  },
  {
    FirstIcon: ListIcon,
    SecondIcon: ArrowIcon,
    text: 'Listings',
    Children: ListingDetails,
  },
  {
    FirstIcon: OffersIcon,
    SecondIcon: ArrowIcon,
    text: 'OffersDetails',
    Children: OffersDetails,
  },
  {
    FirstIcon: ItemActivityIcon,
    SecondIcon: ArrowIcon,
    text: 'Item activity',
    Children: ItemActivity,
  },
]
