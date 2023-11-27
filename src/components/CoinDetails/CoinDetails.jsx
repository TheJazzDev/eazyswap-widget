import { useRef, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { useCoinsQuery } from '../../hooks/useCoinQuery';
import {
  formatNum,
  formatPercentageChange,
  formatPrice,
} from '../../utils/formatter';
import parse from 'html-react-parser';
import LoadingText from '../LoadingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { getCoinPercentage, getCoinStats } from './CoinInfo';

const CoinDetails = () => {
  const { symbol } = useParams();
  const { isLoading, error, data } = useCoinsQuery();
  const details = useRef();
  const tl = useRef();

  const selectedCoin = Array.isArray(data)
    ? data.find((coin) => symbol === coin.symbol)
    : null;

  useLayoutEffect(() => {
    let ctx =
      data &&
      gsap.context(() => {
        tl.current = gsap
          .timeline({
            defaults: { opacity: 0, duration: 0.5, ease: 'back', delay: 1 },
          })
          .from('img', { scale: 0, duration: 1 })
          .from('h3, .coinStats', { x: 100, stagger: 0.2 }, '-0.2')
          .from('.coinPercentage', { scale: 0, stagger: 0.2 }, '0.4')
          .from('.description', { y: 100 }, '<0.2');
      }, details);

    return () => ctx && ctx.revert();
  }, []);

  if (isLoading || error) {
    return (
      <div className='h-screen flex items-center justify-center p-6 text-white text-7xl'>
        <LoadingText isLoading={isLoading} error={error} />
      </div>
    );
  }

  const coinStats = getCoinStats(selectedCoin, formatPrice, formatNum);
  const coinPercentage = getCoinPercentage(selectedCoin);

  return (
    <section
      ref={details}
      className='flex flex-col items-center justify-center gap-8 px-4 md:px-6 text-[#8a919d] max-w-4xl mx-auto pb-12 mt-24 overflow-hidden'>
      <div className='w-full'>
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
          {coinStats.map(([label, value]) => (
            <span
              key={label}
              className='md:text-left mx-0 text-sm md:text-base block coinStats'>
              <p className='font-semibold font-cascadia-italic inline max-w-sm'>
                {label}:{' '}
              </p>
              {value}
            </span>
          ))}
        </div>
      </div>
      <div className='flex gap-4 lg:gap-8'>
        {coinPercentage.map(([percentageChange, duration]) => {
          const formattedChange = formatPercentageChange(percentageChange);
          return (
            <div key={duration} className='text-sm md:text-base coinPercentage'>
              <p className='text-center font-semibold font-cascadia-italic'>
                {duration}
              </p>
              <span>
                <FontAwesomeIcon
                  icon={formattedChange > 0 ? faArrowUp : faArrowDown}
                  className={
                    formattedChange > 0 ? 'text-green-500' : 'text-red-500'
                  }
                />
                <p
                  className={`inline pl-0.5 md:pl-1 ${
                    formattedChange > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                  {formattedChange}
                </p>
              </span>
            </div>
          );
        })}
      </div>
      <div>
        <p className='text-base md:text-lg text-justify description'>
          {parse(selectedCoin.description)}
        </p>
      </div>
    </section>
  );
};

export default CoinDetails;
