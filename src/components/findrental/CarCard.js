import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import selected from '../utils/selectedCar'

const CarCard = ({ profile, manufactor, model, address, price, regno, company}) => (
  <Container>
    <ImageContainer>
      <Profile src={require('../../assets/car.svg')} />
    </ImageContainer>
    <InfoContainer>
      <Title>{manufactor} {model} <Badge color="success">Available</Badge></Title> 
      <h4>Price: {price}DKK / Day </h4>
      <p>Address: {address}</p>
      <p>Company: {company}</p>
      <Link to={'/carpage'} onClick={() => selected.setSelectedCar(regno)}>Go to car {regno}</Link> 
    </InfoContainer>
  </Container>
);

const Container = styled(Col)`
  background-color: white;
  min-height: 15rem; max-height: 15rem;
  margin: 1rem auto;
  float: left;
  border: 1px solid #ccc; border-radius: 3px;
  box-shadow: 2px 2px 2px #ccc;
  cursor: pointer;
`;
Container.defaultProps = {
  xs: 11, sm: 11, md: 11, lg: 11,
};

const ImageContainer = styled.div`
  position: absolute; top: 0; left: 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    min-width: 50%; max-width: 50%;
  }
  @media screen and (min-width: 768px) {
    min-width: 35%; max-width: 35%;
  }
  min-height: 100%; max-height: 100%;
`;

const Profile = styled.img`
  min-width: 100%; max-width: 100%;
  min-height: 15rem; max-height: 15rem;
  border: 1px solid transparent; border-radius: 3px;
  padding-left: 30%;
`;

const InfoContainer = styled.div`
  position: absolute; top: 0; right: 0;
  display: block;
  min-width: 50%; max-width: 50%;
  min-height: 100%; max-height: 100%;
`;

const Title = styled.h2`
  display: block;
`;

export default withRouter(CarCard);

