import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, error, users } = this.props;
    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }
    if (error) {
      return (
        <h1>Something went wrong.</h1>
      )
    }
    return (
      <div>
        {
          users.map((user) => {
            return (
              <h6>{user.name}</h6>
            )
          })
        }
      </div>
    )
  }
}

export default User;