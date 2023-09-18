import moment from 'moment'
import { useRef } from 'react'

import { debounce } from './debounce'

import { AnyObject } from 'interfaces'

export const getQueries = (obj: AnyObject): string => {
  return Object.keys(obj ?? {}).reduce((val, key) => `${val}${key}=${obj[key]}&`, '')
}

export const parseData = (data: string) => {
  return JSON.parse(data)
}

export const getExtentionOfImage = (url: string) => {
  if (typeof url === 'string') return url.split('.').pop()
  return ''
}
export const formatLike = (likes: number) => {
  const billion = 1000000000
  const million = 1000000
  const thousand = 1000

  if (likes >= billion) {
    return (likes / billion).toFixed(1) + 'B'
  } else if (likes >= million) {
    return (likes / million).toFixed(1) + 'M'
  } else if (likes >= thousand) {
    return (likes / thousand).toFixed(1) + 'K'
  }

  return likes?.toString()
}
export const formatAddress = (address: string) =>
  `${address?.substring(0, 5)}...${address?.substring(address?.length - 4)}`
export const formatTime = (time: number) => {
  return moment(time).format('YYYY-MM-DD h:mm:ss a')
}
export const compareStringsInsentively = (str1: string, str2: string): boolean =>
  str1?.toLowerCase() === str2?.toLowerCase()

export function filterEmptyValues<T extends Record<string, any>>(inputObj: T): T {
  const result: Partial<T> = {}

  for (const key in inputObj) {
    if (Object.prototype.hasOwnProperty.call(inputObj, key)) {
      const value = inputObj[key]

      // Customize this condition to check for your definition of empty
      if (value !== undefined && value !== null && value !== '') {
        result[key] = value
      }
    }
  }

  return result as T
}
export function getTimeFromTimestamp(timestamp: string) {
  const dateTime = new Date(timestamp)
  const time = dateTime.toTimeString().slice(0, 8)
  return time
}

export function getDateFromTimestamp(datestamp: string) {
  const dateTime = new Date(datestamp)
  const date = dateTime.toDateString()
  return date
}
export function getCurrentDate() {
  const now = new Date()
  return now.toDateString()
}

export const convertCurrencyFormate = (value: number) => value.toLocaleString('en-KS')

export const convertTimeToAgo = (date: number) => {
  const newDate: any = new Date()
  const seconds = Math.floor((newDate - date) / 1000)
  let interval = seconds / 31536000
  if (interval > 1) {
    return Math.floor(interval) + ' years ago'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + ' months ago'
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + ' days ago'
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago'
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago'
  }
  return Math.floor(seconds) + ' seconds ago'
}

export function filterEmptyValue<T extends Record<string, any>>(inputObj: T): T {
  const result = {} as T

  for (const key in inputObj) {
    if (Object.prototype.hasOwnProperty.call(inputObj, key)) {
      const value = inputObj[key]

      if (typeof value === 'object' && !Array.isArray(value)) {
        // Recursively filter nested objects
        const nestedFiltered = filterEmptyValue(value)
        if (Object.keys(nestedFiltered).length > 0) {
          result[key] = nestedFiltered
        }
      } else if (value !== undefined && value !== null && value !== '') {
        result[key] = value
      }
    }
  }

  return result
}
