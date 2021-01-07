// see https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js as a reference

import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Icon, Image, Menu, Segment, Sidebar, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import Footer from './Footer';

const TITLE = 'Online shop grant program';
const bcidSymbol = `/images/bcid-symbol-rev.svg`;
const bcidLogoRev = `/images/bcid-logo-rev-en.svg`;

const TOP_HEIGHT = '60px';

const { MediaContextProvider, Media, createMediaStyle } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
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
  background-color: #036 !important;
  min-height: ${TOP_HEIGHT} !important;
  border-bottom: 2px solid #fcba19 !important;
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

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <HeaderSegment inverted textAlign="center" vertical>
          <HeaderMenu fixed="top" inverted secondary size="large">
            <Container>
              <Link href="/">
                <Menu.Item className="pointer">
                  <Image src={bcidLogoRev} size="small" />
                </Menu.Item>
              </Link>
              <Menu.Item>
                <Header as="h2" inverted>
                  {TITLE}
                </Header>
              </Menu.Item>
              <Menu.Item position="right"></Menu.Item>
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
      <Media at="mobile" as={Sidebar.Pushable}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            className="bcgov-bg-color"
          >
            <Menu.Item>
              <Image src={bcidLogoRev} size="small" />
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <HeaderSegment inverted textAlign="center" vertical>
              <HeaderMenu inverted secondary size="large">
                <BlockItem onClick={this.handleToggle}>
                  <BlockIcon name="sidebar" />
                  <span>Menu</span>
                </BlockItem>
                <Link href="/">
                  <Menu.Item className="pointer no-margin no-padding">
                    <XsImage src={bcidSymbol} />
                  </Menu.Item>
                </Link>
                <Menu.Item>
                  <Header as="h3" inverted>
                    {TITLE}
                  </Header>
                </Menu.Item>
                <Menu.Item position="right"></Menu.Item>
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

const DefaultLayout = ({ children, query }) => (
  <ResponsiveContainer query={query}>
    <MainSegment vertical>
      <Container>{children}</Container>
    </MainSegment>

    <Footer />
  </ResponsiveContainer>
);

export default DefaultLayout;
