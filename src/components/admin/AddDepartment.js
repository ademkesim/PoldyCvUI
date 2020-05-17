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

class AddDepartment extends Component {
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
            let department={
                name:this.state.name,
                needs:this.state.needs
            }
            debugger
            this.props.actions.AddDepartment(department);
        }
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        };
       
        render() {
            return (
                <Container className="App">
                    <br />
                    <br />
                    <h2>Departman Ekle</h2>
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
                        <Button color="success" type="submit">Ekle </Button>
                       
                    </Form>
                </Container>
            )
        }
}
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        AddDepartment: bindActionCreators(departmentActions.AddDepartment, dispatch),
      },
    };
  }
  
  export default connect(null,mapDispatchToProps)(AddDepartment);
  