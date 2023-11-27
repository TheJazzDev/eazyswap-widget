import React, { useState, useEffect } from 'react';

const LoadingText = ({ isLoading, error }) => {
  const [showLoadingText, setShowLoadingText] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isLoading) {
      timeoutId = setTimeout(() => {
        setShowLoadingText(true);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  return (
    <>
      {' '}
      {showLoadingText && (
        <p className='text-white text-base md:text-lg mx-auto max-w-2xl'>
          It seems that retrieving the data is taking longer than expected.
          Don't worry; we are attempting to refresh and fetch the data again.
        </p>
      )}
      {error && (
        <p className='text-white text-base md:text-lg mx-auto max-w-2xl'>
          We encountered an error fetching coin data. Don't worry; we'll attempt
          to refresh and fetch the data again.
        </p>
      )}
    </>
  );
};

export default LoadingText;
