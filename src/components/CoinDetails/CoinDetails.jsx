import { useParams } from 'react-router-dom';
import { useCoinsQuery } from '../../hooks/useCoinQuery';
import { formatNum, formatPrice } from '../../utils/formatter';
import parse from 'html-react-parser';

const CoinDetails = () => {
  const { symbol } = useParams();
  const { isLoading, error, data } = useCoinsQuery();

  const selectedCoin = Array.isArray(data)
    ? data.find((coin) => symbol === coin.symbol)
    : null;

  if (isLoading || error) {
    return (
      <div className='h-screen flex items-center justify-center p-6'>
        {isLoading && (
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
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-[#8a919d] max-w-4xl mx-auto pb-12 mt-24'>
      <div className=''>
        <img
          src={selectedCoin.imageUrlLarge}
          alt='Coin Image'
          className='lg:float-left mx-auto lg:mx-8'
        />
        <div className='space-y-4 lg:mt-6 lg:pl-8'>
          <h3 className='text-2xl md:text-4xl text-white font-cascadia-italic inline space-y-6'>
            {selectedCoin.name}
            <span className='text-sm md:text-lg font-cascadia-normal text-[#8a919d] pl-4'>
              {selectedCoin.symbol}
            </span>
          </h3>
          {[
            ['Coin Ranking', selectedCoin.rank],
            ['Price', formatPrice(selectedCoin.currentPrice)],
            ['Market Capitalization', formatPrice(selectedCoin.marketCap)],
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
          ].map(([label, value]) => (
            <span
              key={label}
              className='md:text-left mx-0 text-sm md:text-base block'>
              <p className='font-semibold font-cascadia-italic inline max-w-sm'>
                {label}:{' '}
              </p>
              {value}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className='text-base md:text-lg text-justify '>
          {parse(selectedCoin.description)}
        </p>
      </div>
    </div>
  );
};

export default CoinDetails;
