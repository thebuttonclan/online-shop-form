import React, { PureComponent } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

export default class Repos extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Dimmer active inverted>
          <Loader content="Loading" />
        </Dimmer>
        <div className="fader" />
        <style jsx>{`
          .wrapper {
            height: 100vh;
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
          }
          .fader {
            height: 100%;
            width: 100%;
            background-color: grey;
            opacity: 0.1;
          }
        `}</style>
      </div>
    );
  }
}
