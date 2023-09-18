export interface collectionsDetailsProps {
  exploreBlockChain: ExploreBlock[]
  // category: ExploreBlock[]
  onChangeFilter: (filter: FilterValues) => void
}

type FilterValues = {
  [key: string]: string | boolean
}
