import React from 'react';
import { Container, Icon, Message, Header, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { SECONDARY_FONT_COLOUR, MIN_PADDING } from 'theme';
import InfoMessage from 'components/InfoMessage';
import ProgramSteps from 'components/landing/ProgramSteps';
import EligibilityCriteria from 'components/landing/EligibilityCriteria';
import Acknowledgement from 'components/landing/Acknowledgement';
import StyledUl from 'components/StyledUl';
import NavigationUl from 'components/NavigationUl';
import StyledP from 'components/StyledP';
import GeneralInformation from 'components/landing/GeneralInformation';
import Banner from 'components/landing/Banner';
import Header1 from 'components/Header1';
import Header2 from 'components/Header2';
import HrefLink from 'components/HrefLink';
import { TOP_HEIGHT } from 'layouts/DefaultLayout';
import SBCLogo from 'components/SBCLogo';

const Info = styled.div`
  color: ${SECONDARY_FONT_COLOUR};
  margin: ${MIN_PADDING} 0;
`;

const ScrollUp = styled.p`
  color: ${SECONDARY_FONT_COLOUR};
  font-weight: bold;
`;

const BackToTop = () => (
  <ScrollUp>
    <a href="#top">
      <Icon name="arrow circle up"></Icon>
      Back To Top
    </a>
  </ScrollUp>
);

const HorizontalRule = styled.hr`
  height: 1px;
  border: none;
  background-color: black;
  margin: 40px 0;
`;

const ScrollHeader1 = styled(Header1)`
  scroll-margin-top: ${TOP_HEIGHT};
`;

const ContactUsHeader = styled(ScrollHeader1)`
  padding-top: 50px !important;
`;

const WarningMessage = styled(Message)`
  display: flex;
  align-items: center;
`;

const CharWidthP = styled(StyledP)`
  max-width: 65ch;
`;

export default function Home({ canSubmit }) {
  return (
    <>
      <Container>
        {!canSubmit && (
          <WarningMessage warning>
            <Icon size="large" name="exclamation triangle"></Icon>
            <div>
              <Header warning>Please Be Advised</Header>
              <p>
                Due to the volume of applications we've already received, the application intake form is currently ON
                HOLD. Please check back at a later time if this status has changed. We are sorry for any inconvenience.
              </p>
            </div>
          </WarningMessage>
        )}
        <Banner />
        <Header2>On this page:</Header2>
        <Grid columns={2} stackable>
          <Grid.Column>
            <NavigationUl>
              <li>
                <a href="#program-explanation">How the program works</a>
              </li>
              <li>
                <a href="#application-deadlines">Application deadlines</a>
              </li>
              <li>
                <a href="#eligibility">Determine your eligibility</a>
              </li>
              <li>
                <a href="#submit-application">Submit your application</a>
              </li>
              <li>
                <HrefLink href="/files/program_guide.pdf" blank>
                  Program guide
                </HrefLink>
              </li>
              <li>
                <HrefLink href="/faq">Frequently asked questions</HrefLink>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </NavigationUl>
          </Grid.Column>
          <Grid.Column>
            <SBCLogo />
          </Grid.Column>
        </Grid>

        <ScrollHeader1 id="program-explanation">How the program works</ScrollHeader1>
        <CharWidthP>
          The Launch Online Grant program provides funding to B.C.-based business to create an online shop and/or
          improve their e-commerce experience to attract new local customers and expand to new markets. The grant will
          pay for up to 75% of eligible expenses, up to a maximum of $7,500 per business.
        </CharWidthP>
        <CharWidthP>
          The program supports a rapid response for businesses and is accepting applications from businesses ready to
          start and finish their online shop within 12 weeks.
        </CharWidthP>
        <StyledUl>
          <li>
            Up-to 25% of funds will be reserved for Indigenous businesses and businesses operating outside of the lower
            mainland and greater Victoria.
          </li>
          <li>The funds must be used to hire B.C.-based company(ies) to do the online store development.</li>
        </StyledUl>

        <ProgramSteps />
        <BackToTop />

        <ScrollHeader1 id="application-deadlines">Application deadlines</ScrollHeader1>
        <CharWidthP>
          Program application intake is open until the funds have been fully subscribed. Funding will be awarded on a
          first-come first-served basis to small- and medium-sized B.C. businesses.
        </CharWidthP>
        <CharWidthP>
          For the projects to have an immediate benefit, the funds will be given as soon as a business has been approved
          for the program.
        </CharWidthP>
        <BackToTop />

        <ScrollHeader1 id="eligibility">Determine your eligibility</ScrollHeader1>
        <CharWidthP>
          Review the following criteria to determine if your business is eligible for the program.
        </CharWidthP>

        <EligibilityCriteria />
        <BackToTop />

        <ScrollHeader1 id="submit-application">Submit your application</ScrollHeader1>

        <Header2>Before applying</Header2>
        <CharWidthP>
          Please review the eligibility information on this page. If you have any questions, please use the contact form
          at the bottom of this page for support before submitting your application. Incomplete applications cannot be
          approved to receive a grant.
        </CharWidthP>
        <CharWidthP>
          Prepare a proposal for how much grant funding you need and how you plan to use the funds, with estimates for
          the eligible expenses. The application form will contain a space for you to include your proposal (note the
          max size is 1,000 characters) and cost estimates.
        </CharWidthP>

        <Header2>You will be asked to provide:</Header2>
        <StyledUl>
          <li>Current year balance or past fiscal year statement</li>
          <li>Proof of a valid B.C. business licence</li>
          <li>Business number</li>
          <li>PST and WorkSafeBC registrations, if applicable</li>
          <li>Income tax return:</li>
          <StyledUl>
            <li>Notice of assessment (2019); or</li>
            <li>First section of T2 return or first section of owner’s tax return (form 5010-R) (2019 or 2020)</li>
          </StyledUl>
          <li>B.C. business registration number and official registered name</li>
        </StyledUl>

        <InfoMessage
          text={`Note: All above mentioned documents must be provided to Alacrity Canada if application is
                  conditionally approved before funds can be disbursed.`}
        />

        <Header2>Receive funding to build your online store</Header2>
        <CharWidthP>
          Successful applicants will receive funding within 2-3 weeks of approval and are required to develop or upgrade
          their online shop within 12 weeks of receiving the grant.
        </CharWidthP>

        <GeneralInformation canSubmit={canSubmit} />
        <BackToTop />

        <ContactUsHeader id="contact">Contact Us</ContactUsHeader>
        <CharWidthP>
          Please contact us directly to ask questions. We will respond within <strong>3 business days.</strong>
        </CharWidthP>
        <div>
          <Info>
            <Icon name="phone" />
            844-487-1266
          </Info>
        </div>
        <div>
          <Info>
            <HrefLink href="mailto:info@launchonline.ca">
              <Icon name="mail" />
              info@launchonline.ca
            </HrefLink>
          </Info>
        </div>

        <HorizontalRule />

        <Acknowledgement />
      </Container>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { pgQuery, backendState } = req;

  let canSubmit = backendState.canSubmit;

  if (canSubmit) {
    const count = await pgQuery.countApplication();
    canSubmit = backendState.setApplicationCount(count);
  }

  return {
    props: { canSubmit },
  };
}
