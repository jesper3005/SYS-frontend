import React from 'react';
import { Container, Row } from 'reactstrap';
import CarBookingReciept from '../../components/confirmations/CarBookedReceipt';

const CarBooked = () => (
  <Container fluid={true}>
    <Row>
      <CarBookingReciept />
    </Row>
  </Container>
);

export default CarBooked;
