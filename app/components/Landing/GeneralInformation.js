import CardHeader from 'components/StyledCardHeader';
import StyledCard from 'components/StyledCard';
import StyledP from 'components/StyledP';
import { Card } from 'semantic-ui-react';
import StyledUl from 'components/StyledUl';
import Link from 'next/link';
import styled from 'styled-components';
import { SECONDARY_FONT_COLOUR } from 'theme';

const ApplyButton = styled.button`
  background-color: ${SECONDARY_FONT_COLOUR};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 30px 60px;
  margin: 20px;
`;

function GeneralInformation() {
  return (
    <StyledCard>
      <CardHeader text="General Information" />

      <Card.Content>
        <StyledUl>
          <li>
            Before completing, please read the{' '}
            <Link href="/program-guide" passhref>
              Online Shops Grant Program Guide
            </Link>
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
            By submitting this application, you allow the Program to share information with BC Provincial Government.
          </li>
          <li>
            To foster information sharing, applicant information may be shared with other levels of government and
            funding programs. Personal information is collected for administration of the Online Shops Grant including
            for confirming residency, under the Personal Information Act. If you have questions about the collection you
            may contact:{' '}
          </li>
        </StyledUl>
      </Card.Content>

      <CardHeader text="Submit Your Application" />
      <Card.Content>
        <StyledP>
          You are encouraged to submit your application, along with your grant proposal and additional documents early.
        </StyledP>
        <Link href="/apply/1" passHref>
          <ApplyButton className="pointer">BEGIN APPLICATION</ApplyButton>
        </Link>
      </Card.Content>
    </StyledCard>
  );
}

export default GeneralInformation;
