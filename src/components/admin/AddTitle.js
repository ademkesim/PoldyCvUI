import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as titleActions from "../../redux/actions/titleActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import SelectInput from "../toolbox/SelectInput";

class AddTitle extends Component {
  constructor() {
    super();
    this.state = {
      titleName: "",
      departmentName: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    let title = {
      titleName: this.state.titleName,
      departmentId: parseInt(this.state.departmentName),
    };
    this.props.actions.AddTitle(title);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    this.props.actions.getDepartments();
  }

  render() {
    return (
      <Container className="App">
        <br />
        <br />
        <h2>Departman Ekle</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <SelectInput
              name="departmentName"
              label="Departman"
              value={this.state.departmentName > 0 ? this.state.departmentName : ""}
              defaultOption="Seçiniz"
              options={this.props.departments.map((department) => ({
                value: department.departmentId,
                text: department.name,
              }))}
              onChange={this.onChange}
            />
          </Col>
          <Col>
            <FormGroup>
              <Label>Ünvan Ad</Label>
              <Input
                type="text"
                placeholder="Ünvan Adı"
                name="titleName"
                onChange={this.onChange}
                value={this.state.title}
              />
            </FormGroup>
          </Col>
          <Button color="success" type="submit">
            Ekle{" "}
          </Button>
        </Form>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    departments: state.departmentListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      AddTitle: bindActionCreators(titleActions.AddTitle, dispatch),
      getDepartments: bindActionCreators(
        departmentActions.getDepartments,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTitle);
