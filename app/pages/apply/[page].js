import React from 'react';
import JsonSchemaForm from '@rjsf/semantic-ui';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import ArrayFieldTemplate from 'components/form/ArrayFieldTemplate';

import { useRouter } from 'next/router';
import { getSchema, saveApplication } from 'services/application';
import uiSchema from 'schemas/uiSchema';

const { version: formVersion } = require('../../package.json');

export default function Apply({ formData, page }) {
  const router = useRouter();
  const schema = getSchema(page);

  const handleSubmit = async ({ formData }) => {
    const { page: nextPage } = await saveApplication({ formVersion, ...formData }, page);
    if (nextPage) {
      router.push(`/apply/${nextPage}`);
    } else {
      router.push('/apply/success');
    }
  };

  return (
    <div className="container">
      <JsonSchemaForm
        name="my-form"
        method="post"
        action={`/api/apply/${page}`}
        formData={formData}
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onSubmit={handleSubmit}
        onError={console.log}
        ObjectFieldTemplate={ObjectFieldTemplate}
        ArrayFieldTemplate={ArrayFieldTemplate}
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

export async function getServerSideProps({ req, query: params }) {
  const { session = {} } = req;
  const { formData = {} } = session;
  let { page } = params;
  page = Number(page);

  return {
    props: { page, formData },
  };
}
