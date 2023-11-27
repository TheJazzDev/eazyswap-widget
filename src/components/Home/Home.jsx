import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import WidgetCard from './WidgetCard';
import LoadingWidget from './LoadingWidget';
import HomeLayout from './HomeLayout';
import useCoinQuery from '../../hooks/useCoinQuery';
import LoadingText from '../LoadingText';
import { Tooltip } from '@nextui-org/react';

const ForwardedLink = forwardRef((props, ref) => <Link ref={ref} {...props} />);

const Home = () => {
  const { isLoading, error, data } = useCoinQuery();

  if (isLoading || error) {
    return (
      <HomeLayout>
        <LoadingText isLoading={isLoading} error={error} />
        <LoadingWidget />
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      {data.map((coinInfo) => (
        <Tooltip
          key={coinInfo.symbol}
          content={`Click for more ${coinInfo.symbol.toUpperCase()} details`}
          color='success'
          offset={-90}>
          <ForwardedLink to={`/${coinInfo.symbol}`}>
            <WidgetCard coinInfo={coinInfo} />
          </ForwardedLink>
        </Tooltip>
      ))}
    </HomeLayout>
  );
};

export default Home;
