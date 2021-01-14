import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const SemanticStyleLabel = styled(Form.Label)`
  font-weight: bold;
  font-size: 0.92857143em;

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
