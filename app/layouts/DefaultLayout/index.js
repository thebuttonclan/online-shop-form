// see https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js as a reference

import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import { Container, Icon, Image, Menu, Segment, Sidebar, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR, SUBHEADING_WEIGHT } from 'theme';
import HrefLink from 'components/HrefLink';
import Footer from './Footer';

const TITLE = 'Online Shops Grant Program';
const bcidSymbol = `/images/bcid-symbol-rev.svg`;
const bcidLogoRev = `/images/bcid-logo-rev-en.svg`;
const logo = `/icons/osgp-white-orage.svg`;

const TOP_HEIGHT = '120px';

const HEADER_LINKS = [
  { title: 'HOME', to: '/' },
  { title: 'FAQ', to: '/faq' },
  { title: 'PROGRAM GUIDE', to: '/program-guide' },
  { title: 'CONTACT US', to: '#contact' },
];

const { MediaContextProvider, Media, createMediaStyle } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    headerBreak: 992,
    computer: 1024,
  },
});

export const mediaStyle = createMediaStyle();

const HeaderSegment = styled(Segment)`
  min-height: ${TOP_HEIGHT};
  padding: 0 !important;
`;

const HeaderMenu = styled(Menu)`
  padding: 0 !important;
  background-color: ${PRIMARY_COLOUR} !important;
  height: ${TOP_HEIGHT} !important;
`;

const XsImage = styled(Image)`
  width: 50px;
`;

const BlockItem = styled(Menu.Item)`
  display: block !important;

  & * {
    color: rgba(255, 255, 255) !important;
    opacity: 1 !important;
  }
`;

const BlockIcon = styled(Icon)`
  display: block !important;
  margin: auto !important;
`;

const HeaderBrand = styled(Header)`
  margin: auto !important;
  text-align: left;
  color: white !important;
  font-weight: ${SUBHEADING_WEIGHT};
`;

const Logo = styled.img`
  width: 75px;
  height: 75px;
`;

const NarrowHeaderBrand = styled(HeaderBrand)`
  max-width: 200px;
  margin-left: 5px !important;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NarrowHeader = props => (
  <HeaderContainer>
    <Logo src={logo} alt="Launch Online Logo" />
    <NarrowHeaderBrand>{TITLE}</NarrowHeaderBrand>
  </HeaderContainer>
);

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, pathname } = this.props;
    const { fixed } = this.state;

    const isFormPage = pathname.startsWith('/apply/');

    return (
      <Media greaterThanOrEqual="headerBreak">
        <HeaderSegment inverted textAlign="center" vertical id="top">
          <HeaderMenu fixed="top" inverted secondary size="large">
            <Container style={{ padding: '20px' }}>
              {isFormPage ? (
                <HeaderContainer>
                  <Logo src={logo} alt="Launch Online Logo" />
                  <HeaderBrand>{TITLE}</HeaderBrand>
                </HeaderContainer>
              ) : (
                <NarrowHeader />
              )}
              {!isFormPage &&
                HEADER_LINKS.map(header => (
                  <Menu.Item key={header.title}>
                    <HrefLink href={header.to} passHref>
                      <Header as="h3" inverted className="pointer">
                        {header.title}
                      </Header>
                    </HrefLink>
                  </Menu.Item>
                ))}
            </Container>
          </HeaderMenu>
        </HeaderSegment>
        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media lessThan="headerBreak" as={Sidebar.Pushable}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            className="bg-primary"
          >
            {HEADER_LINKS.map(header => (
              <Menu.Item key={header.title}>
                <HrefLink href={header.to} passHref>
                  <NarrowHeaderBrand as="h2" inverted className="pointer">
                    {header.title}
                  </NarrowHeaderBrand>
                </HrefLink>
              </Menu.Item>
            ))}
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <HeaderSegment inverted textAlign="center" vertical id="top">
              <HeaderMenu inverted secondary size="large">
                <BlockItem onClick={this.handleToggle}>
                  <BlockIcon name="sidebar" />
                  <span>Menu</span>
                </BlockItem>
                <NarrowHeader />
              </HeaderMenu>
            </HeaderSegment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children, query, pathname }) => (
  <MediaContextProvider>
    <MobileContainer query={query}>{children}</MobileContainer>
    <DesktopContainer query={query} pathname={pathname}>
      {children}
    </DesktopContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const MainSegment = styled(Segment)`
  min-height: calc(100vh - ${TOP_HEIGHT});
`;

const DefaultLayout = ({ children, query, pathname }) => {
  return (
    <ResponsiveContainer query={query} pathname={pathname}>
      <MainSegment vertical className="no-padding">
        {children}
      </MainSegment>
      <Footer />
    </ResponsiveContainer>
  );
};

export default DefaultLayout;
