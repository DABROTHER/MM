import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS, getQueries } from 'utils'
const BASE_URL = 'https://2ar4gq9xj4.execute-api.us-east-1.amazonaws.com/dev'
const URL = 'https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev'
const LUNCH_URL = 'https://paikovknjl.execute-api.us-west-2.amazonaws.com/dev'
const TRENDING_URL = 'https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev'
const GET_SPOT_LIGHT = 'https://z7nmqllzr7.execute-api.us-west-2.amazonaws.com/dev'
class HomeService {
  getAllNFT = async (query: NFTListQuery) => {
    return CoreAPIService.get<NFTListResponse>(`${BASE_URL}${API_ENDPOINTS.PRIVATE}?${getQueries(query)}`).then(res => {
      return {
        code: res.code,
        data: res.data,
        message: res.message,
        status: res.status,
      }
    })
  }
  getCollectionTable = (query?: CollectionTableListQuery) => {
    return CoreAPIService.get<HomeCollectionResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_COLECTION_TABLE}?${getQueries(query as CollectionTableListQuery)}`
    )
  }
  getLaunchpad = (walletAddress: string) => {
    return CoreAPIService.get<HomeLaunchpadListResponse>(
      `${LUNCH_URL}${API_ENDPOINTS.PUBLIC.GET_LAUNCHPAD}?${getQueries({ walletAddress })}`
    )
  }
  getTrending = () => {
    return CoreAPIService.get<HomeTrendingCategoryResponse>(`${TRENDING_URL}${API_ENDPOINTS.PUBLIC.GET_TRENDING}`)
  }
  getSpotLight = () => {
    return CoreAPIService.get<HomeSpotlightResponse>(`${GET_SPOT_LIGHT}${API_ENDPOINTS.PUBLIC.GET_SPOT_LIGHT}`)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HomeService()
