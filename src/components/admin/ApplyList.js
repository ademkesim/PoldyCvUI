import React, { Component } from "react";
import { connect } from "react-redux";
import * as applyActions from "../../redux/actions/applyActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import * as titleActions from "../../redux/actions/titleActions";
import { bindActionCreators } from "redux";
import {
  Badge,
  Table,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
} from "reactstrap";

const AppliesButton = ({ tittle, Objects = [], selectApply }) => {
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
            <DropdownItem onClick={() => selectApply(Object)} key={Object.departmentId}>
              {Object.name}
              {Object.titleName}
            </DropdownItem>
            <DropdownItem divider />
          </tr>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};
class ApplyList extends Component {
  componentDidMount() {
    this.props.actions.getTitles();
    this.props.actions.getApplies();
    this.props.actions.getDepartments();
  }

  selectDepartment = (department) => {
    this.props.actions.getApplies(department.departmentId);
    this.props.actions.getTitles(department.departmentId);
  };

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Applies</Badge>
        </h3>
        <AppliesButton
          tittle="Departman Filtrele"
          Objects={this.props.departments}
          selectApply={this.selectDepartment}
        />
        <AppliesButton tittle="Ünvan Filtrele" Objects={this.props.titles} />
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
                <th>{apply.applyId}</th>
                {this.props.departments
                  .filter(
                    (department) =>
                      department.departmentId === apply.departmentId
                  )
                  .map((department) => (
                    <th scope="row">{department.name}</th>
                  ))}
                {this.props.titles
                  .filter((title) => title.titleId === apply.titleId)
                  .map((title) => (
                    <th scope="row">
                      {title.titleName}
                      {console.log(title.titleName)}
                    </th>
                  ))}
                <th scope="row">{apply.detail}</th>
                <th>
                  <Button color="success">Cv İncele</Button>
                </th>
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
    titles: state.titleListReducer,
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
      getTitles: bindActionCreators(titleActions.getTitles, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyList);
