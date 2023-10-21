import CoreAPIService from './CoreAPIService'

import { API_ENDPOINTS, getQueries } from 'utils'
import {
  ArticleResponse,
  ResourceResponse,
  ResourceSearchQuery,
  ResourceTypeQuery,
  SingleArticleQuery,
  SingleArticleResponse,
} from './interfaces/resources'

const GET_RESOURCE_URL = 'https://0eirsxow2j.execute-api.us-west-2.amazonaws.com/dev'

class ResourceService {
  getTypeResource = (query: ResourceTypeQuery) => {
    return CoreAPIService.get<ResourceResponse>(
      `${GET_RESOURCE_URL}${API_ENDPOINTS.PUBLIC.GET_TYPE_RESOURCE}?${getQueries(query)}`
    )
  }
  getResource = () => {
    return CoreAPIService.get<ResourceResponse>(`${GET_RESOURCE_URL}${API_ENDPOINTS.PUBLIC.GET_RESOURCE}`)
  }

  getSingleArticle = (query: SingleArticleQuery) => {
    return CoreAPIService.get<SingleArticleResponse>(
      `${GET_RESOURCE_URL}${API_ENDPOINTS.PUBLIC.GET_SINGLE_ARTICLE}?${getQueries(query)}`
    )
  }

  getRelatedArticle = (query: SingleArticleQuery) => {
    return CoreAPIService.get<SingleArticleResponse>(
      `${GET_RESOURCE_URL}${API_ENDPOINTS.PUBLIC.GET_RELATED_ARTICLE}?${getQueries(query)}`
    )
  }

  getArticle = () => {
    return CoreAPIService.get<ArticleResponse>(`${GET_RESOURCE_URL}${API_ENDPOINTS.PUBLIC.GET_POPULAR_ARTICLE}`)
  }

  getSearchResource = (query: ResourceSearchQuery) => {
    return CoreAPIService.get<ResourceResponse>(
      `${GET_RESOURCE_URL}${API_ENDPOINTS.PUBLIC.GET_RESOURCE_SEARCH}?${getQueries(query)}`
    )
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ResourceService()
