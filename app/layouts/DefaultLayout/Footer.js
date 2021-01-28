import { Container, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from 'theme';
import HRefLink from 'components/HrefLink';

const StyledFooter = styled.footer`
  background-color: ${PRIMARY_COLOUR};
  color: #fff;
  min-height: 10vh;
  border-top: 5px solid ${SECONDARY_COLOUR};

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

const SFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  color: white !important;
  padding-bottom: 20px;
  padding-top: 20px;

  & a {
    color: white !important;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SFlexBetween>
          <FooterItem>
            Copyright <Icon name="copyright outline" size="small" /> Alacrity Canada 2021
          </FooterItem>
          <FooterItem>
            <HRefLink href="/privacy">Privacy Policy</HRefLink>
          </FooterItem>
        </SFlexBetween>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
