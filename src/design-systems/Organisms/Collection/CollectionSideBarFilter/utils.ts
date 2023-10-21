export const COLLECTION_EVENT_TYPE = [
  { name: 'All', id: 'all' },
  { name: 'Listings', id: 'listing' },
  { name: 'Offers', id: 'offer' },
  { name: 'Sales', id: 'sale' },
  { name: 'Minted', id: 'minted' },
  { name: 'Transfers', id: 'transfer' },
]

export const switchValueOfKey = (data: ExploreBlock[]) => {
  return data?.map(({ id, name, symbol, v, imageUrl, greyImageUrl }) => ({
    id,
    name: symbol?.toUpperCase(),
    symbol: name,
    v,
    imageUrl,
    greyImageUrl,
  })) as ExploreBlock[]
}

export const convertIntoStringArrayToObject = (jsonData: string[]) =>
  jsonData.map(value => ({ name: value, id: value }))
