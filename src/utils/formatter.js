export const formatPrice = (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const formatNum = (number) => {
  if (number === null || isNaN(number)) {
    return 'Nil';
  }

  return number.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPercentageChange = (percentageChange) => {
  if (percentageChange < 0) {
    const formattedChange = `${Math.abs(percentageChange).toFixed(2)}%`;
    return formattedChange;
  }

  return `${percentageChange.toFixed(2)}%`;
};
