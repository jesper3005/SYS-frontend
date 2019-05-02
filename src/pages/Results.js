import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CarContainer from '../components/results/CarContainer';

const Result = () => (
  <Container fluid={true}>
    <Row>
      <Col xs={12} sm={12} md={8} lg={9}>
        <CarContainer />
      </Col>
    </Row>
  </Container>
);

export default Result;
