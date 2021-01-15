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
  return errors.map(err => {
    console.log(err);
    // we delegate most of the error displaying via html5; using minLength, maxLength, and pattern, and
    // for special cases, i.e. errors from custom validation and errors cannot be caught by html5,
    // we can override message field by looking up the custom message in the master schema...
    // const property = err.property.slice(1);
    // err.message = consolidatedSchema.properties[property].customErrorMessage;
    return err;
  });
}
