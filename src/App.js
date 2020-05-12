import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Admin from "./components/admin/index";
import User from "./components/user/index";
import Register from "./components/auth/Register";
import Navi from "./components/root/Navi";
import { Row, Col } from "reactstrap";

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
    <div>
      <Row>
        <Col xs="2">
          <br/>
          <Navi />
        </Col>
        <Col xs="9">
          <br/>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/" component={validation()} />
            <Route component={Register} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
