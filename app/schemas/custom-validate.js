import { fieldsArray } from './page-schemas';

export default function createValidator(page) {
  const fields = fieldsArray[page - 1];

  // It checks whether or not the field belong to the scoped page;
  // if the page is not valid, it always returns `true`.
  const isPageFor = field => !fields || fields.includes(field);

  return function customValidate(formData, errors) {
    if (isPageFor('declarations')) {
      if (formData.declarations.length !== 3) {
        errors.useOfGrant.addError('You must agree to all terms to continue!');
      }
    }
    if (isPageFor('grantTerms')) {
      if (formData.grantTerms !== true) {
        errors.grantTerms.addError('You must agree to continue!');
      }
    }
    return errors;
  };
}
