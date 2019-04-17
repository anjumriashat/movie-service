import React, { Component } from "react";

class UserDetails extends Component {
  handleSave = () => {
    // Navigate to /users
    this.props.history.replace("/users");
  };

  render() {
    return (
      <div>
        <h1>User Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default UserDetails;
