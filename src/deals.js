export const ASSOCIATE_TAG = 'habanany0c-20'

export const withAssociateTag = (url) => {
  const link = new URL(url)
  link.searchParams.set('tag', ASSOCIATE_TAG)
  return link.toString()
}

export const deals = [
  {
    id: 'zigbee-dongle',
    category: 'Smart home',
    title: 'Build a more reliable smart home with a local Zigbee coordinator',
    summary: 'A practical starting point for connecting Zigbee sensors and switches to Home Assistant without depending on a cloud hub.',
    note: 'Best for Home Assistant users',
    url: withAssociateTag('https://www.amazon.com/dp/B09KXTCMSC'),
  },
  {
    id: 'kasa-smart-plug',
    category: 'Smart home',
    title: 'A compact smart plug for schedules, voice control and automations',
    summary: 'A simple way to automate lamps, fans and small appliances while keeping the setup approachable for beginners.',
    note: 'Easy first automation',
    url: withAssociateTag('https://www.amazon.com/dp/B07RCNB2L3'),
  },
  {
    id: 'airpods-pro',
    category: 'Audio',
    title: 'Noise-canceling earbuds for work, commuting and travel',
    summary: 'A familiar all-purpose option for Apple users who want active noise cancellation and a pocketable charging case.',
    note: 'For Apple users',
    url: withAssociateTag('https://www.amazon.com/dp/B0CHWRXH8B'),
  },
  {
    id: 'fire-tv',
    category: 'Streaming',
    title: 'A small 4K streaming upgrade for the living room',
    summary: 'An easy way to add modern streaming apps and voice search to a compatible television.',
    note: 'Simple TV upgrade',
    url: withAssociateTag('https://www.amazon.com/dp/B0BW2L1WKH'),
  },
  {
    id: 'mx-master',
    category: 'Workspace',
    title: 'A comfortable productivity mouse for long workdays',
    summary: 'Designed for precise scrolling and multi-device workflows without turning a desk setup into a complicated project.',
    note: 'Workspace favorite',
    url: withAssociateTag('https://www.amazon.com/dp/B09HM94VDS'),
  },
]

export const bounties = [
  {
    id: 'prime-young-adult',
    title: 'Prime for Young Adults',
    description: 'See Amazon’s current eligibility details and trial terms for young adults and eligible students.',
    url: withAssociateTag('https://www.amazon.com/amazonprime?primeCampaignId=prime_young_adult'),
  },
  {
    id: 'audible',
    title: 'Audible membership',
    description: 'Check Amazon for the current Audible membership offer and terms before signing up.',
    url: withAssociateTag('https://www.amazon.com/hz/audible/mlp/membership/premiumplus'),
  },
  {
    id: 'amazon-haul',
    title: 'Amazon Haul',
    description: 'Browse Amazon’s current selection, prices and shipping terms directly on the offer page.',
    url: withAssociateTag('https://www.amazon.com/haul'),
  },
]
