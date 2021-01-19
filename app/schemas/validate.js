export default function validate(formData, errors) {
  if (formData.useOfGrant !== undefined && formData.useOfGrant !== true) {
    errors.useOfGrant.addError('You must agree to continue!');
  }
  if (formData.personalInformation !== undefined && formData.personalInformation !== true) {
    errors.personalInformation.addError('You must agree to continue!');
  }
  if (formData.taxImplications !== undefined && formData.taxImplications !== true) {
    errors.taxImplications.addError('You must agree to continue!');
  }
  return errors;
}
