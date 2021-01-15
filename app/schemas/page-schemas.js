import uiSchema from 'schemas/ui-schema';
import consolidatedSchema from 'schemas/consolidated-schema';
import splitSchemas from 'schemas/split-schema';

const order = uiSchema['ui:order'];
const schemasArray = splitSchemas(consolidatedSchema, order);

export default schemasArray;
