import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

import Cookies from 'universal-cookie';
 const cookies = new Cookies();

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      list: [
        {id: 0, name: "name01"},
        {id: 1, name: "name02"},
        {id: 2, name: "name03"},
        {id: 3, name: "name04"},
        {id: 4, name: "name05"},
        {id: 5, name: "name06"},
        {id: 6, name: "name07"},
        {id: 7, name: "name08"}
      ]
    };
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    }

    cookies.set('session', data, { path: '/' });
    
    console.log(cookies.get('session')); // Pacman

    event.preventDefault()

  };

  handleChange = (i, event) => {
    const values = [...this.state.list];
    this.state.list[i].name = event.target.value;
    this.setState(values);
  }

  render() {

    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;

    return (
      <>
        <Card style={{ width: "18rem", margin: "50px auto" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <h3>Register</h3>
                <hr></hr>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handlePassword}
                />
              </Form.Group>

              <Button disabled={!isEnabled} variant="success" type="submit">
                Register
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default FormComponent;
