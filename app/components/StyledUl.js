import styled from 'styled-components';
import { MIN_PADDING } from 'theme';

export default styled.ul`
  margin-left: 0.5em;
  padding-bottom: ${MIN_PADDING};

  & li {
    margin-bottom: 0.6em;
  }
`;
