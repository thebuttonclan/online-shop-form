import schema1 from './page-1';
import schema2 from './page-2';

const _ = require('lodash');

function mergeIfArray(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return undefined;
}

const fullSchema = _.mergeWith(schema1, schema2, mergeIfArray);

export default fullSchema;
