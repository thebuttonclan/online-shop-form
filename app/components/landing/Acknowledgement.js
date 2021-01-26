import styled from 'styled-components';
import HrefLink from 'components/HrefLink';

const alacrityAspectRatio = 322 / 1000;
const sbcAspectRatio = 255 / 1043;

const Acknowledgement = styled.div`
  margin: 20px 0;
`;

const StrongText = styled.div`
  margin: 20px 0 !important;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 25%;
  height: ${props => `calc(${props.aspect} * 25%)`};
  min-width: 100px;
  min-height: ${props => `calc(${props.aspect} * 100px)`};
  margin: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function Acknowledgment(props) {
  return (
    <Acknowledgement>
      <StrongText>
        <p>
          The Launch Online Grant Program is part of StrongerBC, B.C.'s economic recovery plan. The program is
          administered by Alacrity Canada. We gratefully acknowledge the financial support of the Province of British
          Columbia through the Ministry of Jobs, Economic Recovery and Innovation.
        </p>
      </StrongText>
      <HrefLink href="/privacy">Click here to read our Privacy Policy</HrefLink>
      <LogoContainer>
        <Logo src="/icons/alacrity_black.png" alt="Alacrity Canada" aspect={alacrityAspectRatio} />
        <Logo src="/icons/BC-StrongerBC_cmyk_pos_sans.svg" alt="Stronger BC" aspect={sbcAspectRatio} />
      </LogoContainer>
    </Acknowledgement>
  );
}
