import styled from 'styled-components';
import { Message, Icon } from 'semantic-ui-react';
import StyledP from 'components/StyledP';
import { MIN_PADDING, PRIMARY_COLOUR, SECONDARY_COLOUR } from 'theme';

const StyledMessage = styled(Message)`
  background-color: ${PRIMARY_COLOUR} !important;
  border-left: 10px solid ${SECONDARY_COLOUR};
  border-radius: 0 !important;
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
      <StyledP color="white" padding="min">
        {text}
      </StyledP>
    </Row>
  </StyledMessage>
);

export default InfoMessage;
