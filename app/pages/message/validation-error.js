import { Container, Icon } from 'semantic-ui-react';
import Header2 from 'components/Header2';
import StyledUl from 'components/StyledUl';
import styled from 'styled-components';
import { HUGE_FONT, MIN_PADDING } from 'theme';
import StyledP from 'components/StyledP';
import { validateFormData } from 'services/application';
import pageSchemas from 'schemas/page-schemas';
import HrefLink from 'components/HrefLink';
import startCase from 'lodash/startCase';

const IndentedUl = styled(StyledUl)`
  margin-left: calc(${MIN_PADDING} * 3) !important;
`;

const SuccessBanner = styled.div`
  min-height: 150px;
  background-color: #ef4848;
  color: white;
  width: 100%;
  margin-top: 100px;
  margin-bottom: ${MIN_PADDING};
  font-size: ${HUGE_FONT};
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 40px;

  @media (max-width: 430px) {
    & p {
      text-align: center;
    }
  }
`;

const findFieldIndex = fieldname => pageSchemas.findIndex(schema => !!schema.properties[fieldname]);

export default function ErrorPage({ result }) {
  const { errors } = result;

  const validErrors = errors.filter(err => !!err.property);

  return (
    <Container>
      <SuccessBanner>
        <p>
          <Icon name="exclamation circle"></Icon>
          Validation Failed
        </p>
      </SuccessBanner>
      <Header2>
        We were unable to process your request.
        <br />
        There were issues with the following values:
      </Header2>
      <IndentedUl>
        {validErrors.map(error => {
          const property = error.property.slice(1);
          const fieldIndex = findFieldIndex(property);
          const page = fieldIndex + 1;

          return (
            <li>
              {startCase(property)} (<HrefLink href={`/apply/${page}`}>page {page}</HrefLink>)
            </li>
          );
        })}
      </IndentedUl>
      <StyledP>
        If you have any questions about your applications please contact us at:{' '}
        <a href="mailto:info@strongerbc.ca">info@strongerbc.ca</a>
      </StyledP>
    </Container>
  );
}

export async function getServerSideProps({ req, query: params }) {
  const { session = {} } = req;
  const { formData = {} } = session;

  const result = validateFormData(formData);

  return {
    props: { result },
  };
}
