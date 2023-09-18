import axios from 'axios'

export const getSearchPopular = async () => {
  try {
    const response = await axios.get('https://y5u9hx13fi.execute-api.us-west-2.amazonaws.com/dev/collection-popular')
    const data = response.data
    return data
  } catch (error) {
    return error
  }
}

export const getSearchItem = async (searchquery: string) => {
  try {
    const response = await axios.get(
      `https://y5u9hx13fi.execute-api.us-west-2.amazonaws.com/dev/collection-search?search=${searchquery}`
    )
    const data = response.data
    return data
  } catch (error) {
    return error
  }
}
