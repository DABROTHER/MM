export const resourcesDesc = [
  {
    type: 'getting started',
    description: 'Learn how to create an account, set up your wallet, and what you can do on Modern Museum',
  },
  {
    type: 'buying',
    description: "Learn how to purchase your first NFT, understand gas fees, and see what's gas free on Modern Museum",
  },
  {
    type: 'selling',
    description: 'Learn how to list your NFTs for sale and understand the different ways to sell your NFTs',
  },
  {
    type: 'creating',
    description: 'Learn how to create your first NFT and how to create NFT collections',
  },
  {
    type: 'faq',
    description: 'Learn answers to frequently asked questions on Modern Museum',
  },
  {
    type: 'developers',
    description: 'Learn how you can develop with Modern Museum',
  },
]

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
