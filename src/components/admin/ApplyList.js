import React, { Component } from "react";
import { connect } from "react-redux";
import * as applyActions from "../../redux/actions/applyActions";
import { bindActionCreators } from "redux";
import { Badge, Table } from "reactstrap";

class ApplyList extends Component {
  componentDidMount() {
    this.props.actions.getApplies();
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Applies</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.applies.map((apply) => (
              <tr key={apply.applyId}>
                <th scope="row">{apply.detail}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    applies: state.applyListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getApplies: bindActionCreators(applyActions.getApplies, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyList);
