import { Container } from 'semantic-ui-react';
import { validateFormData } from 'services/application';
import consolidatedSchema from 'schemas/consolidated-schema';
import pageSchemas from 'schemas/page-schemas';

const findFieldIndex = fieldname => pageSchemas.findIndex(schema => !!schema.properties[fieldname]);

export default function ErrorPage({ result }) {
  const { errors } = result;

  console.log(errors);

  const validErrors = errors.filter(err => !!err.property);

  return (
    <Container>
      <h1>Application Failed</h1>

      <ul>
        {validErrors.map(error => {
          const property = error.property.slice(1);
          const fieldIndex = findFieldIndex(property);

          return (
            <li>
              {property}
              {fieldIndex}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export async function getServerSideProps({ req, query: params }) {
  const { session = {} } = req;
  const { formData = {} } = session;

  console.log(formData);

  const result = validateFormData(formData);

  return {
    props: { result },
  };
}
