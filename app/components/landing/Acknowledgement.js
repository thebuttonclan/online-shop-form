import styled from 'styled-components';
import HrefLink from 'components/HrefLink';

const Acknowledgement = styled.div`
  margin: 20px 0;
`;

const StrongText = styled.div`
  margin: 20px 0 !important;
  font-weight: bold;
`;

export default function Acknowledgment(props) {
  return (
    <Acknowledgement>
      <StrongText>
        <p>
          The online Shops Grant Program is part of StrongerBC, B.C's economic recovery plan. The program is
          administered by Alacrity Canada. We gratefully acknowledge the financial support of the Province of British
          Columbia through the Ministry of Jobs, Economic Recovery and Innovation.
        </p>
      </StrongText>
      <HrefLink href="/privacy">Click here to read our Privacy Policy</HrefLink>
    </Acknowledgement>
  );
}
