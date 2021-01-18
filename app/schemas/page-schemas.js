import uiSchema from 'schemas/ui-schema';
import consolidatedSchema from 'schemas/consolidated-schema';
import splitSchemas from 'schemas/split-schema';
import { calculateGrantAmount } from 'schemas/helpers';

const order = uiSchema['ui:order'];
const schemasArray = splitSchemas(consolidatedSchema, order);

export const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));

export const getPageByField = field => fieldsArray.findIndex(arr => arr.includes(field)) + 1;

// Pass the page specific 'onChange' callback to handle special cases for 'costs' field
const costsSchema = schemasArray[getPageByField('costs') - 1];

costsSchema.onChange = ctx => {
  const { setGrantAmount } = ctx.schema.properties.costs;

  if (setGrantAmount) {
    const { formData } = ctx;
    const grantAmount = calculateGrantAmount(formData);
    setGrantAmount(grantAmount);
  }
};

export default schemasArray;
