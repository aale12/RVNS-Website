import React, { Component } from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';

class Brand extends Component {
  render() {
    return (
      <Container fluid className="text-center">
        <Row className="text-center">
          <h1 className="text-center">River Oaks Nails & Spa</h1>
        </Row>
      </Container>
    )
  }
}

export default Brand;