import StyledUl from 'components/StyledUl';
import styled from 'styled-components';
import { SECONDARY_FONT_COLOUR, SUBHEADING_WEIGHT } from 'theme';

const NavigationUl = styled(StyledUl)`
  & li {
    color: ${SECONDARY_FONT_COLOUR};
    font-weight: ${SUBHEADING_WEIGHT};
  }
`;

export default NavigationUl;
