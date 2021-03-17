import React, { Component } from 'react';
import { Accordion, Icon, Divider, Header, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { DEFAULT_FONT_SIZE, PRIMARY_FONT } from 'theme';
import HrefLink from 'components/HrefLink';
import StyledUl from 'components/StyledUl';
import Header1 from 'components/Header1';

const StyledContainer = styled.div`
  padding: 2em;
`;

const StyledIcon = styled.div`
  margin-left: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledP = styled.p`
  font-size: ${DEFAULT_FONT_SIZE};
`;

const StyledAnchor = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  display: block;
  font-size: ${DEFAULT_FONT_SIZE};
`;

const StyledShowAllWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4e8cbe;
`;

const StyledAccordionTitle = styled(Accordion.Title)`
  display: flex;
  justify-content: space-between;
  font-family: ${PRIMARY_FONT} !important;
`;

const StyledQuestion = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #16152b;
`;

const ShowAllBtn = styled.p`
  cursor: pointer;
`;

const contents = [
  {
    question: 'What expenses are eligible?',
    content: (
      <>
        <StyledP>
          Funding recipients MUST use local B.C. service providers to complete contract work to build or improve their
          online store or online booking system. The only exception to this rule is when a service is provided entirely
          online, such as:
        </StyledP>
        <StyledUl>
          <li>Platform subscription</li>
          <li>Purchase of online photos and graphics</li>
          <li>Purchase of online promotional space such as Facebook ads</li>
        </StyledUl>
        <StyledP>
          Expenses related to the development, management and improvement of an online shop or online booking system and
          must support e-commerce (website only with an email and/or phone number is not an eligible expense), such as:
        </StyledP>
        <StyledUl>
          <li>
            Service provider costs:
            <StyledUl>
              <li>Development time for the platform (create new or substantially enhance)</li>
              <li>Pictures (including photographer), stock photos or related graphics required for site</li>
              <li>Copy and online content writing</li>
              <li>Online inventory of goods and products development</li>
            </StyledUl>
          </li>
          <li>
            Digital customer acquisition costs:
            <StyledUl>
              <li>Subscription costs of e-commerce platform (up to 1 year)</li>
              <li>Online advertising costs (up to 1 year)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Banner and other embedded advertising creation (e.g., social media sites, gaming, etc.)</li>
            </StyledUl>
          </li>
          <li>Staff training to manage own online shop and/or gain digital marketing skills </li>
        </StyledUl>
      </>
    ),
  },
  {
    question: 'What expenses are ineligible?',
    content: (
      <>
        <StyledP>
          Funding cannot be used for ongoing e-commerce activities that the business has already started before the
          project start date or for general website or IT upgrades.
          <br />
          Funds also cannot be used for:
        </StyledP>
        <StyledUl>
          <li>Starting an e-commerce business which intends to sell products on behalf of other companies</li>
          <li>Adding non e-commerce web pages to existing websites</li>
          <li>Hosting an existing site</li>
          <li>Credit card processing fees</li>
          <li>Packaging materials for product shipping and related shipping costs</li>
          <li>Staff salary costs</li>
        </StyledUl>
      </>
    ),
  },
  {
    question: 'Are non-profits eligible for this program?',
    content: (
      <>
        <StyledP>Yes, non-profit organizations are eligible if they meet the existing eligibility criteria.</StyledP>
      </>
    ),
  },
  {
    question:
      'What does my business need to provide to demonstrate we’ve used a B.C.-based service provider to build the online shop?',
    content: (
      <>
        <StyledP>
          You should obtain the company name, B.C. address, Business number and GST number before contracting them to
          your project to ensure the expenses are eligible. The information is provided to Alacrity Canada in the
          Expense Summary Report, and must be available in invoices for auditing purposes.
        </StyledP>
      </>
    ),
  },
  {
    question: 'I have an e-commerce site. Am I still eligible for funding to enhance it?',
    content: (
      <>
        <StyledP>
          Yes, if your current online store has no more than 3 of the 5 identified online store features optimized, i.e.
          requires substantial enhancements, see below:
        </StyledP>
        <StyledUl>
          <li>Customer registration and information security features</li>
          <li>Shopping cart and order management capabilities</li>
          <li>
            Payment processing options including application of appropriate taxes and shipping costs at time of ordering
          </li>
          <li>Product catalogue, search and inventory status</li>
          <li>Website analytics and reporting capabilities.</li>
        </StyledUl>
        <StyledP>
          Or, if your online booking system has no more than 3 of the 5 identified online booking system features
          optimized, i.e. needs substantial enhancements, see below:
        </StyledP>
        <StyledUl>
          <li>Customer registration and information security features</li>
          <li>Schedule navigation and reservation management capabilities</li>
          <li>Payment processing options including application of appropriate taxes</li>
          <li>Automated replies and reminders</li>
          <li>Website analytics and reporting capabilities</li>
        </StyledUl>
        <StyledP>
          The grant program is intended to get businesses online to fully participate in the digital market-place. The
          grant program is not intended for businesses that already have more advanced e-commerce capabilities in place.
        </StyledP>
      </>
    ),
  },
  {
    question:
      'I have received funding from other programs, including Buy BC Partnership Program E-commerce Funding Stream or Canada United Small Business Relief Fund. Am I still eligible?',
    content: (
      <>
        <StyledP>
          Yes. However, you will be required to declare that the programs are not used to pay the same expense twice,
          i.e. the funding provided through the Online Shops Program will be used toward expenses not covered by the
          other programs your business has participated in.
        </StyledP>
      </>
    ),
  },
  {
    question: 'I’ve already started to build/enhance my business’s e-commerce site. Are those expenses eligible?',
    content: (
      <>
        <StyledP>
          Only costs incurred to build or enhance your online shop during the program timelines will be eligible, i.e.
          the grant funding will cover eligible expenses to build or enhance your online shop or online booking system
          within 12-weeks from when you received confirmation of eligibility via the grant letter.
        </StyledP>
      </>
    ),
  },
  {
    question: `I know a student that is able to build my online store for my business. Would they be an eligible
    B.C.-based service provider?`,
    content: (
      <>
        <StyledP>Only those registered to do business in B.C. will be eligible as a service provider.</StyledP>
      </>
    ),
  },
  {
    question: `Can I use this program to pay an employee to build my online shop?`,
    content: (
      <>
        <StyledP>
          Employee salaries are not eligible expenses. The employee can build the online shop, and the grant funds can
          be used toward other eligible expenses.
        </StyledP>
      </>
    ),
  },
  {
    question: `My business address is located outside of British Columbia, but I live in B.C. Can I still apply?`,
    content: (
      <>
        <StyledP>No. The program is for businesses with a local B.C. address only.</StyledP>
      </>
    ),
  },
  {
    question: `If my project expenses total to less than $7,500, do I still need to contribute my own business funds to
    the project?`,
    content: (
      <>
        <StyledP>
          The grant covers 75% of project expenses, up to a maximum of $7,500. For example, if your project costs are
          only $1,000, your company must cover 25% of the project cost ($250) of the $1,000.
        </StyledP>
      </>
    ),
  },
  {
    question: `I have a friend in another province who provides digital marketing services on a contract basis. Can I
    use them as an eligible expense for my project?`,
    content: (
      <>
        <StyledP>
          No. All contractors must be locally based in B.C. and be registered to do business in B.C. in order to be
          considered an eligible expense.
        </StyledP>
      </>
    ),
  },
  {
    question: `If I lose a receipt for any of my eligible expenses, can I still submit it as an eligible expense?`,
    content: (
      <>
        <StyledP>No. All submitted expenses will require proof of service completed and proof of payment.</StyledP>
      </>
    ),
  },
  {
    question: `Can I send one of my staff to a training course related to digital marketing and submit the tuition as
    an eligible expense?`,
    content: (
      <>
        <StyledP>Yes. Training costs for digital marketing are considered an eligible expense.</StyledP>
      </>
    ),
  },
  {
    question: `Can I apply for this funding if I have an at-home business that is not registered in B.C?`,
    content: (
      <>
        <StyledP>
          No. All applicants are required to be a B.C.-based and be registered to do business in B.C. to be considered
          for funding.
        </StyledP>
      </>
    ),
  },
  {
    question: `I have an online shop but need to add product pictures. Could I apply all the eligible funding toward a
    professional photographer?`,
    content: (
      <>
        <StyledP>
          It depends. If your online shop has no more than 3 of the 5 identified online shop features below, you would
          be eligible for expenses toward a professional photographer:
        </StyledP>
        <StyledUl>
          <li>Customer registration and information security features</li>
          <li>Shopping cart and order management capabilities</li>
          <li>
            Payment processing options including application of appropriate taxes and shipping costs at time of ordering
          </li>
          <li>Product catalogue, search and inventory status</li>
          <li>Website analytics and reporting capabilities</li>
        </StyledUl>
      </>
    ),
  },
  {
    question: `Can I submit receipts for expenses that I incurred while setting up my online shop prior to applying for
    this grant?`,
    content: (
      <>
        <StyledP>
          The grant funding will cover eligible expenses to build or enhance your online shop within 12-weeks from when
          you received confirmation of eligibility via the grant letter.
        </StyledP>
      </>
    ),
  },
  {
    question: `If I lose a receipt for any of my eligible expenses, will I be audited?`,
    content: (
      <>
        <StyledP>
          Audits will be randomly conducted. If you do lose original receipts, other evidence of the expense, such as
          bank statements, may be considered.
        </StyledP>
      </>
    ),
  },
  {
    question: `Are the grant funds taxable revenue?`,
    content: (
      <>
        <StyledP>Yes. The grant funds are taxable and should be reported on your corporate tax return.</StyledP>
      </>
    ),
  },
  {
    question: `Where can I go for advice if I’m unsure what I need to do start a project to build an online shop for my
    business?`,
    content: (
      <>
        <StyledP>
          The Digital Economy: Rapid Response + Resiliency (DER3), program funded through Innovate BC, provides support
          for small-medium sized businesses in any sector to enter or expand in the digital economy, through
          personalized advisory services to assess needs, recommend tools and solutions toward appropriate technology
          and connections to vetted digital service providers: local B.C. businesses that provide online services. For
          information and to register:
        </StyledP>
        <StyledAnchor href="https://innovatebc.ca/what-we-offer/connect-with-ex perts/der3/">
          https://innovatebc.ca/what-we-offer/connect-with-experts/der3/
        </StyledAnchor>
        <br />
        <StyledP>
          In the lower mainland, Greater Vancouver Board of Trade is a great resource through their Business Resiliency
          Series: E-Commerce Essentials for businesses looking for advice. For information:
        </StyledP>
        <StyledAnchor href="https://www.boardoftrade.com/events/individual-eve nts/1789-6567">
          https://www.boardoftrade.com/events/individual-eve nts/1789-6567
        </StyledAnchor>
      </>
    ),
  },
];

export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndexs: [],
    };
  }

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndexs } = this.state;
    const newIndex = activeIndexs;

    const currentIndexPosition = activeIndexs.indexOf(index);
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(index);
    }
    this.setState({ activeIndexs: newIndex });
  };

  handleAllClick = () => {
    const { activeIndexs } = this.state;
    const newIndexes = activeIndexs.length >= 1 ? [] : contents.map((a, i) => i);
    this.setState({ activeIndexs: newIndexes });
  };

  render() {
    const { activeIndexs } = this.state;
    return (
      <Container>
        <Helmet>
          <title>Frequently Asked Questions</title>
        </Helmet>
        <StyledContainer>
          <Header1 as="h1">FAQ</Header1>
          <StyledShowAllWrapper>
            <div></div>
            <ShowAllBtn onClick={this.handleAllClick}>{activeIndexs.length >= 1 ? 'Hide all' : 'Show all'}</ShowAllBtn>
          </StyledShowAllWrapper>
          <Divider />

          <Accordion>
            {contents.map((content, i) => (
              <>
                <StyledAccordionTitle active={activeIndexs.includes(i)} index={i} onClick={this.handleAccordionClick}>
                  <StyledQuestion>{content.question}</StyledQuestion>
                  <StyledIcon>
                    <Icon name={activeIndexs.includes(i) ? 'minus' : 'plus'} />
                  </StyledIcon>
                </StyledAccordionTitle>
                <Accordion.Content active={activeIndexs.includes(i)}>{content.content}</Accordion.Content>
                <Divider />
              </>
            ))}
          </Accordion>
        </StyledContainer>
      </Container>
    );
  }
}
