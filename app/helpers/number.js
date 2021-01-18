const addThousands = str => str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const formatNumber = num => addThousands(Number(num).toString());

export const formatCurrency = num => '$' + addThousands(Number(num).toFixed(2));

export const formatPercentage = num => addThousands(Number(num).toFixed(2));
