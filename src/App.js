import './App.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MainForm from './components/Form.js'
import React from "react";


function App() {
  return (
      <div className="App">
          <Container>
              <Row className="justify-content-md-center">
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                      <div className="front-page-box">
                          <h1 className="front-page-h1">Please tell us more...</h1>
                          <MainForm />
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
