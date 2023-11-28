import { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WidgetCard from './WidgetCard';
import LoadingWidget from './LoadingWidget';
import HomeLayout from './HomeLayout';
import useCoinQuery from '../../hooks/useCoinQuery';
import LoadingText from '../LoadingText';
import { Tooltip } from '@nextui-org/react';

const ForwardedLink = forwardRef((props, ref) => <Link ref={ref} {...props} />);

const Home = () => {
  const { isLoading, error, data } = useCoinQuery();
  const navigate = useNavigate();

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
          content={`Click widget for more details on ${coinInfo.symbol.toUpperCase()}`}
          color='success'
          placement='top-end'
          offset={-10}
          className='cursor-pointer select-none'
          onClick={() => navigate(`/${coinInfo.symbol}`)}>
          <ForwardedLink to={`/${coinInfo.symbol}`}>
            <WidgetCard coinInfo={coinInfo} />
          </ForwardedLink>
        </Tooltip>
      ))}
    </HomeLayout>
  );
};

export default Home;
