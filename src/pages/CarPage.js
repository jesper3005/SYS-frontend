import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import SellerContainer from '../components/Car/SellerContainer';
import CarContainer from '../components/Car/CarContainer';
import FormContainer from '../components/Car/FormContainer';

class CarPage extends Component {
  state = {  }
  render() { 
    return ( 
      <Container fluid={true}>
        <Row>
          <SellerContainer />
          <Col xs={12} sm={12} md={8} lg={9}>
            <CarContainer />
            <FormContainer />
          </Col>
        </Row>
      </Container> 
    );
  }
}

export default CarPage;
