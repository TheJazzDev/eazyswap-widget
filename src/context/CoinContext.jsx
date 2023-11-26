import React, { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const CoinProvider = ({ children, loadingState }) => {
  const [selectedCoin, setSelectedCoin] = useState({});

  const setCoin = (coin) => {
    setSelectedCoin(coin);
  };
  console.log(loadingState);

  const value = { selectedCoin, setCoin,  loadingState };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};

export const useCoinDetails = () => {
  return useContext(CoinContext);
};
