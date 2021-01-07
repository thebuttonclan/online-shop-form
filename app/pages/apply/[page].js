import React, { PureComponent } from 'react';
import JsonSchemaForm from 'react-jsonschema-form';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import Form from 'components/form';
import { firstSchema, firstUiSchema, secondSchema, secondUiSchema } from 'formConfig/jsonSchema';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Apply({ formData, page }) {
  console.log(formData, page);

  const router = useRouter();

  return (
    <div className="container">
      <JsonSchemaForm
        name="my-form"
        method="post"
        formData={formData}
        schema={page === 1 ? firstSchema : secondSchema}
        uiSchema={page === 1 ? firstUiSchema : secondUiSchema}
        widgets={widgets}
        onSubmit={async form => {
          const data = await axios.post(`/apply/${page}?js=true`, form.formData).then(res => res.data);
          router.push(`/apply/${data.page}`);
        }}
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

const validate = data => {
  return true;
};

const LAST_PAGE = 2;

export async function getServerSideProps({ req, res, query: params }) {
  const { body: postData, method, pgQuery, session = {}, query = {} } = req;
  const { formData = {} } = session;
  let { page } = params;
  page = Number(page);
  console.log(page);
  console.log(query);

  const { js } = query;

  console.log(page, formData);

  if (method === 'GET') {
    return {
      props: { page, formData },
    };
  }

  const newData = { ...formData, ...postData };
  session.formData = newData;

  // const valid = validate(form_data);

  // if (!valid) {
  //   throw new Error('validation failed.');
  // }

  const nextPage = page + 1;

  const props = { page: nextPage, formData: newData };

  // if (page === LAST_PAGE) {
  //   await pgQuery.createApplication(newData);

  //   if (js === 'true') {
  //   }
  // }

  if (js === 'true') {
    res.json(props);
    res.end();
  }

  res.redirect(`/apply/${nextPage}`);
  res.end();

  return { props };
}
