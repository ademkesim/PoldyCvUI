import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./components/admin/index";
import Register from "./components/auth/Register";
import Navi from "./components/root/Navi";
import { Row, Col } from "reactstrap";
import AddAdmin from "./components/admin/AddAdmin";
import Dashboard from "./components/root/Dashboard";
import ApplyList from "./components/admin/ApplyList";


function App() {
  return (
    <div>
      <Row>
        <Col xs="2">
          <Navi />
        </Col>
        <Col xs="8">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/add-admin" component={AddAdmin} />
            <Route path="/admin" component={Admin} />
            <Route path="/applies" component={ApplyList} />
            <Route path="/" component={Dashboard} />
            <Route component={Register} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App
