import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import { LARGE_FONT } from 'theme';

const CardHeader = styled.h1`
  font-size: ${LARGE_FONT};
  color: #fff;
`;

function StyledcardHeader({ text }) {
  return (
    <Card.Content className="bg-secondary">
      <CardHeader>{text}</CardHeader>
    </Card.Content>
  );
}

export default StyledcardHeader;
