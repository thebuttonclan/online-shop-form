import styled from 'styled-components';

const { version: appVersion } = require('../../package.json');

const Sgrid = styled.div`
  display: grid;
`;

const SgridItem = styled.div`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ShiddenInput = styled.input`
  display: none;
`;

function ObjectFieldTemplate({ properties, title, description, schema }) {
  return (
    <>
      <ShiddenInput type="text" name="formVersion" value={appVersion} readOnly />
      <Sgrid>
        {properties.map(prop => (
          <SgridItem
            row={prop.content.props.uiSchema.row}
            column={prop.content.props.uiSchema.column}
            key={prop.content.key}
          >
            {prop.content}
          </SgridItem>
        ))}
        {description}
      </Sgrid>
    </>
  );
}

export default ObjectFieldTemplate;
