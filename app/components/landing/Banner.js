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
        <p>Additional grant funding and expanded eligibility criteria announced for the Launch Online Grant program.</p>
        <p>
          The B.C. government has invested an additional $30 million to help BC-businesses move their business online.
          There is now $42 million of grant funding in place to help small- and medium-size businesses across B.C. move
          their business model online.
        </p>
        <p>
          Grant eligibility criteria has been expanded . Businesses that want to enhance or build an online booking
          system are now eligible to apply. The original eligibility criteria for businesses that want to enhance or
          build an online shop remains in place.
        </p>
        <p>
          Please see the updated <a href="#eligibility">eligibility criteria</a> to see if your business qualifies.
        </p>
      </Container>
    </BannerOverlay>
  </ImageBackground>
);

export default Banner;
