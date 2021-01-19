import { Card } from 'semantic-ui-react';
import { SECONDARY_COLOUR } from 'theme';
import styled from 'styled-components';

const Scard = styled(Card)`
  border: 2px solid ${SECONDARY_COLOUR} !important;
  border-radius: 10px !important;
`;

function Styledcard({ children }) {
  return <Scard fluid>{children}</Scard>;
}

export default Styledcard;
