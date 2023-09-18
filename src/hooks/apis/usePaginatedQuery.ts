import { useInfiniteQuery } from 'react-query'

import { PAGE_SIZE } from 'utils'
import { AnyFunction, AnyObject } from 'interfaces'

export const usePaginatedQuery = <T>(
  key: Array<T>,
  fetcher: AnyFunction,
  formatter: AnyFunction,
  options?: AnyObject,
  fetcherParams?: AnyObject
) => {
  const result = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) => {
      return fetcher({ limit: PAGE_SIZE, page: pageParam, ...fetcherParams })
    },
    {
      getNextPageParam: (lastResponse, allResponses) => {
        const page = allResponses.length
        if ((formatter(lastResponse)?.length ?? 0) === PAGE_SIZE) {
          return page + 1
        } else {
          return
        }
      },
      ...options,
    }
  )

  return { ...result, data: result?.data?.pages }
}
