import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as titleActions from "../../redux/actions/titleActions";

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

class UpdateTitle extends Component {
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
            let title={
                id:this.props.match.params.titleId,
                name:this.state.name
               ,
            }
         
            this.props.actions.UpdateTitle(title);
        }
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        };
       
       
        render() {
          
            return (
                <Container className="App">
                    <br />
                    <br />
                    <h2>Ünvan Güncelle</h2>
                    <Form className="form" onSubmit={this.onSubmit}>
                        <Col>
                            <FormGroup>
                                <Label>Ünvn Adı</Label>
                                <Input
                                    type="text"
                                    placeholder="Ünvan Adı"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
    
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

        titles: state.titleListReducer,

    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        UpdateTitle: bindActionCreators(titleActions.updateTitle, dispatch),
      },
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(UpdateTitle);
  