import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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

class UpdateDepartment extends Component {
    constructor()
    {
        super();
        this.state={
            name:"",
            needs:"",
          
        }
    }
    
        onSubmit = (e) => {
            e.preventDefault();
            debugger;
            let department={
                id:this.props.match.params.departmentId,
                name:this.state.name,
                needs:this.state.needs
            }
         
            this.props.actions.UpdateDepartment(department);
        }
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        };
       
       
        render() {
          
            return (
                <Container className="App">
                    <br />
                    <br />
                    <h2>Departman Güncelle</h2>
                    <Form className="form" onSubmit={this.onSubmit}>
                        <Col>
                            <FormGroup>
                                <Label>Departman Adı</Label>
                                <Input
                                    type="text"
                                    placeholder="Departman Adı"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
    
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>İhtiyaç Sayısı</Label>
                                <Input
                                    type="text"
                                    placeholder="Departman İhtiyaç Sayısı"
                                    name="needs"
                                    onChange={this.onChange}
                                    value={this.state.needs}
                                />
                            </FormGroup>
                        </Col>
                        <Button color="warning" type="submit">Güncelle </Button>
                       
                    </Form>
                </Container>
            )
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
        UpdateDepartment: bindActionCreators(departmentActions.updateDepartment, dispatch),
      },
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(UpdateDepartment);
  