import { LARGE_FONT } from 'theme';
import styled from 'styled-components';

const SemanticStyleLabel = styled.h1`
  font-size: ${LARGE_FONT};
  margin-top: 20px !important;
  ${props =>
    !props.required
      ? ''
      : `
    &::after{
      content: "*";
      display: inline-block;
      vertical-align: top;
      margin: -.2em 0 0 .2em;
      color: #db2828;
    }
  `}
`;

export default SemanticStyleLabel;
