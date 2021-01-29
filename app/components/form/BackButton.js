import { Loader, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import useRouteChange from 'hooks';
import HrefLink from 'components/HrefLink';
import { useState } from 'react';

const StyledButton = styled.p`
  color: #006ef5;
  cursor: pointer;
`;

export default function BackButton({ router, href }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(true);
  const onRouteComplete = () => setClicked(false);

  const loading = useRouteChange(router, onRouteComplete);

  return (
    <HrefLink href={href}>
      <StyledButton id={`id_back_button`} onClick={handleClick}>
        <Icon name="angle left"></Icon>
        {loading && clicked ? <Loader active inline size="small" /> : 'Back'}
      </StyledButton>
    </HrefLink>
  );
}
