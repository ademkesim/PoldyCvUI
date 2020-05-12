import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../auth/Login";
import Admin from "../admin/index";
import User from "../user/index";


class Dashboard extends Component {
kontrol(){
    if(this.props.auth.user.rank){
        return <Admin/>
    }
    return <User/>
}
  render() {
    return <div>{this.props.auth.isAuthenticated?this.kontrol():<Login/>}</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Dashboard);
