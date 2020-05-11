import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authAcions";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      mail: this.state.mail,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      rank: false,
    };
    this.props.registerUser(userData, this.props.history)
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="App">
        <br />
        <br />
        <h2> Sign In</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Username"
                name="mail"
                value={this.state.mail}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
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
export default connect(mapStateToProps, { registerUser })(Register);
