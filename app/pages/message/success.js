import { Container, Icon, Message } from 'semantic-ui-react';
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
  background-color: #dff0d8;
  color: #2d4821;
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

const FinalP = styled(StyledP)`
  padding-bottom: 50px !important;
`;

const LiBreak = styled.li`
  margin-top: ${MIN_PADDING};
`;

const StrongP = styled(StyledP)`
  font-weight: bold;
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
      <Header2>What Happens Next</Header2>
      <StyledP>
        Your application has been submitted for conditional approval. You should receive a confirmation email from us
        shortly.
      </StyledP>
      <StrongP>
        Please be sure to check any Spam, Junk, or Promotions folders if you don’t see our email in your main Inbox. Our
        emails will be from Applications via{' '}
        <a href="mailto:applications@launchonline.ca">applications@launchonline.ca</a>.
      </StrongP>
      <Message
        icon="warning sign"
        warning
        content="We will be reaching out to you within 3 weeks regarding the status of your application."
      />
      <Header2>Please be prepared to provide the following document attachments:</Header2>
      <IndentedUl>
        <li>Current year or past fiscal year income statement</li>
        <li>Payment information document</li>
        <StyledUl>
          <li>Image copy of a VOID cheque; or</li>
          <li>
            Pre-filled Direct Deposit/Pre-Authorized Debit payment form (PDF) from your bank with your associated
            name/business name
          </li>
        </StyledUl>
        <li>
          Income tax return
          <StyledUl>
            <LiBreak>Notice of assessment; or</LiBreak>
            <li>First section of T2 return or first section of owner's tax return (form 5010-R)</li>
          </StyledUl>
        </li>
      </IndentedUl>
      <FinalP>
        If you have any questions about your application or if you did not receive a confirmation email, please contact
        us at: <a href="mailto:applications@launchonline.ca">applications@launchonline.ca</a>
      </FinalP>
    </Container>
  );
}
