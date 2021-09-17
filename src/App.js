import React, { useEffect } from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { getUsers } from "./store/actions/users";
import Navigation from "./components/Navigation";
import Users from "./components/users/Users";
import Albums from "./components/albums/Albums";
import Container from "@material-ui/core/Container";

function App(props) {

  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users">
            <Users users={props.users} />
          </Route>
          <Route path="/albums" >
            <Albums users={props.users} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  };
}

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
