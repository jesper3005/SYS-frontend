import React from 'react';
import { Container, Row } from 'reactstrap';

<<<<<<< HEAD
import CarBookingReciept from '../../components/confirmations/CarBookedReceipt';
=======
import CarBookingReciept from '../../components/confirmations/CarBooking';
>>>>>>> 64e1005fd02cde06294c0b5a69f83c9b18670d81

const CarBooked = () => (
  <Container fluid={true}>
    <Row>
      <CarBookingReciept />
    </Row>
  </Container>
);

export default CarBooked;
