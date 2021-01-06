// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js

import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Icon, Image, Menu, Segment, Sidebar, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import Footer from './Footer';

const TITLE = 'Online shop grant program';
const bcidSymbol = `/images/bcid-symbol-rev.svg`;
const bcidLogoRev = `/images/bcid-logo-rev-en.svg`;

const TOP_HEIGHT = '60px';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

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

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
              <Menu.Item>
                <Image src={bcidLogoRev} size="small" />
              </Menu.Item>
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
      <Media as={Sidebar.Pushable} at="mobile">
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
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
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
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer query={query}>{children}</DesktopContainer>
    <MobileContainer query={query}>{children}</MobileContainer>
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
      <Container text>{children}</Container>
    </MainSegment>

    <Footer />
  </ResponsiveContainer>
);

export default DefaultLayout;
