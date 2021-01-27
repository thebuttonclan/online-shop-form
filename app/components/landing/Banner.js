import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { SUBHEADING_WEIGHT, MIN_PADDING, BACKGROUND_COLOUR, HUGE_FONT, HEADING_WEIGHT, PRIMARY_FONT } from 'theme';

const HEADER_HEIGHT = '45vh';

const ImageBackground = styled.div`
  width: 100vw;
  min-height: ${HEADER_HEIGHT} !important;
  background-image: url('/images/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${MIN_PADDING};
`;

const BannerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: ${BACKGROUND_COLOUR};
`;

const BannerOverlaySubHeader = styled.p`
  margin-bottom: 30px !important;
`;

const BannerOverlayHeader = styled.h1`
  font-size: ${HUGE_FONT};
  text-transform: uppercase;
  font-weight: ${HEADING_WEIGHT};
  font-family: ${PRIMARY_FONT};
  margin-top: 50px;
  margin-bottom: ${MIN_PADDING};
`;

const Banner = ({ text }) => (
  <ImageBackground>
    <BannerOverlay>
      <Container>
        <BannerOverlayHeader as="h1">Launch Online Grant Program</BannerOverlayHeader>
        <BannerOverlaySubHeader>
          Small and medium-sized businesses are vital to British Columbia’s economy. As part of StrongerBC, B.C.’s
          Economic Recovery Plan the Launch Online Grant program will invest up to $12 million to help small- and
          medium-size businesses throughout B.C. move their business model online.
        </BannerOverlaySubHeader>
      </Container>
    </BannerOverlay>
  </ImageBackground>
);

export default Banner;
