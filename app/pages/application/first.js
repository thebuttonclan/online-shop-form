import React, { PureComponent } from 'react';
import Form from 'components/form';
import { firstSchema, firstUiSchema } from 'formConfig/jsonSchema';

export default class Page extends PureComponent {
  render() {
    return (
      <div className="container">
        <Form
          schema={firstSchema}
          uiSchema={firstUiSchema}
          route={'/application/second'}
          postRoute={'/api/application/second'}
          addFormData={this.props.addFormData}
        ></Form>
      </div>
    );
  }
}
