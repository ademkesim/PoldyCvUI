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
    this.props.actions.getByIdApply(this.props.auth.user.personId);
    this.props.actions.getDepartments();
    this.props.actions.getTitles();
  }
  deleteApply(apply){
    this.props.actions.getByIdApply(this.props.auth.user.personId);
    this.props.actions.applyDelete(apply);
    this.props.actions.getByIdApply(this.props.auth.user.personId);
    alertify.success("Başarıyla silindi");
  }
  departmentComparison(id,id2){
    var name={
      departman : this.props.department.map(dep=>dep.departmentId===id?dep.name:""),
      title : this.props.titles.map(title=>title.titleId===id2?title.titleName:""),
    }
    return name
  }
  render() {
    
    return (
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Table>
        <thead>
          <tr>
            <th>Detay</th>
            <th>Departman Ad</th>
            <th>Ünvan Ad</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.apply.map((apply) => (
            <tr key={apply.applyId}>
              <th>{apply.detail}</th>
                <td>{this.departmentComparison(apply.departmentId).departman}</td>
                <td>{this.departmentComparison(apply.departmentId,apply.titleId).title}</td>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apply: state.applyListReducer,
    department: state.departmentListReducer,
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
