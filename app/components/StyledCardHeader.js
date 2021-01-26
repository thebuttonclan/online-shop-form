import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import { LARGE_FONT, PRIMARY_COLOUR } from 'theme';

const CardHeader = styled.h1`
  font-size: ${LARGE_FONT};
  color: #fff;
`;

const CardContent = styled(Card.Content)`
  background-color: ${PRIMARY_COLOUR} !important;
`;

function StyledcardHeader({ text }) {
  return (
    <CardContent>
      <CardHeader>{text}</CardHeader>
    </CardContent>
  );
}

export default StyledcardHeader;
