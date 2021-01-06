import React, { PureComponent } from 'react';

export default class Home extends PureComponent {
  render() {
    return <h1>Online-shop Form</h1>;
  }
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
