import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS, getQueries } from 'utils'

const BASE_URL = 'https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev/'

class TrendingService {
  getAllTrendingCollection = async (Query: TrendingQuery) => {
    return CoreAPIService.get<any>(`${BASE_URL}${API_ENDPOINTS.PUBLIC.GET_TRENDING_TABLE}?${getQueries(Query)}`)
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new TrendingService()
