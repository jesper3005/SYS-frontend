import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class CarContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},
    zoom: 18,
    };

  render() {
    const {
      price,
      manufactor,
      model,
      type,
      releaseYear,
      drivingDist,
      seats,
      drive,
      fuelType,
      address,
      country,
      company,
    } = this.props.data;
    return (
      <Container>
        <ImageContainer>
          <CarImage src={require('../../assets/car.svg')} />
        </ImageContainer>
        <InfoContainer>
          <Title>{manufactor} {model}</Title>
          <Description>
          <h4>{price}DKK / Day</h4>
            <div> <strong> Type: </strong> {type}</div>
            <div> <strong> Release Year: </strong> {releaseYear}</div>
            <div> <strong> Driving distance: </strong> {drivingDist}</div>
            <div> <strong> Seats: </strong> {seats} </div>
            <div> <strong> Drive: </strong> {drive}</div>
            <div> <strong> Fuel Type: </strong> {fuelType}</div>
            <div> <strong> Address: </strong> {address}</div>
            <div> <strong> Country: </strong> {country}</div>
            <div> <strong> Company: </strong> {company}</div>
          </Description>
        </InfoContainer>
      </Container>
    );
  }
}

export default CarContainer;

const Container = styled(Col)`
  background-color: white;
  min-height: 25rem; max-height: 50rem;
  margin: 1rem auto;
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

const CarImage = styled.img`
  min-width: 100%; max-width: 100%;
  min-height: 10rem; max-height: 15rem;
  border: 1px solid transparent; border-radius: 3px;
  padding-left: 20%;
`;

const InfoContainer = styled.div`
  position: absolute; top: 0; right: 0;
  display: block;
  min-width: 50%; max-width: 50%;
  min-height: 100%; max-height: 100%;
`;

const Title = styled.h4`
  display: block;
  div-align: center;
`;

const Description = styled.div`
  display: inline;
  min-height: 10.5rem; max-height: 10.5rem;
  padding: 0 1rem;
  overflow: hidden;
  margin-top: 10%;
`;

