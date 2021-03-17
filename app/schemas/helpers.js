import values from 'lodash/values';
import sum from 'lodash/sum';

export const calculateGrantAmount = formData => {
  const total = sum(values(formData.costs).map(Number));
  const grandAmount = total * 0.75 || 0;

  return grandAmount.toFixed(2);
};

export default null;
