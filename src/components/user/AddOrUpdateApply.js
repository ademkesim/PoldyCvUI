import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as applyActions from "../../redux/actions/applyActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import * as titleActions from "../../redux/actions/titleActions";
import * as cvActions from "../../redux/actions/cvActions";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import { Container, Col, Form, Button } from "reactstrap";
class AddOrUpdateApply extends Component {
  constructor() {
    super();
    this.state = {
      detail:"",
      departmentName: "",
      titleName: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    var apply = {
      personId: this.props.auth.user.personId,
      titleId: parseInt(this.state.titleName),
      departmentId: parseInt(this.state.departmentName),
      detail: this.state.detail,
      pdf: this.props.cv.cvPdf,
      JobAdvertisementID: 1,
    };
    this.props.actions.addApply(apply);
    if (this.props.match.params.applyId > 0) {
      apply = {
        applyId: parseInt(this.props.match.params.applyId),
        personId: this.props.auth.user.personId,
        titleId: parseInt(this.props.apply.titleId),
        departmentId: parseInt(this.props.apply.departmentId),
        detail: this.state.detail,
        JobAdvertisementID: 1,
      };
      this.props.actions.updateApply(apply);
    }
    
  };
  componentDidMount() {
    this.props.actions.getByApply(this.props.match.params.applyId);
    this.props.actions.getCv(this.props.auth.user.personId);
    
  }
  render() {
    return (
      <Container className="App">
        <br />
        <br />
        <br />
        <br />
        <h2> {this.props.match.params.applyId > 0 ? "Güncelle" : "Ekle"}</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <TextInput
              name="detail"
              label="Detaylar"
              onChange={this.onChange}
              placeHolder="Detayları Giriniz"
              value={this.state.detail}
            />
          </Col>
          <Col hidden={this.props.match.params.applyId > 0 ?true:false}>
            <SelectInput
              name="departmentName"
              label="Departman"
              value={
                this.state.departmentName > 0 ? this.state.departmentName : ""
              }
              defaultOption="Seçiniz"
              options={this.props.departments.map((department) => ({
                value: department.departmentId,
                text: department.name,
              }))}
              onChange={this.onChange}
            />
          </Col>
          <Col hidden={this.props.match.params.applyId > 0 ?true:false}>
            <SelectInput
              name="titleName"
              label="Ünvan"
              value={this.state.titleName > 0 ? this.state.titleName : ""}
              defaultOption="Seçiniz"
              options={this.props.titles.map((title) => ({
                value: title.titleId,
                text: title.titleName,
              }))}
              onChange={this.onChange}
            />
          </Col>
            <h6>{this.state.departmentId}</h6>
          
          <Button color="success">Kaydet</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    apply: state.applyReducer,
    departments: state.departmentListReducer,
    titles: state.titleListReducer,
    auth: state.auth,
    cv: state.cvListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getByApply: bindActionCreators(applyActions.getByApply, dispatch),
      addApply: bindActionCreators(applyActions.addApply, dispatch),
      updateApply: bindActionCreators(applyActions.updateApply, dispatch),
      getDepartments: bindActionCreators(
        departmentActions.getDepartments,
        dispatch
      ),
      getTitles: bindActionCreators(titleActions.getTitles, dispatch),
      getCv: bindActionCreators(cvActions.getById, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateApply);
