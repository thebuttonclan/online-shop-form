import styled from 'styled-components';

const UnderlineBold = styled.span`
  text-decoration: underline;
  font-weight: 600;
`;

const Highlight = ({ text, children }) => <UnderlineBold>{children || text}</UnderlineBold>;

export default Highlight;
