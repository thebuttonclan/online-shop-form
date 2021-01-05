// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from 'next/link';
import {
  Button,
  Container,
  Dropdown,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const CommonMenus = () => {
  return (
    <>
      <Link href="/">
        <Menu.Item as="a">Home</Menu.Item>
      </Link>
    </>
  );
};

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
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign="center" style={{ padding: '0em' }} vertical>
            <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
              <Container>
                <CommonMenus />
                <Menu.Item position="right"></Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
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
          >
            <CommonMenus />
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment inverted textAlign="center" style={{ padding: '0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right"></Menu.Item>
                </Menu>
              </Container>
            </Segment>

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

const ResponsiveContainer = ({ children, query}) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer query={query}>
      {children}
    </DesktopContainer>
    <MobileContainer query={query}>
      {children}
    </MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const DefaultLayout = ({ children, query }) => (
  <ResponsiveContainer query={query}>
    <Segment style={{}} vertical>
      <Container text style={{ minHeight: '100vh' }}>
        {children}
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default DefaultLayout;
