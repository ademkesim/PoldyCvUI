import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Admin from "./components/admin/index";
import User from "./components/user/index";
import Navbar from "./components/auth/NavbarAdmin";

function App() {
  if (!localStorage.getItem("jwtToken")) {
    return (
      <Container>
        <Navbar />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/"  exact component={Login} />
        </Switch>
      </Container>
    );
  }
  return (
    <Container>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={User} />
      </Switch>
    </Container>
  );
}

export default App;
