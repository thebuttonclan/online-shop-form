import values from 'lodash/values';
import sum from 'lodash/sum';

const parseNumber = num => (Number(num) ? Number(num) : 0);

export const calculateGrantAmount = costs => {
  const total = sum(values(costs).map(parseNumber));
  const grandAmount = total * 0.75;

  return grandAmount.toFixed(2);
};

export default null;
