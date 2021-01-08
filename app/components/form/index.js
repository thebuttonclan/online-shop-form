import React from 'react';
import JsonSchemaForm from 'react-jsonschema-form';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import { useRouter } from 'next/router';
import { createApplication } from 'services/application';

const Form = props => {
  const router = useRouter();
  const { schema, uiSchema, route, postRoute, addFormData, allFormData, uploadData = false } = props;

  const handleSubmit = async data => {
    const { formData: currentFormData } = data;

    if (uploadData) {
      const dataToUpload = { ...allFormData, ...currentFormData };
      const appliedSuccessfully = await createApplication(dataToUpload);
      const redirectRoute = appliedSuccessfully ? 'success' : 'error';
      router.push(`/application/${redirectRoute}`);
    } else {
      addFormData(currentFormData);
      router.push(route);
    }
  };

  return (
    <div className="container">
      <JsonSchemaForm
        name="my-form"
        action={postRoute}
        method="post"
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onChange={() => console.log('changed')}
        onSubmit={handleSubmit}
        onError={() => console.log('errors')}
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
};

export default Form;
