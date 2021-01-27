import React from 'react';
import JsonSchemaForm from '@rjsf/semantic-ui';
import widgets from 'formConfig/widgets';
import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import ArrayFieldTemplate from 'components/form/ArrayFieldTemplate';
import { Button, Progress, Icon, Container } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { saveApplication, LAST_PAGE } from 'services/application';
import uiSchema from 'schemas/ui-schema';
import pageSchemas from 'schemas/page-schemas';
import transformErrors from 'schemas/transform-errors';
import styled from 'styled-components';
import HrefLink from 'components/HrefLink';
import { Helmet } from 'react-helmet';
import createValidator from 'schemas/custom-validate';
import { PRIMARY_COLOUR } from 'theme';

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

const StyledButton = styled(Button)`
  background-color: ${PRIMARY_COLOUR} !important;
  color: white !important;
`;

export default function Apply({ formData, page }) {
  const router = useRouter();
  const linkRoute = page === 1 ? '/' : `/apply/${page - 1}`;
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
    <Container>
      <Helmet>
        <title>Apply!</title>
      </Helmet>
      <TopRow>
        <HrefLink href={linkRoute}>
          <BackButton id={`id_back_button`}>
            <Icon name="angle left"></Icon>
            Back
          </BackButton>
        </HrefLink>
        <ProgressContainer>
          <p>{`Question ${page} of ${LAST_PAGE}`}</p>
          <StyledProgress percent={percent} color="black" />
        </ProgressContainer>
      </TopRow>
      <JsonSchemaForm
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
        ArrayFieldTemplate={ArrayFieldTemplate}
      >
        <div>
          <StyledButton id="btn-submit-form-data" type="submit">
            {continueBtnText}
          </StyledButton>
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
