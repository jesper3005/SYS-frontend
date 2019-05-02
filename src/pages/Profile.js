import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProfileContainer from '../components/profile/ProfileContainer';
import RentContainer from '../components/profile/RentContainer';
import OrderContainer from '../components/profile/OrderContainer';

const Profile = () => (
  <Container fluid={true}>
    <Row>
      <ProfileContainer />
      <Col xs={12} sm={12} md={8} lg={9}>
        <RentContainer />
        <OrderContainer />
      </Col>
    </Row>
  </Container>
);

export default Profile;
