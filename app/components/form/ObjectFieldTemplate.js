import styled from 'styled-components';

const Sgrid = styled.div`
  display: grid;
`;

const SgridItem = styled.div`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  margin-top: 5px;
  margin-bottom: 5px;
`;

function ObjectFieldTemplate({ properties, description }) {
  return (
    <>
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
