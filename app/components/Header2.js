import styled from 'styled-components';
import { LARGE_FONT, SUBHEADING_WEIGHT, MIN_PADDING } from 'theme';

export default styled.p`
  font-size: ${LARGE_FONT};
  font-weight: ${SUBHEADING_WEIGHT};
  padding: ${MIN_PADDING} ${MIN_PADDING} ${MIN_PADDING} 0;
  margin: 0;
`;
