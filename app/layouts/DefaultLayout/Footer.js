import Link from 'next/link';
import { Container, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR } from 'theme';

const StyledFooter = styled.footer`
  background-color: ${PRIMARY_COLOUR};
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 20vh;

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
            <Link href="/resources/copyright" passHref>
              <p>
                Copyright <Icon name="copyright outline" size="small" /> Alacrity Canada 2020
              </p>
            </Link>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
