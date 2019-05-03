import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class CarContainer extends Component {
  state = {
    profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
    title: 'Car Card Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };

  render() {
    const { profile, title, description, history } = this.state;
    return (
      <Container>
        <ImageContainer>
          <Profile src={profile} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Description>
            {description.length >= 350
              ? description.substring(0, 350) + '...'
              : description}
          </Description>
      </InfoContainer>
    </Container>
    );
  }
}

const Container = styled(Col)`
  background-color: white;
  min-height: 15rem; max-height: 15rem;
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

const Profile = styled.img`
  min-width: 100%; max-width: 100%;
  min-height: 15rem; max-height: 15rem;
  border: 1px solid transparent; border-radius: 3px;
`;

const InfoContainer = styled.div`
  position: absolute; top: 0; right: 0;
  display: block;
  min-width: 50%; max-width: 50%;
  min-height: 100%; max-height: 100%;
`;

const Title = styled.h2`
  display: block;
  text-align: center;
`;

const Description = styled.p`
  display: flex;
  min-height: 10.5rem; max-height: 10.5rem;
  padding: 0 1rem;
  overflow: hidden;
`;

export default CarContainer;
