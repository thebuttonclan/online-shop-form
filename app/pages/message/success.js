import { Container, Icon } from 'semantic-ui-react';
import Header2 from 'components/Header2';
import StyledUl from 'components/StyledUl';
import styled from 'styled-components';
import { HUGE_FONT, MIN_PADDING } from 'theme';
import StyledP from 'components/StyledP';
import { Helmet } from 'react-helmet';

const IndentedUl = styled(StyledUl)`
  margin-left: calc(${MIN_PADDING} * 3) !important;
`;

const SuccessBanner = styled.div`
  min-height: 150px;
  background-color: #00dd59;
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

const LiBreak = styled.li`
  margin-top: ${MIN_PADDING};
`;

export default function SuccessPage() {
  return (
    <Container>
      <Helmet>
        <title>Application Submitted</title>
      </Helmet>
      <SuccessBanner>
        <p>
          <Icon name="check circle"></Icon>
          Application Submitted!
        </p>
      </SuccessBanner>
      <Header2>
        Your application has been submitted for conditional approval. Someone will reach out to you in 3 weeks to
        further discuss this proposal.
      </Header2>
      <Header2>Please be prepared to provide the following document attachments:</Header2>
      <IndentedUl>
        <li>Current year balance or past fiscal year statement</li>
        <li>Proof of a valid B.C. business license</li>
        <li>Payment information document (direct deposit or VOID cheque pdf)</li>
        <li>
          Income tax return
          <StyledUl>
            <LiBreak>Notice of assessment; or</LiBreak>
            <li>First section of T2 return or first section of owner's tax return (form 5010-R)</li>
          </StyledUl>
        </li>
      </IndentedUl>
      <StyledP>
        If you have any questions about your applications please contact us at:{' '}
        <a href="mailto:info@launchonline.ca">info@launchonline.ca</a>
      </StyledP>
    </Container>
  );
}
