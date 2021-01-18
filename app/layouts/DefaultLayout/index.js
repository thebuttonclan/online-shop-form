// see https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js as a reference

import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import { Container, Icon, Menu, Segment, Sidebar, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR, MIN_PADDING } from 'theme';
import HrefLink from 'components/HrefLink';
import Footer from './Footer';

const TITLE = 'Launch Online';
const bcidSymbol = `/images/bcid-symbol-rev.svg`;
const bcidLogoRev = `/images/bcid-logo-rev-en.svg`;
const logo = `/icons/osgp-white-orage.svg`;
const HEADER_BREAKPOINT = 992;

export const TOP_HEIGHT = '120px';

const HEADER_LINKS = [
  { title: 'HOME', to: '/' },
  { title: 'FAQ', to: '/faq' },
  { title: 'PROGRAM GUIDE', to: '/files/program_guide.pdf', blank: true },
  { title: 'CONTACT US', to: '/#contact' },
];

const { MediaContextProvider, Media, createMediaStyle } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    headerBreak: HEADER_BREAKPOINT,
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

const HeaderBrandText = styled(Header)`
  margin: auto ${MIN_PADDING} !important;
  text-align: left;
  color: white !important;
`;

const Logo = styled.img`
  width: 75px;
  height: 75px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NarrowHeaderBrand = styled(HeaderBrandText)`
  max-width: 250px;
`;

const HeaderBrandContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${HEADER_BREAKPOINT}px) {
    padding-left: 30px;
  }
`;

const DesktopHeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const HeaderBrand = () => (
  <HeaderBrandContainer>
    <Logo src={logo} alt="Launch Online Logo" />
    <HeaderBrandText>{TITLE}</HeaderBrandText>
  </HeaderBrandContainer>
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
            <DesktopHeaderContainer>
              <HeaderBrand />
              <LinksContainer>
                {!isFormPage &&
                  HEADER_LINKS.map(header => (
                    <Menu.Item key={header.title}>
                      <HrefLink href={header.to} passHref blank={header.blank}>
                        <Header as="h4" inverted className="pointer">
                          {header.title}
                        </Header>
                      </HrefLink>
                    </Menu.Item>
                  ))}
              </LinksContainer>
            </DesktopHeaderContainer>
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
    const { children, pathname } = this.props;
    const { sidebarOpened } = this.state;
    const isFormPage = pathname.startsWith('/apply/');

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
                <HrefLink href={header.to} passHref blank={header.blank}>
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
                {!isFormPage && (
                  <BlockItem onClick={this.handleToggle}>
                    <BlockIcon name="sidebar" />
                    <span>Menu</span>
                  </BlockItem>
                )}

                <HeaderBrand />
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
    <MobileContainer query={query} pathname={pathname}>
      {children}
    </MobileContainer>
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
