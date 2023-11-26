import { useQuery } from '@tanstack/react-query';
import { getCoins } from '../api/getCoins';

export const useCoinsQuery = () => {
  return useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
    staleTime: 3600000,
    cacheTime: 7200000,
    retry: 3,
    retryDelay: 60000,
  });
};

export default useCoinsQuery;
