import axios from 'axios';

// Coin gecko api url
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/';

// Coins to fetch
const symbols = ['bitcoin', 'ethereum', 'binancecoin', 'tron'];

// Fetch coin data and return specified params
async function fetchCoinData(symbol) {
  try {
    const [coinInfoResponse, marketChartResponse] = await Promise.all([
      axios.get(`${COINGECKO_API_URL}${symbol}`),
      axios.get(`${COINGECKO_API_URL}${symbol}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: 1,
        },
      }),
    ]);

    if (coinInfoResponse.status === 200 && marketChartResponse.status === 200) {
      const coinInfo = coinInfoResponse.data;
      const marketChartData = marketChartResponse.data;
      // console.log(coinInfo)

      // Extracting the latest two data points for hourly change calculation
      const latestDataPoint =
        marketChartData.prices[marketChartData.prices.length - 1];
      const secondLatestDataPoint =
        marketChartData.prices[marketChartData.prices.length - 2];

      // Calculating hourly change percentage
      const percentageChange_1h =
        ((latestDataPoint[1] - secondLatestDataPoint[1]) /
          secondLatestDataPoint[1]) *
        100;

      return {
        name: coinInfo.name,
        symbol: coinInfo.symbol,
        rank: coinInfo.coingecko_rank,
        categories: coinInfo.categories,
        website: coinInfo.links.homepage[0],
        imageUrlSmall: coinInfo.image?.small,
        imageUrlLarge: coinInfo.image?.large,
        description: coinInfo.description?.en,
        maxSupply: coinInfo.market_data.max_supply,
        marketCap: coinInfo.market_data.market_cap.usd,
        currentPrice: coinInfo.market_data.current_price.usd,
        circulatingSupply: coinInfo.market_data.circulating_supply,
        percentageChange_24h: coinInfo.market_data.price_change_percentage_24h,
        percentageChange_1h,
      };
    } else {
      throw new Error(`Error fetching CoinGecko data for ${symbol}`);
    }
  } catch (error) {
    throw new Error('Error fetching CoinGecko data:', error);
  }
}

// Fetch data for each symbol in parallel using Promise.all and map
export async function getCoins() {
  try {
    const coinData = await Promise.all(
      symbols.map(async (symbol) => fetchCoinData(symbol))
    );

    return coinData;
  } catch (error) {
    throw new Error('Error fetching CoinGecko data:', error);
  }
}
