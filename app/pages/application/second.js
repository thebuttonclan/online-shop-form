import React, { PureComponent } from 'react';
import Form from 'components/form';
import { secondSchema, secondUiSchema } from 'formConfig/jsonSchema';

export default class Page extends PureComponent {
  render() {
    return (
      <div className="container">
        <Form
          addFormData={this.props.addFormData}
          allFormData={this.props.allFormData}
          schema={secondSchema}
          uiSchema={secondUiSchema}
          route={'/api/application/submit'}
          postRoute={'/api/application/submit'}
          uploadData={true}
        ></Form>
      </div>
    );
  }
}
