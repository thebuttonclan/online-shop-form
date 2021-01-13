import styled from 'styled-components';
import { LARGE_FONT, PRIMARY_FONT_COLOUR, SUBHEADING_WEIGHT, MIN_PADDING } from 'theme';

export default styled.p`
  font-size: ${LARGE_FONT};
  font-color: ${PRIMARY_FONT_COLOUR};
  font-weight: ${SUBHEADING_WEIGHT};
  padding: ${MIN_PADDING};
  margin: 0;
`;
