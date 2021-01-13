import styled from 'styled-components';
import { Message, Icon } from 'semantic-ui-react';
import { QUATERNERY_COLOUR, MIN_PADDING } from 'theme';

const StyledP = styled.p`
  color: white;
  padding: ${MIN_PADDING};
`;

const StyledMessage = styled(Message)`
  background-color: ${QUATERNERY_COLOUR} !important;
  border-radius: 30px !important;
  margin: ${MIN_PADDING} !important;
`;

const StyledIcon = styled(Icon)`
  margin-right: ${MIN_PADDING} !important;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  color: white !important;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InfoMessage = ({ text }) => (
  <StyledMessage>
    <Row>
      <StyledIcon name="info circle" size="huge" />
      <StyledP>{text}</StyledP>
    </Row>
  </StyledMessage>
);

export default InfoMessage;
