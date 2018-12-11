import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home/Home';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <div className="App">
              <Header />
              <Home name="hai" />
              <Footer />
            </div>
          </Col>
        </Row>
      </Grid>


    );
  }
}

export default App;
