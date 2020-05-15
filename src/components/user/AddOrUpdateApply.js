import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as applyActions from "../../redux/actions/applyActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import * as titleActions from "../../redux/actions/titleActions";
import * as cvActions from "../../redux/actions/cvActions";
import TextInput from '../toolbox/TextInput';
import SelectInput from '../toolbox/SelectInput';
import {
    Container,
    Col,
    Form,
    Button,
  } from "reactstrap";
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
    const apply = {
      personId: this.props.auth.user.personId,
      titleId: this.props.department.name>0?this.props.department.name:this.state.titleId,
      departmentId: this.props.title.titleName>0?this.props.title.titleName:this.state.departmentId,
      detail: this.state.detail,
      pdf: this.props.cv.cvPdf,
    };
    if (this.props.match.params.applyId) {
      this.props.updateApply(apply);
    } else {
      this.props.addApply(apply);
    }
  };
  GetByDepartments(departmentId) {
    const department = this.props.departments.filter(
      (department) => department.departmentId === departmentId
    );
    return department[0];
  }
  GetByTitle(titleId) {
    const title = this.props.titles.filter(
      (title) => title.titleId == titleId
    );
    return title[0];
  }
  a(){
    this.props.actions.getByApply(this.props.match.params.applyId);

    this.props.actions.getCv(this.props.auth.user.personId)
  }
  componentDidMount() {
    this.props.actions.getByApply(this.props.match.params.applyId);
    this.GetByTitle(this.props.apply.titleId)
    this.GetByDepartments(this.props.apply.departmentId);
    this.props.actions.getCv(this.props.auth.user.personId)
  }
  Update(){
      this.state.detail=this.props.apply.detail;
      this.state.departmentName = this.GetByDepartments(this.props.apply.departmentId);
      this.state.titleName=this.GetByTitle(this.props.apply.titleId);
  }
  render() {
      if(this.props.match.params.applyId>0){
        this.Update()
      }
    return (
        <Container className="App">
          <br />
          <br />
          <h2> {this.props.match.params.applyId>0?"Güncelle":"Ekle"}</h2>
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
              <Col>
              {console.log()}
              
              </Col>
            <Button color="success">Kaydet</Button>
          </Form>
        </Container>
      );
  }
}

function mapStateToProps(state, ownProps) {
    const applyId = ownProps.match.params.applyId;
    const apply =
      applyId && state.applyReducer.length > 0
        ? this.props.actions.getByApply(this.props.match.params.applyId)
        : {};
  return {
    apply: state.applyReducer,
    departments: state.departmentListReducer,
    titles: state.titleListReducer,
    auth: state.auth,
    cv: state.cvListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getByApply: bindActionCreators(applyActions.getByApply, dispatch),
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
