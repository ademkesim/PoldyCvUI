import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authAcions";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="App">
        <br/><br/><br/><br/><br/><br/>
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder="Username"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Button color="success">Submit</Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { loginUser })(Login);
