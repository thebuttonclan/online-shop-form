import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { DEFAULT_FONT_SIZE, HUGE_FONT, LARGE_FONT } from 'theme';
import SemanticStyleLabel from 'components/form/SemanticStyleLabel';

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

const Title = styled.p`
  font-size: ${LARGE_FONT} !important;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-weight: bold;
`;

function ObjectFieldTemplate({ properties, description, schema, title }) {
  const { groupTitle } = schema;
  return (
    <>
      <Title>{title}</Title>
      {groupTitle && <SubTitle>{groupTitle}</SubTitle>}
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
