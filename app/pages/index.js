import React, { PureComponent } from 'react';
import JsonSchemaForm from 'react-jsonschema-form';
import { Input } from 'semantic-ui-react';

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task', name: 'myname' },
    done: { type: 'boolean', title: 'Done?', default: false },
    title2: { type: 'string', title: 'Title', default: 'A new task', name: 'myname' },
  },
};

const uiSchema = {
  title: {
    'ui:widget': props => {
      console.log(props);
      return (
        <Input
          placeholder="Search..."
          name={props.schema.name}
          className="custom"
          value={props.value}
          required={props.required}
          onChange={event => props.onChange(event.target.value)}
        />
      );
    },
  },
};

const log = type => () => {};

export default class Home extends PureComponent {
  render() {
    return (
      <div className="container">
        <JsonSchemaForm
          name="my-form"
          action="/"
          method="post"
          formData={{ title: 'form title' }}
          schema={schema}
          uiSchema={uiSchema}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
