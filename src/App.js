import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./components/admin/index";
import Register from "./components/auth/Register";
import Navi from "./components/root/Navi";
import { Row, Col } from "reactstrap";
import AddAdmin from "./components/admin/AddAdmin";
import Dashboard from "./components/root/Dashboard";
import ApplyList from "./components/admin/ApplyList";
import Applyid from "./components/user/ApplyList";
import AddCv from "./components/user/AddCv";
import cvDetail from "./components/admin/cvDetail";
import AddOrUpdateApply from "./components/user/AddOrUpdateApply";


function App() {
  return (
    <div>
      <Row>
        <Col xs="2">
          <Navi />
        </Col>
        <Col xs="8">
          <Switch>
            <Route path="/addcv" component={AddCv} />
            <Route path="/register" component={Register} />
            <Route path="/add-admin" component={AddAdmin} />
            <Route path="/admin" component={Admin} />
            <Route path="/add-apply/:applyId" component={AddOrUpdateApply} />
            <Route path="/add-apply" component={AddOrUpdateApply} />
            <Route path="/applies" component={ApplyList} />
            <Route path="/applyid" component={Applyid} />
            <Route path="/cv-detail/:personId" component={cvDetail} />
            <Route path="/" component={Dashboard} />
            <Route component={Register} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App
