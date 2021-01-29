import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR } from 'theme';
import { useState } from 'react';

const StyledButton = styled(Button)`
  background-color: ${PRIMARY_COLOUR} !important;
  color: white !important;
  margin-bottom: 50px !important;
`;

export default function Continuebutton({ loading, text }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(true);

  return (
    <>
      <StyledButton id="btn-submit-form-data" type="submit" loading={loading && clicked} onClick={handleClick}>
        {text}
      </StyledButton>
    </>
  );
}
