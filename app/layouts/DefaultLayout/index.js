// see https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js as a reference

import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Icon, Image, Menu, Segment, Sidebar, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_COLOUR, SUBHEADING_WEIGHT } from 'theme';
import Banner from 'components/Landing/Banner';
import Footer from './Footer';

const TITLE = 'Online Shops Grant Program';
const bcidSymbol = `/images/bcid-symbol-rev.svg`;
const bcidLogoRev = `/images/bcid-logo-rev-en.svg`;

const TOP_HEIGHT = '120px';

const HEADER_LINKS = [
  { title: 'HOME', to: '/' },
  { title: 'FAQ', to: '/faq' },
  { title: 'CONTACT US', to: '#contact' },
  { title: 'PROGRAM GUIDE', to: '/program-guide' },
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
  color: white;
  font-weight: ${SUBHEADING_WEIGHT};
  max-width: 250px;
`;

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, page } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThanOrEqual="headerBreak">
        <HeaderSegment inverted textAlign="center" vertical id="top">
          <HeaderMenu fixed="top" inverted secondary size="large">
            <Container style={{ padding: '20px' }}>
              <Link href="/apply" passHref>
                <HeaderBrand as="h2" className="pointer">
                  {TITLE}
                </HeaderBrand>
              </Link>
              {HEADER_LINKS.map(header => (
                <Menu.Item key={header.title}>
                  <Link href={header.to} passHref>
                    <Header as="h3" inverted className="pointer">
                      {header.title}
                    </Header>
                  </Link>
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
                <Link href={header.to} passHref>
                  <HeaderBrand as="h2" inverted className="pointer">
                    {header.title}
                  </HeaderBrand>
                </Link>
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
                <Link href="/" passHref>
                  <HeaderBrand inverted className="pointer">
                    {TITLE}
                  </HeaderBrand>
                </Link>
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

const ResponsiveContainer = ({ children, query }) => (
  <MediaContextProvider>
    <MobileContainer query={query}>{children}</MobileContainer>
    <DesktopContainer query={query}>{children}</DesktopContainer>
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
    <ResponsiveContainer query={query}>
      <MainSegment vertical className="no-padding">
        {pathname === '/' && <Banner />}
        <Container>{children}</Container>
      </MainSegment>

      <Footer />
    </ResponsiveContainer>
  );
};

export default DefaultLayout;
