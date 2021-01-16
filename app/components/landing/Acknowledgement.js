import styled from 'styled-components';
import HrefLink from 'components/HrefLink';

const SBCRatio = 255 / 1053;

const Acknowledgement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const AcknowledgementText = styled.div`
  max-width: 60%;
  @media (max-width: 600px) {
    max-width: unset;
  }
`;

const AcknowledgementLogo = styled.img`
  width: 20%;
  min-width: 200px;
  height: calc(${SBCRatio} * 20%);
  min-height: calc(${SBCRatio} * 200px);
  @media (max-width: 600px) {
    max-width: unset;
    width: 80%;
  }
`;

const StrongText = styled.div`
  margin: 20px 0 !important;
  font-weight: bold;
`;

export default function Acknowledgment(props) {
  return (
    <Acknowledgement>
      <AcknowledgementText>
        <StrongText>
          <p>
            The online Shops Grant Program is part of StrongerBC, B.C's economic recovery plan. The program is
            administered by Alacrity Canada. We gratefully acknowledge the financial support of the Province of British
            Columbia through the Ministry of Jobs, Economic Recovery and Innovation.
          </p>
        </StrongText>
        <HrefLink href="/privacy">Click here to read our Privacy Policy</HrefLink>
      </AcknowledgementText>

      <AcknowledgementLogo src="/icons/BCID-StrongerBC-rgb-rev.jpg" alt="Stronger BC for everyone" />
    </Acknowledgement>
  );
}
