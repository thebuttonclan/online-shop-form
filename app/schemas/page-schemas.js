import uiSchema from 'schemas/ui-schema';
import consolidatedSchema from 'schemas/consolidated-schema';
import splitSchemas from 'schemas/split-schema';

const order = uiSchema['ui:order'];
const schemasArray = splitSchemas(consolidatedSchema, order);

export const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));

export const getPageByField = field => fieldsArray.findIndex(arr => arr.includes(field)) + 1;

export default schemasArray;
