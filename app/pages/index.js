import React, { PureComponent } from 'react';
import JsonSchemaForm from 'react-jsonschema-form';
import Input from 'components/form/input';

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['Email'],
  properties: {
    firstName: { type: 'string', title: 'First Name', name: 'firstName' },
    lastName: { type: 'string', title: 'Last Name', name: 'lastName' },
    password: { type: 'string', title: 'Password', name: 'password', inputType: 'password' },
    email: { type: 'string', title: 'Email', name: 'email', inputType: 'email', required: true },
    checkbox: { type: 'boolean', title: 'Checkbox', default: false },
  },
};

const uiSchema = {};

const widgets = {
  TextWidget: Input,
};

const log = type => () => {};

export default class Home extends PureComponent {
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
          onSubmit={data => console.log(data)}
          onError={log('errors')}
        />
        <style jsx global>
          {`
            label {
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

// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }
