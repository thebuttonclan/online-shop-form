import Link from 'next/link';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 46px;

  & ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    color: #fff;
    list-style: none;
    align-items: center;
    height: 100%;
  }

  & ul li a {
    font-size: 0.9em;
    font-weight: normal; /* 400 */
    color: #fff;
    border-right: 1px solid #4b5e7e;
    padding-left: 5px;
    padding-right: 5px;
  }

  & :focus {
    outline: 4px solid #3b99fc;
    outline-offset: 1px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <ul>
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/resources/disclaimer" passHref>
              Disclaimer
            </Link>
          </li>
          <li>
            <Link href="/resources/privacy" passHref>
              Privacy
            </Link>
          </li>
          <li>
            <a
              href="https://www2.gov.bc.ca/gov/content/home/accessible-government"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility
            </a>
          </li>
          <li>
            <Link href="/resources/copyright" passHref>
              Copyright
            </Link>
          </li>
          <li>
            <Link href="/resources/contact" passHref>
              Contact Us
            </Link>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
