import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      this.props.user ?
      <div>
        <h1>User Info</h1>
        <h3> Full Name : {this.props.user.firstName + ' ' + this.props.user.lastName} </h3>
        <h3> Email : {this.props.user.email} </h3>
        <h3> User ID: {this.props.user.id} </h3>
      </div>
      :
      <div>
        <h1>User data not found.</h1>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
          id,
          firstName,
          lastName,
          email
      }
    `,
  },
});
