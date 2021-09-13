import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Navigation from "./components/Navigation";
import Users from "./components/users/Users";
import Albums from "./components/albums/Albums";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/albums" >
            <Albums />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
