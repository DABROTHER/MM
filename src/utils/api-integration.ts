export const API_ENDPOINTS = {
  AUTH: {
    NONCE: '/user-nonce',
    VERIFY_SIGNATURE: '/user-verify',
  },
  PRIVATE: {
    POST_LAUNCHPAD_LIKE: '/launchpad-like',
    POST_CREATE_NFT: '/nft',
    PUT_ON_MARKETPLACE: '/nft-on-sale',
  },
  PUBLIC: {
    GET_LAUNCHPAD: '/launchpad-homepage',
    GET_TRENDING: '/collectionla-trending-category',
    GET_TRENDING_ARTS: '/market/gettrendingart',
    GET_SPOT_LIGHT: '/collectionla-spotlight',
    GET_LAUNCHPAD_PAGE: '/launchpad-list',
    GET_LAUNCHPAD_BANNER_PAGE: '/newest',
    GET_EXPLORE_PAGE: '/collectionla',
    GET_EXPLORE_CATEGORY: '/category',
    GET_EXPLORE_BLOCKCHAIN: '/blockchain',
    GET_POPULAR_SEARCH: '/collection-popular',
    GET_COLECTION_TABLE: '/collectionla-homepage',
    GET_TRENDING_TABLE: '/collectionla-list',
    GET_COLLECTION_PAGE: '/nft-list-v3',
    GET_COLLECTION_PROFILE_FINAL: '/collectionla-profile-tab',
    GET_COLLECTION_DETAILS: '/collectionla-detail',
    GET_COLLECTED_TAB: '/collectionla-collected-tab',
    GET_COLLECTION_VolumePrice: '/nft-total-volume-and-price',
    GET_COLLECTION_OWNER_DISTRIBUTION: '/nft-ownership',
    GET_COLLECTION_OWNER_TOP_50: '/nft-owner',
    GET_COLLECTION_PRICE_DISTRIBUTION: '/nft-offer-list',
    GET_PROFILE_FINAL: '/collectionla',
    GET_RESOURCE: '/resource',
    GET_POPULAR_ARTICLE: '/resource-popular-articles',
    GET_TYPE_RESOURCE: '/resource-type',
    GET_SINGLE_ARTICLE: '/resource-single-articles',
    GET_RELATED_ARTICLE: '/resource-related-api',
    GET_RESOURCE_SEARCH: '/resource-search',
    GET_PRE_SIGNED_URL: '/v1/getPreSignedUrl',
  },
} as const

export const QUERIES = {
  AUTH: {
    NONCE: 'user-nonce',
    VERIFY_SIGNATURE: 'user-verify',
  },
  PRIVATE: {
    POST_LAUNCHPAD_LIKE: 'launchpad-like',
    POST_CREATE_NFT: 'nft',
    PUT_ON_MARKETPLACE: 'nft-on-sale',
  },
  PUBLIC: {
    GET_LAUNCHPAD: '/launchpad-homepage',
    GET_TRENDING: 'market_gettrending',
    GET_TRENDING_ARTS: '/market/gettrendingart',
    GET_SPOT_LIGHT: '/collectionla-spotlight',
    GET_LAUNCHPAD_PAGE: 'launchpad_list',
    GET_EXPLORE_PAGE: 'collection',
    GET_POPULAR_SEARCH: 'collection_popular',
    GET_LAUNCHPAD_BANNER_PAGE: 'newest',
    GET_EXPLORE_CATEGORY: 'category',
    GET_EXPLORE_BLOCKCHAIN: 'blockchain',
    GET_COLECTION_TABLE: '/collectionla-homepage',
    GET_TRENDING_TABLE: '/collectionla-list',
    GET_COLLECTION_PAGE: 'nft-list-v3',
    GET_COLLECTION_DETAILS: 'collectionla-detail',
    GET_COLLECTION_VolumePrice: 'nft-total-volume-and-price',
    GET_COLLECTION_OWNER_TOP_50: 'nft-owner',
    GET_COLLECTION_OWNER_DISTRIBUTION: 'nft-ownership',
    GET_COLLECTION_PRICE_DISTRIBUTION: '/nft-offer-list',
    GET_PROFILE_FINAL: '/collectionla',
    GET_RESOURCE: '/resource',
    GET_POPULAR_ARTICLE: '/resource-popular-articles',
    GET_TYPE_RESOURCE: '/resource-type',
    GET_SINGLE_ARTICLE: '/resource-single-articles',
    GET_RELATED_ARTICLE: '/resource-related-api',
    GET_RESOURCE_SEARCH: '/resource-search',
    GET_COLLECTION_PROFILE_FINAL: '/collectionla-profile-tab',
    GET_PRE_SIGNED_URL: 'getPreSignedUrl',
  },
} as const
