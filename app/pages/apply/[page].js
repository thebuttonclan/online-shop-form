import React from 'react';
import JsonSchemaForm from 'react-jsonschema-form';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import { firstSchema, firstUiSchema, secondSchema, secondUiSchema } from 'formConfig/jsonSchema';
import { useRouter } from 'next/router';
import { updateApplication, submitApplication, pageForward } from 'services/application';

const LAST_PAGE = 2;
const { version: formVersion } = require('../../package.json');

const getSchema = page => {
  if (page === 1) return firstSchema;
  if (page === 2) return secondSchema;
  // TODO: decide on invalid page handling
  return firstSchema;
};

const getUISchema = page => {
  if (page === 1) return firstUiSchema;
  if (page === 2) return secondUiSchema;
  return firstSchema;
};

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

  if (page === LAST_PAGE) {
    await submitApplication(res, js, pgQuery, newData);
    session.formData = {};
    return { props: {} };
  }
  return pageForward(page, newData, res, js);
}
