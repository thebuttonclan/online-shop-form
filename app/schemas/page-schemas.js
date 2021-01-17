import uiSchema from 'schemas/ui-schema';
import consolidatedSchema from 'schemas/consolidated-schema';
import splitSchemas from 'schemas/split-schema';
import values from 'lodash/values';
import sum from 'lodash/sum';

const order = uiSchema['ui:order'];
const schemasArray = splitSchemas(consolidatedSchema, order);

export const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));

export const getPageByField = field => fieldsArray.findIndex(arr => arr.includes(field)) + 1;

// Pass the page specific 'onChange' callback to handle special cases for 'costs' field
const costsSchema = schemasArray[getPageByField('costs') - 1];

costsSchema.onChange = ctx => {
  const { grandAmountRef } = ctx.schema.properties.costs;

  if (grandAmountRef && grandAmountRef.current) {
    const { formData } = ctx;

    const total = sum(values(formData.costs).map(Number));
    const grandAmount = total * 0.75;

    grandAmountRef.current.value = grandAmount.toFixed(2);
  }
};

export default schemasArray;
