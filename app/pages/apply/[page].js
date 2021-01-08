import React from 'react';
import JsonSchemaForm from '@rjsf/semantic-ui';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import ArrayFieldTemplate from 'components/form/ArrayFieldTemplate';

import { useRouter } from 'next/router';
import {
  getSchema,
  getUISchema,
  validateFormData,
  updateApplication,
  submitApplication,
  pageForward,
} from 'services/application';

const LAST_PAGE = 2;
const { version: formVersion } = require('../../package.json');

export default function Apply({ formData, page }) {
  const router = useRouter();
  const schema = getSchema(page);
  const uiSchema = getUISchema(page);

  const handleSubmit = async ({ formData }) => {
    const { page: nextPage } = await updateApplication({ formVersion, ...formData }, page);
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

export async function getServerSideProps({ req, res, query: params }) {
  const { body: postData, method, pgQuery, session = {}, query = {} } = req;
  const { formData = {} } = session;
  let { page } = params;
  page = Number(page);
  const js = query.js === 'true';

  if (method === 'GET') {
    return {
      props: { page, formData },
    };
  }

  // Update session data
  const newData = { ...formData, ...postData };
  session.formData = newData;

  const validated = validateFormData(newData, page);
  console.log(validated);

  if (page === LAST_PAGE) {
    await submitApplication(res, js, pgQuery, newData);
    session.formData = {};
  } else {
    pageForward(page, newData, res, js);
  }

  return { props: {} };
}
