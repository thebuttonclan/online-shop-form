import pageOneFieldEntries from './page-1';
import pageTwoFieldEntries from './page-2';

const { version: appVersion } = require('../../package.json');

const expectedResult = { formVersion: appVersion };

function addResults(expectedResult, pageEntries) {
  pageEntries.inputs?.forEach(input => {
    const name = input.getBy.split('_')[1];
    expectedResult[name] = input.text;
  });
  pageEntries.checkboxes?.forEach(checkbox => {
    const name = checkbox.getBy.split('_')[1];
    expectedResult[name] = true;
  });
  pageEntries.selects?.forEach(select => {
    const name = select.getBy.split('_')[1];
    expectedResult[name] = select.value;
  });
  pageEntries.arrays?.buttons.forEach(button => {
    const name = button.getBy.split('_')[1];
    expectedResult[name] = [{}];
  });
  pageEntries.arrays?.inputs.forEach(input => {
    expectedResult[input.parent][0][input.type] = input.text;
  });
  return expectedResult;
}

addResults(expectedResult, pageOneFieldEntries);
addResults(expectedResult, pageTwoFieldEntries);

export default expectedResult;
