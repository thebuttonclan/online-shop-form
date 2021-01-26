import { Card } from 'semantic-ui-react';
import { PRIMARY_COLOUR } from 'theme';
import styled from 'styled-components';

const Scard = styled(Card)`
  border: 2px solid ${PRIMARY_COLOUR} !important;
  border-radius: 10px !important;
`;

function Styledcard({ children }) {
  return <Scard fluid>{children}</Scard>;
}

export default Styledcard;
