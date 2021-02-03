import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import DefaultLayout from 'layouts/DefaultLayout';
import { createGlobalStyle } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { PRIMARY_COLOUR, DEFAULT_FONT_SIZE, SECONDARY_COLOUR, PRIMARY_FONT } from 'theme';
import { Helmet } from 'react-helmet';

const { version: appVersion } = require('../package.json');

console.log(`appVersion: ${appVersion}`);

const GlobalStyle = createGlobalStyle`
  .bg-primary {
    background-color: ${PRIMARY_COLOUR} !important;
  }

  .no-padding {
    padding: 0 !important;
  }
  .pointer { cursor: pointer; }
  .no-padding { padding: 0; }
  .no-margin { margin: 0; }

  body, html {
    font-size: ${DEFAULT_FONT_SIZE} !important;
    font-family: ${PRIMARY_FONT};
  }

  html {
    scroll-behavior: smooth;
  }

  html.normal-scroll {
    scroll-behavior: auto;
  }

  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @font-face {
    font-family: 'BC Sans';
    src: url('/fonts/BCSans-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'BC Sans';
    src: url('/fonts/BCSans-Bold.woff') format('woff');
    font-weight: bold;
  }
`;

const addNormalScroll = () => document.documentElement.classList.add('normal-scroll');
const removeNormalScroll = () => document.documentElement.classList.remove('normal-scroll');

class App extends PureComponent {
  // scroll-behaviour: smooth on html breaks nextjs linking, will not go to top
  // of page when routing. Switching to normal scroll between routing fixes this
  // See https://github.com/vercel/next.js/issues/20125
  componentDidMount() {
    this.props.router.events.on('routeChangeStart', addNormalScroll);
    this.props.router.events.on('routeChangeComplete', removeNormalScroll);
  }
  componentWillUnmount() {
    this.props.router.events.off('routeChangeStart', addNormalScroll);
    this.props.router.events.off('routeChangeComplete', removeNormalScroll);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Helmet>
          <title>Launch Online</title>
        </Helmet>
        <GlobalStyle />
        <DefaultLayout query={{ ...router.query }} pathname={router.pathname}>
          <Component {...pageProps} />
        </DefaultLayout>
      </>
    );
  }
}

export default withRouter(App);
