import React, { Component } from "react";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    Users: [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.Users.map(user => (
            <li key={user.id}>
              <Link to={`/Users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
