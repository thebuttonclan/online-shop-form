import formFieldEntries from './form';

// in consolidated schema we have this exported but its functionally generated
// and we use an ES6 import for objectFieldTemplate and cypress doesn't like ES6 imports
// changing it to a normal import throws errors somewhere else.
// Since it's so small I hard coded it here for now.
const childParentRelationships = {
  serviceProviderCosts: 'costs',
  customerAcquisitionCosts: 'costs',
  staffTrainingCosts: 'costs',
  existingOnlineStore: 'onlineStore',
  onlineStoreUrl: 'onlineStore',
  existingStoreFeatures: 'onlineStore',
};
const expectedResult = {};

function addResults(expectedResult, pageEntries) {
  pageEntries.inputs?.forEach(input => {
    const name = input.getBy.split('_')[1];
    if (childParentRelationships[name]) {
      expectedResult[childParentRelationships[name]] = expectedResult[childParentRelationships[name]] || {};
      expectedResult[childParentRelationships[name]][name] = input.text;
    } else {
      expectedResult[name] = input.text;
    }
  });
  pageEntries.numbers?.forEach(number => {
    const name = number.getBy.split('_')[1];
    if (childParentRelationships[name]) {
      expectedResult[childParentRelationships[name]] = expectedResult[childParentRelationships[name]] || {};
      expectedResult[childParentRelationships[name]][name] = number.value;
    } else {
      expectedResult[name] = number.value;
    }
  });
  pageEntries.checkboxes?.forEach(checkbox => {
    const name = checkbox.getBy.split('_')[1];
    if (childParentRelationships[name]) {
      expectedResult[childParentRelationships[name]] = expectedResult[childParentRelationships[name]] || {};
      expectedResult[childParentRelationships[name]][name] = Array.isArray(checkbox.value)
        ? checkbox.value
        : [checkbox.value];
    } else {
      expectedResult[name] = checkbox.value;
    }
  });
  pageEntries.radios?.forEach(radio => {
    const name = radio.getBy.split('_')[1];
    if (childParentRelationships[name]) {
      expectedResult[childParentRelationships[name]] = expectedResult[childParentRelationships[name]] || {};
      expectedResult[childParentRelationships[name]][name] = true;
    } else {
      expectedResult[name] = true;
    }
  });
  pageEntries.selects?.forEach(select => {
    const name = select.getBy.split('_')[1];
    if (childParentRelationships[name]) {
      expectedResult[childParentRelationships[name]] = expectedResult[childParentRelationships[name]] || {};
      expectedResult[childParentRelationships[name]][name] = select.value;
    } else {
      expectedResult[name] = select.value;
    }
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

formFieldEntries.forEach(entry => {
  addResults(expectedResult, entry);
});

export default expectedResult;
