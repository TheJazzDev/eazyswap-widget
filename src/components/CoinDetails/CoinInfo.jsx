export const getCoinStats = (selectedCoin, formatPrice, formatNum) => [
  ['Coin Ranking', selectedCoin.rank],
  ['Price', formatPrice(selectedCoin.currentPrice)],
  ['Market Capitalization', formatPrice(selectedCoin.marketCap)],
  ['Volume', formatPrice(selectedCoin.volume)],
  ['Max Supply', formatNum(selectedCoin.maxSupply)],
  ['Circulating Supply', formatNum(selectedCoin.circulatingSupply)],
  ['Categories', selectedCoin.categories.join(', ')],
  [
    'Website',
    <a
      href={selectedCoin.website}
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-500'>
      {selectedCoin.website}
    </a>,
  ],
];

export const getCoinPercentage = (selectedCoin) => [
  [selectedCoin.percentageChange_1h, '1h'],
  [selectedCoin.percentageChange_24h, '24h'],
  [selectedCoin.percentageChange_7d, '7d'],
  [selectedCoin.percentageChange_30d, '30d'],
];
