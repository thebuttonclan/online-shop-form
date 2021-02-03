import styled from 'styled-components';
import CardHeader from 'components/StyledCardHeader';
import StyledCard from 'components/StyledCard';
import StyledP from 'components/StyledP';
import { Card } from 'semantic-ui-react';
import StyledUl from 'components/StyledUl';
import InfoMessage from 'components/InfoMessage';

const MaxWidthP = styled(StyledP)`
  max-width: 675px;
`;

function ProgramSteps() {
  return (
    <StyledCard>
      <CardHeader text="Applicants must meet ​all of the following ​general eligibility criteria:" />

      <Card.Content>
        <StyledUl>
          <li>The business is owned by a B.C. resident or residents;</li>
          <li>The business’s sole or primary operations are located in B.C.</li>
          <li>The business:</li>
          <StyledUl>
            <li>Is currently operating;</li>
            <li>Is registered in B.C.;</li>
            <li>Employs less than 149 B.C. residents;</li>
            <li>Pays taxes in B.C.</li>
            <li>Maintains a</li>
            <StyledUl>
              <li>Business license number</li>
              <li>GST number</li>
              <li>PST and WorkSafeBC number (where applicable)</li>
            </StyledUl>
            <li>
              Generated sales of more than $30,000 in the past year (in 2019, or in the year preceding the application)
            </li>
            <li>
              Has repeatable products, or in the case of artists and jewellers, individual items that have slight
              differences (i.e. paintings or rings)
            </li>
            <li>
              Does not currently have an online store or has an online store that has no more than three of the five
              identified online store features
            </li>
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
          </StyledUl>
        </StyledUl>

        <InfoMessage
          text={`Businesses will be asked to declare access to other programs funded by the provincial or federal government such as Buy BC Partnership Program E-commerce Funding Stream or Canada United Small Business Relief Fund.`}
        />
      </Card.Content>
      <CardHeader text="Eligible Expenses" />
      <Card.Content>
        <MaxWidthP>Funding will help cover up to 75% of costs for expenses such as:</MaxWidthP>
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

        <MaxWidthP>
          Successful applicants must use one or more B.C.-based service provider(s) to build or improve their online
          store. The only non-B.C.-based eligible expenses include:
        </MaxWidthP>
        <StyledUl>
          <li>Platform subscription costs</li>
          <li>Purchase of online photos and graphics</li>
          <li>Purchase of online promotional space such as Facebook ads</li>
        </StyledUl>
      </Card.Content>

      <CardHeader text="Mandatory online shop features" />

      <Card.Content>
        <MaxWidthP>At the end of the 12-weeks your online shop will need to have:</MaxWidthP>
        <StyledUl>
          <li>Customer registration and information security features</li>
          <li>Shopping cart and order management capabilities</li>
          <li>Payment processing options including taxes and shipping costs at time of ordering</li>
          <li>Product catalogue, search and inventory status</li>
          <li>Website analytics and reporting capabilities</li>
        </StyledUl>
      </Card.Content>
    </StyledCard>
  );
}

export default ProgramSteps;
