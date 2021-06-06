import './App.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";


function App() {
  return (
      <div className="App">
          <Container>
              <Row className="justify-content-md-center">
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                      <div className="front-page-box">
                          <h1>Please tell us more...</h1>
                          <Form>
                              <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Email address</Form.Label>
                                  <Form.Control type="email" placeholder="Enter email" />
                                  <Form.Text className="text-muted">
                                      We'll never share your email with anyone else.
                                  </Form.Text>
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control type="password" placeholder="Password" />
                              </Form.Group>
                              <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check type="checkbox" label="Check me out" />
                              </Form.Group>
                              <Button variant="primary" type="submit">
                                  Submit
                              </Button>
                          </Form>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
