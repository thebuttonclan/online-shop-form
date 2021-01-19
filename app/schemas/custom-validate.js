import { fieldsArray } from './page-schemas';

export default function createValidator(page) {
  const fields = fieldsArray[page - 1];

  // It checks whether or not the field belong to the scoped page;
  // if the page is not valid, it always returns `true`.
  const isPageFor = field => !fields || fields.includes(field);

  return function customValidate(formData, errors) {
    if (isPageFor('useOfGrant')) {
      if (formData.useOfGrant !== true) {
        errors.useOfGrant.addError('You must agree to continue!');
      }
    }

    if (isPageFor('personalInformation')) {
      if (formData.personalInformation !== true) {
        errors.personalInformation.addError('You must agree to continue!');
      }
    }

    if (isPageFor('taxImplications')) {
      if (formData.taxImplications !== true) {
        errors.taxImplications.addError('You must agree to continue!');
      }
    }

    return errors;
  };
}
