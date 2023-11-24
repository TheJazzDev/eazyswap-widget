export const formatPrice = (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const formatPercentageChange = (percentageChange) => {
  const formattedChange = `${Math.abs(percentageChange).toFixed(2)}%`;

  if (percentageChange > 0) {
    return parseFloat(formattedChange);
  }

  return parseFloat(formattedChange);
};
