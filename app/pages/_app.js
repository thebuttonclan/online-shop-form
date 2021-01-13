import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import DefaultLayout from 'layouts/DefaultLayout';
import { createGlobalStyle } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { PRIMARY_COLOUR, DEFAULT_FONT_SIZE, SECONDARY_COLOUR } from 'theme';

const GlobalStyle = createGlobalStyle`
  .bg-primary {
    background-color: ${PRIMARY_COLOUR} !important;
  }

  .bg-secondary {
    background-color: ${SECONDARY_COLOUR} !important;
  }

  .no-padding {
    padding: 0 !important;
  }
  .pointer { cursor: pointer; }
  .no-padding { padding: 0; }
  .no-margin { margin: 0; }
  body, html {
    font-size: ${DEFAULT_FONT_SIZE} !important;
  }
`;

class App extends PureComponent {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <GlobalStyle />
        <DefaultLayout query={{ ...router.query }}>
          <Component {...pageProps} />
        </DefaultLayout>
      </>
    );
  }
}

export default withRouter(App);
