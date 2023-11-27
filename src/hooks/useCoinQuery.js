import { useQuery } from '@tanstack/react-query';
import { getCoins } from '../api/getCoins';

export const useCoinsQuery = () => {
  // Lower staleTime and cacheTime increase the risk of frequently hitting rate limits on the CoinGecko API
  return useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
    staleTime: 300000, // 5 minutes
    cacheTime: 900000, // 15 minutes
    retry: 3,
    retryDelay: 60000, // 1 minute
  });
};

export default useCoinsQuery;
