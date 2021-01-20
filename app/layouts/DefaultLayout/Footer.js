import { Container, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR } from 'theme';
import HrefLink from 'components/HrefLink';

const alacrityAspectRatio = 322 / 1000;
const sbcAspectRatio = 255 / 1043;
const bcAspectRatio = 523 / 554;

const StyledFooter = styled.footer`
  background-color: ${PRIMARY_COLOUR};
  color: #fff;
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

const Copyright = styled.div`
  color: white !important;
  padding-top: 20px;
`;

const Logo = styled.img`
  width: 20%;
  height: ${props => `calc(${props.aspect} * 20%)`};
  min-width: 100px;
  min-height: ${props => `calc(${props.aspect} * 100px)`};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <HrefLink href="/resources/copyright">
          <Copyright>
            Copyright <Icon name="copyright outline" size="small" /> Alacrity Canada 2020
          </Copyright>
        </HrefLink>
        <LogoContainer>
          <Logo src="/icons/alacrity_black.png" alt="Alacrity Canada" aspect={alacrityAspectRatio} />
          <Logo src="/icons/bc_vertical.png" alt="Government of British Columbia" aspect={bcAspectRatio} />
          <Logo src="/icons/BCID-StrongerBC-rgb-rev.jpg" alt="Stronger BC" aspect={sbcAspectRatio} />
        </LogoContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
