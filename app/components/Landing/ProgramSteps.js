import CardHeader from 'components/StyledCardHeader';
import StyledCard from 'components/StyledCard';
import styled from 'styled-components';
import StyledP from 'components/StyledP';
import Header2 from 'components/Header2';
import { MIN_PADDING, TERTIARY_COLOUR } from 'theme';

const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HorizontalRule = styled.hr`
  background: ${TERTIARY_COLOUR};
  margin-left: ${MIN_PADDING};
  height: 5px;
  width: 30%;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  margin: 10px;
`;

const StepContainer = props => (
  <Step>
    <Header2>{props.title}</Header2>
    <HorizontalRule />
    {props.children}
  </Step>
);

function ProgramSteps() {
  return (
    <StyledCard>
      <CardHeader text="The program application has three steps" />
      <StepsContainer>
        <StepContainer title="Step 1:">
          <StyledP>
            Develop a grant proposal that indicates how you plan to use the funds. Businesses are expectedto show a cost
            estimate that includes how much funding you need and how the money will be spent.
          </StyledP>
        </StepContainer>
        <StepContainer title="Step 2:">
          <StyledP>
            Complete the online application showing government that you meet the eligibility criteria andsubmit their
            online shop proposal.
          </StyledP>
        </StepContainer>
        <StepContainer title="Step 3:">
          <StyledP>Applicants will be contacted within 3 weeks with the outcome of their application.</StyledP>
        </StepContainer>
      </StepsContainer>
    </StyledCard>
  );
}

export default ProgramSteps;
