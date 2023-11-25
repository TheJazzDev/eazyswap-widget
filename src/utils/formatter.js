export const formatPrice = (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const formatPercentageChange = (percentageChange) => {
  if (percentageChange < 0) {
    const formattedChange = `${Math.abs(percentageChange).toFixed(2)}%`;
    return formattedChange;
  }

  return percentageChange.toFixed(2);
};
