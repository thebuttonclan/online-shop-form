import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { SUBHEADING_WEIGHT, MIN_PADDING, BACKGROUND_COLOUR, HUGE_FONT, HEADING_WEIGHT } from 'theme';

const HEADER_HEIGHT = '40vh';

const ImageBackground = styled.div`
  width: 100vw;
  min-height: ${HEADER_HEIGHT} !important;
  background-image: url('/images/banner.webp');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${MIN_PADDING};
`;

const BannerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  min-height: calc(${HEADER_HEIGHT} * 0.4);
  color: ${BACKGROUND_COLOUR};
`;

const BannerOverlaySubHeader = styled.p`
  font-weight: ${SUBHEADING_WEIGHT};
  margin-bottom: 50px !important;
`;

const BannerOverlayHeader = styled.h1`
  font-size: ${HUGE_FONT};
  text-transform: uppercase;
  font-weight: ${HEADING_WEIGHT};
  font-family: helvetica;
  margin-top: 50px;
`;

const Banner = ({ text }) => (
  <ImageBackground>
    <BannerOverlay>
      <Container>
        <BannerOverlayHeader as="h1">Online Shops Grant Program</BannerOverlayHeader>
        <BannerOverlaySubHeader>
          Small and medium-sized businesses are vital to British Columbia’s economy. The Online Shop grant program is
          investing up to $12 million to help small- and medium-size businesses throughout B.C. movetheir business model
          online.
        </BannerOverlaySubHeader>
      </Container>
    </BannerOverlay>
  </ImageBackground>
);

export default Banner;
