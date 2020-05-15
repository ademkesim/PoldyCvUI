import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import * as applyActions from "../../redux/actions/applyActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import * as titleActions from "../../redux/actions/titleActions";
import { bindActionCreators } from "redux";
import alertify from 'alertifyjs';
import { Link } from "react-router-dom";

class ApplyList extends Component {
  componentDidMount() {
    this.props.actions.getTitles(this.props.apply.titleId);
    this.props.actions.getByIdApply(this.props.auth.user.personId);
    this.props.actions.getDepartments(this.props.apply.departmentId);
  }
  deleteApply(apply){
    this.props.actions.getByIdApply(this.props.auth.user.personId);
    this.props.actions.applyDelete(apply);
    this.props.actions.getByIdApply(this.props.auth.user.personId);
    alertify.success("Başarıyla silindi");
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Detay</th>
            <th>Ünvan Ad</th>
            <th>Departman Ad</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {console.log(this.props.apply[0])}
        <tbody>
          {this.props.apply.map((apply) => (
            <tr key={apply.applyId}>
              <th>{apply.detail}</th>
              {this.props.departments.map((department) => (
                <td>{department.name}</td>
              ))}
              {this.props.apply.map((apply) => (
                <td>{apply.titleName}</td>
              ))}
              <td>
                <Link to={"/add-apply/"+apply.applyId}><Button color="success">Güncelle</Button></Link>
              </td>
              <td>
                <Button color="warning" onClick={()=>{this.deleteApply(apply);
                this.props.actions.getByIdApply(this.props.auth.user.personId);}}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    apply: state.applyListReducer,
    departments: state.departmentListReducer,
    titles: state.titleListReducer,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getByIdApply: bindActionCreators(applyActions.getByIdApply, dispatch),
      getDepartments: bindActionCreators(
        departmentActions.getDepartments,
        dispatch
      ),
      getTitles: bindActionCreators(titleActions.getTitles, dispatch),
      applyDelete: bindActionCreators(applyActions.deleteApply, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyList);
