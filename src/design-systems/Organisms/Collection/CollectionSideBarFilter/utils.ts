export const COLLECTION_EVENT_TYPE = [
  { name: 'All', id: 'All' },
  { name: 'Listings', id: 'Listings' },
  { name: 'Offers', id: 'Offers' },
  { name: 'Sales', id: 'Sales' },
  { name: 'Minted', id: 'Minted' },
  { name: 'Transfers', id: 'Transfers' },
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
