import React, { Component } from "react";
import { connect } from "react-redux";
import * as applyActions from "../../redux/actions/applyActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import { bindActionCreators } from "redux";
import {
  Badge,
  Table,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const AppliesButton = ({ tittle, Objects=[],selectDepartment }) => {
  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="primary">
        {tittle}
      </DropdownToggle>

      <DropdownMenu>
        {Objects.map((Object) => (
          <tr>
            <DropdownItem onClick={()=>selectDepartment(Object)}>{Object.name}</DropdownItem>
            <DropdownItem divider />
          </tr>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};
class ApplyList extends Component {
  componentDidMount() {
    this.props.actions.getApplies();
    this.props.actions.getDepartments();
  }

  selectDepartment = (department) => {
    this.props.actions.getApplies(department.departmentId);
  };

  render() {
    var dep = [];
    this.props.departments.map(
      (department) => (dep[department.departmentId] = department.name)
    );
    return (
      <div>
        <h3>
          <Badge color="warning">Applies</Badge>
        </h3>
        <AppliesButton tittle="Departman Filtrele" Objects={this.props.departments} selectDepartment={this.selectDepartment} />
        <AppliesButton tittle="Ünvan Filtrele" />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Departman Adı</th>
              <th>Ünvan Adı</th>
              <th>Özet</th>
              <th>Cv İncele</th>
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
    departments: state.departmentListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getApplies: bindActionCreators(applyActions.getApplies, dispatch),
      getDepartments: bindActionCreators(
        departmentActions.getDepartments,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyList);
