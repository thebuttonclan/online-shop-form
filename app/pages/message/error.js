import { Container, Icon } from 'semantic-ui-react';
import Header2 from 'components/Header2';
import styled from 'styled-components';
import { HUGE_FONT, MIN_PADDING } from 'theme';
import StyledP from 'components/StyledP';
import HrefLink from 'components/HrefLink';

const SuccessBanner = styled.div`
  min-height: 150px;
  background-color: #ef4848;
  color: white;
  width: 100%;
  margin-top: 100px;
  margin-bottom: ${MIN_PADDING};
  font-size: ${HUGE_FONT};
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 40px;

  @media (max-width: 430px) {
    & p {
      text-align: center;
    }
  }
`;

export default function ErrorPage() {
  return (
    <Container>
      <SuccessBanner>
        <p>
          <Icon name="exclamation circle"></Icon>
          Something went wrong
        </p>
      </SuccessBanner>
      <Header2>We were unable to process your request.</Header2>
      <StyledP>
        <HrefLink href="/">Click here to return to the landing page</HrefLink>
      </StyledP>
      <StyledP>
        If you have any questions about your applications please contact us at:{' '}
        <a href="mailto:info@strongerbc.ca">info@strongerbc.ca</a>
      </StyledP>
    </Container>
  );
}
