import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Admin from "./components/admin/index";
import User from "./components/user/index";
import Navi from "./components/root/Navi";
import Register from "./components/auth/Register";

function validation() {
  if (localStorage.getItem("rank") === "true") {
    return Admin;
  } else if (localStorage.getItem("rank") === "false") {
    return User;
  } else {
    return Login;
  }
}

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={validation()} />
        <Route component={Register} />
      </Switch>
    </Container>
  );
}

export default App;
