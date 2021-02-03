import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR } from 'theme';

const StyledButton = styled(Button)`
  background-color: ${PRIMARY_COLOUR} !important;
  color: white !important;
  margin-bottom: 50px !important;
`;

export default function Continuebutton({ router, text, loading }) {
  return (
    <>
      <StyledButton id="btn-submit-form-data" type="submit" loading={loading}>
        {text}
      </StyledButton>
    </>
  );
}
