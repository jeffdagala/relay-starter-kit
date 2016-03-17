import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    // console.log(this.props)
    return (
      this.props.list && this.props.list.users ?
      <div className="row" style={{marginTop:"40px"}}>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading"><h4><strong>Users</strong></h4></div>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.list.users.map((user) => {
                    return <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
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
    list: () => Relay.QL`
      fragment on List {
        users {
          id,
          firstName,
          lastName,
          email
        }
      }
    `,
  },
});
