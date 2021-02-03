import styled from 'styled-components';
import { MIN_PADDING, BACKGROUND_COLOUR, HUGE_FONT, HEADING_WEIGHT, PRIMARY_FONT } from 'theme';

const HEADER_HEIGHT = '70vh';
const bannerAspect = 657 / 1500;
const mobileBannerAspect = 2240 / 1952;

const ImageBackground = styled.div`
  height: calc(100vw * ${bannerAspect});
  max-height: ${HEADER_HEIGHT};
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${MIN_PADDING};

  @media (max-width: 720px) {
    min-height: calc(100vw * ${bannerAspect});
    height: unset;
  }

  @media (max-width: 500px) {
    background-image: url('/images/banner-mobile.png');
    min-height: calc(100vw * ${mobileBannerAspect});
    max-height: unset;
  }
`;

const Container = styled.div`
  margin: 30px 20px;
  @media (max-width: 720px) {
    margin: 20px 10px;
  }
`;

const BannerOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  color: #16152b;
`;

const BannerOverlayHeader = styled.h1`
  text-transform: uppercase;
  font-weight: ${HEADING_WEIGHT};
  font-family: ${PRIMARY_FONT};
  margin-bottom: ${MIN_PADDING};
`;

const Banner = ({ text }) => (
  <ImageBackground>
    <BannerOverlay>
      <Container>
        <BannerOverlayHeader as="h1">Launch Online Grant Program</BannerOverlayHeader>
        <p>
          Small and medium-sized businesses are vital to British Columbia’s economy. As part of StrongerBC, B.C.’s
          Economic Recovery Plan the Launch Online Grant program will invest up to $12 million to help small- and
          medium-size businesses throughout B.C. move their business model online.
        </p>
      </Container>
    </BannerOverlay>
  </ImageBackground>
);

export default Banner;
