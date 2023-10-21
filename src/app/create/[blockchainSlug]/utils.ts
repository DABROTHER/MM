import { CURRENT_TIME, convertDate2UTCTimeStamp, formatCustomTimeDate, getLastHourTime } from "utils"

export const NFT_PROPERTIES = ['Levels', 'Statistics', 'Properties']

// adding 1 hour for time auction   
export const DEFAULT_END_TIME = (new Date(getLastHourTime(new Date(CURRENT_TIME), -1)))