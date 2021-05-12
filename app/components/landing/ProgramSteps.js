import { Grid } from 'semantic-ui-react';
import CardHeader from 'components/StyledCardHeader';
import StyledCard from 'components/StyledCard';
import styled from 'styled-components';
import StyledP from 'components/StyledP';
import Header2 from 'components/Header2';
import { PRIMARY_COLOUR } from 'theme';

const HorizontalRule = styled.hr`
  background: ${PRIMARY_COLOUR};
  margin: 0;
  height: 7px;
  width: 100px;
  border: none;
`;

const PaddingGrid = styled(Grid)`
  padding: 0 1em !important;
`;

const steps = [
  {
    title: 'Step 1:',
    text: 'Develop a grant proposal that explains how you plan to use the funds. Businesses need to show a cost estimate that includes how much funding you need and how the money will be spent.',
  },
  {
    title: 'Step 2:',
    text: 'Complete the online application demonstrating that you meet the eligibility criteria and submit your online shop proposal.',
  },
  {
    title: 'Step 3:',
    text: 'Applicants will be contacted within three weeks with the outcome of their application.',
  },
];

function ProgramSteps() {
  return (
    <StyledCard>
      <CardHeader text="The program application has three steps" />
      <PaddingGrid columns="three" divided stackable>
        <Grid.Row>
          {steps.map(step => (
            <Grid.Column key={step.title}>
              <Header2>{step.title}</Header2>
              <HorizontalRule />
              <StyledP>{step.text}</StyledP>
            </Grid.Column>
          ))}
        </Grid.Row>
      </PaddingGrid>
    </StyledCard>
  );
}

export default ProgramSteps;
