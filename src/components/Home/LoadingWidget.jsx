import React from 'react';

const LoadingWidget = () => {
  return [['skeleton-1'], ['skeleton-2'], ['skeleton-3'], ['skeleton-4']].map(
    (skeleton) => (
      <li
        key={skeleton}
        className='space-y-4 p-4 rounded-xl bg-card-background max-w-2xl border border-gray-700 mx-auto'>
        <div className='flex justify-between items-center w-full'>
          <span className='flex items-center gap-4 md:gap-6'>
            <div className='flex rounded-full w-14 h-14 bg-[#4a525d] animate-pulse' />
            <span className='flex items-baseline gap-2 md:gap-3'>
              <div className='w-24 md:w-32 h-6 md:h-8 rounded-lg bg-[#4a525d] animate-pulse' />
              <div className='w-8 h-3 md:h-4 rounded-lg bg-[#4a525d] animate-pulse' />
            </span>
          </span>
          <div className='w-20 md:w-24 h-3 md:h-4 rounded-lg bg-[#4a525d] animate-pulse' />
        </div>
        <div className='w-24 h-3 md:h-4 mx-auto md:mx-0 rounded-lg bg-[#4a525d] animate-pulse' />
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
          <div className='w-32 h-3 md:h-4 mx-auto md:mx-0 rounded-lg bg-[#4a525d] animate-pulse' />
          <div className='w-44 h-3 md:h-4 mx-auto md:mx-0 rounded-lg bg-[#4a525d] animate-pulse' />
        </div>
      </li>
    )
  );
};

export default LoadingWidget;
