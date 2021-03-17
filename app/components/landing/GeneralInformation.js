import CardHeader from 'components/StyledCardHeader';
import StyledCard from 'components/StyledCard';
import StyledP from 'components/StyledP';
import { Card } from 'semantic-ui-react';
import StyledUl from 'components/StyledUl';
import HrefLink from 'components/HrefLink';
import InfoMessage from 'components/InfoMessage';
import Highlight from 'components/Highlight';
import styled from 'styled-components';
import { PRIMARY_COLOUR } from 'theme';

const ApplyButton = styled.button`
  background-color: ${PRIMARY_COLOUR};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 30px 60px;
  margin: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: gray;
    &:hover {
      opacity: 1;
      cursor: default;
    }
  }
`;

const MaxWidthP = styled(StyledP)`
  max-width: 675px;
`;

function GeneralInformation({ canSubmit }) {
  return (
    <StyledCard>
      <CardHeader text="Application Process" />

      <Card.Content>
        <StyledUl>
          <li>
            Before completing, please read the{' '}
            <HrefLink href="/files/program_guide.pdf" blank>
              Launch Online Grant Program Guide
            </HrefLink>
          </li>
          <li>
            Before submitting your application, please ensure that all required information is completed. Incomplete
            applications cannot be approved to receive a grant.
          </li>
          <li>Meeting the criteria does not guarantee that the application will be approved for funding.</li>
          <li>Upon review, additional information may be requested from the applicant.</li>
          <li>Only one application per business will be considered.</li>
          <li>Applications are evaluated within three weeks.</li>
          <li>By submitting this application, you allow the Program to share information with the B.C. Government.</li>
          <li>
            To foster information sharing, applicant information maybe shared with other levels of government and
            funding programs.
          </li>
          <li>
            Personal information is collected for administration of the Launch Online Grant program including for
            confirming residency, under the Personal Information Protection Act. If you have questions about the
            collection you may contact Alacrity Canada at 844-487-1266 or{' '}
            <HrefLink href="mailto:info@launchonline.ca">info@launchonline.ca</HrefLink>
          </li>
        </StyledUl>
      </Card.Content>

      <CardHeader text="Submit Your Application" />
      <Card.Content>
        <MaxWidthP>
          You are encouraged to submit your application, along with your grant proposal and additional documents as
          early as possible.
        </MaxWidthP>
        <InfoMessage icon={false}>
          Businesses that applied previously but did not met the eligibility criteria will be reassessed against the new
          criteria. The applicant will be contacted if their application meets the new criteria. Your{' '}
          <Highlight>application does not need to be resubmitted,</Highlight> and you will not lose your place in the
          application queue due to reassessment.
        </InfoMessage>
        <HrefLink href="/apply/1">
          <ApplyButton className="pointer" disabled={!canSubmit}>
            BEGIN APPLICATION
          </ApplyButton>
        </HrefLink>
      </Card.Content>
    </StyledCard>
  );
}

export default GeneralInformation;
