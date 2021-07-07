import { Icon, Message, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const MarginDiv = styled.div`
  position: sticky;
  top: 120px;
  z-index: 2;
`;

const WarningMessage = styled(Message)`
  display: flex;
  align-items: center;
`;

export default function Disabledbanner() {
  return (
    <MarginDiv>
      <WarningMessage negative>
        <Icon size="large" name="exclamation triangle"></Icon>
        <div>
          <Header warning>Please Be Advised</Header>
          <p>
            Application intake for Launch Online Grant Program is now <strong>closed</strong>. Adjudication of already
            submitted applications will continue until all funds are fully allocated. Each applicant will be informed of
            the outcome of their application.
          </p>
        </div>
      </WarningMessage>
    </MarginDiv>
  );
}
