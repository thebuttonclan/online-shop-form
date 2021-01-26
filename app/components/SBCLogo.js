import styled from 'styled-components';

const sbcAspectRatio = 255 / 1043;

const SBCLogo = styled.img`
  width: 300px;
  height: calc(${sbcAspectRatio} * 300px);
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SBClogo() {
  return (
    <LogoContainer>
      <SBCLogo src="/icons/BC-StrongerBC_cmyk_pos_sans.svg" alt="Stronger BC" />
    </LogoContainer>
  );
}
