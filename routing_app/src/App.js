import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Users from "./components/users";
import Posts from "./components/posts";
import Home from "./components/home";
import UserDetails from "./components/userDetails";
import "./App.css";
import Users from './../../../Section 6- Routing/finish/router-app/src/components/admin/users';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/users/:id" component={UserDetails} />
            <Route
              path="/users"
              render={props => <Users sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/" exact component={H