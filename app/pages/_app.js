import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import DefaultLayout from 'layouts/DefaultLayout';
import 'semantic-ui-css/semantic.min.css';

class App extends PureComponent {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <DefaultLayout query={{ ...router.query }}>
          <Component {...pageProps} />
        </DefaultLayout>
      </>
    );
  }
}

export default withRouter(App);
