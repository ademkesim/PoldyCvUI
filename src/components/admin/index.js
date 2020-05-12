import React, { Component } from "react";
import { connect } from "react-redux";

class index extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.auth.user.firstName}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(index);
