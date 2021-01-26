import { Container, Icon } from 'semantic-ui-react';
import Header2 from 'components/Header2';
import StyledUl from 'components/StyledUl';
import styled from 'styled-components';
import { HUGE_FONT, MIN_PADDING } from 'theme';
import StyledP from 'components/StyledP';
import { validateFormData } from 'services/application';
import { childParentRelationships } from 'schemas/consolidated-schema';
import pageSchemas from 'schemas/page-schemas';
import HrefLink from 'components/HrefLink';
import startCase from 'lodash/startCase';
import { Helmet } from 'react-helmet';
import reduce from 'lodash/reduce';
import map from 'lodash/map';

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
function findFieldPage(fieldName) {
  const index = findFieldIndex(fieldName);
  if (index >= 0) {
    return index + 1;
  }
  const parentName = childParentRelationships[fieldName];
  return findFieldIndex(parentName) + 1;
}

export default function ErrorPage({ result }) {
  const { errors } = result;

  // Collect error data within an object to remove duplicates
  const errorMap = reduce(
    errors,
    (ret, err) => {
      if (err.stack.includes(':')) {
        const field = err.stack.split(':')[0];
        ret[field] = findFieldPage(field);
      }

      return ret;
    },
    {}
  );

  return (
    <Container>
      <Helmet>
        <title>Something Went Wrong</title>
      </Helmet>
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
        {map(errorMap, (page, field) => {
          return (
            <li key={field}>
              {startCase(field)} (<HrefLink href={`/apply/${page}`}>page {page}</HrefLink>)
            </li>
          );
        })}
      </IndentedUl>
      <StyledP>
        If you have any questions about your applications please contact us at:{' '}
        <a href="mailto:info@launchonline.ca">info@launchonline.ca</a>
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
