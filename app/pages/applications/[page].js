import React, { PureComponent } from 'react';
import JsonSchemaForm from 'react-jsonschema-form';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';

const schema = {
  title: 'Example Form',
  type: 'object',
  required: ['email'],
  properties: {
    firstName: { type: 'string', title: 'First Name', name: 'firstName' },
    lastName: { type: 'string', title: 'Last Name', name: 'lastName' },
    password: { type: 'string', title: 'Password', name: 'password', inputType: 'password' },
    email: { type: 'string', title: 'Email', name: 'email', inputType: 'email', isRequired: true },
    checkbox: { type: 'boolean', title: 'Checkbox', default: false, name: 'checkbox' },
    select: {
      type: 'string',
      title: 'selection',
      name: 'select',
      enum: ['one', 'two', 'three'],
      default: 'one',
    },
  },
  ObjectFieldTemplate,
};

const uiSchema = {
  firstName: {
    row: '1',
    column: '1',
  },
  lastName: {
    row: '1',
    column: '2',
  },
  password: {
    row: '2',
    column: '2',
  },
  email: {
    row: '2',
    column: '1',
  },
  checkbox: {
    'ui:widget': 'checkbox',
    // BC design guide nests the checkbox in a label, so can hide default generated by jsonSchema
    'ui:label': false,
    row: '3',
    column: '1',
  },
  select: {
    row: '4',
    column: '1',
  },
};

const log = type => () => {};

export default class Form extends PureComponent {
  render() {
    return (
      <div className="container">
        <JsonSchemaForm
          name="my-form"
          action="/api/application"
          method="post"
          formData={{ title: 'form title' }}
          schema={schema}
          uiSchema={uiSchema}
          widgets={widgets}
          onChange={log('changed')}
          onSubmit={data => console.log(data.formData)}
          onError={log('errors')}
          ObjectFieldTemplate={ObjectFieldTemplate}
        />
        {/* .error-detail class styles errors below fields,
            .panel-danger for top error message
        */}
        <style jsx global>
          {`
            .control-label {
              font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
              font-size: 18px;
              padding-right: 2px;
            }
          `}
        </style>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}