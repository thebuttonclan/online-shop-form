import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import HrefLink from 'components/HrefLink';

const StyledButton = styled.p`
  color: #006ef5;
  cursor: pointer;
`;

export default function BackButton({ href }) {
  return (
    <HrefLink href={href}>
      <StyledButton id={`id_back_button`}>
        <Icon name="angle left"></Icon>
        Back
      </StyledButton>
    </HrefLink>
  );
}
