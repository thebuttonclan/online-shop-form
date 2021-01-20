import Link from 'next/link';
import styled from 'styled-components';

const Anchor = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function HrefLink(props) {
  const { children, blank, ...otherProps } = props;
  return (
    <Link {...otherProps} passhref>
      <Anchor target={blank ? '_blank' : ''}>{children}</Anchor>
    </Link>
  );
}
