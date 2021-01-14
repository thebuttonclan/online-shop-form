import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { LARGE_FONT, SECONDARY_FONT_COLOUR, SUBHEADING_WEIGHT, MIN_PADDING } from 'theme';
import InfoMessage from 'components/InfoMessage';
import ProgramSteps from 'components/landing/ProgramSteps';
import EligibilityCriteria from 'components/landing/EligibilityCriteria';
import StyledUl from 'components/StyledUl';
import StyledP from 'components/StyledP';
import GeneralInformation from 'components/landing/GeneralInformation';
import Banner from 'components/landing/Banner';
import Header1 from 'components/Header1';
import Header2 from 'components/Header2';
import HrefLink from 'components/HrefLink';

const NavigationUl = styled(StyledUl)`
  & li {
    color: ${SECONDARY_FONT_COLOUR};
    font-weight: ${SUBHEADING_WEIGHT};
  }
`;

const Info = styled.div`
  color: ${SECONDARY_FONT_COLOUR};
  font-size: ${LARGE_FONT};
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

const ScrollContainer = styled(Container)`
  overflow-y: scroll;
`;

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <Header2>On this page:</Header2>
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
            <HrefLink href="/program-guide">Program guide</HrefLink>
          </li>
          <li>
            <HrefLink href="/faq">Frequently asked questions</HrefLink>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </NavigationUl>

        <Header1 id="program-explanation">How the program works</Header1>
        <StyledP>
          The Online Shops grant program will give Indigenous and non-Indigenous businesses funding to createan online
          shop and/or improve their e-commerce experience to attract new local customers and expandto new markets. The
          grant will pay for up to 75% of eligible expenses, up to a maximum of $7,500 perbusiness.
        </StyledP>
        <StyledP>
          The program supports a rapid response for businesses, and is accepting applications from businessesready to
          start and finish their work in 12-weeks.
        </StyledP>
        <Header2>Please note:</Header2>
        <StyledUl>
          <li>
            Up-to 25% of funds will be reserved for Indigenous businesses and businesses operating outsideof the lower
            mainland and greater Victoria.
          </li>
          <li>The funds must be used to hire B.C.-based company(ies) to do the online store development.</li>
        </StyledUl>

        <ProgramSteps />
        <BackToTop />

        <Header1 id="application-deadlines">Application deadlines</Header1>
        <StyledP>
          Program intake is open until the funds have been fully subscribed. The funding will be given on afirst-come
          first-serve basis to small- and medium-sized B.C. businesses to rapidly adapt to changingconsumer behaviour
          due to COVID-19.
        </StyledP>
        <StyledP>
          For the projects to have an immediate benefit, the funds will be given as soon as a business has beenapproved
          for the program.
        </StyledP>
        <BackToTop />

        <Header1 id="eligibility">Determine your eligibility</Header1>
        <StyledP>Review the following criteria to determine if your business is eligible for the program.</StyledP>

        <EligibilityCriteria />
        <BackToTop />

        <Header1 id="submit-application">Submit your application</Header1>

        <Header2>Before applying</Header2>
        <StyledP>
          Please review the eligibility information on this page. If you have any questions, please use the contact form
          at the bottom of this page for support before submitting your application. Incomplete applications will not be
          reviewed.
        </StyledP>

        <Header2>You will be asked to provide:</Header2>
        <StyledUl>
          <li>Current year balance or past fiscal year statement</li>
          <li>Proof of a valid B.C. business licence</li>
          <li>Business number</li>
          <li>PST and WorkSafeBC registrations, if applicable</li>
          <li>Income tax return</li>
          <StyledUl>
            <li>Notice of assessment; or</li>
            <li>First section of T2 return or first section of owner’s tax return (form 5010-R)</li>
          </StyledUl>
          <li>B.C. business registration number and official registered name</li>
          <li>
            Proposal for how much grant funding you need and how you plan to use the funds, with estimates for the
            eligible expenses
          </li>
        </StyledUl>

        <InfoMessage
          text={`Note: All above mentioned documents must be provided to Alacrity Canada if application is
                  conditionally approved before funds can be disbursed.`}
        />

        <Header2>Receive funding to build your online store</Header2>
        <StyledP>
          Successful applicants will receive funding within 2-3 weeks of approval and are required to develop or upgrade
          their online shop within 12-weeks of receiving the grant.
        </StyledP>

        <GeneralInformation />
        <BackToTop />

        <Header1 id="contact">CONTACT US</Header1>
        <StyledP>
          Please contact us directly to ask questions. We will respond within <strong>3 business days.</strong>
        </StyledP>
        <div>
          <Info>
            <Icon name="phone" />
            250-123-4557
          </Info>
        </div>
        <div>
          <Info>
            <Icon name="mail" />
            info@gov.bc.ca
          </Info>
        </div>
      </Container>
    </>
  );
}
