import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { Grid, Row, Col, Button } from 'react-bootstrap';
import ProfileComponent from './ProfileComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>{'<Col xs={12} md={8} />'}</code>
            </Col>
            <Col xs={6} md={4}>
              <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              {/* <code>{'<Col xs={6} md={4} />'}</code> */}
              <ProfileComponent />
            </Col>
            <Col xs={6} md={4}>
              <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
            <Col xsHidden md={4}>
              <code>{'<Col xsHidden md={4} />'}</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              <code>{'<Col xs={6} xsOffset={6} />'}</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <code>{'<Col md={6} mdPush={6} />'}</code>
            </Col>
            <Col md={6} mdPull={6}>
              <code>{'<Col md={6} mdPull={6} />'}</code>
            </Col>
          </Row>
        </Grid>

        <div className="col-md-5">
          <p>Test Deneme</p>

          <Button bsStyle="success">Success</Button>

        </div>
      </div>
    );
  }
}

export default App;
