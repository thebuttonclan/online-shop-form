import schema1 from './page-1';
import schema2 from './page-2';

function mergeIfArray(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

export default fullSchema = _.mergeWith(schema1, schema2, mergeIfArray);
