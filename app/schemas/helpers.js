import values from 'lodash/values';
import sum from 'lodash/sum';

export const calculateGrantAmount = formData => {
  const { staffTrainingCosts = 0, serviceProviderCosts = 0, customerAcquisitionCosts = 0 } = formData.costs || {};
  const costs = [staffTrainingCosts, serviceProviderCosts, customerAcquisitionCosts];
  const total = sum(costs.map(Number));
  const grandAmount = total * 0.75 || 0;

  return grandAmount.toFixed(2);
};

export default null;
