import { useQuery } from '@tanstack/react-query';
import { getCoins } from '../../api/getCoins';
import WidgetCard from './WidgetCard';
import LoadingWidget from './LoadingWidget';
import Layout from './Layout';

const Home = () => {
  const { status, error, data } = useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
    staleTime: 3600000,
    cacheTime: 7200000,
    retry: 3,
    retryDelay: 60000,
  });

  if (status === 'pending' || error) {
    return (
      <Layout>
        <LoadingWidget />
      </Layout>
    );
  }

  return (
    <Layout>
      {data && data.map((coin) => <WidgetCard key={coin.name} coin={coin} />)}
    </Layout>
  );
};

export default Home;
