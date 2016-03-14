import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    user: (Component) => Relay.QL`
      query {
        user(id: $userID) {
          ${Component.getFragment('user')}
        }
      }
    `,
  };
  static routeName = 'UserRoute';
}
