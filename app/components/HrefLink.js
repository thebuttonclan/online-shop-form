import Link from 'next/link';

export default function HrefLink(props) {
  const { children, blank, ...otherProps } = props;
  return (
    <Link {...otherProps} passhref>
      <a className="link" target={blank ? '_blank' : ''}>
        {children}
      </a>
    </Link>
  );
}
