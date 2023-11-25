import { formatPrice, formatPercentageChange } from '../../utils/formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const WidgetCard = ({ coin }) => {
  return (
    <li className='space-y-4 text-[#8a919d] p-4 rounded-xl bg-card-background max-w-2xl border border-gray-700 mx-auto'>
      <div className='flex justify-between items-center w-full'>
        <span className='flex items-center gap-4 md:gap-6'>
          <img src={coin.imageUrl} alt={coin.name} className='inline' />
          <h3 className='text-xl md:text-3xl text-white font-cascadia-italic inline'>
            {coin.name}{' '}
            <span className='text-xs md:text-sm font-cascadia-normal text-[#8a919d]'>
              {coin.symbol}
            </span>
          </h3>
        </span>
        <div className='flex gap-4'>
          {[
            [coin.percentageChange_1h, '1h'],
            [coin.percentageChange_24h, '24h'],
          ].map(([percentageChange, duration]) => {
            const formattedChange = formatPercentageChange(percentageChange);
            return (
              <div key={formattedChange} className='text-xs md:text-sm'>
                <p className='font-semibold font-cascadia-italic'>
                  {duration}%
                </p>
                <span>
                  <FontAwesomeIcon
                    icon={formattedChange > 0 ? faArrowUp : faArrowDown}
                    className={
                      formattedChange > 0 ? 'text-green-500' : 'text-red-500'
                    }
                  />
                  <p
                    className={`inline pl-0.5 ${
                      formattedChange > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {formattedChange}
                  </p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <p className='md:text-left mx-0 text-xs md:text-sm'>
        <span className='font-cascadia-italic inline'> Coin Rank: </span>
        {coin.rank}
      </p>
      <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
        <span className='text-xs md:text-sm'>
          <p className='font-semibold font-cascadia-italic inline'>Price: </p>
          {formatPrice(coin.currentPrice)}
        </span>
        <span className='text-xs md:text-sm'>
          <p className='font-semibold font-cascadia-italic inline'>
            Market Cap:{' '}
          </p>
          {formatPrice(coin.marketCap)}
        </span>
      </div>
    </li>
  );
};

export default WidgetCard;
