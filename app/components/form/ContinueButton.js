import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import useRouteChange from 'hooks';
import { PRIMARY_COLOUR } from 'theme';
import { useState } from 'react';

const StyledButton = styled(Button)`
  background-color: ${PRIMARY_COLOUR} !important;
  color: white !important;
  margin-bottom: 50px !important;
`;

export default function Continuebutton({ router, text }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(true);
  const onRouteComplete = () => setClicked(false);

  const loading = useRouteChange(router, onRouteComplete);

  return (
    <>
      <StyledButton id="btn-submit-form-data" type="submit" loading={loading && clicked} onClick={handleClick} disabled>
        {text}
      </StyledButton>
    </>
  );
}
