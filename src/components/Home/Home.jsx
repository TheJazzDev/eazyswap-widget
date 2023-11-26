import { Link } from 'react-router-dom';
import WidgetCard from './WidgetCard';
import LoadingWidget from './LoadingWidget';
import HomeLayout from './HomeLayout';
import useCoinQuery from '../../hooks/useCoinQuery';

const Home = () => {
  const { isLoading, error, data } = useCoinQuery();

  if (isLoading || error) {
    return (
      <HomeLayout>
        {isLoading && error && (
          <p className='text-white text-sm md:text-base mx-auto max-w-2xl'>
            It seems that retrieving the data is taking longer than expected.
            Don't worry; we are attempting to refresh and fetch the data again.
          </p>
        )}
        {error && (
          <p className='text-white text-sm md:text-base mx-auto max-w-2xl'>
            We encountered an error fetching coin data. Don't worry; we'll
            attempt to refresh and fetch the data again.
          </p>
        )}
        <LoadingWidget />
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      {data.map((coinInfo) => (
        <Link key={coinInfo.symbol} to={`/${coinInfo.symbol}`}>
          <WidgetCard coinInfo={coinInfo} />
        </Link>
      ))}
    </HomeLayout>
  );
};

export default Home;
