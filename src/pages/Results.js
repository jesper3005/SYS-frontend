import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CarContainer from '../components/results/CarContainer';
import FilterContainer from '../components/results/FilterContainer';

class Results extends Component {
  state = {
    data: []
  }
  render() {
    return (
    <Container fluid={true}>
      <Row>
        <FilterContainer carData={this.state.data}/>
        <Col xs={12} sm={12} md={8} lg={9}>
          <CarContainer carData={this.state.data}/>
        </Col>
      </Row>
    </Container>);
  }
}

export default Results;