import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';

export const firstSchema = {
  title: 'Example Form',
  type: 'object',
  properties: {
    firstName: { type: 'string', title: 'First Name', name: 'firstName' },
  },
  ObjectFieldTemplate,
};

export const firstUiSchema = {
  firstName: {
    row: '1',
    column: '1',
  },
};

export const secondSchema = {
  title: 'Example Form',
  type: 'object',
  properties: {
    lastName: { type: 'string', title: 'Last Name', name: 'lastName' },
  },
  ObjectFieldTemplate,
};

export const secondUiSchema = {
  lastName: {
    row: '1',
    column: '1',
  },
};
