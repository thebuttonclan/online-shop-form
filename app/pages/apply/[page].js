import React from 'react';
import JsonSchemaForm from '@rjsf/semantic-ui';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import ArrayFieldTemplate from 'components/form/ArrayFieldTemplate';
import { Button, Container } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { saveApplication, LAST_PAGE } from 'services/application';
import uiSchema from 'schemas/ui-schema';
import splitSchemas from 'schemas/split-schema';
import consolidatedSchema from 'schemas/consolidated-schema';

const { version: formVersion } = require('../../package.json');

export default function Apply({ formData, page }) {
  const router = useRouter();
  const continueBtnText = Number(page) === LAST_PAGE ? 'Submit' : 'Continue';
  const order = uiSchema['ui:order'];
  const schemasArray = splitSchemas(consolidatedSchema, order);
  const schema = schemasArray[Number(page) - 1];

  const handleSubmit = async ({ formData }) => {
    const { page: nextPage } = await saveApplication({ formVersion, ...formData }, page);
    if (nextPage) {
      router.push(`/apply/${nextPage}`);
    } else {
      router.push('/apply/message/success');
    }
  };

  const handlePrevious = () => router.push(`/apply/${page - 1}`);

  return (
    <Container>
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
      >
        <div>
          {Number(page) !== 1 && (
            <Button id="btn-previous-page" type="button" secondary onClick={handlePrevious}>
              Previous
            </Button>
          )}
          <Button id="btn-submit-form-data" type="submit" primary>
            {continueBtnText}
          </Button>
        </div>
      </JsonSchemaForm>
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
    </Container>
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
