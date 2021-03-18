import { filter } from 'compression';
import uniqBy from 'lodash/uniqBy';

// example error object
// {
//    message: "should match pattern "^[0-9]{3}-[0-9]{3}-[0-9]{4}$"",
//    name: "pattern",
//    params: {pattern: "^[0-9]{3}-[0-9]{3}-[0-9]{4}$"},
//    property: ".businessPhone",
//    schemaPath: "#/properties/businessPhone/pattern",
//    stack: ".businessPhone should match pattern "^[0-9]{3}-[0-9]{3}-[0-9]{4}$"",
// }
export default function transformErrors(errors) {
  // If property and message are the same, only show once. (Backend validation regenerates from schema, so only affects fronte end messages)
  const filteredErrors = uniqBy(errors, err => {
    const { property, message } = err;
    return property + message;
  });
  return filteredErrors.map(err => {
    console.log(err);
    if (
      err.property === '.onlineStore.existingStoreFeatures' ||
      err.property === '.onlineStore.existingBookingSystemFeatures'
    ) {
      err.message = 'If you said yes to this system, please select at least one type.';
    }
    if (err.property === '.onlineStore.existingOnlineStore') {
      err.message = 'If selecting yes, please select at least one option';
    }
    if (err.property === '.onlineStore') {
      err.message =
        'There were errors on this page. Please make sure you have selected an option if you have a store or booking system.';
    }
    // we delegate most of the error displaying via html5; using minLength, maxLength, and pattern, and
    // for special cases, i.e. errors from custom validation and errors cannot be caught by html5,
    // we can override message field by looking up the custom message in the master schema...
    // const property = err.property.slice(1);
    // err.message = consolidatedSchema.properties[property].customErrorMessage;
    return err;
  });
}
