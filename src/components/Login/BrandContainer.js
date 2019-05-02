import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const BrandContainer = () => (
  <Container>
    <Name>Trutle Rental Service</Name>
    <Logo />
  </Container>
);

const Container = styled(Col)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 12rem; max-height: 12rem;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: { size: 6, offset: 5, }, lg: { size: 4, offset: 7 },
};

const Name = styled.h1`
  min-width: 50%; max-width: 50%;
  font-size: 250%;
  font-wieght; bold;
  text-align: center;
`;

const Logo = styled.img`
  min-width: 50%; max-width: 50%;
`;
Logo.defaultProps = {
  src: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
};

export default BrandContainer;
