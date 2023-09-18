import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS, getQueries } from 'utils'
import { ExploreFilters } from 'interfaces'
class ExploreService {
  getExplore = (filters: ExploreFilters) => {
    const URL = `https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev`

    return CoreAPIService.get<ExploreListResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_EXPLORE_PAGE}?${getQueries(filters)}`
    )
  }
  getExploreCategory = () => {
    const URL = `https://hcvrp9ot4b.execute-api.us-west-2.amazonaws.com/dev${API_ENDPOINTS.PUBLIC.GET_EXPLORE_CATEGORY}`

    return CoreAPIService.get<ExploreCategoryResponse>(URL)
  }
  getExploreBlackChain = () => {
    const URL = `https://5wb88l9zs7.execute-api.us-west-2.amazonaws.com/dev/blockchain`

    return CoreAPIService.get<ExploreBlockChainResponse>(URL)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ExploreService()
