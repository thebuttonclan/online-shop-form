import Link from 'next/link';

export default function HrefLink(props) {
  const { children, ...otherProps } = props;
  return (
    <Link {...otherProps} passhref>
      <a>{children}</a>
    </Link>
  );
}
