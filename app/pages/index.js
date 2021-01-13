import React, { PureComponent } from 'react';
import Link from 'next/link';
import { Header, Button, Image, Container, Card, Message, Icon, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import {
  PRIMARY_COLOUR,
  BACKGROUND_COLOUR,
  HUGE_FONT,
  LARGE_FONT,
  PRIMARY_FONT_COLOUR,
  SECONDARY_FONT_COLOUR,
  SECONDARY_COLOUR,
  TERTIARY_COLOUR,
} from 'theme';

const StyledContainer = styled.div`
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
`;

const StyledP = styled.p`
  font-size: 1.2em;
`;

const StyledUl = styled.ul`
  margin-left: 0.5em;

  & li {
    font-size: 1.2em;
    margin-bottom: 0.6em;
  }
`;

const NavigationUl = styled(StyledUl)`
  & li {
    color: ${SECONDARY_FONT_COLOUR};
  }
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const StyledButton = styled(Button).attrs({ primary: true })`
  background: #036 !important;
  border: none !important;
`;

const StyledAnchor = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  font-size: 1.2em;
`;

// Should match dimensions of final image
const HEADER_HEIGHT = '40vh';
const ImageHeader = styled.div`
  width: 100vw;
  height: ${HEADER_HEIGHT} !important;
  background-image: url('/images/banner.webp');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Splash = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  min-height: calc(${HEADER_HEIGHT} * 0.4);
  color: ${BACKGROUND_COLOUR};
`;

const BannerHeader = styled.h1`
  font-size: ${HUGE_FONT};
`;

const SubHeader = styled.h3`
  font-size: ${LARGE_FONT};
  font-color: ${PRIMARY_FONT_COLOUR};
  margin: 0;
`;

const MainHeader = styled.h1`
  font-size: ${HUGE_FONT};
  color: ${PRIMARY_COLOUR};
`;

const CardHeader = styled.h1`
  font-size: ${LARGE_FONT};
  color: #fff;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  margin: 10px;
`;

const HorizontalRule = styled.hr`
  background: ${TERTIARY_COLOUR};
  margin-left: 0;
  height: 5px;
  width: 30%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  color: white !important;
`;

const WhiteP = styled(StyledP)`
  color: white;
`;

const StepContainer = props => (
  <Step>
    <SubHeader>{props.title}</SubHeader>
    <HorizontalRule />
    {props.children}
  </Step>
);

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <ImageHeader>
          {/* <Img src='images/banner.webp' height={'10vh'} width={'100vw'} /> */}
          <Splash>
            <Container>
              <BannerHeader as="h1">Online Shops Grant Program</BannerHeader>
              <p>
                Small and medium-sized businesses are vital to British Columbia’s economy. The Online Shops grantprogram
                is investing up to $12 million to help small- and medium-size businesses throughout B.C. movetheir
                business model online.
              </p>
            </Container>
          </Splash>
        </ImageHeader>

        <Container>
          <StyledContainer>
            <SubHeader>On this page:</SubHeader>
            <NavigationUl>
              <li>How the program works</li>
              <li>Application deadlines</li>
              <li>Determine your eligibility</li>
              <li>Submit your application</li>
              <li>Program guide</li>
              <li>Frequently asked questions</li>
              <li>Contact us</li>
            </NavigationUl>

            <MainHeader>How the program works</MainHeader>
            <StyledP>
              The Online Shops grant program will give Indigenous and non-Indigenous businesses funding to createan
              online shop and/or improve their e-commerce experience to attract new local customers and expandto new
              markets. The grant will pay for up to 75% of eligible expenses, up to a maximum of $7,500 perbusiness.
            </StyledP>
            <StyledP>
              The program supports a rapid response for businesses, and is accepting applications from businessesready
              to start and finish their work in 12-weeks.
            </StyledP>
            <SubHeader>Please note:</SubHeader>
            <StyledUl>
              <li>
                Up-to 25% of funds will be reserved for Indigenous businesses and businesses operating outsideof the
                lower mainland and greater Victoria.
              </li>
              <li>The funds must be used to hire B.C.-based company(ies) to do the online store development.</li>
            </StyledUl>

            {/* *******************************************FIRST CARD******************************************* */}

            <Card fluid>
              <Card.Content className="bg-secondary">
                <CardHeader>The program application has three steps</CardHeader>
              </Card.Content>
              <StepsContainer>
                <StepContainer title="Step 1:">
                  <StyledP>
                    Develop a grant proposal that indicates how you plan to use the funds. Businesses are expectedto
                    show a cost estimate that includes how much funding you need and how the money will be spent.
                  </StyledP>
                </StepContainer>
                <StepContainer title="Step 2:">
                  <StyledP>
                    Complete the online application showing government that you meet the eligibility criteria andsubmit
                    their online shop proposal.
                  </StyledP>
                </StepContainer>
                <StepContainer title="Step 3:">
                  <StyledP>Applicants will be contacted within 3 weeks with the outcome of their application.</StyledP>
                </StepContainer>
              </StepsContainer>
            </Card>

            <MainHeader>Application deadlines</MainHeader>
            <StyledP>
              Program intake is open until the funds have been fully subscribed. The funding will be given on
              afirst-come first-serve basis to small- and medium-sized B.C. businesses to rapidly adapt to
              changingconsumer behaviour due to COVID-19.
            </StyledP>
            <StyledP>
              For the projects to have an immediate benefit, the funds will be given as soon as a business has
              beenapproved for the program.
            </StyledP>

            <MainHeader>Determine your eligibility</MainHeader>
            <StyledP>Review the following criteria to determine if your business is eligible for the program.</StyledP>

            {/* *******************************************SECOND CARD******************************************* */}

            <Card fluid>
              <Card.Content className="bg-secondary">
                <CardHeader>Applicants must meet ​all of the following ​general eligibility criteria:​</CardHeader>
              </Card.Content>

              <Card.Content>
                <StyledUl>
                  <li>The business is owned by a B.C. resident or residents;</li>
                  <li>The business’s sole or primary operations are located in B.C.</li>
                  <li>The business:</li>
                  <StyledUl>
                    <li>Is currently operating;</li>
                    <li>Is registered in B.C.;</li>
                    <li>Employs less than 149 B.C. residents;</li>
                    <li>Pays taxes in BC</li>
                    <li>Maintains a</li>
                    <StyledUl>
                      <li>Business license number</li>
                      <li>GST number</li>
                      <li>PST and WorkSafeBC number (where applicable)</li>
                    </StyledUl>
                    <li>Generated sales of more than $30,000 in the past year</li>
                    <li>
                      Has repeatable products, or in the case of artists and jewellers, individual items that have
                      slight differences (i.e. paintings or rings)
                    </li>
                    <li>
                      Does not currently have an online store or has an online store that has no more than three of the
                      five identified online store features
                    </li>
                    <StyledUl>
                      <li>Customer registration and information security features</li>
                      <li>Shopping cart and order management capabilities</li>
                      <li>
                        Payment processing options including application of appropriate taxes and shipping costs at time
                        of ordering
                      </li>
                      <li>Product catalogue, search and inventory status</li>
                      <li>Website analytics and reporting capabilities</li>
                    </StyledUl>
                  </StyledUl>
                </StyledUl>

                <Message className="bg-secondary">
                  <Row>
                    <Icon name="help" size="large" style={{ marginRight: '10px' }} />
                    <WhiteP>
                      Businesses will be asked to declare access to other programs funded by the provincial or federal
                      government such as Buy BC Partnership Program E-commerce Funding Stream or Canada United Small
                      Business Relief Fund.
                    </WhiteP>
                  </Row>
                </Message>
              </Card.Content>
              <Card.Content className="bg-secondary">
                <CardHeader>Eligible Expenses</CardHeader>
              </Card.Content>
              <Card.Content>
                <StyledP>Funding will help cover up to 75% of costs for expenses like:</StyledP>
                <StyledUl>
                  <li>Service provider costs:</li>
                  <StyledUl>
                    <li>Platform and website development</li>
                    <li>Copy and online content writing</li>
                    <li>Developing an online inventory of goods and products</li>
                    <li>Pictures (including hiring a photographer), stock photos or related graphics needed</li>
                  </StyledUl>
                  <li>Digital customer costs:</li>
                  <StyledUl>
                    <li>E-commerce platform subscription (up to 1 year)</li>
                    <li>Online advertising (up to 1 year)</li>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Creating banners and other embedded advertising</li>
                  </StyledUl>
                  <li>Staff training to manage the online shop, learn about digital marketing, etc.</li>
                </StyledUl>

                <StyledP>
                  Successful applicants must use one or more B.C.-based service providers to build or improve their
                  online store. The only non-B.C.-based eligible expenses include:
                </StyledP>
                <StyledUl>
                  <li>Platform subscription costs</li>
                  <li>Purchase of online photos and graphics</li>
                  <li>Purchase of online promotional space such as Facebook ads</li>
                </StyledUl>
              </Card.Content>

              <Card.Content className="bg-secondary">
                <CardHeader>Mandatory online shop features</CardHeader>
              </Card.Content>

              <Card.Content>
                <StyledP>At the end of the 12-weeks your online shop will need to have:</StyledP>
                <StyledUl>
                  <li>Customer registration and information security features</li>
                  <li>Shopping cart and order management capabilities</li>
                  <li>Payment processing options including taxes and shipping costs at time of ordering</li>
                  <li>Product catalogue, search and inventory status</li>
                  <li>Website analytics and reporting capabilities</li>
                </StyledUl>
              </Card.Content>
            </Card>

            <MainHeader>Submit your application</MainHeader>
            <SubHeader>Before applying</SubHeader>
            <StyledP>
              Please review the eligibility information on this page. If you have any questions, please use the contact
              form at the bottom of this page for support before submitting your application. Incomplete applications
              will not be reviewed.
            </StyledP>
            <SubHeader>You will be asked to provide:</SubHeader>
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

            <Message className="bg-secondary">
              <Row>
                <Icon name="help" size="large" style={{ marginRight: '10px' }} />
                <WhiteP>
                  Note: All above mentioned documents must be provided to Alacrity Canada if application is
                  conditionally approved before funds can be disbursed.
                </WhiteP>
              </Row>
            </Message>

            <Link href="/apply/1" passHref>
              <StyledButton>APPLY</StyledButton>
            </Link>

            <Header as="h3">
              <strong>Receive funding to build your online store</strong>
            </Header>
            <StyledP>
              Successful applicants will receive funding within 2-3 weeks of approval and are required to develop or
              upgrade their online shop within 12-weeks of receiving the grant.
            </StyledP>

            <Card fluid>
              <Card.Content className="bg-secondary">
                <CardHeader>General Information​</CardHeader>
              </Card.Content>

              <Card.Content>
                <StyledUl>
                  <li>
                    Before completing, please read the <a href="">Online Shops Grant Program Guide</a>
                  </li>
                  <li>
                    Before submitting your application, please ensure that all required information and attachments are
                    completed and attached to your application. Incomplete applications will not be evaluated
                  </li>
                  <li>Meeting the criteria does not guarantee that the application will be approved for funding.</li>
                  <li>Upon review, additional information may be requested from the applicant.</li>
                  <li>Only one application per business will be considered.</li>
                  <li>Applications are evaluated within three weeks.</li>
                  <li>
                    By submitting this application, you allow the Program to share information with BC Provincial
                    Government.
                  </li>
                  <li>
                    To foster information sharing, applicant information may be shared with other levels of government
                    and funding programs. Personal information is collected for administration of the Online Shops Grant
                    including for confirming residency, under the Personal Information Act. If you have questions about
                    the collection you may contact:{' '}
                  </li>
                </StyledUl>
              </Card.Content>

              <Card.Content className="bg-secondary">
                <CardHeader>Submit Your Application</CardHeader>
              </Card.Content>
              <Card.Content>
                <StyledP>
                  You are encouraged to submit your application, along with your grant proposal and additional documents
                  early.
                </StyledP>
                <Link href="/apply" passHref>
                  <Button as="h2" inverted className="pointer">
                    TEST
                  </Button>
                </Link>
              </Card.Content>
            </Card>

            <StyledAnchor href="/files/program_guide.pdf">PROGRAM GUIDE</StyledAnchor>
            <br />
            <br />
            <StyledAnchor href="/files/faqs.pdf">FAQS</StyledAnchor>

            <Header as="h3">
              <strong>CONTACT US</strong>
            </Header>
            <StyledP>Please contact us directly to ask questions. We will respond within BUSINESS_DAYS days.</StyledP>
            <StyledUl>
              <li>250-xxx-xxxx</li>
              <li>https://www2.gov.bc.ca</li>
            </StyledUl>
          </StyledContainer>
        </Container>
      </>
    );
  }
}
