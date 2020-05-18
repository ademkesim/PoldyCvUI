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
import AddDepartment from "./components/admin/AddDepartment";
import AddOrUpdateApply from "./components/user/AddOrUpdateApply";
import AddTitle from "./components/admin/AddTitle";
import DepartmentList from "./components/admin/DepartmentList";
import UpdateDepartment from "./components/admin/UpdateDepartment"
import TitleList from "./components/admin/TitleList";
import UpdateTitle from "./components/admin/UpdateTitle"
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
            <Route path="/add-department" component={AddDepartment} />
            <Route path="/add-title" component={AddTitle} />
            <Route path="/cv-detail/:personId" component={cvDetail} />
            <Route path="/get-department" component={DepartmentList} />
            <Route path="/get-title" component={TitleList} />
            <Route path="/update-department" component={UpdateDepartment} />
            <Route path="/update-title/:titleId" component={UpdateTitle} />
            <Route path="/" component={Dashboard} />
            <Route component={Register} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App
