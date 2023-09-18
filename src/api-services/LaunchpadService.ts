import CoreAPIService from './CoreAPIService'

import { getQueries, API_ENDPOINTS } from 'utils'

const URL = 'https://paikovknjl.execute-api.us-west-2.amazonaws.com/dev'
class LaunchpadService {
  getLaunchpad = (query: LaunchPadQuery) => {
    return CoreAPIService.get<LaunchpadListResponse>(
      `${URL}${API_ENDPOINTS.PUBLIC.GET_LAUNCHPAD_PAGE}?${getQueries(query)}`
    )
  }
  getLaunchpadBanner = () => {
    return CoreAPIService.get<LaunchpadBannerListResponse>(`${URL}${API_ENDPOINTS.PUBLIC.GET_LAUNCHPAD_BANNER_PAGE}`)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LaunchpadService()
