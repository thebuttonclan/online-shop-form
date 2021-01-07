import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import DefaultLayout from 'layouts/DefaultLayout';
import { createGlobalStyle } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

const { version: appVersion } = require('../package.json');

const GlobalStyle = createGlobalStyle`
  .bcgov-bg-color {
    background-color: #036 !important;
  }
`;

class App extends PureComponent {
  state = {
    allFormData: { formVersion: appVersion },
  };

  addFormData = data => {
    this.setState({ allFormData: { ...this.state.allFormData, ...data } });
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <GlobalStyle />
        <DefaultLayout query={{ ...router.query }}>
          <Component {...pageProps} addFormData={this.addFormData} allFormData={this.state.allFormData} />
        </DefaultLayout>
      </>
    );
  }
}

export default withRouter(App);
