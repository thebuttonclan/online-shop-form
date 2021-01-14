import React from 'react';
import JsonSchemaForm from '@rjsf/semantic-ui';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import ArrayFieldTemplate from 'components/form/ArrayFieldTemplate';
import { Button, Progress, Icon } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { saveApplication, LAST_PAGE } from 'services/application';
import uiSchema from 'schemas/ui-schema';
import splitSchemas from 'schemas/split-schema';
import consolidatedSchema from 'schemas/consolidated-schema';
import styled from 'styled-components';
import Link from 'next/link';

const { version: formVersion } = require('../../package.json');

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  flex-grow: 1;

  @media (max-width: 992px) {
    max-width: 50%;
  }
`;

const StyledProgress = styled(Progress)`
  background-color: white !important;
  border: 1px solid black !important;
  & .bar {
    min-width: 0 !important;
  }
`;

const BackButton = styled.p`
  color: #006ef5;
  cursor: pointer;
`;

export default function Apply({ formData, page }) {
  const router = useRouter();
  const linkRoute = Number(page) === 1 ? '/' : `/apply/${Number(page) - 1}`;
  const continueBtnText = Number(page) === LAST_PAGE ? 'Submit' : 'Continue';
  const order = uiSchema['ui:order'];
  const schemasArray = splitSchemas(consolidatedSchema, order);
  const schema = schemasArray[Number(page) - 1];
  const percent = (Number(page) / LAST_PAGE) * 100;

  const handleSubmit = async ({ formData }) => {
    const { page: nextPage } = await saveApplication({ formVersion, ...formData }, page);
    if (nextPage) {
      router.push(`/apply/${nextPage}`);
    } else {
      router.push('/apply/message/success');
    }
  };

  return (
    <div className="container">
      <TopRow>
        <Link href={linkRoute} passHref>
          <BackButton>
            <Icon name="angle left"></Icon>
            Back
          </BackButton>
        </Link>
        <ProgressContainer>
          <p>{`Question ${page} of ${LAST_PAGE}`}</p>
          <StyledProgress percent={percent} color="black" />
        </ProgressContainer>
      </TopRow>
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
