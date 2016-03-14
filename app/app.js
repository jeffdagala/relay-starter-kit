import 'babel-polyfill';

import App from './components/App';
import UserRoute from './routes/UserRoute';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new UserRoute({userID: 1})}
  />,
  document.getElementById('root')
);
