export const LOCAL_ACCESS_TOKEN_KEY = 'access-token'
export const LOCAL_WALLET_ADDRESS_KEY = 'wallet-address'
export const LOCAL_USER_DETAILS_KEY = 'user-details'
export const LOCAL_GLOBAL_STATE = 'clubrare-global-state'
export const LOCAL_SOLANA_STATE = 'clubrare-solana-state'
export const saveAccessToken = (token: string) => localStorage.setItem(LOCAL_ACCESS_TOKEN_KEY, token)
export const disableAccessToken = () => localStorage.removeItem(LOCAL_ACCESS_TOKEN_KEY)
export const checkAccessToken = () => localStorage.getItem(LOCAL_ACCESS_TOKEN_KEY)
export const saveWalletAddress = (address: string) => localStorage.setItem(LOCAL_WALLET_ADDRESS_KEY, address)
export const disableWalletAddress = () => localStorage.removeItem(LOCAL_WALLET_ADDRESS_KEY)
export const checkWalletAddress = () => localStorage.getItem(LOCAL_WALLET_ADDRESS_KEY) as string
export const saveUserDetails = (val: string) => localStorage.setItem(LOCAL_USER_DETAILS_KEY, val)
export const disableUserDetails = () => localStorage.removeItem(LOCAL_USER_DETAILS_KEY)
export const checkUserDetails = () => localStorage.getItem(LOCAL_USER_DETAILS_KEY)
