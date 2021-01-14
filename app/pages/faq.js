import React, { Component } from 'react';
import { Accordion, Icon, Divider, Header, Container } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 2em;
  margin-left: 2em;
  margin-right: 2em;
`;

const StyledHeader = styled(Header)`
  color: #16152b;
  font-weight: normal;
  font-size: 3rem;
`;

const StyledIcon = styled.div`
  margin-left: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const StyledAnchor = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  display: block;
  font-size: 1.2em;
`;

const StyledShowAllWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4e8cbe;
`;

const StyledAccordionTitle = styled(Accordion.Title)`
  display: flex;
  justify-content: space-between;
`;

const StyledQuestion = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #16152b;
`;

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
    const newIndexes =
      activeIndexs.length >= 1 ? [] : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    this.setState({ activeIndexs: newIndexes });
  };

  render() {
    const { activeIndexs } = this.state;
    return (
      <Container>
        {' '}
        <StyledContainer>
          <StyledHeader as="h1">FAQ</StyledHeader>

          <StyledShowAllWrapper>
            <div></div>
            <p onClick={this.handleAllClick}>{activeIndexs.length >= 1 ? 'Hide all' : 'Show all'}</p>
          </StyledShowAllWrapper>
          <Divider />

          <Accordion>
            <StyledAccordionTitle active={activeIndexs.includes(0)} index={0} onClick={this.handleAccordionClick}>
              <StyledQuestion>What expenses are ineligible?</StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(0) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(0)}>
              <StyledP>
                Funding is not to be used for ongoing e-commerce activities that have already started or will commence
                before the StyledProject start date or for general website or IT upgrades. Further, it is not to be used
                for:
              </StyledP>
              <StyledUl>
                <li>Starting an e-commerce business which intends to sell products on behalf of other companies</li>
                <li>Adding non e-commerce web pages to existing websites</li>
                <li>Hosting an existing site</li>
                <li>Credit card processing fees</li>
                <li>Packaging materials for product shipping and related shipping costs</li>
              </StyledUl>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(1)} index={1} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                What does my business need to provide to demonstrate we’ve used a BC-based service provider?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(1) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(1)}>
              <StyledP>
                Eligible service providers can be demonstrated through their invoices of eligible expenses which include
                the company name, BC address, Business number and GST number.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(2)} index={2} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I have an e-commerce site. Am I still eligible for funding to make it better?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(2) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(2)}>
              <StyledP>
                Yes, if your current online store has no more than 3 of the 5 identified online store features, see
                below:
              </StyledP>
              <StyledUl>
                <li>Customer registration and information security features</li>
                <li>Shopping cart and order management capabilities</li>
                <li>
                  Payment processing options including application of appropriate taxes and shipping costs at time of
                  ordering
                </li>
                <li>Product catalogue, search and inventory status</li>
                <li>Website analytics and reporting capabilities.</li>
              </StyledUl>
              <StyledP>
                The grant program is intended to get businesses online and to fully participate in the digital market
                place. This grant program is not intended for businesses that have more advanced e-commerce capabilities
                in place.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(3)} index={3} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I have received funding from other programs, including Buy BC Partnership Program E-commerce Funding
                Stream or Canada United Small Business Relief Fund. Am I still eligible?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(3) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(3)}>
              <StyledP>
                Yes. ​You will be required to declare that the programs have been complementary, and the costs covered
                by this program are towards expenses not covered by the other programs.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(4)} index={4} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I’ve already started to build/enhance my business’s e-commerce site. Are those expenses eligible?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(4) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(4)}>
              <StyledP>
                Only cost incurred to build or enhance online shops during the pre-determined program timelines will be
                eligible, i.e. within three months from when you receive your confirmation of eligibility and grant
                letter.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(5)} index={5} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I know a student that is able to build my online store for my business. Would they be an eligible
                BC-based service provider?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(5) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(5)}>
              <StyledP>Only those registered to do business in BC will be eligible as a service provider.</StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(6)} index={6} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I have an online store but need to add product pictures. Could I apply all the eligible funding toward a
                professional photographer?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(6) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(6)}>
              <StyledP>
                Funding is not to be used for ongoing e-commerce activities that have already started or will commence
                before the project start date or for general website or IT upgrades.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(7)} index={7} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I have an employee that recently completed the Marketing Bootcamp course. Can I use this program to pay
                them to build my online store?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(7) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(7)}>
              <StyledP>
                Employee salaries are not eligible expenses. The employee can build the online store, and the grant
                funds can be used towards other eligible expenses.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(8)} index={8} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                My business address is located outside of British Columbia, but I live in BC. Can I still apply?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(8) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(8)}>
              <StyledP>No. The program is for business with a local BC address only.</StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(9)} index={9} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                If my project expenses total to less than $7,500, do I still need to contribute my own business funds to
                the project?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(9) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(9)}>
              <StyledP>
                The grant covers 75% of project expenses, up to a maximum of $7,500. This means that even if your
                project costs are only $1,000 total, your company must cover 25% of the cost (25% of the project cost).
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(10)} index={10} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I have a friend in another province who provides digital marketing services on a contract basis. Can I
                use them as an eligible expense for my project?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(10) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(10)}>
              <StyledP>
                No. All contractors must be locally based in BC in order to be considered an eligible expense.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(11)} index={11} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                If I lose a receipt for any of my eligible expenses, can I still submit it as an eligible expense?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(11) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(11)}>
              <StyledP>
                No. All submitted expenses will require proof of service completed and proof of payment.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(12)} index={12} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                Can I send one of my staff to a training course related to digital marketing and submit the tuition as
                an eligible expense?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(12) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(12)}>
              <StyledP>Yes. Training costs for digital marketing are considered an eligible expense.</StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(13)} index={13} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                Can I apply for this funding if I have an at home business that is not registered in BC?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(13) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(13)}>
              <StyledP>
                No. All applicants are required to be a BC-based registered business with a business number to be
                considered for funding.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(14)} index={14} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                I have an online store but need to add product pictures. Could I apply all the eligible funding toward a
                professional photographer?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(14) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(14)}>
              <StyledP>
                It depends. If your online store that has no more than 3 of the 5 identified online store features, see
                below, you would be eligible for expenses toward a professional photographer.
              </StyledP>
              <StyledUl>
                <li>Customer registration and information security features</li>
                <li>Shopping cart and order management capabilities</li>
                <li>
                  Payment processing options including application of appropriate taxes and shipping costs at time of
                  ordering
                </li>
                <li>Product catalogue, search and inventory status</li>
                <li>Website analytics and reporting capabilities</li>
              </StyledUl>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(15)} index={15} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                Can I submit receipts for expenses that I incurred while setting up my online store prior to applying
                for this grant?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(15) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(15)}>
              <StyledP>
                Only cost incurred to build or enhance online shops during the pre-determined program timelines will be
                eligible, i.e. within three months from when you receive your confirmation of eligibility and grant
                letter.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(16)} index={16} onClick={this.handleAccordionClick}>
              <StyledQuestion>If I lose a receipt for any of my eligible expenses, will I be audited?</StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(16) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(16)}>
              <StyledP>
                Audits will be conducted mostly at random, if you do lose a receipt try to supply other evidence of the
                expense such as bank statement.
              </StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(17)} index={17} onClick={this.handleAccordionClick}>
              <StyledQuestion>Are the grant funds taxable revenue?</StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(17) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(17)}>
              <StyledP>Yes. The grant funds are taxable and should be reported on your corporate tax return.</StyledP>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(18)} index={18} onClick={this.handleAccordionClick}>
              <StyledQuestion>
                Where can I go for advice if I’m unsure what I need to do start a project to build an online shop for my
                business?
              </StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(18) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(18)}>
              <StyledP>
                Digital Economy: Rapid Response + Resiliency (DER3), program funded through Innovate BC, provides
                support to small-medium sized businesses, in any sector, enter or expand in the digital economy, through
                personalized advisory services to assess needs, recommend tools and solutions toward appropriate
                technology and connections to vetted digital service providers: local BC businesses that provide online
                services. For information and to register:
              </StyledP>
              <StyledAnchor href="https://innovatebc.ca/what-we-offer/connect-with-ex perts/der3/">
                https://innovatebc.ca/what-we-offer/connect-with-ex perts/der3/
              </StyledAnchor>
              <br />
              <StyledP>
                In the lower mainland, Greater Vancouver Board of Trade is a great resource through their Business
                Resiliency Series: E-Commerce Essentials for businesses looking for advice. For information:
              </StyledP>
              <StyledAnchor href="https://www.boardoftrade.com/events/individual-eve nts/1789-6567">
                https://www.boardoftrade.com/events/individual-eve nts/1789-6567
              </StyledAnchor>
            </Accordion.Content>

            <Divider />

            <StyledAccordionTitle active={activeIndexs.includes(19)} index={19} onClick={this.handleAccordionClick}>
              <StyledQuestion>Where can I go for advice in languages other than English?</StyledQuestion>
              <StyledIcon>
                <Icon name={activeIndexs.includes(19) ? 'minus' : 'plus'} />
              </StyledIcon>
            </StyledAccordionTitle>
            <Accordion.Content active={activeIndexs.includes(19)}>
              <StyledP>Resources tbd</StyledP>
            </Accordion.Content>
          </Accordion>
        </StyledContainer>
      </Container>
    );
  }
}
