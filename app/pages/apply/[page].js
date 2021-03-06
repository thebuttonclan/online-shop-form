import React from 'react';
import JsonSchemaForm from '@rjsf/semantic-ui';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import { Progress, Container } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { saveApplication, LAST_PAGE } from 'services/application';
import uiSchema from 'schemas/ui-schema';
import pageSchemas from 'schemas/page-schemas';
import transformErrors from 'schemas/transform-errors';
import styled from 'styled-components';
import ContinueButton from 'components/form/ContinueButton';
import BackButton from 'components/form/BackButton';
import { Helmet } from 'react-helmet';
import createValidator from 'schemas/custom-validate';
import { TOP_HEIGHT } from 'layouts/DefaultLayout';
import DisabledBanner from 'components/DisabledBanner';

const SJsonSchemaForm = styled(JsonSchemaForm)`
  padding-bottom: 30px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
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

const FullHeightContainer = styled(Container)`
  min-height: calc(100vh - ${TOP_HEIGHT}) !important;
`;

export default function Apply({ formData, page }) {
  const router = useRouter();
  const backRoute = page === 1 ? '/' : `/apply/${page - 1}`;
  const continueBtnText = page === LAST_PAGE ? 'Submit' : 'Continue';
  const schema = pageSchemas[page - 1];
  const percent = (page / LAST_PAGE) * 100;

  const handleSubmit = async ({ formData }) => {
    const { page: nextPage, isValidated, isValid, errors, hasError, message } = await saveApplication(formData, page);
    if (hasError) {
      router.push('/message/error');
    } else if (isValidated) {
      if (isValid) router.push(`/message/success`);
      else router.push(`/message/validation-error`);
    } else {
      router.push(`/apply/${nextPage}`);
    }
  };

  return (
    <FullHeightContainer>
      <Helmet>
        <title>Apply!</title>
      </Helmet>
      <DisabledBanner />
      <TopRow>
        <BackButton href={backRoute} router={router} />
        <ProgressContainer>
          <p>{`Question ${page} of ${LAST_PAGE}`}</p>
          <StyledProgress percent={percent} color="black" />
        </ProgressContainer>
      </TopRow>
      <SJsonSchemaForm
        key={`form-${page}`}
        name="my-form"
        method="post"
        action={`/api/apply/${page}`}
        formData={formData}
        formContext={{ initialFormData: formData }}
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onChange={schema.onChange || (() => {})}
        onSubmit={handleSubmit}
        onError={console.log}
        showErrorList={false}
        validate={createValidator(page)}
        transformErrors={transformErrors}
        ObjectFieldTemplate={ObjectFieldTemplate}
      >
        <ContinueButton router={router} text={continueBtnText} />
      </SJsonSchemaForm>
    </FullHeightContainer>
  );
}

export async function getServerSideProps({ req, res, query: params }) {
  const { session = {} } = req;
  const { formData = {} } = session;
  let { page } = params;
  page = Number(page);
  const validPage = page <= LAST_PAGE && page > 0 && Number.isInteger(page);
  if (!validPage) res.redirect('/');

  return {
    props: { page, formData },
  };
}
