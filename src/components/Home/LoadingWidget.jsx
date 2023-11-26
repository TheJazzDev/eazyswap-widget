import React from 'react';

const LoadingWidget = () => {
  return [['skeleton-1'], ['skeleton-2'], ['skeleton-3'], ['skeleton-4']].map(
    (skeleton) => (
      <li
        key={skeleton}
        className='space-y-5 md:space-y-5 p-4 rounded-xl bg-card-background w-full md:max-w-2xl lg:w-[500px] border border-gray-700 mx-auto'>
        <div className='flex justify-between items-center w-full'>
          <span className='flex items-center gap-4 md:gap-6'>
            <div className='flex w-[50px] h-[50px] md:w-13 md:h-13 rounded-full bg-[#4a525d] animate-pulse' />
            <span className='flex items-baseline gap-2 md:gap-3'>
              <div className='w-24 md:w-32 h-6 md:h-9 rounded-lg bg-[#4a525d] animate-pulse' />
              <div className='w-6 md:w-8 h-3 md:h-4 rounded-lg bg-[#4a525d] animate-pulse' />
            </span>
          </span>
          <div className='flex gap-3'>
            <div className='w-10 md:w-13 h-8 md:h-10 rounded-lg bg-[#4a525d] animate-pulse' />
            <div className='w-10 md:w-13 h-8 md:h-10 rounded-lg bg-[#4a525d] animate-pulse' />
          </div>
        </div>
        <div className='w-24 h-3 md:h-4 mx-auto md:mx-0 rounded-lg bg-[#4a525d] animate-pulse' />
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between'>
          <div className='w-32 h-3 md:h-4 mx-auto md:mx-0 rounded-lg bg-[#4a525d] animate-pulse' />
          <div className='w-44 md:w-56 h-3 md:h-4 mx-auto md:mx-0 rounded-lg bg-[#4a525d] animate-pulse' />
        </div>
      </li>
    )
  );
};

export default LoadingWidget;
